var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.write('test')
  //res.json('Bonjour 4TWIN')
  //res.end()
  next()
});

router.get('/',(req,res,next)=>{
  res.write('suite')
  res.end()
})

router.get('/hello/:nom/:age',(req,res,next)=>{
  const { age, nom } = req.params
  if(nom == 'Ali'){
    res.end('Bonjour Ali')
  }else{
    next('route')
  }
},
(req,res,next)=>{
  res.json('Bonjour '+ req.params.nom+ ' age : '+ req.params.age)
}
)

router.get('/bonjour',(req,res,next)=>{
  res.json('Bonjouur')
})
router.get('/hello/:nom/:age',(req,res,next)=>{
  res.json('Hello '+ req.params.nom+ ' age : '+ req.params.age)

})


module.exports = router;
