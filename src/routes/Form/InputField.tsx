import { FC, InputHTMLAttributes } from "react";

interface InputFieldAttributes<T> extends InputHTMLAttributes<T> {
    /** The text that will go in the label of the Input Field */
    label: string;
    id: string;
}

const InputField: FC<InputFieldAttributes<HTMLInputElement>> = (props) => {
    const { id, label, ...attributes } = props;
    return (
        <div className="input-field">
            <label htmlFor={id}>{label}</label>
            <input {...attributes} id={id} type="text" />
        </div>
    );
};

export default InputField;
