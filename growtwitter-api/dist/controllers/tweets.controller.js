"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TweetsController = void 0;
const services_1 = require("../services");
const utils_1 = require("../utils");
class TweetsController {
  async createTweet(req, res) {
    try {
      const authorId = req.user.id;
      const { content } = req.body;
      const service = new services_1.TweetService(new services_1.LikeService());
      const result = await service.createTweet({
        authorId,
        content,
      });
      res.status(201).json({
        success: true,
        message: "Tweet created successfully.",
        data: result.toJSON(),
      });
    } catch (error) {
      (0, utils_1.onError)(error, res);
    }
  }
  async createReply(req, res) {
    try {
      const authorId = req.user.id;
      const { content, replyTo } = req.body;
      const service = new services_1.TweetService(new services_1.LikeService());
      const result = await service.createReply({ authorId, content, replyTo });
      res.status(201).json({
        success: true,
        message: "Reply published successfully.",
        data: result.toJSON(),
      });
    } catch (error) {
      (0, utils_1.onError)(error, res);
    }
  }
  async findTweet(req, res) {
    try {
      const { id } = req.params;
      const service = new services_1.TweetService(new services_1.LikeService());
      const result = await service.findTweet({
        tweetId: String(id),
      });
      res.status(200).json({
        success: true,
        message: "Record found successfully.",
        data: result.toJSON(),
      });
    } catch (error) {
      (0, utils_1.onError)(error, res);
    }
  }
  async updateTweet(req, res) {
    try {
      const authorId = req.user.id;
      const { id } = req.params;
      const { content } = req.body;
      const service = new services_1.TweetService(new services_1.LikeService());
      const result = await service.updateTweet({
        authorId,
        tweetId: String(id),
        content,
      });
      res.status(200).json({
        success: true,
        message: "Record updated successfully.",
        data: result.toJSON(),
      });
    } catch (error) {
      (0, utils_1.onError)(error, res);
    }
  }
  async deleteTweet(req, res) {
    try {
      const authorId = req.user.id;
      const { id } = req.params;
      const service = new services_1.TweetService(new services_1.LikeService());
      const result = await service.deleteTweet({
        authorId,
        tweetId: String(id),
      });
      res.status(200).json({
        success: true,
        message: "Record deleted successfully.",
        data: result.toJSON(),
      });
    } catch (error) {
      (0, utils_1.onError)(error, res);
    }
  }
  async listTweetsByUserId(req, res) {
    try {
      const { userId } = req.params;
      const service = new services_1.TweetService(new services_1.LikeService());
      const result = await service.listTweetsByUserId(String(userId));
      res.status(200).json({
        success: true,
        message: "Records listed successfully.",
        data: result.map((t) => t.toJSON()),
      });
    } catch (error) {
      (0, utils_1.onError)(error, res);
    }
  }
  async feed(req, res) {
    try {
      const { id } = req.user;
      const service = new services_1.TweetService(new services_1.LikeService());
      const result = await service.feed(id);
      res.status(200).json({
        success: true,
        message: "Records listed successfully.",
        data: result.map((t) => t.toJSON()),
      });
    } catch (error) {
      (0, utils_1.onError)(error, res);
    }
  }
}
exports.TweetsController = TweetsController;
