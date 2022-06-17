import  Express , {Request , Response}  from "express";
import mongoose from "mongoose";
import { connectToDatabase } from "./Database/database";
import { routes } from "./Routes/routes";

const app = Express()
app.listen(8080)
app.use(Express.json())
 mongoose.connect(
    "mongodb+srv://hassanfeyd:shanksyonko13@cluster0.azni1.mongodb.net/?retryWrites=true&w=majority" ,
    //process.env.MONGO_URL as string,
        ()=>{
            console.log("db connected");
        }
 )
 app.use("/",routes)
/*const data = "malik"
app.get('/',(req:Request ,res : Response)=>{
   res.write("nhwi mok")
   res.end()
})
app.get('/about',(req:Request ,res : Response)=>{
  res.status(200).json(
    {
        "message" : data
    }
  )
})*/
/*http.createServer(function(req,res){
    res.write("saybt rabha");
    res.end();
}).listen(8090)*/

/*http.createServer(
    function(res,req){
        req.writeHead(
            200,
            { "Content-Type" : "text/html",}
        );
        req.write("we did it again so we are obezaf");
    }
).listen(8000)*/