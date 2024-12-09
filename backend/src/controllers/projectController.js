
import util from 'util'
import child_process from 'child_process'
import fs from 'fs/promises'
import uuid4 from 'uuid4'

const execPromisified =util.promisify(child_process.exec);

export const createProjectController=async(req,res)=>{

    
   //create a unique id an then inside the projects folder

   const projectId=uuid4();

   console.log("New Project id ", projectId)

   await fs.mkdir(`./projects/${projectId}`)

   const response= await execPromisified('npm create vite@latest sandbox -- --template react',
    {cwd:`./projects/${projectId}`}
   );

   return res.json({
    message:'Project created'
   })

}