import { FC, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import "./submission.scss";

const Submission: FC = () => {
    const formInputs = useLoaderData() as URLSearchParams;
    const fullName = (formInputs.get("firstName") || "") + " " + (formInputs.get("lastName") || "");
    useEffect(() => {
        document.title = "Received " + fullName;
    }, [fullName])
    return (
        <div className="app submission">
            <h1 className="title">Submission Received...</h1>
            <div className="results">
                <p>Name: {fullName}</p>
                <p>Hobby: {formInputs.get("favouriteHobby")}</p>
                <p>{formInputs.get("usesTypeScript")? "Uses TypeScript" : "Doesn't Use TypeScript"}</p>
            </div>
        </div>
    );
};

export default Submission;
