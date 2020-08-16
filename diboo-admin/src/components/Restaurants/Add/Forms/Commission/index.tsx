import React from "react";
import { Field } from "formik";

interface Props {
  commission: Number;
  handleChange: Function
}

const CommissionForm: React.FunctionComponent<Props> = (props) => {
  return (
    <div className="form-group">
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
export default CommissionForm;
