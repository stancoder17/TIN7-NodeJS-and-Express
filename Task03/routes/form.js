const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>
    res.render('form')
);

router.post('/result', (req, res) => {
    const formData = req.body;

    if (formData.age >= 18) {
        formData.canVote = true;
    } else {
        formData.canVote = false;
    }

    res.render('result', formData)
});

module.exports = router;