import { children } from "./childrenDataBase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function ChildScrollMenu() { 

    const [selectedId, setSelectedId] = useState(null);
    const navigate = useNavigate();

    function handleOnClick (childId){ 
        if(selectedId == null){ 
            setSelectedId(childId);
        } else {
            setSelectedId(null);
        }
    }



    return(

    <>

        <div className = "grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-4" >
            {children.map((child) =>{

                const isSelected = selectedId === child.id; 
                    return (
                        <div key={child.id} onClick={() => handleOnClick(child.id)}
                            
                            className={`cursor-pointer overflow-hidden rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md 
                            ${isSelected ? "border-lime-950" : "border-gray-200" }`}>
                                {child.name}
                        </div>
                    );
            })}

            {selectedId!= null && (
                <div className="fixed inset-x-0 bottom-4 flex justify-center">
                    <button onClick={() => navigate("/children/" + selectedId)} className="rounded-lg bg-lime-600 px-6 py-2 font-semibold text-white shadow-lg hover:bg-lime-700"> Go </button>
                </div>
                        
                    )}
            
        </div>
    </>
    );
};

export default ChildScrollMenu;