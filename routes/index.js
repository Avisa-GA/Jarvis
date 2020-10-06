const router = require('express').Router();

router.get('/', function(req, res) {
    res.render('index', {
        title: 'Jarvis'
    });
});

router.get('/github/curiosity-updates', function(req, res) {
    console.log(req)
    res.json({status: 'ok'})
});

module.exports = router;