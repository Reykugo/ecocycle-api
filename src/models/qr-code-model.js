/*
This file is used to create schema of Qr-code for bdd
*/
const mongoose = require('mongoose')
const Schema = mongoose.Schema; //Create mongoose Schema



let schema = new Schema({
    points: {type: Number,default:0, required:true},
    createdBy: {type:String, required:true},
    createdOn: { type: Date, default: Date.now },
})

schema.methods.getPoints = (wasteType) =>{
    switch (wasteType) {
        case "plastic":
            this.points = 5;
            break;
        case "glass":
            this.points = 10;
            break;
        default:
            break;
    }
}

module.exports = mongoose.model('Qr-code', schema, 'qr-code');


