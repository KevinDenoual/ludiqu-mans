const express = require('express');
const path = require('path');

module.exports = {
    getLogout: (req, res, next) => {
        req.session.destroy(() => {
            res.clearCookie('coucou');
            res.redirect('/')
        })
    }
}
