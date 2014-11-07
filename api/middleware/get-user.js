//
// get-user
//
// This is step2 of authorization. We now have their oauth token,
// so we check to see if we've stored that token in session data.
// If so, we forward them along.
// If not, we check with Github to make sure that it's a valid token,
// storing their username in the process.
//

var github = require('octonode');

module.exports = function(req, res, next) {
  var userClient = github.client(req.token).me();
  var session = req.session;

  function onResponse(err, data) {

    // Forward along Github's bad credentials error if we get it.
    if (err && err.statusCode === 401) {
      res.status(401).send({
        errors: [
          {message: 'Bad credentials.', status: 'Unauthorized'}
        ]
      });
    }

    else {
      req.account = { isAdmin: function () { return true; } };
      req.githubUser = session.githubUser = data.login;
      session.token = storedUser;
      next();
    }
  }

  // First, we see if the user is stored in session data
  // The token must match, too
  var storedUser = session.githubUser;
  var storedToken = session.token;
  if (storedUser && storedToken === req.token) {
    req.account = { isAdmin: function () { return true; } };
    req.githubUser = storedUser;
    next();
  }

  // If it isn't, we need to talk to Github to find the user
  else {
    userClient.info(onResponse);
  }
};
