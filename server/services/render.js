const axios = require('axios');
var Userdb = require('../model/model')


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://www.makkar.ml/api/users')
        .then(function(response){
            res.render('index', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })    
}

exports.adminRoutesPost = (req, res) => {
    //Admin login
    var {uname,pass} =req.body
    if(uname==='MAKKARU' && pass==='fatah@makkaru'){
        // Make a get request to /api/users
        axios.get('http://www.makkar.ml/api/users')
        .then(function(response){
            res.render('index_admin', { users : response.data }); 
        })
        .catch(err =>{
            res.send(err);
        })   
    }
    else{
        res.render('Invalid')
    }
}

exports.adminRoutesGet = (req, res) => {
    res.render('admin_login')
    }

exports.add_user = (req, res) =>{
    res.render('add_user');
}

exports.update_user = (req, res) =>{
    axios.get('http://www.makkar.ml/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.get_user = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Userdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    }else{
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }

    
}