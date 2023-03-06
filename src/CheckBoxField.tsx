import { FC, ChangeEventHandler } from "react";

interface CheckboxFieldProps {
    label: string;
    checked: boolean;
    id: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

const CheckBoxField: FC<CheckboxFieldProps> = (props) => {
    return (
        <div className="input-field">
            <input
                className="hidden-checkbox"
                id={props.id}
                type="checkbox"
                checked={props.checked}
                onChange={props.onChange}
            />
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    );
};

export default CheckBoxField;
