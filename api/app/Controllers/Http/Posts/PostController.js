"use strict";
const Post = use("App/Models/Post");
const Like = use("App/Models/Like");
const Comment = use("App/Models/Comment");


class PostController {
  async createPost({
    request,
    response,
    auth
  }) {


    try {
      const {
        post_body,
        post_image
      } = request.all();

      const user = auth.current.user;

      const newPost = await new Post();

      newPost.user_id = user.id;
      newPost.post_body = post_body;
      // newPost.post_image = post_image
      const postCreation = await newPost.save();
      if (!postCreationError) {
        return response.status(400).json({
          error: postCreationError,
          label: `Post Creation`,
          statusCode: 400,
          message: `There was an error creating a post `
        });
      }
      response.status(200).json({
        label: "Post Creation",
        message: "Post Created Successfully",
        data: postCreation
      });
    } catch (error) {
      console.log(error);
      return response.status(400).json({
        error,
        label: `Post Creation`,
        statusCode: 400,
        message: `Internal Server Error `,
      })
    }

  }

  // view all posts in the system

  async ViewTimelinePosts({
    request,
    response,
    auth
  }) {
    try {
      const postFetching = await
      Post.query()
        .with("user")
        .with("reply")
        .withCount("like")
        .orderBy("created_at", "desc")
        .fetch()

      if (!postFetching) {
        return response.status(400).json({
          label: `Post Retrieval `,
          statusCode: 400,
          message: `There was an error fetching all Posts `
        });
      }
      response.status(200).json({
        label: "Post Fetch",
        message: "Posts fetched uccessfully",
        data: postFetching
      });
    } catch (error) {
      console.log(error);
      return response.status(200).json({
        error,
        label: `Post Like`,
        statusCode: 200,
        message: `Internal Server Error`,
      })
    }

  }

  // LIKE A POST ON TIMELINE
  async likePost({
    request,
    response,
    auth
  }) {
    try {
      const {
        post_id
      } = request.all();
      const {
        user
      } = await auth.current;
      const likePost = await
      Like.findOrCreate({
        user_id: user.id,
        post_id: post_id
      }, {
        user_id: user.id,
        post_id: post_id
      })


      if (!likePost) {
        return response.status(400).json({
          label: `Post Like`,
          statusCode: 400,
          message: `There was a problem liking that post `
        });
      }
      response.status(200).json({
        label: "Post Like",
        message: "Post liked successfully",
        data: likePost
      });
    } catch (error) {
      console.log(error);
      return response.status(200).json({
        label: `Post Like Error`,
        statusCode: 200,
        message: `Internal Server Error `,
      })
    }

  }

  //comment on a particular post

  async commentPost({
    request,
    response,
    auth
  }) {
    try {
      const {
        user
      } = auth.current;
      const {
        post_id,
        comment
      } = request.all();

      const [createCommentError, createComment] = await safeAwait(
        Comment.create({
          user_id: user.id,
          post_id: post_id,
          comment: comment
        })
      );

      if (createCommentError) {
        return response.status(400).json({
          error: createCommentError,
          label: `Post `,
          statusCode: 400,
          message: `There was a problem creating that comment  `
        });
      }

      const commentDetails = createComment.toJSON();
      response.status(200).json({
        label: "Post Comment",
        message: 'Comment created successfully',
        data: commentDetails
      })
    } catch (error) {
      console.log(error);
      return response.status(200).json({
        label: `Create Comment Error`,
        statusCode: 200,
        message: `Internal Server Error `,
      })
    }


  }
}
module.exports = PostController;
