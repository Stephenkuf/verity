"use strict";
const user = use("App/Models/User");
const Group = use("App/Models/Group");
const GroupUser = use("App/Models/GroupUser");
const uploadImage = use("App/Helpers/Upload");
const additionalUserInfo = use("App/Models/AdditionalUserInfo")
const Env = use("Env");


class GroupController {
  async createGroup({ request, response, auth }) {
    try {
      const { user } = auth.current;

      const { group_name, group_bio , users} = request.all();

 // uploadImage to appliction 
  const groupImage = request.file('group_image', {
    types: ['image'],
    size: '3mb'
  })
  if (!groupImage) {
    return response.status(404).json({
      status: 'Failed',
      message: 'group image is required'
    })
  }
  // console.log(productImage.fieldName,productImage.extname)
  const groupImageName = `${new Date().getTime()}_${groupImage.fieldName}.${groupImage.extname}`
  const upload_file = await uploadImage.createFile(response, groupImage, 'uploads/group-image', groupImageName)

  console.log('new product upload file >> ', upload_file)

  const img_src = Env.get('APP_URL','127.0.0.1')+'/uploads/group-image/'+ groupImageName
  

      const groupCreate = await Group.findOrCreate(
        {
          group_name: group_name,
          group_bio: group_bio,
          profile_photo: img_src
        },
        {
          group_name: group_name,
          group_bio: group_bio,
          profile_photo: img_src
        }
      );
      if (!groupCreate) {
        return response.status(400).json({
          label: `create Group Error`,
          statusCode: 400,
          message: `There was an error creating a group`
        });
      }
        const logGroupAdmin = await GroupUser.findOrCreate(
          {
            user_id: user.id,
            group_id: groupCreate.id,
            is_admin: 1
          },
          {
            user_id: user.id,
            group_id: groupCreate.id,
            is_admin: 1
          }
        );
        if (!logGroupAdmin) {
          return response.status(400).json({
            label: `create Group Error`,
            statusCode: 400,
            message: `There was an error creating a group`
          });
        }
        // // array of users added to the group  
        // let splitUserArray = users.split(",")

        // // add users to a group 
        // // splitUserArray.forEach((element, index, array) => {
       
        // //   console.log("current user being processed", element);
        // // })


      
        //     fruits.forEach(myFunction);

        //     function saveitems(item, index) {
        //       await GroupUser.create(
        //         {
        //           user_id: element.id,
        //           group_id: groupCreate.id,
        //           is_admin: 0
        //         });
        //     }

      response.status(200).json({
        label: "Group Creation",
        message: "Group Created Successfully",
        data: [
            {
              groupCreate,
              // logGroupAdmin
            }
        ]
      });
    } catch (error) {
      console.log(error);
      return response.status(400).json({
        label: `Group Creation`,
        statusCode: 400,
        message: `Internal Server Error `
      });
    }
  }


// User can join a new group 
  async joinGroup({ response , params:{group_id} , auth }){
   try {
    const { user } = auth.current;

   const groupCheck = await Group.query()
   .where("id",group_id)
   .first()

   if(!groupCheck || groupCheck == null )
    return response.status(400).json({
      label: `Group LookUp Error`,
      statusCode: 400,
      message: `Group not found in the system`
    });
   
    const joinNewGroup  = await GroupUser.findOrCreate(
      {
        user_id: user.id,
        group_id: group_id,
        is_admin: 0
      },
      {
        user_id: user.id,
        group_id: group_id,
        is_admin: 0
      }
    );

    if (!joinNewGroup) {
      return response.status(400).json({
        label: `join Group Error`,
        statusCode: 400,
        message: `There was an error joining a group`
      });
    }
    response.status(200).json({
    label: "Group Creation",
    message: "Group joined Successfully",
    data: [
        {
          joinNewGroup
      }
    ]
  });
   } catch (error) {
    console.log(error);
    return response.status(400).json({
      error,
      label: `Group Join`,
      statusCode: 400,
      message: `Internal Server Error `
    });
   }
  }
  
  // all groups joined by the auth user 
  async joinedGroups({response , auth }){
    try {
      const { user } = auth.current;
  
     const groupfollowed = await
      GroupUser.query()
     .where("user_id" ,user.id)
     .with('groups')
     .fetch()
           
     if(!groupfollowed || groupfollowed == null )
      return response.status(400).json({
        label: `Group LookUp Error`,
        statusCode: 400,
        message: `There was an error fetching groups`
      });

      return response.status(200).json({
        result: groupfollowed,
        label: `groups to follow`,
        statusCode: 200,
        message: `Sucessfully fetched groups `,
      });
     } catch (groupsJoinederror) {
      console.log(groupsJoinederror);
      return response.status(400).json({
        error,
        label: `Group fetch`,
        statusCode: 400,
        message: `Internal Server Error `
      });
     }
  }
  
   // all groups not joined by the auth user 
   async nonJoinedGroups({response , auth }){
    try {
      const { user } = auth.current;
  
     const groupfollowed = await GroupUser.query()
     .where("user_id",user.id)
     .pluck("group_id")
  
     if(!groupfollowed || groupfollowed == null )
      return response.status(400).json({
        label: `Group LookUp Error`,
        statusCode: 400,
        message: `There was an error fetching group`
      });
     
      
      //  fetch users the currently authenticated user is not already following
      const groupstoJoin = await Group.query()
        .whereNotIn("id", groupfollowed)
        .withCount("members")
        .fetch()

      if (!groupstoJoin) {
        return response.status(400).json({
          label: `Who to follow Error`,
          statusCode: 400,
          message: `There was an error Fetching Users  `,
        });
      }

      return response.status(200).json({
        result: groupstoJoin,
        label: `Groups to Join`,
        statusCode: 200,
        message: `Sucessfully fetched groups not joined `,
      });
     } catch (error) {
      console.log(error);
      return response.status(400).json({
        error,
        label: `Group Join`,
        statusCode: 400,
        message: `Internal Server Error `
      });
     }
  }


   // all groups not joined by the auth user 
   async ViewDenominationGroups({response , auth }){
    try {
      const { user } = auth.current;
  
     const groupfollowed = await GroupUser.query()
     .where("user_id",user.id)
     .pluck("group_id")
  
     if(!groupfollowed || groupfollowed == null )
      return response.status(400).json({
        label: `Group LookUp Error`,
        statusCode: 400,
        message: `There was an error fetching group`
      });
     
       // get current user denomination 
       const userDenom = await
       additionalUserInfo.query()
         .where("user_id", user.id)
         .pluck("denomination_id")
 
       if (!userDenom) {
         return response.status(400).json({
           label: `User Denomination`,
           statusCode: 400,
           message: `There was a problem fetching the user denomination`,
         });
       }
        // get current user denomination 
        const denominationGroups = await
        GroupUser.query()
          .where("user_id", userDenom[0])
          .pluck("group_id")
  
        if (!denominationGroups) {
          return response.status(400).json({
            label: `Denomination groups`,
            statusCode: 400,
            message: `No denomination groups found`,
          });
        }

      //  fetch users the currently authenticated user is not already following
      const groupstoJoin = await Group.query()
        .whereIn("id", denominationGroups)
        .whereNotIn("id", groupfollowed)
        .withCount("members")
        .fetch()

      if (!groupstoJoin) {
        return response.status(400).json({
          label: `Who to follow Error`,
          statusCode: 400,
          message: `There was an error Fetching Users  `,
        });
      } 


      return response.status(200).json({
        result: groupstoJoin,
        label: `Groups to Join`,
        statusCode: 200,
        message: `Sucessfully fetched Denomination groups`,
      });
     } catch (error) {
      console.log(error);
      return response.status(400).json({
        error,
        label: `Group Join`,
        statusCode: 400,
        message: `Internal Server Error `
      });
     }
  }
}
module.exports = GroupController;
