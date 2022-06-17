import { Document } from "mongodb";
import mongoose  from "mongoose";

interface Project extends Document{
    input_type : String,
    output_type : String,
    labels : Array<string>
}

const ProjectSchema = new mongoose.Schema({
    input_type : String,
    output_type : String,
    labels : Array<String>
  });

  const projectModel = mongoose.model<Project & mongoose.Document>('Project', ProjectSchema);
 
export default projectModel;
