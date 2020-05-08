const router = require("express").Router();
router.get("/", (res, req) => {

    res.send("the online tutoring app");
});



const { signUp, logIn } = require("../controllers/auth");

router.post('/signup', signUp);

router.post('/logIn', logIn);





module.exports = router;
router.get("/", (res, req) => {
    res.send("the online tutoring app");

});