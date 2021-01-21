/* eslint-disable prettier/prettier */
import React from 'react';

type InputComponentProps = {
  name: string;
  title: string;
  type: any;
  placeholder: string;
  value?: string;
  state?: any;
  hideSubtxt?: boolean;
  onChange: (value: any) => void;
};

const InputComponent = (props: InputComponentProps) => {
  const handleChange = (value: any) => {
    props.onChange(value);
  };

  return (
    <div className="form-group">
      <label htmlFor="field-ta" className="col-sm-12 control-label">
        {props.title}
      </label>
      <div className="col-sm-12">
        <input
          onChange={(e) => handleChange(e.target.value)}
          type={props.type ?? 'text'}
          defaultValue={0}
          value={props.value ? props.value : ''}
          name={props.name}
          id={props.name}
          style={{ borderWidth: 1 }}
          //   placeholder={props.placeholder}
          autoComplete="off"
          className={'demo-input form-control'}
        />
      </div>
      {!props.hideSubtxt ? (
        <span style={{ fontSize: 10, lineHeight: 0.5, textAlign: 'center' }}>
          {props.placeholder}
        </span>
      ) : null}
    </div>
  );
};

export default InputComponent;
