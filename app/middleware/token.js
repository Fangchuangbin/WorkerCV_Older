module.exports = (options, app) => {
  return async function token(ctx, next) {
    var tokenData = ctx.cookies.get('loginToken');
    await next();
  }
}