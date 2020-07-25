import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Field } from 'formik';

class CommissionForm extends React.Component<
{ commission: Number,
  editValues: any,
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
                placeholder={this.props.editValues.commission}
              />  
       </div>

  );
}; 
}
export default CommissionForm;