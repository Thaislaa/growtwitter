"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.FollowersRoutes = void 0;
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
class FollowersRoutes {
  static bind() {
    const router = express_1.default.Router();
    const controller = new controllers_1.FollowersController();
    router.post(
      "/followers",
      middlewares_1.authMiddleware,
      (0, middlewares_1.dataValidation)([
        (0, express_validator_1.body)("userId").isString().isUUID(),
      ]),
      controller.followUp,
    );
    router.delete(
      "/followers",
      middlewares_1.authMiddleware,
      (0, middlewares_1.dataValidation)([
        (0, express_validator_1.body)("userId").isString().isUUID(),
      ]),
      controller.unfollow,
    );
    router.get(
      "/followers",
      middlewares_1.authMiddleware,
      controller.getFollowers,
    );
    return router;
  }
}
exports.FollowersRoutes = FollowersRoutes;
