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
      newPost.save()
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
}

module.exports = PostController
