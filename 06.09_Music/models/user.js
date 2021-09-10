const mongoose = require("mongoose");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const  {Schema} = mongoose;

const  UserSchema = new Schema({
    email: String,
    hash: String,
    salt: String
});

UserSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString("hex");
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, "sha512").toString("hex");
    console.log("setPassword: ");
    console.log(this.salt);
    console.log(this.hash);
}

UserSchema.methods.validatePassword = function (password) {
    const  hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, "sha512").toString("hex");
    return this.hash === hash;
};

UserSchema.methods.generateJWT = function () {
    const  today = new Date();
    const expirationDate = new Date(today) ;
    expirationDate.setDate(today.getDate() - 60);
}

UserSchema.methods.toAuthJSON = function () {

}

mongoose.model("user", UserSchema);