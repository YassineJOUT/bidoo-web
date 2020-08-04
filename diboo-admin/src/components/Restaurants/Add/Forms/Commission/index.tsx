import React from "react";
import { Field } from "formik";

interface Props {
  commission: Number;
  editValues: any;
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
        placeholder={props.editValues.commission}
      />
    </div>
  );
};
export default CommissionForm;
