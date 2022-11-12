const verificarLogin = (req, res, next) => {
    if (req.session.login !== undefined) {
      next();
    } else {
      res.resdirect("./login");
    }
  };
  
  module.exports = {
    verificarLogin,
  };