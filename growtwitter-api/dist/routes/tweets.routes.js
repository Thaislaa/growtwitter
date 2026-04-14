"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TweetsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
class TweetsRoutes {
    static bind() {
        const router = express_1.default.Router();
        const controller = new controllers_1.TweetsController();
        router.post("/tweets", middlewares_1.authMiddleware, (0, middlewares_1.dataValidation)([(0, express_validator_1.body)("content").isString().isLength({ min: 1 })]), controller.createTweet);
        router.post("/replies", middlewares_1.authMiddleware, (0, middlewares_1.dataValidation)([
            (0, express_validator_1.body)("content").isString().isLength({ min: 1 }),
            (0, express_validator_1.body)("replyTo").isString().isUUID(),
        ]), controller.createReply);
        router.get("/tweets/:id", middlewares_1.authMiddleware, (0, middlewares_1.dataValidation)([(0, express_validator_1.param)("id").isUUID()]), controller.findTweet);
        router.put("/tweets/:id", middlewares_1.authMiddleware, (0, middlewares_1.dataValidation)([
            (0, express_validator_1.param)("id").isUUID(),
            (0, express_validator_1.body)("content").isString().isLength({ min: 1 }),
        ]), controller.updateTweet);
        router.delete("/tweets/:id", middlewares_1.authMiddleware, (0, middlewares_1.dataValidation)([(0, express_validator_1.param)("id").isUUID()]), controller.deleteTweet);
        router.get("/users/:userId/tweets", middlewares_1.authMiddleware, (0, middlewares_1.dataValidation)([(0, express_validator_1.param)("userId").isUUID()]), controller.listTweetsByUserId);
        router.get("/feed", middlewares_1.authMiddleware, controller.feed);
        return router;
    }
}
exports.TweetsRoutes = TweetsRoutes;
