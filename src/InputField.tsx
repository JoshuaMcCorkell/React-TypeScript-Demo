import { FC, ChangeEventHandler } from "react";

interface InputFieldProps {
    label: string;
    value: string;
    id: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

const InputField: FC<InputFieldProps> = (props) => {
    return (
        <div className="input-field">
            <label htmlFor={props.id}>{props.label}</label>
            <input
                id={props.id}
                type="text"
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    );
};

export default InputField;
