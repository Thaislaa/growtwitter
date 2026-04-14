"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
class AuthRoutes {
  static bind() {
    const router = express_1.default.Router();
    const controller = new controllers_1.AuthController();
    router.post(
      "/login",
      (0, middlewares_1.dataValidation)([
        (0, express_validator_1.body)("username").isLength({ min: 1 }),
        (0, express_validator_1.body)("password").isLength({ min: 1 }),
      ]),
      controller.login,
    );
    router.post(
      "/register",
      (0, middlewares_1.dataValidation)([
        (0, express_validator_1.body)("name").isLength({ min: 3 }),
        (0, express_validator_1.body)("username").isLength({ min: 3 }),
        (0, express_validator_1.body)("password").isLength({ min: 5 }),
        (0, express_validator_1.body)("imageUrl").optional().isURL(),
      ]),
      controller.register,
    );
    return router;
  }
}
exports.AuthRoutes = AuthRoutes;
