import InputField from "./InputField";
import CheckBoxField from "./CheckBoxField";
import React, { FC, ChangeEventHandler, useEffect, useState } from "react";
import "./App.scss";

function useInput(defaultValue: string) {
  const [value, setValue] = useState(defaultValue);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
}

function useCheckbox(defaultValue: boolean) {
  const [checked, setChecked] = useState(defaultValue);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setChecked(e.target.checked);
  };

  return {
    checked,
    onChange: handleChange,
  };
}

const App: FC = () => {
  const firstName = useInput("Joshua");
  const lastName = useInput("McCorkell");
  const favouriteHobby = useInput("Coding");
  const usesTypeScript = useCheckbox(true);

  useEffect(() => {
    document.title = firstName.value + " " + lastName.value;
  }, [firstName, lastName]);

  return (
    <div className="app">
      <div className="input-fields">
        <InputField {...firstName} id="first-name-input" label="First Name:" />
        <InputField {...lastName} id="last-name-input" label="Last Name:" />
        <InputField
          {...favouriteHobby}
          id="favourite-hobby-input"
          label="Favourite Hobby:"
        />
        <CheckBoxField
          {...usesTypeScript}
          id="uses-typescript-checkbox"
          label={
            usesTypeScript.checked
              ? "Uses TypeScript!"
              : "Doesn't Use TypeScript"
          }
        />
      </div>
    </div>
  );
};

export default App;
