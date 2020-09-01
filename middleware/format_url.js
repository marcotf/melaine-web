module.exports = function(req, res, next) {
  const host = req.headers.host;
  const url = req.url;
  const env = process.env.NODE_ENV;
  const forceDomain = 'https://etiopathedunkerque.fr';

  if (env === 'production' && host !== 'etiopathedunkerque.fr') {
    res.writeHead(301, { Location: forceDomain + url });
    return res.end();
  }

  return next();
};
