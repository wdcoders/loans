const mongoose = require('mongoose');
const schema = mongoose.Schema;

const customerSchema = schema({
    firstName:{
        type: 'string',
    },
    lastName:{
        type: 'string',
    },
    emailAddress:{
        type: 'string',
    },
    phoneNumber:{
        type: 'string',
    },
    dob:{
        type: 'string',
    }
}, { timestamps: true });

module.exports = mongoose.model('Customer', customerSchema);