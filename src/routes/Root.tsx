import { FC } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../logo512.png";

interface RootOutletProps {
    outlet?: any;
}

const Root: FC<RootOutletProps> = (props) => {
    return (
        <>
            <Link to="/">
                <img src={logo} alt="Logo" id="global-logo" />
            </Link>
            {props.outlet ? props.outlet : <Outlet />}
        </>
    );
};

export default Root;
