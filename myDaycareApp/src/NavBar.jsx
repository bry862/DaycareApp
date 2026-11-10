import { NavLink } from "react-router-dom"

function NavBar() { 

    function getLinkClass({ mouseenter }) { 
        if (mouseenter){
            return "font-semibold text-lime-600";
        } else { 
            return "text-white hover:text-lime-600";
        }
    }

    return (
        <nav className="flex items-center gap-6 bg-green-900 px-6 py-3 shadow-2xl">
            {/* <span className= "text-xl font-stretch-200% text-lime-600">Daycare</span> */}

            <NavLink to="/" className={"text-xl font-stretch-200% text-lime-600 hover:text-lime-950"}>Daycare</NavLink>

            <NavLink to="/children" className={getLinkClass}>
                Children
            </NavLink>

            <NavLink to="/children" className={getLinkClass}> 
                Option 2
            </NavLink>

            <NavLink to="/children" className={getLinkClass}> 
                Option 3
            </NavLink>

            <NavLink to="/children" className={getLinkClass}> 
                Option 4
            </NavLink>

        </nav>
    );

};

export default NavBar;