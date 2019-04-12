/*
This file is used to create schema of User for bdd
*/

const config = require('../config');
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema; //Create mongoose Schema

let schema = new Schema({
    username: { type: String, required: true, unique:true},
    password: { type: String, required: true, select:false },
    admin: {type: Boolean, required:true, default:false},
    createdOn: { type: Date, default: Date.now },
})

/**
 This function is called before storing user in database
 **/


schema.pre('save', async function() {
    // if password is not modified or created
    if (this.isModified('password')){
        let salt = await bcrypt.genSalt(parseInt(config.SALT));
        let hash = await bcrypt.hash(this.password, salt);
        this.password = hash
    }
});

/** 
 Comparing user password and specified password
 * @param {String} candidatePassword Password to compare
 * @return {bool}                    Return true if match else return false
 **/
schema.methods.comparePasswords = function (candidatePassword) {
    return bcrypt.compareSync(candidatePassword, this.password);
};

module.exports = mongoose.model('User', schema, 'user');


