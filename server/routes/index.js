  // serializeUser and deserializeUser explanation:
  // https://stackoverflow.com/questions/27637609/understanding-passport-serialize-deserialize
  passport.serializeUser((user, cb) => {
    cb(null, user.id); // store user in a session cookie
  });

  passport.deserializeUser((id, cb) => {
    knex('users')
      .where({ id })
      .then((user) => {
        cb(null, user);
      });
  });