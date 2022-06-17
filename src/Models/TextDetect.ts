import { Document } from "mongodb";
import mongoose, { Schema, Types }  from "mongoose";


interface Selectedtext extends Document{
    selectedtext: string,
    startindex : number,
    endindex:number,
    label:string,
}

interface Textdetect extends Document{
    text: string,
    labels : Array<Selectedtext>,
    id_project : Types.ObjectId
}

const textdetectSchema = new mongoose.Schema({
    text: String,
    labels : [{ text: String,
        startindex : Number,
        endindex:Number,
        label:String,}],
    id_project : {
        type:Schema.Types.ObjectId,
        ref:'Project'
    }
  });

  const textdetecttModel = mongoose.model<Textdetect & mongoose.Document>('Textdetect', textdetectSchema);
 
export default textdetecttModel ;