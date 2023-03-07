import { FC, InputHTMLAttributes } from "react";

interface CheckboxButtonAttributes<T> extends InputHTMLAttributes<T> {
    /** The text that will be displayed as the label/button of this field. */
    label: string;
}

const CheckBoxButton: FC<CheckboxButtonAttributes<HTMLInputElement>> = (props) => {
    return (
        <div className="input-field">
            <input
                {...props}
                className="hidden-checkbox"
                type="checkbox"
            />
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    );
};

export default CheckBoxButton;
