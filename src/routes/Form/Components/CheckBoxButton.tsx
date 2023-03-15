/*
The CheckBoxButton component basically is a checkbox, but the checkbox is
hidden, and you access it through the label. Don't worry - it's still accessible;
you can tab to the checkbox and use it with only the keyboard.
*/

import { FC, InputHTMLAttributes } from "react";

// This interface extends InputHTMLAttributes, which allows for normal html
// attributes to get passed to the element.
interface CheckboxButtonAttributes<T> extends InputHTMLAttributes<T> {
    /** The text that will be displayed as the label/button of this field. */
    label: string;
    id: string;
}

// Using FC<T> with a generic means that that 'T' will be the type of the input
// parameters ("props") that are passed to your custom element.
const CheckBoxButton: FC<CheckboxButtonAttributes<HTMLInputElement>> = (
    props
) => {
    // Use array destructuring to extract the id and label attribute
    const { id, label, className, ...attributes } = props;
    return (
        <div className="input-field">
            <input
                {...attributes}
                id={id}
                className={className + " hidden-checkbox"}
                type="checkbox"
            />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

export default CheckBoxButton;
