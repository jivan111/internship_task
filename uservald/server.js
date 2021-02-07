const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
var session = require("express-session");
// app.set("trust proxy", 1); // trust first proxy
// app.use(cookieParser());
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    cookie: {
      //  secure: true
      expires: 60000,
    },
  })
);
require("dotenv").config();
const {
  sendMailAndSave,
  findUserWithEmailAndUpdate,
  findAllUser,
} = require("./utilities");
// use proxy:"http://localhost:5000" in client side react
//  package.json and restart to take tackls cors issue
// app.use(cors());
// it is used for content-type=x-www-form-urlencoded like "url?key=val&key2=val2"
// ie to parse content from url
app.use(express.urlencoded({ extended: true }));
// it is used to parse json data
app.use(express.json());
// function with query params
app.get("/verify", (req, res) => {
  let currentMilli = Date.now();
  if (currentMilli <= parseInt(req.query.id) + 5 * 60 * 1000) {
    findUserWithEmailAndUpdate(req, res);
  } else {
    res.send(`<h2>Time Exceed...</h2>`);
  }
});
app.get("/moma",(req,res)=>{
    
   res.json({name:"Jivan Mainali"})

})
app.get("/auth",(req,res)=>{
  req.session.authenticated = true;
  res.json({"lola":"dola"})
})
app.get("/alluser", (req, res) => {
  console.log("hello ");
  if (req.session.authenticated) {
    findAllUser(res);
  } else {
    res.status(403).send("Private routes");
  }
});
app.post("/register", (req, res) => {
  // console.log(
  //   req.cookies,
  //   "from cookei",
  //   req.sessionID,
  //   "session",
  //   req.session
  // );
  sendMailAndSave(req, res);
});
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
// });
app.use(express.static("client/build"));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
if (process.env.NODE_ENV === "production") {
}
let PORT = process.env.PORT || "5000";
app.listen(PORT, () => {
  console.log("running perfectly...", PORT);
});


