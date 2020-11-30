'use strict';

const Controller = require('egg').Controller;
const { v4: uuidv4 } = require('uuid');

class TopicController extends Controller {
  async create(){
    const { ctx } = this;
    ctx.body = { 
      id: uuidv4(),
      ...ctx.request.body
    };
    ctx.status = 201;
  };
}

module.exports = TopicController;
