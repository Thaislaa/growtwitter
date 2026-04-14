"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const envs_1 = require("./envs");
const routes_1 = require("./routes");
const app = new app_1.default(
  [
    routes_1.AuthRoutes.bind(),
    routes_1.UsersRoutes.bind(),
    routes_1.TweetsRoutes.bind(),
    routes_1.LikesRoutes.bind(),
    routes_1.FollowersRoutes.bind(),
  ],
  envs_1.envs.PORT,
);
app.listen();
