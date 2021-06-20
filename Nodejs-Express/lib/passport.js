module.exports = function (app) {

    var authData = {
        email: 'rkdusdd52@naver.com',
        password: '11111',
        nickname: 'yeon'
    }

    var passport = require('passport')
        , LocalStrategy = require('passport-local').Strategy;

    app.use(passport.initialize());
    app.use(passport.session());
    passport.serializeUser(function (user, done) {
        //done(null, user.id);
        done(null, user.email);
    });

    passport.deserializeUser(function (id, done) {
        done(null, authData);
        // User.findById(id, function(err, user) {
        //   done(err, user);
        // });
    });

    passport.use(new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'pwd'
        },
        function (username, password, done) {
            if (username === authData.email) {
                if (password === authData.password) {
                    return done(null, authData, {
                        message: 'Welcome.'
                    });
                } else {
                    return done(null, false, { message: 'Incorrect password.' });
                }
            } else {
                return done(null, false, { message: 'Incorrect username.' });
            }
        }
    ));
    return passport;
}
