import express , {Request , Response} from "express";
import imageclassifyModel from "../Models/imageclasify";
import imagedetecttModel from "../Models/imagedatect";
import projectModel from "../Models/project";
import textdetecttModel from "../Models/TextDetect";
import userModel from "../Models/uesrs";
import { Todo } from "../Models/user";

const routes = express.Router();


routes.post('/add',async (req : Request , res : Response)=>{
    const {titel,description} = req.body;
    console.log(titel+description);
    const dataItem = Todo.set({titel,description});
    await dataItem.save();
    return res.status(200).json({
     data: dataItem
    });
});
routes.post('/textdetect/add',async (req : Request , res : Response)=>{
  const userdata = req.body;
  
  var project = new textdetecttModel(userdata);
const savedPost= await project.save();
  return res.status(200).json({
   data: savedPost
  });
});
routes.post('/imageclassify/add',async (req : Request , res : Response)=>{
  const userdata = req.body;
  
  var project = new imageclassifyModel(userdata);
const savedPost= await project.save();
  return res.status(200).json({
   data: savedPost
  });
});
routes.post('/project/add',async (req : Request , res : Response)=>{
  const userdata = req.body;
  
  var project = new projectModel(userdata);
const savedPost= await project.save();
  return res.status(200).json({
   data: savedPost
  });
});
routes.get("/",async (req:Request , res : Response)=>{
  const dataItem  = await Todo.find();
  return res.status(200).json(dataItem);

});
routes.post('/imagedetect/add',async (req : Request , res : Response)=>{
  const userdata = req.body;
  
  var project = new imagedetecttModel(userdata);
const savedPost= await project.save();
  return res.status(200).json({
   data: savedPost
  });
});
routes.get("/",async (req:Request , res : Response)=>{
  const dataItem  = await Todo.find();
  return res.status(200).json(dataItem);

});

routes.delete("/delete/:titel",async (req:Request , res : Response)=>{
  
   console.log(req.params.titel);
  const filter = {
    titel :  req.params.titel
  }  
  await Todo.deleteOne(filter).then((data)=>{
    return res.status(200).json({
      data:data
    })
  }).catch((error)=>{
    console.log(error)
  })

});

/*routes.get('/about',(req:Request ,res : Response)=>{
    res.status(200).json(
      {
          "message" : "this the about"
      }
    )
  })

routes.get('/',(req:Request ,res : Response)=>{
    res.status(200).json(
      {
          "message" : "this the home"
      }
    )
  })
  routes.post('/',(req:Request ,res : Response)=>{

        const data = req.body.message
    res.status(200).json(
      {
          "message" : data
      }
    )
  })*/
  export{routes}