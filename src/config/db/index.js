const mongoose = require('mongoose');

async function connect() {

    try{
        await mongoose.connect('mongodb://127.0.0.1/mini_cake_dev');

        mongoose.set("strictQuery", false);
        console.log('Connected')
    } catch (error) {
        console.log('Connect failure!');
    }

}

module.exports = { connect };