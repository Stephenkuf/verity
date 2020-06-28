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
  "Auth/UserController.additionalUserInfo"
).middleware(["auth"]);

//User Post routes
Route.post("/createPost", "Posts/PostController.createPost").middleware(["auth"]);
Route.get("/ViewTimelinePosts", "Posts/PostController.ViewTimelinePosts").middleware(["auth"]);
Route.post("/likePost", "Posts/PostController.likePost").middleware(["auth"]);



// User profile Routes 
Route.get("/getProfile", "Posts/PostController.fetch");

//metadata routes
Route.get("/getMetadata", "Metadata/MetadatumController.getMetadata");
