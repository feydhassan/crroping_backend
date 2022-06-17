import { Document } from "mongodb";
import mongoose, { Schema, Types }  from "mongoose";




interface Imageclassify extends Document{
    image: string,
    label : string,
    labeld : boolean
    id_project : Types.ObjectId
}

const ImageclassifySchema = new mongoose.Schema({
    image: String,
    label : String,
    labeld : Boolean,
    id_project : {
        type : Schema.Types.ObjectId,
        ref : 'Project'
    }
  });

  const imageclassifyModel = mongoose.model<Imageclassify & mongoose.Document>('Imageclassify', ImageclassifySchema);
 
export default imageclassifyModel ;