const router = require("express").Router();
router.get("/", (res, req) => {

    res.send("This is the express app. You have now entered express");
});



const { signUp, logIn } = require("../controllers/auth");

router.post('/signup', signUp);

router.post('/logIn', logIn);





module.exports = router;
router.get("/", (res, req) => {
    res.send("This is the express app. You have now entered express");

});