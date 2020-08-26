"use strict";
const user = use("App/Models/User");
const Group = use("App/Models/Group");
const GroupUser = use("App/Models/GroupUser");

class GroupController {
  async createGroup({ request, response, auth }) {
    try {
      const { user } = auth.current;

      const { group_name, group_bio, profile_photo } = request.all();

      const groupCreate = await Group.findOrCreate(
        {
          group_name: group_name,
          group_bio: group_bio,
          // profile_photo: profile_photo
        },
        {
          group_name: group_name,
          group_bio: group_bio,
          // profile_photo: profile_photo
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
      
      response.status(200).json({
        label: "Group Creation",
        message: "Group Created Successfully",
        data: [
            {
              groupCreate,
              logGroupAdmin
            }
        ]
      });
    } catch (error) {
      console.log(error);
      return response.status(400).json({
        error,
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


}
module.exports = GroupController;
