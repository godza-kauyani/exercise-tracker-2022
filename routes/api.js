const router = require('express').Router;

router.post('/users',(req,res)=>{
    const user = req.body.username;
})

exports.default = router;