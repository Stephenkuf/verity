'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

class User extends Model {
  static boot() {

    super.boot()


    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }
  static get hidden() {
    return ['password', 'confirmation_token', 'user_role_id','is_active', 'created_at', 'updated_at', ]
  }
  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens() {
    return this.hasMany('App/Models/Token');
  }
  posts() {
    return this.hasMany('App/Models/Post')
  }
  followers() {
    return this.belongsToMany(
      'App/Models/User')
      .pivotTable('followers')
  }
  following() {
    return this.hasMany(
      'App/Models/Follower',
      'id', 'follower_id')
  }
  groups(){
    return this.belongsToMany('App/Models/Group')
    .pivotTable('group_users')
  }
  replies() {
    return this.hasMany('App/Models/Comment')
  }
  likes() {
    return this.hasMany('App/Models/Like')
  }
  additionalUserInfo() {
    return this.hasOne('App/Models/AdditionalUserInfo')
  }
  user_role() {
    return this.hasOne('App/Models/UserRole', 'user_role_id','id' )
  }
}
module.exports = User
