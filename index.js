const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose');
require('dotenv').config()
const User = require('./models/username');
//const config = JSON.parse(process.env.APP_CONFIG);

app.use(cors())
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'))
//app.use('/api', require('./routes/api.js'));
app.get('/',(req,res,next)=>{
 // mongoose.connect("mongodb://" + config.mongo.user + ":" + encodeURIComponent(mongoPassword) + "@" + config.mongo.hostString);
  next();
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});
app.post('/api/users',(req,res)=>{
  const username = req.body.username;
  console.log(username)
  //const new_user = new User({username});
  //new_user.save((error,user)=>{
  //  if(error)res.json('Error could not save database');
  //  res.json(user.toJSON());
 // })

});
app.get('/api/users',(req,res)=>{
  User.find({},(error,users)=>{
    if (error)res.json([]);
    res.json(users);

  })

})
app.post('/api/users:_id/exercises/',(req,res)=>{
  const {}

})
app.get('/api/users/:_id/logs',(req,res)=>{

})





const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
