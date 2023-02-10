const User = require('../models/User');
const { mongoseToObject } = require('../../util/mongoose');
class UserController {
    signup(req, res, next) {
        var messages = req.flash('error');
        res.render('users/register', {
            messages: messages,
            hasErrors: messages.length > 0,
        });
    }

    // createAcount(req, res, next) {
    //     var username = req.body.username;
    //     var password = req.body.password;
    //     debugger;
    //     User.findOne({ username: username }, function (err, user) {
    //         if (err) { return next(err); }
    //         if (user) {
    //             req.flash('error', 'User already exists');
    //             return res.redirect('/users/signup');
    //         }

    //         var newUser = new User(req.body);
    //         newUser.save();

    //         passport.authenticate('local', { failureRedirect: '/users/signup' }),
    //             function (req, res) {
    //                 res.redirect('/users/sigin');
    //             }
    //     });
    // };
    sigin(req, res, next) {
        var messages = req.flash('error');
        res.render('users/signin', {
            messages: messages,
            hasErrors: messages.length > 0,
        })
    };
}


module.exports = new UserController();