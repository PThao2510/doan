const User = require('../models/User');
const {mongoseToObject} = require('../../util/mongoose');
class UserController {
    create(req, res, next) {
        res.render('users/register');
    }

    // edit(req, res, next) {
    //     User.findById(req.params.id)
    //         .then(user => res.render('user/edit', {
    //             user: mongooseToObject(user)
    //         }))
    //         .catch(next);
    // }
}

module.exports = new UserController();