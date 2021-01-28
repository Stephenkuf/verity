"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", () => {
  return {
    greeting: "Hello world in JSON"
  };
});
// Authentication Routes
Route.post("/register", "Auth/RegisterController.register");
Route.get("register/confirm/:token", "Auth/RegisterController.confirmEmail");
Route.post("/login", "Auth/LoginController.login");
// Route.get("/logout", "Auth/Authenticated.logout");

// additional Information routes
Route.post(
  "/registerDenomination",
  "Auth/DenominationController.registerDenomination"
).middleware(["auth"]);
Route.post(
  "/registerBranch",
  "Auth/BranchController.registerDenominationBranch"
).middleware(["auth"]);
Route.post(
  "/additionalUserInfo",
  "User/UserController.additionalUserInfo"
).middleware(["auth"]);

//User Post routes
Route.post("/createPost", "Posts/PostController.createPost").middleware(["auth"]);
Route.get("/ViewTimelinePosts", "Posts/PostController.ViewTimelinePosts").middleware(["auth"]);
Route.post("/likePost", "Posts/PostController.likePost").middleware(["auth"]);
Route.post("/commentPost", "Posts/PostController.commentPost").middleware(["auth"]);
Route.post("/createGroupPost/:groupId", "Posts/PostController.createGroupPost").middleware(["auth"]);



// User profile Routes 
Route.get("/getUserPosts", "User/UserController.getUserPosts").middleware(["auth"]);
Route.get("/getUserProfile", "User/UserController.getUserProfile").middleware(["auth"]);
Route.get("/getAllUsers", "User/UserController.getAllUsers").middleware(["auth"]);
Route.get("/getFriends","User/FriendController.getAllFriends").middleware(["auth"]); 
Route.get('/getFollowers' ,"User/FriendController.getAllFollowers").middleware(["auth"]); 
Route.get('/getFollowing' ,"User/FriendController.getAllFollowing").middleware(["auth"]); 

//metadata routes
Route.get("/getMetadata", "Metadata/MetadatumController.getMetadata");

//follow routes
Route.get("/whoToFollow", "Follow/FollowController.whoToFollow").middleware(["auth"]);
Route.post("/followUser", "Follow/FollowController.followUser").middleware(["auth"]);

// create groups
Route.post("/createGroup", "Group/GroupController.createGroup").middleware(["auth"]);
Route.post("/joinGroup/:group_id", "Group/GroupController.joinGroup").middleware(["auth"]);
Route.get("/joinedGroups","Group/GroupController.joinedGroups").middleware(["auth"]);
Route.get("/nonJoinedGroups","Group/GroupController.nonJoinedGroups").middleware(["auth"]);
Route.get("/ViewGroupTimeline/:group_id", "Posts/PostController.ViewGroupTimeline").middleware(["auth"]);

// messaging
Route.post("/createMessage", "Messaging/MessageController.createMessage").middleware(["auth"]);
Route.get("/getMessages", "Messaging/MessageController.getMessages").middleware(["auth"]);
Route.get("/getSingleMessage", "Messaging/MessageController.getSingleMessage").middleware(["auth"]);

// Denomination Routes 
Route.get("/whoToFollowDenomination", "Follow/FollowController.whoToFollowDenomination").middleware(["auth"]);
Route.get("/ViewDenominationTimeline", "Posts/PostController.ViewDenominationTimeline").middleware(["auth"]);
Route.get("/ViewDenominationGroups","Group/GroupController.ViewDenominationGroups").middleware(["auth"]);


// CHURCH ADMINISTRATION
//Emails
Route.post("/sendEmail","Emails/ChurchEmailController.sendDenominationMail" ).middleware(["auth"]);
Route.get("/viewEmails","Emails/ChurchEmailController.viewDenominationMail" ).middleware(["auth"]);
// Requests
Route.post("/createChurchRequest","Requests/ChurchRequestController.createChurchRequest" ).middleware(["auth"]);
Route.get("/viewChurchRequests","Requests/ChurchRequestController.viewChurchRequests" ).middleware(["auth"]);
Route.post("/acceptChurchRequest","Requests/ChurchRequestController.acceptChurchRequest" ).middleware(["auth"]);
Route.post("/rejectChurchRequest","Requests/ChurchRequestController.rejectChurchRequest" ).middleware(["auth"]);
Route.get("/viewSingleChurchRequest/:request_id","Requests/ChurchRequestController.viewSingleChurchRequest");
Route.get("/viewAcceptedRequests","Requests/ChurchRequestController.viewAcceptedRequests" ).middleware(["auth"]);
Route.get("/viewRejectedRequests","Requests/ChurchRequestController.viewRejectedRequests" ).middleware(["auth"]);

//resources
Route.post("/createChurchResource","Resources/ChurchResourceController.createChurchResource" ).middleware(["auth"]);
Route.get("/viewDenominationResources","Resources/ChurchResourceController.viewDenominationResources" ).middleware(["auth"]);
Route.get("/viewSingleResource/:id","Resources/ChurchResourceController.viewSingleResource" ).middleware(["auth"]);


//register
Route.post("/createChurchRegister","Register/ChurchRegisterController.createChurchRegister" ).middleware(["auth"]);
Route.get("/viewChurchRegister","Register/ChurchRegisterController.viewChurchRegister" ).middleware(["auth"]);
// bulettin
Route.post("/createChurchBulletin","Requests/ChurchBulletinController.createChurchBulletin" ).middleware(["auth"]);
Route.get("/viewChurchBulletin","Requests/ChurchBulletinController.viewChurchBulletin" ).middleware(["auth"]);





