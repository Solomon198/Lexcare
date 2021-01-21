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
            className="demo-input form-control"
          >
            <option>---select option----</option>

            {props.options.map((val: string) => (
              // eslint-disable-next-line react/jsx-key
              <option selected={props.value == val} value={val}>
                {val}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default SelectComponent;
