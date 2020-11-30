'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>EggJS 应用云原生硬核实战（Kubernetes+Traefik+Helm+Prometheus+Grafana）,提供示例</title>
    </head>
    <body>
      <div>项目地址：<a href="https://github.com/Hacker-Linner/k8s-eggjs" target="_blank">EggJS 应用云原生硬核实战（Kubernetes+Traefik+Helm+Prometheus+Grafana）,提供示例</a></div>
      <div style="display:flex;">
        <div>
          <p>前端云原生群</p>
          <img src="public/images/team-qrcode.png" width="200px"/>
        </div>
        <div>
          <p>公众号</p>
          <img src="public/images/tea-qrcode.png" width="200px"/>
        </div>
        <div>
          <p>为少的微信</p>
          <img src="public/images/me-qrcode.jpeg" width="200px"/>
        </div>
      </div>
    </body>
    </html>
    `;
  }
}

module.exports = HomeController;
