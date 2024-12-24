import { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

export const TreeNode = ({
    fileFolderData
}) => {


    const [visibility, setVisibility] = useState({});


    function toggleVisibilty(name) {
        console.log('toogleClicked')
        setVisibility({
            ...visibility,
            [name]: !visibility[name]
        })

    }

    return (



        (fileFolderData &&
            <div

                style={{
                    paddingLeft: "15px",
                    color: "white"
                }}

            >



                {
                    fileFolderData.children ?
                        (



                            <button onClick={() => toggleVisibilty(fileFolderData.name)}
                                style={{
                                    border: "none",
                                    cursor: "pointer",
                                    outline: "none",


                                    fontSize: "15px"
                                }}>
                                {visibility[fileFolderData.name] ? <IoIosArrowDown /> : <IoIosArrowForward />}
                                {fileFolderData.name}
                            </button>
                        ) : (
                            <p
                                style={{

                                    paddingTop: "15px",
                                    fontSize: "15px",
                                    cursor: "pointer",
                                    margin: "5px",
                                    color: "white"
                                }}
                            > {fileFolderData.name}</p>

                        )
                }

                {
                    visibility[fileFolderData.name] && fileFolderData.children
                    && (
                        fileFolderData.children.map((child) => (
                            <TreeNode

                                fileFolderData={child}
                                key={child.name} />
                        ))
                    )

                }


            </div>)
    )
}