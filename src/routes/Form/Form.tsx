import { FC, ChangeEventHandler, useEffect, useState } from "react";
import { Form } from "react-router-dom";
import InputField from "./InputField";
import CheckBoxButton from "./CheckBoxButton";
import "./form.scss";

function useInput(initialValue: string) {
    const [value, setValue] = useState(initialValue);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
    };

    return {
        value,
        onChange: handleChange,
    };
}

function useCheckbox(initialState: boolean) {
    const [checked, setChecked] = useState(initialState);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setChecked(e.target.checked);
    };

    return {
        checked,
        onChange: handleChange,
    };
}

const ReactForm: FC = () => {
    const firstName = useInput("");
    const lastName = useInput("");
    const favouriteHobby = useInput("");
    const usesTypeScript = useCheckbox(true);

    useEffect(() => {
        document.title = firstName.value + " " + lastName.value;
    }, [firstName, lastName]);

    return (
        <div className="app">
            <h1 className="title">Form</h1>
            <Form action="/submission">
                <div className="input-fields">
                    <InputField
                        {...firstName}
                        id="first-name-input"
                        name="firstName"
                        label="First Name:"
                        placeholder="Firstname"
                        tabIndex={1}
                    />
                    <InputField
                        {...lastName}
                        id="last-name-input"
                        name="lastName"
                        label="Last Name:"
                        placeholder="Lastname"
                        tabIndex={2}
                    />
                    <InputField
                        {...favouriteHobby}
                        id="favourite-hobby-input"
                        name="favouriteHobby"
                        label="Favourite Hobby:"
                        placeholder="Hobby"
                        tabIndex={3}
                    />
                    <CheckBoxButton
                        {...usesTypeScript}
                        id="uses-typescript-checkbox"
                        name="usesTypeScript"
                        label={
                            usesTypeScript.checked
                                ? "Uses TypeScript!"
                                : "Doesn't Use TypeScript"
                        }
                        tabIndex={4}
                    />
                </div>
                <input type="submit" />
            </Form>
        </div>
    );
};

export default ReactForm;
