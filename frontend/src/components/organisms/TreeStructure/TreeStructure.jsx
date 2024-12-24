
import { useTreeStructureStore } from "../../../store/treeStructureStore"
import { useEffect } from "react";
import { TreeNode } from "../../molecules/TreeName/TreeName";

const TreeStructure = () => {

    const { treeStructure, setTreeStructure } = useTreeStructureStore();

    console.log('treeStructure', treeStructure)





    useEffect(() => {
        if (treeStructure) {
            console.log("tree", treeStructure)
        }
        else {
            setTreeStructure()
        }


    }, [setTreeStructure, treeStructure])
    return (
        <div>



            <TreeNode fileFolderData={treeStructure}></TreeNode>


        </div>
    )
}

export default TreeStructure
