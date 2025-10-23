var express=require("express");
var router=express.Router();
var postController=require("../controller/postController");
const uploadImage=require("../middleware/multer");
const { hasDescription } = require("../validations/validators");

router.post("/uploadproduct",uploadImage("post").single('image'),hasDescription,postController.store);


router.get("/",(req,res)=>{
    res.redirect("home.html");
});

router.post("/adminlogin",postController.validateAdmin);

module.exports=router;

router.get("/aboutus",(req,res)=>{
    res.redirect("/aboutus.html");
});

router.get("/contactus",(req,res)=>{
    res.redirect("/contactus.html")
});

router.get("/productcategory",(req,res)=>{
    res.redirect("/productcategory.html")
});

router.get("/adminpage",(req,res)=>{
    res.redirect("/adminpage.html");
})

router.get("/:id",postController.getImage);
