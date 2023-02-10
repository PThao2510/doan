const mongoose = require('mongoose');

async function connect() {

    try{
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev');
        // require('../Passport/passport')(passport);

        mongoose.set("strictQuery", false);
        console.log('Connected')
    } catch (error) {
        console.log('Connect failure!');
    }

}

module.exports = { connect };