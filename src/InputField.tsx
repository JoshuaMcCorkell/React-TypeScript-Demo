import { FC, InputHTMLAttributes } from "react";

interface InputFieldAttributes<T> extends InputHTMLAttributes<T> {
    /** The text that will go in the label of the Input Field */
    label: string;
}

const InputField: FC<InputFieldAttributes<HTMLInputElement>> = (props) => {
    return (
        <div className="input-field">
            <label htmlFor={props.id}>{props.label}</label>
            <input
                {...props}
            />
        </div>
    );
};

export default InputField;
