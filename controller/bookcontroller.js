const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Book = mongoose.model("Book");


router.post('/add',(req,res) => {
    const book = new Book(req.body);
    console.log(req.body);
    book.save((err) => {
        if(err)
            return res.status(400).json({
                success: false, err
            });
            return res.status(200).json({
                success: true
            });

        
    })
});


router.get('/',(req,res) => {
    Book.find().exec((err,docs) => {
         if (err) 
           return res.status(400).json({
             success: false,
             err
           });
           return res.status(200).json({
             success: true,
             list: docs
           });
         
    })
});


router.put("/update/:id",(req,res) => {
    Book.findByIdAndUpdate(
        req.params.id,{
            $set:req.body
        },
        (err,docs) => {
             if (err)
               return res.status(400).json({
                 success: false,
                 err,
               });
             return res.status(200).json({
               success: true,
               list: docs,
             });
         
        }

    )
});

router.delete("/delete/:id",(req,res) => {
    Book.findOneAndRemove(req.params.id).exec((err,docs) => {
        if(err){
            res.send(err)
        }
        else{
            return res.json(docs);
        }
    })
});


module.exports = router;