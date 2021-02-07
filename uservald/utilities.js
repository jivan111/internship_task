const nodemailer = require("nodemailer");
const { Users } = require("./db/UserSchema.js");

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.email,
    pass: process.env.pass,
  },
});
function sendMail(email, subject, message, html = "") {
  console.log(process.env.pass, "passs", process.env.email);
  transporter
    .sendMail({
      from: process.env.email,
      to: email,
      subject: subject,
      text: message,
      html: html,
    })
    .catch((err) => {
      console.log("errr from sendmail", err);
    });
}
function sendMailAndSave(req, res) {
  let email = req.body.email;
  let html = `<a  href="https://registerationapp.herokuapp.com/verify?id=${Date.now()}&email=${email}">click here 
      </a><span>to verify your email</span>
        <br/> `;
  let subject = "Verifying email";
  let message = "Verify your email by clicking on link below.";
  sendMail(email, subject, message, html);
  saveUser(req, res);
}
function saveUser(req, res) {
  const account = new Users(req.body);
  account.save((err) => {
    console.log(err);
    if (err) {
      res.status(400).send();
    } else {

      req.session.authenticated=true;
      res.status(200).send();
      
    }
  });
}
function findUserWithEmailAndUpdate(req, res) {
  Users.findOneAndUpdate(
    { email: req.query.email },
    { verified: true },

    (err, result) => {
      if (result && !result.verified) {
        sendMail(
          req.query.email,
          "Confirmation email",
          "Your account has been registered and verified!!"
        );
        res.send(`<h1> verified!!</h1>`);
      } else if (result) {
        res.send(`<h1>Already verified!!</h1>`);
      } else {
        res.send(`<h1>Link has been invalidated!</h1>`);
      }
    }
  );
}
function findAllUser(res) {
  Users.find({},{name:1,email:1,phone:1,dob:1,_id:0},(err,result)=>{
    if(!err){
      res.json(result)
    }else{
      res.json({status:400})
    }
  })
}
module.exports = {
  sendMailAndSave,
  findUserWithEmailAndUpdate,
  findAllUser
};
