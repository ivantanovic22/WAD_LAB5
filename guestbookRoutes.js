const express = require('express');
const { entries_list } = require('../controllers/guestbookController.js');
const router = express.Router(); 
const controller = require('../controllers/guestbookControllers.js');
router.get('/guestbook', controller.entries_list);
router.get("/", controller.landing_page);
router.get("/", function(req, res) {
    res.send('Hello and welcome to the guestbook application.');
    })
    module.exports = entries_list;
    router.get('/', controller.landing_page(req, res) {
        res.send('<h1>Guestbook Messages</h1>');
        })
        router.get('/about', function(req, res) {
            res.redirect('/about.html');
            }) 
            router.use(function(req, res) {
                res.status(404);
                res.type('text/plain');
                res.send('404 Not found.');
                })
                router.use(function(err, req, res, next) {
                    res.status(500);
                    res.type('text/plain');
                    res.send('Internal Server Error.');
                    })
                   