import { FC } from "react";
import { useLoaderData } from "react-router-dom";
import "./submission.scss";

const Submission: FC = () => {
    const formInputs = useLoaderData() as URLSearchParams;

    const firstName = formInputs.get("firstName") || "";
    const lastName = formInputs.get("lastName") || "";
    return (
        <div className="app">
            <h1 className="title">Submission Received...</h1>
            <div className="results">
                <p>Name: {firstName + " " + lastName}</p>
                <p>Hobby: {formInputs.get("favouriteHobby")}</p>
                <p>{formInputs.get("usesTypeScript")? "Uses TypeScript" : "Doesn't Use TypeScript"}</p>
            </div>
        </div>
    );
};

export default Submission;
