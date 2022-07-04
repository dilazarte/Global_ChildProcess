const express = require('express')
const {Router} = express
const { fork } = require('child_process');



const randomsNum = Router()

randomsNum.get('/', (req, res) => {
    let num = req.query.cant;
    const forked = fork('src/utils/randomsNum.js');
    if(num){
        forked.send(num);
        forked.on('message', data => {
            res.json(data)
        })
    } else {
        forked.send(100000000);
        forked.on('message', data => {
            res.json(data)
        })
    }
})

module.exports= randomsNum