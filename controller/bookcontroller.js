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





router.get('/detail/:id',(req,res) => {
    let id = req.params.id;

    Book.findById(id,function(err,docs){
        if (err)
          return res.status(400).json({
            success: false,
            err,
          });
        return res.status(200).json({
          success: true,
          docs:docs
        });
    })
})


router.get('/',(req,res) => {
    Book.find().exec((err,docs) => {
         if (err) 
           return res.status(400).json({
             success: false,
             err
           });
           return res.status(200).json({
             success: true,
             docs: docs
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
               docs: docs,
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



function paginatedResults(model) {
  return async (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const queryObject = req.query.name;
    console.log(queryObject);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};
    console.log(model.countDocuments().exec());

    if (endIndex < (await model.countDocuments().exec())) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }

    results.totalDoc = {
      Total: Subscriber.length,
    };
    if (req.query.name) {
      try {
        results.results = await model
          .find({ name: queryObject })
          .limit(limit)
          .skip(startIndex)
          .exec();
        res.paginatedResults = results;
        next();
      } catch (e) {
        res.status(500).json({ message: e.message });
      }
    } else {
      try {
        results.results = await model
          .find({})
          .limit(limit)
          .skip(startIndex)
          .exec();
        res.paginatedResults = results;
        next();
      } catch (e) {
        res.status(500).json({ message: e.message });
      }
    }
  };
}









module.exports = router;