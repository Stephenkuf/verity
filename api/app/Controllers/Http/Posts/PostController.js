'use strict'
const Post = use("App/Models/Post");
const safeAwait = require("safe-await");


class PostController {
  async createPost({
    request,
    response,
    auth
  }) {
    const {
      post_body,
      post_image
    } = request.all();

    const user = auth.current.user;

    const newPost = await new Post()

    newPost.user_id = user.id
    newPost.post_body = post_body
    // newPost.post_image = post_image
    const [postCreationError, postCreation] = await safeAwait(
      Post.all()
    )
    if (postCreationError) {
      return response.status(400).json({
        error: postCreationError,
        label: `Post Creation`,
        statusCode: 400,
        message: `There was an error creating a post `,
      })
    }
    response.status(200).json({
      label: "Post Creation",
      message: 'Post Created Successfully',
      data: postCreation
    })
  }



  // view all posts in the system 

  async ViewTimelinePosts({
    request,
    response,
    auth
  }) {
    const [postFetchingError, postFetching] = await safeAwait(
      Post.query()
      .with("user")
      .with("reply")
      .with("like")
      .orderBy("created_at", "desc")
      .fetch()
    )
    if (postFetchingError) {
      return response.status(400).json({
        error: postFetchingError,
        label: `Post Retrieval `,
        statusCode: 400,
        message: `There was an error fetching all Posts `,
      })
    }
    response.status(200).json({
      label: "Post Creation",
      message: 'Posts fetched uccessfully',
      data: postFetching
    })
  }
}
module.exports = PostController
