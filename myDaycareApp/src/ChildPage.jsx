import { useParams, Link } from "react-router-dom";
import { children } from "./childrenDataBase";



function ChildPage ()  { 

    // 1. Read the :childId part of the URL
    //When an URL changes, the Router sotres the dynamic part in a shared place
    //useParams() geets whatever was sotred in that place. It returns an object. 
    //useParams() returns whatever is stored in the shared place at the time useParams is called
    //here we de-construct and assign that object. 
  const { childId } = useParams(); 


  // 2. Find the matching child in the "database"
  const child = children.find((c) => c.id === childId);

  // 3. Handle a bad URL
  if (!child) {
    return (
      <div className="p-4">
        <p>Child not found.</p>
        <Link to="/children" className="text-lime-600 underline">
          Back to children
        </Link>
      </div>
    );
  }



    return (
        <div className= "p-4">
            <Link to="/children" className="text-lime-600 underline">
                ← Back to children
            </Link>

            <h1 className="mt-4 text-2xl font-semibold"> {child.name}</h1>
            <p className="text-gray-500">ID: {child.id}</p>






        </div>
    );
};


export default ChildPage;