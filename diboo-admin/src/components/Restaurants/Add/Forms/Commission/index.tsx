import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Field } from 'formik';

class CommissionForm extends React.Component<
{ commission: Number,
}
  >
  {
  constructor(props: any) {
    super(props);
  } 
  render = () => {
    return (
      
           <div className="form-group" >
            <label>Commission %</label>
            <Field
                type="number"
                className="form-control"
                name="commission"
                style={{ width: 300 }}
              /> 
       </div>

  );
}; 
}
export default CommissionForm;