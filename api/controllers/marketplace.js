const express = require('express')
    , path = require('path')
    , mkpmodel = require('../database/models/marketplace')



module.exports = {
    getMarketPlace: (req, res) => {
        res.render('marketplace/marketplace')
    }, 
    getMarketPlaceCreate: (req, res) => {
        res.render('marketplace/marketplaceCreate')
    },

    postmkpcreate: async(req, res) =>{
        if(err){
            res.send(err)
        }else{

        }
    }
}