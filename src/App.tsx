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
    });

    return (
        <div className="app">
            <div className="input-fields">
                <InputField
                    label="First Name:"
                    {...firstName}
                />
                <InputField
                    label="Surname:"
                    {...lastName}
                />
                <InputField
                    label="Favourite Hobby:"
                    {...favouriteHobby}
                />
            </div>
        </div>
    );
}


export default App;
