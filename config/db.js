const mongoose = require('mongoose');
const config = require("config");
const db = config.get('mongoURI');
// "mongoURI": "mongodb+srv://jdelong:jdelong@devconnect-bzkyc.mongodb.net/test?retryWrites=true&w=majority",
// "githubClientId": "a628b41f521941bdf3a8",
//     "githubSecret": "47717e69bd418514f20fb89d6de9f431f3cb8665"

// "mongoURI": "mongodb+srv://connectdev:connectdev@cluster0.upg4kxp.mongodb.net/?retryWrites=true&w=majority",

//gives back a promise
const connectDB = async () => {
    try {
        //returns a promise
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true, 
            useFindAndModify: false
        });

        console.log('mongodb connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;