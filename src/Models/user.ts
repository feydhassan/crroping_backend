import mongoose from 'mongoose'
import { toEditorSettings } from 'typescript';


interface TodoI {
    titel : string;
    description : string;
}

interface TodoDocument extends mongoose.Document{
    titel : string;
    description : string;
}

const TodoSchema =  new mongoose.Schema({
   titel : {
    type : String,
    required : false,
   }, 
   description : {
     type : String,
     required : false
   }
});

interface TodoDocumentInterfice extends mongoose.Model<TodoDocument>{
    
     set(x : TodoI) : TodoDocument
    }

 TodoSchema.statics.set = (x:TodoI)=>{
    return new Todo(x)
 }   

 const Todo = mongoose.model<TodoDocument,TodoDocumentInterfice>(
   'Todo',TodoSchema

 );

 Todo.set({
    titel :"some fucking titel",
    description:"some description" ,
 });

 export{Todo}