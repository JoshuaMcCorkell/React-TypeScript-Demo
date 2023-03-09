/*
This page is where most of the action happens in this demo!
*/
import { FC, ChangeEventHandler, useEffect, useState } from "react";
import { Form } from "react-router-dom";
import InputField from "./Components/InputField";
import CheckBoxButton from "./Components/CheckBoxButton";
import "./form.scss";


const ReactForm: FC = (props) => {

    // These 4 lines use the "custom hooks" that I created down below.
    const firstName = useInput("");
    const lastName = useInput("");
    const favouriteHobby = useInput("");
    const usesTypeScript = useCheckbox(true);

    /* Functions in 'useEffect' will be run whenever any of the
       'dependencies' change. The second argument is the list of dependencies,
       which in this case is the first and last name. */
    useEffect(() => {
        document.title = "Form " + firstName.value + " " + lastName.value;
    }, [firstName, lastName]);

    /* InputField and CheckBoxField are custom components, 
       see the components folder for their code.
       The {...firstName} inside the InputField and CheckBox field
       basically passes all the attributes from the firstName object
       as parameters to the component (spread syntax)   */
    return (
        <div className="app form">
            <h1 className="title">Form</h1>
            <Form action="/submission">
                <div className="input-fields">
                    <InputField
                        {...firstName}
                        id="first-name-input"
                        name="firstName"
                        label="First Name:"
                        placeholder="Firstname"
                    />
                    <InputField
                        {...lastName}
                        id="last-name-input"
                        name="lastName"
                        label="Last Name:"
                        placeholder="Lastname"
                    />
                    <InputField
                        {...favouriteHobby}
                        id="favourite-hobby-input"
                        name="favouriteHobby"
                        label="Favourite Hobby:"
                        placeholder="Hobby"
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
                    />
                </div>
                <input type="submit" />
            </Form>
        </div>
    );
};

export default ReactForm;

/*
These two functions are 'custom hooks'. Basically, they are used to add extra logic
and functionality to components, and to reduce code duplication.
In these two cases, they return two things:
1. The value of the input field or checkbox
2. An event handler to handle a change on that field.

The event handler needs to be passed to an actual Input or Checkbox field, and 
the value is updated automatically by the event handler whenever a change occurs.
*/
function useInput(initialValue: string) {

    /* useState is one of the most important parts of React. It gives your component
       a 'state', and your component will know when to re-render based on when that 
       state changes. It returns two things: The current value of the state, and a 
       function to update the state (we use array destructuring to get those two things
       into two separate variables) */
    const [value, setValue] = useState(initialValue);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
    };

    return {
        value,
        onChange: handleChange,
    };
}


// This could probably be refactored, because it's basically the same code as the above
// function, only a little but different,,, but anyway...
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
