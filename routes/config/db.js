const mongoose = require('mongoose');
const url = "mongodb+srv://Sodienye:CbxZgs8CELerS617@contactkeeper.vhnbdrd.mongodb.net/?retryWrites=true&w=majority";


const connectDB = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('mongodb connected');
    } catch (err) {
        console.log(err.message);
        process.exit(1)
    }
};

module.exports = connectDB;