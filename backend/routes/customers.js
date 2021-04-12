var express = require("express");
var router = express.Router();

var mongoose = require("mongoose");
const Customer = require("../models/customers.model");

/* get all customers */
router.get("/", function (req, res, next) {
    Customer.find((error, customers) =>{
        if(error){
            res.send({status: 404, message: 'Unable to find cusomters'});
        }else{
            const recordCount = customers.length; 
            res.send({status: 200, recordCount: recordCount, 'customers': customers});
        }
    })
});

/* create new customers */
router.post("/add", function (req, res, next) {

    const {
        firstName,
        lastName,
        emailAddress,
        phoneNumber,
        dob
    } = req.body;

    const customerObj = new Customer({
        firstName: firstName,
        lastName: lastName,
        emailAddress: emailAddress,
        phoneNumber: phoneNumber,
        dob: dob
    }); 

    customerObj.save((error, customerObj)=>{
        if(error){
            res.send({status: 500, message: 'Unable to add new customer'});
        }else{
            res.send({status: 200, message: 'Customer added successfully', 'customer': customerObj});
        }
    });

    
});

/* view customer */
router.get("/view", function (req, res, next) {
    const customerId = req.query.customerId;

    Customer.findById(customerId, (error, data) =>{
        if(error){
            res.send({status: 404, message: 'Unable to find customer'});
        }else{
            res.send({status: 200, 'customer': data});
        }
    })
});

/* update customers */
router.put("/update", function (req, res, next) {
    const {
        firstName,
        lastName,
        emailAddress,
        phoneNumber,
        dob
    } = req.body;
    const customerId = req.query.customerId;
    const customerObj = {
        firstName: firstName,
        lastName: lastName,
        emailAddress: emailAddress,
        phoneNumber: phoneNumber,
        dob: dob
    };
    Customer.findByIdAndUpdate(customerId, customerObj, (error, data) =>{
        if(error){
            res.send({status: 404, message: 'Unable to update the customer'});
        }else{
            res.send({status: 200, message: 'Customer updated successfully', 'customer': data});
        }
    })
});

/* delete customers */
router.delete("/delete", function (req, res, next) {
    const customerId = req.query.customerId;

    Customer.findByIdAndDelete(customerId, (error, data) =>{
        if(error){
            res.send({status: 404, message: 'Unable to find customer'});
        }else{
            res.send({status: 200, message: 'Customer deleted successfully', 'customer': data});
        }
    })
});

/* delete customers */
router.get("/delete-multiple", function (req, res, next) {
    const customerId = req.query.customerId;

    Customer.deleteMany({'firstName': 'John'}, (error, data) =>{
        if(error){
            res.send({status: 404, message: 'Unable to find customer'});
        }else{
            res.send({status: 200, message: 'Customers deleted successfully'});
        }
    })
});

/* search customers */
router.post("/search", function (req, res, next) {
    res.send("respond with a resource");
});

module.exports = router;
