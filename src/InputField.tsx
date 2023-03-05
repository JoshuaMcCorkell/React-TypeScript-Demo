import { FC } from 'react';


interface InputFieldProps {
  label: string;
  value: string;
  onChange: (e: InputEvent) => void;
}

export interface InputEvent {
  target: HTMLInputElement;
}

export const InputField: FC<InputFieldProps> = props => {
  return <div className="input-field">
            <label>{props.label}</label>
            <input type="text" value={props.value} onChange={props.onChange} />
        </div>;
};
  