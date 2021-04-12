const mongoose = require('mongoose');
const schema = mongoose.Schema;

const loanSchema = schema({
    loanName:{
        type: 'string',
    },
    loanType:{
        type: 'string',
    },
    loanAmount:{
        type: 'string',
    },
    loanIssueDate:{
        type: 'string',
    },
    loanStatus:{
        type: 'string',
    }
}, {timestamps: true});

module.exports = mongoose.model('Loan', loanSchema);