const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    profilePhoto:{
        type : Object, 
        default:{
            url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            publicId : null
        }
    },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

const validateUser = (user) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    });
    return schema.validate(user);
}
const validateLogin = (user) => {
    const schema = Joi.object({
        email: Joi.string().email(),
        password: Joi.string(),
    });
    return schema.validate(user);
}

const validateUpdateUser = (user) => {
    const schema = Joi.object({
        name: Joi.string(),
        password: Joi.string(),
    });
    return schema.validate(user);
}

module.exports = { User, validateUser, validateLogin,validateUpdateUser } 