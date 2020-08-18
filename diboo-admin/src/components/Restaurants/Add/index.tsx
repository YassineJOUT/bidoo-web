import {
  Button,
  Step,
  StepLabel,
  Stepper,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Formik, Field } from "formik";
import React, { useState, useEffect } from "react";
import ContactInfoForm from "./Forms/ContactInfo";
import RestaurantInfoForm from "./Forms/RestaurantInfo";
import CommissionForm from "./Forms/Commission";
import { useMutation, useQuery, useLazyQuery } from "@apollo/react-hooks";
import {
  ADD_OR_EDIT_RESTAURANT_MUTATION,
  GET_RESTAURANT_MUTATION,
} from "../../../helpers/gql";
import { isNull, divide } from "lodash";
import { RouteComponentProps, withRouter } from "react-router-dom";
import Alert from "../../Shared/Alert";
import { client } from "../../../App";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "white",
  },
  button: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  content: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));
interface Props extends RouteComponentProps<{ id: string }> {
  editValues: any;
}

const initalState = {
  id: "",
  name: "",
  website: "",
  phone: "",
  postCode: "",
  email: "",
  address: "",
  city: "",
  about: "",
  delivery: false,
  pickUp: false,
  dineIn: false,
  estimatedTime: "",
  commission: 0,
  imagePath: "",
};

const AddRestaurantContainer: React.FunctionComponent<Props> = ({ match }) => {
  // handle alerts
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
  };
  const [Values, setValues] = useState(initalState);
  //get id param
  const restId = match.params.id;
  // get rest mutation
  const [
    getRestaurant,
    { loading: queryLoading, error: queryError, data: queryData },
  ] = useLazyQuery(GET_RESTAURANT_MUTATION, {
    variables: {
      id: restId,
      onCompleted: () => console.log("Query Completed!"),
    },
  });

  useEffect(() => {
    // console.log("useEffect is called");
    if (restId) {
      // getRestaurant();
      try {
        const res = client.readQuery({
          query: GET_RESTAURANT_MUTATION,
          variables: {
            id: restId,
          },
        });
        console.log(res);
        res &&
          res.getOneRestaurant &&
          res.getOneRestaurant.ok &&
          setValues({ ...Values, ...res.getOneRestaurant.data[0] });
      } catch (err) {
        console.log(err);
      }
    }
  }, []);
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const [preview, setPreview] = useState<any>(null);

  function getSteps() {
    return ["Contact info", "Restaurant info", "Commission"];
  }

  const getStepContent = (
    step: Number,
    setFieldValue: Function,
    handleChange: Function
  ) => {
    switch (step) {
      case 0:
        return (
          <ContactInfoForm
            name={Values.name}
            website={Values.website}
            phone={Values.phone}
            postCode={Values.postCode}
            email={Values.email}
            address={Values.address}
            city={Values.city}
            handleChange={handleChange}
          />
        );
      case 1:
        return (
          <RestaurantInfoForm
            about={Values.about}
            delivery={Values.delivery}
            pickUp={Values.pickUp}
            dineIn={Values.dineIn}
            estimatedTime={Values.estimatedTime}
            imagePath={Values.imagePath}
            preview={preview}
            setPreview={setPreview}
            setFieldValue={setFieldValue}
            handleChange={handleChange}
          />
        );
      case 2:
        return (
          <CommissionForm
            commission={Values.commission}
            handleChange={handleChange}
          />
        );
      default:
        return "Unknown step";
    }
  };

  const handleNext = () => {
    let newStep = activeStep;
    if (newStep < 2) setActiveStep(newStep + 1);
  };

  const handleBack = () => {
    let backStep = activeStep;
    if (backStep > 0) setActiveStep(backStep - 1);
  };
  const addRestaurant = (values: any, actions: any) => {
    const { imagePath, ...result } = values;

    addOrEditRestaurantMutation({
      variables: { ...result, commission: parseFloat(result.commission) },
    }).finally(() => {
      actions.resetForm();
      setPreview(null);
    });
  };
  const [
    addOrEditRestaurantMutation,
    { loading: mutationLoading, error, data },
  ] = useMutation(ADD_OR_EDIT_RESTAURANT_MUTATION, {
    onCompleted: (data) => {
      const { ok, message, error } = data.addOrEditRestaurant;

      handlAlert(true, ok ? message : error, ok);
    },
    onError: (err) => console.log(err),
  });
  return (
    <>
      <div className={classes.root}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <Formik
          enableReinitialize
          initialValues={Values}
          onSubmit={(Values, { setSubmitting, resetForm }) => {
            //if (editValues != isNull) handleEditCase(Values, { setSubmitting });
            addRestaurant(Values, { setSubmitting, resetForm });
            //console.log(" Submitted! ")
          }}
        >
          {({
            values,
            handleSubmit,
            setFieldValue,
            setValues,
            handleChange,
            errors,
          }) => (
            <form className="form-horizontal" onSubmit={handleSubmit}>
              <div className={classes.content}>
                {queryLoading && (
                  <div className="d-flex justify-content-center">
                    <div className="spinner-border "></div>
                  </div>
                )}

                {activeStep === steps.length ? (
                  <div>
                    <div className={classes.instructions}>
                      All steps completed.
                    </div>
                  </div>
                ) : error || queryError ? (
                  <>
                    <div
                      className="d-flex justify-content-center alert alert-danger"
                      role="alert"
                    >
                      Something went wrong
                    </div>
                    <br />
                  </>
                ) : (
                  <div>
                    <div className={classes.instructions}>
                      {getStepContent(activeStep, setFieldValue, handleChange)}
                    </div>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      {activeStep === steps.length - 1 ? (
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleNext}
                          className={classes.button}
                          type="submit"
                        >
                          {mutationLoading ? "Inserting..." : "Finish"}
                        </Button>
                      ) : (
                        <input
                          color="primary"
                          onClick={handleNext}
                          className={
                            "MuiButtonBase-root MuiButton-root MuiButton-contained makeStyles-button-2 MuiButton-containedPrimary"
                          }
                          value="Next"
                          type="button"
                        />
                      )}
                    </div>
                  </div>
                )}
              </div>
              {showAlert.show && (
                <Alert message={showAlert.message} type={showAlert.type} />
              )}
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default withRouter(AddRestaurantContainer);
