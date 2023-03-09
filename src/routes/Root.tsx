/*
This is basically the 'root' of the App. This component can contain things 
like navigation bars, logos, etc. that apply to all pages in the app.
*/

import { FC } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../logo512.png";

/*
The root component contains a component called 'Outlet'. This component is where the 
component for the specific page will be rendered (e.g. if you are on /form, the 
<Form /> element will be rendered in the place of the Outlet.) Because the Error Page 
does not render inside the root element (and would therefore not have a navbar), I've 
allowed the user of this element to specify an alternative component to render instead 
of the outlet. This allows the error page to be rendered inside the root component,
which will make sure it has a navbar and logo, and runs like any other page.
*/
interface RootOutletProps {
    component?: any;
}

/*
Note that when using React-Router, if you want to have a link to another page in
your app, you should use <Link to="xyz"></Link>.
*/
const Root: FC<RootOutletProps> = (props) => {
    return (
        <>
            <div className="sidenav">
                <Link to="/">
                    <img src={logo} alt="Logo" id="navlogo" />
                </Link>
                <Link to="/form">Form</Link>
                <Link to="/our-team">Our Team</Link>
            </div>

            {props.component ? props.component : <Outlet />}
        </>
    );
};

export default Root;
