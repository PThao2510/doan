const express = require('express');
var passport = require('passport');
const User = require('../app/models/User');
const router = express.Router();
const userController = require('../app/controllers/UserController');

router.get('/signup', userController.signup);
router.get('/sigin', userController.sigin);
router.post('/signup', passport.authenticate('users/signup', {
    successRedirect: '/users/sigin', // chuyển hướng tới trang đăng nhập sau khi đăng ký
    failureRedirect: '/users/signup', // trở lại trang đăng ký nếu có lỗi
    failureFlash: true // allow flash messages
    }));
router.post('/sigin', passport.authenticate("users/signin", {
    successRedirect : '/', // Khi bạn điền đúng thông tin đăng nhập thì nó sẽ chuyển hướng bạn đến trang chủ
    failureRedirect : '/users/sigin',// trở lại trang đăng nhập nếu có lỗi
    failureFlash : true
    }));

module.exports = router;