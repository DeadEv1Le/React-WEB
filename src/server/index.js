const express = require('express')
const app = express();
const port = 4000 
const cors = require("cors")
const fs = require("fs");
const { measureMemory } = require('vm');



//app.arguments(express.urlencoded({extend: true}))
app.use(express.json())
app.use(cors())

app.get("/", cors(), async (req, res) => {
   res.send("this is working")
})
 app.get("/home", cors(), async (req, res) => {
         res.send("this is the data fro the home page")
})



app.post("/post_name", async (req, res) => {
    let { name } = req.body
    let { Email } = req.body
    let { Message } = req.body 
 
    console.log(name, Email, Message)
    
const fileName = 'C:/Users/karen/Desktop/portfolio/src/message.json';
const file = require(fileName);

file.newMessage.push(name);
file.newMessage.Email = Email;
file.newMessage.Message = Message;

fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
if (err) return console.log(err);
console.log(JSON.stringify(file));
console.log('writing to ' + fileName);
});
   

});
   
    



app.listen(port, () => {
    console.log('Listening')
})
