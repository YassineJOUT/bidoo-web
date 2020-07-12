import { Box, Button, Card, CardContent, CircularProgress, Grid, Step, StepLabel, Stepper, TextareaAutosize, FormControlLabel, makeStyles, Typography } from '@material-ui/core';
import { Field, Form, Formik, FormikConfig, FormikValues } from 'formik';
import React, { useState } from 'react';
import { mixed, number, object } from 'yup';
import ContactInfoForm from "./Forms/ContactInfo";
import RestaurantInfoForm from "./Forms/RestaurantInfo";
import CommissionForm from "./Forms/Commission";
import Title from "../../Shared/ContentTitle";
import BreadCrumb from "../../Shared/BreadCrumb";
import Divider from "@material-ui/core/Divider";
import { useMutation, useQuery, useLazyQuery } from "@apollo/react-hooks";
import {ADD_RESTAURANT_MUTATION} from "../../../helpers/gql";
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: 'white' ,
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
  }
}));

const AddRestaurantContainer: React.FunctionComponent = () => {

  const [Values,setValues] = useState({
  restaurantName:"",
  restaurantWebsite:"",
  restaurantPhone:"",
  postCode:"",
  email:"",
  address:"",
  city:"",
  restaurantLogo: "",
  about: "",
  estimatedDeliveryTime: "",
  commission: 0 ,
  imagePath: "",
  delivery : false,
  pickUp: false,
  dineIn: false
});
const classes = useStyles();
const [activeStep, setActiveStep] = useState(0);
const steps = getSteps();
const [preview, setPreview] = useState<any>(null);
/* const [delivery, setDelivery] = useState(false);
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
function getSteps() { return ['Contact info', 'Restaurant info', 'Commission']; }
function getStepContent(step: Number,setFieldValue: Function, handleChange: Function) {
  switch (step) {
    case 0:
      return <ContactInfoForm 
              restaurantName = {Values.restaurantName}
              restaurantWebsite = {Values.restaurantWebsite}
              restaurantPhone = {Values.restaurantPhone}
              postCode = {Values.postCode}
              email = {Values.email}
              address = {Values.address}
              city = {Values.city}
             />;
    case 1:
      return <RestaurantInfoForm 
              restaurantLogo= {Values.restaurantLogo}
              about= {Values.about}
              delivery= {Values.delivery}
              pickUp= {Values.pickUp}
              dineIn= {Values.dineIn}
              estimatedDeliveryTime= {Values.estimatedDeliveryTime}
              imagePath= {Values.imagePath}
              preview= {preview}
              setPreview= {setPreview}
              setFieldValue= {setFieldValue}
              handleChange= {handleChange}
      />;
    case 2:
      return <CommissionForm 
             commission= {Values.commission}
            />;
    default:
      return 'Unknown step';
  }
}

const handleNext = () => {
  let newStep = activeStep;
  if(newStep < 2) setActiveStep(newStep +1);
};

const handleBack = () => {
  let backStep = activeStep;
  if(backStep > 0 ) setActiveStep(backStep - 1);
};

/* const addRestaurant= (
        values: {   
          restaurantName:string;
          restaurantWebsite:string;
          restaurantPhone:string;
          postCode:string;
          email:string;
          address:string;
          city:string;
          restaurantLogo: string;
          about: string;
          delivery: boolean;
          pickUp: boolean;
          dineIn: boolean;
          estimatedDeliveryTime: string;
          commission: string;
          imagePath: string; },
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
 */

  return (
<> 
<div className="page-title-box">
        <div className="row">
              <Title title="Add restaurant">
                <BreadCrumb title={"Website Settings"} url="/home" />
              </Title>
        </div>
    </div>
<div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          return (
            <Step key={label} >
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Formik
          initialValues={Values}
         /*  onSubmit={(values, { setSubmitting, resetForm }) =>
              addRestaurant(values, { setSubmitting, resetForm })
            } */
            onSubmit={(values, { setSubmitting, resetForm }) =>{
                        console.log("values :::", values); } }
      >  
      {({ values, handleSubmit, setFieldValue,setValues, handleChange }) => (
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
            <Typography className={classes.instructions}>{
                getStepContent(activeStep,setFieldValue, handleChange)
                
                }</Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              {activeStep === steps.length - 1 ?
             ( <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
                type="submit"
              >
               Finish
              </Button>) : (
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
}


export default AddRestaurantContainer;
