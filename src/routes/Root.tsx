import { FC } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../logo512.png";

interface RootOutletProps {
    outlet?: any;
}

const Root: FC<RootOutletProps> = (props) => {
    return (
        <>
            <div className="sidenav">
                <Link to="/">
                    <img src={logo} alt="Logo" id="navlogo" />
                </Link>
                <Link to="/form">
                    Form
                </Link>
                <Link to="/our-team">
                    Our Team
                </Link>
            </div>
            
            {props.outlet ? props.outlet : <Outlet />}
        </>
    );
};

export default Root;
