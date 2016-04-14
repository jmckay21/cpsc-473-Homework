
var redis = require("redis");
var request = require('request');


//Redis Client = app
app=redis.createClient()

app.mget('/stats',function(err,results){
    if (err!=null){
        console.log("ERROR: " + err);
        return
    }
    score.wins=parseInt(results[0]) || 0;
    score.losses=parseInt(results[1])|| 0;
})

app.post('/flip',function(req,res){
   var flip = Math.random()
   
   var result = function(flip){
    if(Math.random==flip){
        app.incr("win")
    }
    else{
        app.incr("loss")
    }
 }
});


app.delete('/stats', function (req,res) {
    app.del("win")
    app.del("loss")
});

