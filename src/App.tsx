import { InputField, InputEvent } from './InputField';
import React, { FC, useEffect, useState } from 'react';
import './App.css';

function useInput(defaultValue: string) {
    const [value, setValue] = useState(defaultValue)

    function handleChange(e: InputEvent) {
        setValue(e.target.value);
    }

    return {
        value,
        onChange: handleChange,
    };
}

const App: FC = () => {
    const firstName = useInput("Joshua");
    const lastName = useInput("McCorkell");
    const favouriteHobby = useInput("Coding");

    useEffect(() => {
        document.title = firstName.value + " " + lastName.value;
    }, [firstName, lastName]);

    return (
        <div className="app">
            <div className="input-fields">
                <InputField
                    {...firstName}
                    label="First Name:"
                />
                <InputField
                    {...lastName}
                    label="Surname:"
                />
                <InputField
                    {...favouriteHobby}
                    label="Favourite Hobby:"
                />
            </div>
        </div>
    );
}


export default App;
