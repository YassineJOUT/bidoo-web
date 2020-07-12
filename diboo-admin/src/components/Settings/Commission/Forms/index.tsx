import React, { Component, useEffect, useState } from "react";
import { Formik, Field } from "formik";
import { useQuery, useMutation } from "@apollo/react-hooks";
import {
  EDIT_COMMISSION_MUTATION,
  GET_COMMISSION_SETTING_MUTATION,
} from "../../../../helpers/gql";
import { printIntrospectionSchema } from "graphql";
import Alert from "../../../Shared/Alert";

interface commissionProps {
  id: string;
  commission: Number;
}

const CommissionForm: React.FunctionComponent = (props) => {
  const [showAlert, setShowAlert] = useState({
    show: false,
    message: "",
    type: true,
  });
  const handlAlert = (show: boolean, message: string, type: boolean) => {
    setShowAlert({ show, message, type });
    setTimeout(() => {
      setShowAlert({ show: false, message: "", type: true });
    }, 2000);
    refetch();
  };
  const [comVals, setComVals] = useState({
    id: "",
    commission: 0,
  });
  const editCommission = (values: commissionProps, actions: any) => {
    editCommissionMutation({ variables: values });
  };
  const [
    editCommissionMutation,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(EDIT_COMMISSION_MUTATION, {
    onCompleted: (data) => {
      const { ok, message, error } = data.updateCommission;
      handlAlert(true, ok ? message : error, ok);
      refetch();
    },
    onError: (err) => console.log(err),
  });

  const { refetch, loading } = useQuery(GET_COMMISSION_SETTING_MUTATION, {
    onCompleted: (data) => {
      console.log(data);
      data.getCommission.ok &&
        setComVals({
          id: data.getCommission.data.id,
          commission: data.getCommission.data.commission,
        });
    },
  });
  return (
    <Formik
      enableReinitialize
      initialValues={comVals}
      // validationSchema={loginValidationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        return editCommission(values, { setSubmitting, resetForm });
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <h4 className="mt-0 header-title">Commission</h4>
              <p className="text-muted mb-4">Fill all information below</p>
              {!loading ? (
                <div>
                  <div className="form-group">
                    <label>Commission %</label>
                    <Field
                      type="number"
                      className="form-control"
                      name="commission"
                      placeholder="Commission"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-success mr-1 waves-effect waves-light"
                  >
                    Save Changes
                  </button>
                </div>
              ) : (
                <div className="d-flex justify-content-center">
                  <div className="spinner-border "></div>
                </div>
              )}
            </div>
          </div>
          {showAlert.show && (
            <Alert message={showAlert.message} type={showAlert.type} />
          )}
        </form>
      )}
    </Formik>
  );
};

export default CommissionForm;
