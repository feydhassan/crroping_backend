import { Document,} from "mongodb";
import mongoose, { Schema, Types }  from "mongoose";
import { type } from "os";


interface Box extends Document{
    x: number;
    y : number;
    w:number;
    h:number;
    name:string;
    source : string;
}
const boxSchema = new mongoose.Schema({
    x: Number,
    y : Number,
    w:Number,
    h:Number,
    name:String,
    source : String,
})

interface Imagetdetect extends Document{
    file_name: string,
    arr_boxes : Array<Box>,
    id_project : Types.ObjectId
}

const imagedetectSchema = new mongoose.Schema({
    file_name: String,
    arr_boxes : Array<Box>,
    id_project : {
        ref:"Project",
        type: Schema.Types.ObjectId
    }
  });

  const imagedetecttModel = mongoose.model<Imagetdetect & mongoose.Document>('Imagedetect', imagedetectSchema);
 
export default imagedetecttModel ;