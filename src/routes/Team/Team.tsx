import { FC, useEffect } from "react";
import "./team.scss";

// FC is the TypeScript type for React Function Components.
const Team: FC = () => {
    // Using useEffect with the dependencies argument as an empty list
    // means this effect will only run once, when the component loads.
    useEffect(() => {
        document.title = "Our Team";
    }, []);

    return (
        <div className="app team">
            <h1 className="title">Our Team</h1>
            <div className="team-names">
                <p className="name">
                    Matthew Bootland <mark className="role">(CEO)</mark>
                </p>
                <p className="name">
                    Mathew Phillips <mark className="role">(QC)</mark>
                </p>
                <p className="name">
                    Joshua McCorkell <mark className="role">(FD)</mark>
                </p>
                <p className="name">
                    Marc Valpiani <mark className="role">(UX)</mark>
                </p>
                <p className="name">
                    Maxim Lullfitz <mark className="role">(DOC)</mark>
                </p>
            </div>
        </div>
    );
};

export default Team;
