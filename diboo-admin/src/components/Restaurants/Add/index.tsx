import {
  Button,
  Step,
  StepLabel,
  Stepper,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Formik } from "formik";
import React, { useState } from "react";
import ContactInfoForm from "./Forms/ContactInfo";
import RestaurantInfoForm from "./Forms/RestaurantInfo";
import CommissionForm from "./Forms/Commission";
import { useMutation } from "@apollo/react-hooks";
import {
  ADD_RESTAURANT_MUTATION,
  UPDATE_RESTAURANT_MUTATION,
} from "../../../helpers/gql";
import { isNull } from "lodash";
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
interface Props {
  editValues: any;
}

const initalState = {
  id: "",
  restaurantName: "",
  restaurantWebsite: "",
  restaurantPhone: "",
  postCode: "",
  email: "",
  address: "",
  city: "",
  restaurantLogo: "",
  about: "",
  estimatedDeliveryTime: "",
  commission: 0,
  imagePath: "",
  delivery: false,
  pickUp: false,
  dineIn: false,
};
const initialValuesToInsert = {
  id: "",
  name: "",
  website: "",
  phone: "",
  postCode: "",
  email: "",
  address: "",
  city: "",
  restaurantLogo: "",
  about: "",
  delivery: false,
  pickUp: false,
  dineIn: false,
  estimatedTime: "",
  commission: 0,
  imagePath: "",
};
const AddRestaurantContainer: React.FunctionComponent<Props> = ({
  editValues,
}) => {
  console.log("editValues :::", editValues);
  const [Values] = useState(initalState);
  // const [ValuesToInsert, setValuesToInsert] = useState<any>(
  //   initialValuesToInsert
  // );
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const [preview, setPreview] = useState<any>(null);
  /* 
const [delivery, setDelivery] = useState(false);
const [pickUp, setPickUp] = useState(false);
const [dineIn, setDineIn] = useState(false);
const handleToggleDelivery = () => {
 return setDelivery(!delivery);  
 //setValues({...Values, deliveryy : deliv});
}; 
const handleTogglePickUp = () => {
  return setPickUp(!pickUp);
}; 
const handleToggleDineIn = () => {
  return setDineIn(!dineIn);
};  
const handleToggle = (event : any )=> {
  setValues({ ...Values, [event.target.name]: event.target.checked });    
};
*/

  function getSteps() {
    return ["Contact info", "Restaurant info", "Commission"];
  }
  function getStepContent(
    step: Number,
    setFieldValue: Function,
    handleChange: Function
  ) {
    switch (step) {
      case 0:
        return (
          <ContactInfoForm
            restaurantName={Values.restaurantName}
            restaurantWebsite={Values.restaurantWebsite}
            restaurantPhone={Values.restaurantPhone}
            postCode={Values.postCode}
            email={Values.email}
            address={Values.address}
            city={Values.city}
            editValues={editValues ? editValues : ""}
          />
        );
      case 1:
        return (
          <RestaurantInfoForm
            restaurantLogo={Values.restaurantLogo}
            about={Values.about}
            delivery={Values.delivery}
            pickUp={Values.pickUp}
            dineIn={Values.dineIn}
            estimatedDeliveryTime={Values.estimatedDeliveryTime}
            imagePath={Values.imagePath}
            preview={preview}
            setPreview={setPreview}
            setFieldValue={setFieldValue}
            handleChange={handleChange}
            editValues={editValues ? editValues : ""}
          />
        );
      case 2:
        return (
          <CommissionForm
            commission={Values.commission}
            editValues={editValues ? editValues : ""}
          />
        );
      default:
        return "Unknown step";
    }
  }

  const handleNext = () => {
    let newStep = activeStep;
    if (newStep < 2) setActiveStep(newStep + 1);
  };

  const handleBack = () => {
    let backStep = activeStep;
    if (backStep > 0) setActiveStep(backStep - 1);
  };

  const addRestaurant = (
    values: {
      name: string;
      website: string;
      phone: string;
      postCode: string;
      email: string;
      address: string;
      city: string;
      restaurantLogo: string;
      about: string;
      delivery: boolean;
      pickUp: boolean;
      dineIn: boolean;
      estimatedTime: string;
      commission: Number;
      imagePath: string;
    },
    actions: any
  ) => {
    addRestaurantMutation({ variables: values }).finally(() => {
      actions.resetForm();
      setPreview(null);
    });
  };
  const [
    addRestaurantMutation,
    { loading: mutationLoading, error, data },
  ] = useMutation(ADD_RESTAURANT_MUTATION);

  const updateRestaurant = (
    values: {
      id: string;
      name: string;
      website: string;
      phone: string;
      postCode: string;
      email: string;
      address: string;
      city: string;
      restaurantLogo: string;
      about: string;
      delivery: boolean;
      pickUp: boolean;
      dineIn: boolean;
      estimatedTime: string;
      commission: Number;
      imagePath: string;
    },
    actions: any
  ) => {
    updateRestaurantMutation({ variables: values }).finally(() => {
      setPreview(null);
    });
  };
  const [updateRestaurantMutation, { loading }] = useMutation(
    UPDATE_RESTAURANT_MUTATION
  );
  let cpt = 0;
  const handleEditCase = (values: any, actions: any) => {
    console.log("Values in handleEditCase before :::", values);
    /*  const temp= values; 
  temp.id = editValues.id; 
  console.log("temp :::",temp);
  if (values.restaurantName === "") temp.restaurantName = editValues.name ; 
  if (values.restaurantWebsite ==="") temp.restaurantWebsite= editValues.website ;
  if (values.restaurantPhone ==="") temp.restaurantPhone = editValues.phone;
  if (values.postCode ==="") temp.postCode = editValues.postCode;
  if (values.email ==="") temp.email = editValues.email;
  if (values.address ==="") temp.address = editValues.address;
  if (values.city ==="") temp.city = editValues.city;
  if (values.about === "") temp.restaurantName = editValues.restaurantName;
  if (values.estimatedDeliveryTime === "") temp.estimatedDeliveryTime = editValues.estimatedTime;
  if (values.commission === 0 ) temp.commission = editValues.commission;
  if (values.imagePath === "") temp.imagePath = editValues.imagePath;
  //setValues({...temp});
values = temp;
  ValuesToInsert.id = values.id;
  ValuesToInsert.name = values.restaurantName;
  ValuesToInsert.website = values.restaurantWebsite;
  ValuesToInsert.phone = values.restaurantPhone;
  ValuesToInsert.postCode = values.postCode;
  ValuesToInsert.email = values.email;
  ValuesToInsert.address = values.address;
  ValuesToInsert.city = values.city;
  ValuesToInsert.restaurantLogo = values.restaurantLogo;
  ValuesToInsert.about = values.about;
  ValuesToInsert.delivery = values.delivery;
  ValuesToInsert.pickUp = values.pickUp;
  ValuesToInsert.dineIn = values.dineIn;
  ValuesToInsert.estimatedTime = values.estimatedDeliveryTime;
  ValuesToInsert.commission = values.commission;
  ValuesToInsert.imagePath = values.imagePath; 
  console.log("************************************************ :::");
  console.log("Values :::",values);
  console.log("editValues :::",editValues);
  console.log("ValuesToInsert :::",ValuesToInsert);
//  updateRestaurant(ValuesToInsert,{actions}); */
  };
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
          initialValues={Values}
          onSubmit={(Values, { setSubmitting, resetForm }) => {
            console.log("Values after submit :::", Values);
            if (editValues != isNull) handleEditCase(Values, { setSubmitting });
            // else addRestaurant(values, { setSubmitting, resetForm });
          }}
        >
          {({
            values,
            handleSubmit,
            setFieldValue,
            setValues,
            handleChange,
          }) => (
            <form className="form-horizontal" onSubmit={handleSubmit}>
              <div className={classes.content}>
                {activeStep === steps.length ? (
                  <div>
                    <Typography className={classes.instructions}>
                      All steps completed.
                    </Typography>
                  </div>
                ) : (
                  <div>
                    <Typography className={classes.instructions}>
                      {getStepContent(activeStep, setFieldValue, handleChange)}
                    </Typography>
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
                          Finish
                        </Button>
                      ) : (
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleNext}
                          className={classes.button}
                        >
                          Next
                        </Button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default AddRestaurantContainer;
