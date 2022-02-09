const mongoose = require('mongoose');
require('mongoose-type-url')

var schema = new mongoose.Schema({
    imagePC : {
        type : mongoose.SchemaTypes.Url,
        required: true,
        unique: true
    },
    imagePN : {
        type: mongoose.SchemaTypes.Url,
        required: true,
        unique: true
    }
})
// schema.path('imagePC').validate((val) => {
//     urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
//     return urlRegex.test(val);
// }, 'Invalid URL.');

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;
