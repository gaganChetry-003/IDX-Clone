
import { useParams } from 'react-router-dom';
import { EditorComponent } from '../components/molecules/EditorComponent/EditorComponent';
import { EditorButton } from '../components/atoms/EditorButton/EditorButton';
import TreeStructure from '../components/organisms/TreeStructure/TreeStructure';
import { useTreeStructureStore } from '../store/treeStructureStore';
import { useEffect } from 'react';
const ProjectPlayground = () => {
    const { projectId: projectIdFromUrl } = useParams();


    const { setProjectId, projectId } = useTreeStructureStore();

    useEffect(() => {

        setProjectId(projectIdFromUrl)

    }, [setProjectId, projectIdFromUrl])

    return (
        <div>


            <div style={{ display: "flex" }}>

                {

                    projectId &&
                    <div
                        style={{
                            backgroundColor: "#333254",
                            paddingRight: "10px",
                            paddingTop: "0.3vh",
                            minWidth: "250px",
                            maxWidth: "25%",
                            height: "99.7 vh",
                            overflow: "auto"
                        }}
                    >

                        <TreeStructure />
                    </div>

                }
                <EditorComponent />
            </div>



            <EditorButton isActive={false} />
            <EditorButton isActive={true} />







        </div>
    )
}

export default ProjectPlayground
