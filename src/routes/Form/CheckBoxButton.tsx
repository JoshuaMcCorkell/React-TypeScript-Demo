import { FC, InputHTMLAttributes } from "react";

interface CheckboxButtonAttributes<T> extends InputHTMLAttributes<T> {
    /** The text that will be displayed as the label/button of this field. */
    label: string;
    id: string;
}

const CheckBoxButton: FC<CheckboxButtonAttributes<HTMLInputElement>> = (
    props
) => {
    const { id, label, ...attributes} = props;
    return (
        <div className="input-field">
            <input {...attributes} id={id} className="hidden-checkbox" type="checkbox" />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

export default CheckBoxButton;
