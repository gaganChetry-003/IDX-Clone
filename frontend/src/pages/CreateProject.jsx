
import { useCreateProject } from "../hooks/apis/mutations/useCreateProject"



export const CreateProject = () => {

  const { createProjectMutation } = useCreateProject();



  async function handleCreateProject() {
    console.log("Going to trigger the api");
    try {
      const response = await createProjectMutation();
      console.log("Now we should redirect to the editor", response);

    } catch (error) {
      console.log("Error creating project", error);
    }
  }

  return (

    <>

      <button  

        onClick={handleCreateProject}
      >
        Create Playground
      </button>

    </>





  )
}