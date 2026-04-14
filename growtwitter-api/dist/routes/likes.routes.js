"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikesRoutes = void 0;
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
class LikesRoutes {
  static bind() {
    const router = express_1.default.Router();
    const controller = new controllers_1.LikesController();
    router.post(
      "/likes",
      middlewares_1.authMiddleware,
      (0, middlewares_1.dataValidation)([
        (0, express_validator_1.body)("tweetId").isString().isUUID(),
      ]),
      controller.like,
    );
    router.delete(
      "/likes",
      middlewares_1.authMiddleware,
      (0, middlewares_1.dataValidation)([
        (0, express_validator_1.body)("tweetId").isString().isUUID(),
      ]),
      controller.dislike,
    );
    return router;
  }
}
exports.LikesRoutes = LikesRoutes;
