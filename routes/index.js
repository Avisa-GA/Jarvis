const router = require('express').Router();

router.get('/', function(req, res) {
    res.render('index', {
        title: 'Jarvis'
    });
});

module.exports = router;