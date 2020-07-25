"use strict";
const user = use("App/Models/User");
const Group = use("App/Models/Group");
const GroupUser = use("App/Models/GroupUser");

class GroupController {
  async createGroup({ request, response, auth }) {
    try {
      const { user } = auth.current;

      const { group_name, group_bio, profile_photo } = request.all;

      const groupCreate = await Group.findOrCreate(
        {
          group_name: group_name,
          group_bio: group_bio,
          profile_photo: profile_photo
        },
        {
          group_name: group_name,
          group_bio: group_bio,
          profile_photo: profile_photo
        }
      );

      if (!groupCreate) {
        return response.status(400).json({
          label: `create Group Error`,
          statusCode: 400,
          message: `There was an error creating a group`
        });
      }
      if (groupCreate) {
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
      }

      response.status(200).json({
        label: "Group Creation",
        message: "Group Created Successfully",
        data: groupCreation
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
}
module.exports = GroupController;
