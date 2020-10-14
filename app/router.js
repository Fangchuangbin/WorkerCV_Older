'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  //页面路由

  router.get('/', controller.frontend.public.index); //首页

  router.get('/home', controller.frontend.home.index); //用户中心

  router.get('/home/collect', controller.frontend.home.collect); //我的收藏

  router.get('/resume/edit/:resumeId', controller.frontend.resume.editResume) //编辑简历



  //接口路由

  router.post('/api/downResume', controller.frontend.resume.downResume); //下载简历

  router.post('/api/getUser', controller.frontend.account.getUser); //用户登录

  router.post('/api/setResume', controller.frontend.resume.setResume); //保存简历

  router.post('/api/setUserInfo', controller.frontend.account.setUserInfo); //修改个人信息

  
};
