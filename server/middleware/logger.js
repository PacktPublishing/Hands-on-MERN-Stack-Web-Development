export default (req, res, next) => {
  console.log(
    '=> ',
    req.method,
    req.originalUrl,
    ' || ',
    'isAuthenticated: ',
    req.isAuthenticated,
    'is Admin: ',
    req.isAdmin
  );
  next();
};
