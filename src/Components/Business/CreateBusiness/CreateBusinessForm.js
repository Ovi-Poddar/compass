import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Input,
  TextareaAutosize,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";

import FinalStep from "./FinalStep";

const useStyles = makeStyles((theme) => ({
  button: {
    // marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Basic information",
    "Location Information",
    "Contact Information",
    "Description",
  ];
}
const BasicForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  console.log(errors);
  return (
    <>
      <Controller
        control={control}
        name="business_name"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="business_name"
            label="Business Name"
            variant="outlined"
            placeholder="Enter Your Business Name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.business_name)}
            helperText={errors.business_name?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="category"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <FormControl fullWidth className="my-2">
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="business-category-select-label"
              id="business-category-select"
              margin="normal"
              {...field}
              label="category"
              defaultValue=""
              // onChange={handleChange}
              error={Boolean(errors?.category)}
              helperText={errors.category?.message}
            >
              <MenuItem value="Restaurant">Restaurant</MenuItem>
              <MenuItem value="HomeService">HomeService</MenuItem>
              <MenuItem value="AutoShop"> AutoShop</MenuItem>
              <MenuItem value="Others"> Others</MenuItem>
            </Select>
          </FormControl>
        )}
      />
    </>
  );
};

const ContactForm = () => {
  const {
    formState: { errors },
  } = useFormContext();
  console.log(errors);
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="email"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="email"
            label="E-mail"
            variant="outlined"
            placeholder="Enter Your E-mail Address"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.email)}
            helperText={errors.email?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="contact_no"
        render={({ field }) => (
          <TextField
            id="contact_no"
            label="Contact Number"
            variant="outlined"
            placeholder="Enter Your Phone Number"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};

const LocationForm = () => {
  const {
    formState: { errors },
  } = useFormContext();
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="district"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="district"
            label="District"
            variant="outlined"
            placeholder="Enter Your District"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.district)}
            helperText={errors.district?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="city"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="city"
            label="City"
            variant="outlined"
            placeholder="Enter Your City"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.city)}
            helperText={errors.city?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="address"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="address"
            label="Address"
            variant="outlined"
            placeholder="Enter Your Street Address"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.address)}
            helperText={errors.address?.message}
          />
        )}
      />
    </>
  );
};

//set image upload react-hook-form
const AboutForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="about"
        render={({ field }) => (
          <TextareaAutosize
            aria-label="about textarea"
            id="about"
            variant="outlined"
            placeholder="Enter Your Business Description"
            fullWidth
            margin="normal"
            minRows={5}
            style={{ width: "100%" }}
            {...field}
          />
        )}
      />
    </>
  );
};

function getStepContent(step, methods) {
  switch (step) {
    case 0:
      return <BasicForm />;
    case 1:
      return <LocationForm />;
    case 2:
      return <ContactForm />;
    case 3:
      return <AboutForm />;
    default:
      return "unknown step";
  }
}

const CreateBusinessForm = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      business_name: "",
      email: "",
      contact_no: "",
      address: "",
      district: "",
      city: "",
      category: "",
      about: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();
  const isStepOptional = (step) => {
    return step > 2;
  };
  const isStepFalied = () => {
    return Boolean(Object.keys(methods.formState.errors).length);
  };
  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (data) => {
    console.log(methods.watch());
    if (activeStep === steps.length-1) {
      handleSubmit();
      setActiveStep(activeStep + 1);
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  const handleSubmit = async () => {
    const response = await fetch(
      "http://localhost:5000/api/business/createbusiness",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({
          business_name: methods.watch("business_name"),
          email: methods.watch("email"),
          contact_no: methods.watch("contact_no"),
          address: methods.watch("address"),
          district: methods.watch("district"),
          city: methods.watch("city"),
          category: methods.watch("category"),
          profile_image: methods.watch("profile_image"),
        }),
      }
    );
    const json = await response.json();
    console.log(json);

    if (json.success) {
      setTimeout(() => {
        navigate("/showownbusinesses");
      }, 3000);
    } else {
      navigate("/createbusiness");
    }
  };

  const onSubmit = (data) => {
    // console.log(data);
  };
  return (
    <div>
      {activeStep < steps.length ? (
      <div className="container mb-4">
        <Stepper alternativeLabel activeStep={activeStep}>
          {steps.map((step, index) => {
            const labelProps = {};
            const stepProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography
                  variant="caption"
                  align="center"
                  style={{ display: "block" }}
                >
                  optional
                </Typography>
              );
            }
            if (isStepFalied() && activeStep == index) {
              labelProps.error = true;
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step {...stepProps} key={index}>
                <StepLabel {...labelProps}>{step}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </div>) : null}
      <Card className="text-center">
        <Card.Body>
        {activeStep < steps.length ? <Card.Title> <h1 className="text-success">Create Your Business</h1></Card.Title> : null}
        </Card.Body>
        {activeStep === steps.length ? (
          // <Typography variant="h3" align="center">
          //   Thank You
          // </Typography>
          <FinalStep />
        ) : (
          <>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(handleNext)}>
                <Card.Body>{getStepContent(activeStep, methods)} </Card.Body>
                <Card.Footer className="text-muted">
                  <Button
                    className={classes.button}
                    style={{ marginRight: "10px" }}
                    variant="contained"
                    color="error"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    back
                  </Button>
                  {/* {isStepOptional(activeStep) && (
                      <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        onClick={handleSkip}
                      >
                        skip
                      </Button>
                    )} */}
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    // onClick={handleNext}
                    type="submit"
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>{" "}
                </Card.Footer>
              </form>
            </FormProvider>{" "}
          </>
        )}
      </Card>
    </div>
  );
};

export default CreateBusinessForm;
