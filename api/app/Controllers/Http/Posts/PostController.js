"use strict";
const Post = use("App/Models/Post");
const Like = use("App/Models/Like");
const Comment = use("App/Models/Comment");
const groupPost = use("App/Models/GroupPost");
const Group = use("App/Models/Group");
const uploadImage = use("App/Helpers/Upload")
const additionalUserInfo = use("App/Models/AdditionalUserInfo")
const Env = use("Env");


class PostController {
  async createPost({ request, response, auth }) {
    try {
      const { post_body } = request.all();
      const {user} = auth.current;
      let img_src;
      let postimage = request.file('post_image')

      if(postimage != null){
          // uploadImage to application 
          const postImage = request.file('post_image', {
            types: ['image'],
            size: '3mb'
          })
          if (!postImage) {
            return response.status(404).json({
              status: 'Failed',
              message: 'Post image is required'
            })
          }

          const postImageName = `${new Date().getTime()}_${postImage.fieldName}.${postImage.extname}`
          const upload_file = await uploadImage.createFile(response, postImage, 'uploads/post_image', postImageName)

          console.log('new product upload file >> ', upload_file)

           img_src = Env.get('APP_URL','127.0.0.1')+'/uploads/post_image/'+ postImageName


          //end upload image
      }

      const newPost = await new Post();

      newPost.user_id = user.id;
      newPost.post_body = post_body;
      newPost.post_image = img_src

      const postCreation = await newPost.save();

      if (!postCreation) {
        return response.status(400).json({
          // error: postCreationError,
          label: `Post Creation`,
          statusCode: 400,
          message: `There was an error creating a post `,
        });
      }
      response.status(200).json({
        label: "Post Creation",
        message: "Post Created Successfully",
        data: newPost,
      });

      
    } catch (error) {
      console.log(error);
      return response.status(400).json({
        error,
        label: `Post Creation`,
        statusCode: 400,
        message: `Internal Server Error `,
      });
    }
  }
  // view all posts in the system

  async ViewTimelinePosts({ request, response, auth }) {
    try {
      const postFetching = await Post.query()
        .with("user")
        .with("comment", (builder) => builder.with("user"))
        .withCount("like")
        .orderBy("created_at", "desc")
        .fetch();

      if (!postFetching) {
        return response.status(400).json({
          label: `Post Retrieval `,
          statusCode: 400,
          message: `There was an error fetching all Posts `,
        });
      }
      response.status(200).json({
        label: "Post Fetch",
        message: "Posts fetched uccessfully",
        data: postFetching,
      });

      



    } catch (error) {
      console.log(error);
      return response.status(200).json({
        error,
        label: `Post Like`,
        statusCode: 200,
        message: `Internal Server Error`,
      });
    }
  }

   // view all posts in the system

   async ViewDenominationTimeline({ request, response, auth }) {
    try {
      const {user} = auth.current;

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

      const postFetching = await Post.query()
        .where("user_id", userDenom[0])
        .with("user")
        .with("comment", (builder) => builder.with("user"))
        .withCount("like")
        .orderBy("created_at", "desc")
        .fetch();

      if (!postFetching) {
        return response.status(400).json({
          label: `Denomination timeline `,
          statusCode: 400,
          message: `There was an error fetching denomination Posts `,
        });
      }
      response.status(200).json({
        label: "Post Fetch",
        message: "Posts fetched uccessfully",
        data: postFetching,
      });

      



    } catch (error) {
      console.log(error);
      return response.status(400).json({
        error,
        label: `Denomination timeline `,
        statusCode: 400,
        message: `Internal Server Error`,
      });
    }
  }


  
     // view all posts in the system

     async ViewGroupTimeline({ request, response, auth, params:{group_id} }) {
      try {
        const {user} = auth.current;
        // const postFetching = await groupPost.query()
        //   .where("group_id", group_id)
        //   .with("posts")
        //   .with("comment", (builder) => builder.with("user"))
        //   .withCount("like")
        //   .orderBy("created_at", "desc")
        //   .fetch();


          const postFetching = await Group.query()
          .where("id", group_id)
          .with("posts" , (builder)=>builder.with("posts",
           (builder) => builder.with("comment",
            (builder) => builder.with("user"))
            .withCount("like"))
            .orderBy("created_at", "desc"))
          .fetch();
  
        if (!postFetching) {
          return response.status(400).json({
            label: `Group timeline`,
            statusCode: 400,
            message: `There was an error fetching Group timeline Posts `,
          });
        }

        response.status(200).json({
          label: "Group timeline ",
          message: "Posts fetched Successfully",
          data: postFetching,
        });
  
      } catch (error) {
        console.log(error);
        return response.status(400).json({
          error,
          label: `Group timeline Posts`,
          statusCode: 400,
          message: `Internal Server Error`,
        });
      }
    }


  // LIKE A POST ON TIMELINE
  async likePost({ request, response, auth }) {
    try {
      const { post_id } = request.all();
      const { user } = await auth.current;
      const likePost = await Like.findOrCreate(
        {
          user_id: user.id,
          post_id: post_id,
        },
        {
          user_id: user.id,
          post_id: post_id,
        }
      );

      if (!likePost) {
        return response.status(400).json({
          label: `Post Like`,
          statusCode: 400,
          message: `There was a problem liking that post `,
        });
      }
      response.status(200).json({
        label: "Post Like",
        message: "Post liked successfully",
        data: likePost,
      });
    } catch (error) {
      console.log(error);
      return response.status(200).json({
        label: `Post Like Error`,
        statusCode: 200,
        message: `Internal Server Error `,
      });
    }
  }

  //comment on a particular post

  async commentPost({ request, response, auth }) {
    try {
      const { user } = auth.current;
      const { post_id, comment } = request.all();

      const createComment = await Comment.create({
        user_id: user.id,
        post_id: post_id,
        comment: comment,
      });

      if (!createComment || createComment == null) {
        return response.status(400).json({
          error: createCommentError,
          label: `Post `,
          statusCode: 400,
          message: `There was a problem creating that comment  `,
        });
      }

      const commentDetails = createComment.toJSON();
      response.status(200).json({
        label: "Post Comment",
        message: "Comment created successfully",
        data: commentDetails,
      });
    } catch (error) {
      console.log(error);
      return response.status(200).json({
        label: `Create Comment Error`,
        statusCode: 200,
        message: `Internal Server Error `,
      });
    }
  }

  // create a group Post

  async createGroupPost({ request, response, params: { groupId }, auth }) {
    try {
      const { post_body, post_image } = request.all();

      const user = auth.current.user;
      const groupPostCreation = await Post.create({
        user_id: user.id,
        post_body: post_body,
        is_group_post: 1,
        //post_image = post_image
      });

      if (!groupPostCreation) {
        return response.status(400).json({
          label: `Group Post Creation`,
          statusCode: 400,
          message: `There was an error creating a group post`,
        });
      }
      const groupCreate = await groupPost.findOrCreate(
        {
          group_id: groupId,
          post_id: groupPostCreation.id
        }
      );
      if (!groupCreate) {
        return response.status(400).json({
          label: `create Group Error`,
          statusCode: 400,
          message: `There was an error createing post`,
        });
      }

      response.status(200).json({
        label: "Post Creation",
        message: "Post Created Successfully",
        data: groupPostCreation.toJSON(),
      });
    } catch (error) {
      console.log(error);
      return response.status(400).json({
        error,
        label: `Post Creation`,
        statusCode: 400,
        message: `Internal Server Error `,
      });
    }
  }
}
module.exports = PostController;
