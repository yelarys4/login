const mongoose = require('mongoose');
const connect = mongoose.connect("mongodb+srv://aripzhanelarys:j880Ul117fuv3aFv@cluster0.h3kmvup.mongodb.net/?retryWrites=true&w=majority");

connect.then(() => {
    console.log("Database Connected Successfully");
})
.catch(() => {
    console.log("Database cannot be Connected");
})

const Loginschema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const collection = new mongoose.model("users", Loginschema);

module.exports = collection;