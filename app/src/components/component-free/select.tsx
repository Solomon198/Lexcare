/* eslint-disable react/jsx-indent */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

type SelectComponentProps = {
  title: string;
  placeholder: string;
  options: any[];
  state?: any;
  value: string;
  disabled?:boolean;
  hideSubtxt?:boolean;
  onSelected: (value: any) => void;
};

const SelectComponent = (props: SelectComponentProps) => {
  const handleChange = (v: any) => {
    props.onSelected(v);
  };

  return (
    <>
      <div className="form-group">
        <label htmlFor="field-ta" className="col-sm-12 control-label">
          {props.title}
        </label>
        <div className="col-sm-12">
          <select
            onChange={(e) => handleChange(e.target.value)}
            style={{ borderWidth: 1 }}
            disabled={props.disabled}
            value={props.value}
            className="demo-input form-control"
          >
            <option>-select option-</option>

            {props.options.map((val: string) => (
              // eslint-disable-next-line react/jsx-key
              <option selected={props.value == val} value={val}>
                {val}
              </option>
            ))}
          </select>
        </div>
        {!props.hideSubtxt ? (
        <span style={{ fontSize: 10, lineHeight: 0.5, textAlign: 'center',marginLeft:10 }}>
          {props.placeholder}
        </span>
      ) : null}
      </div>
    </>
  );
};

export default SelectComponent;
