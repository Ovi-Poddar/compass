import React, { useState } from "react";
import PersonalInfo from "./BusinessInfo";
import ContactInfo from "./ContactInfo";
import LocationInfo from "./LocationInfo";
import { Container, Form } from "react-bootstrap";
import { MultiStepProgressBar } from "./MultiStepProgressBar";
import UploadImage from "./UploadImage";
import FinalStep from "./FinalStep";
import { useNavigate } from "react-router-dom";

const MultiForm = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    business_name: "",
    category: "",
    email: "",
    contact_no: "",
    city: "",
    address: "",
    district: "",
    profile_image: "",
  });

  const [step, setStep] = useState(1);

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
          business_name: values.business_name,
          category: values.category,
          email: values.email,
          contact_no: values.contact_no,
          city: values.city,
          address: values.address,
          district: values.district,
          profile_image: values.profile_image,
        }),
      }
    );
    const json = await response.json();
    console.log(json);

    setTimeout(() => {
      navigate("/showownbusinesses");
    }, 1000);
  };

  const nextStep = () => {
    if (step < 5) {
      setStep(step + 1);
    }
    if (step === 4) {
      console.log("final step");
      handleSubmit();
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const handleUploadImage = (name) => (event) => {
    setValues({ ...values, [name]: event.target.files[0] });
    console.log(event.target.files[0].name);
  };

  return (
    <>
      <Container style={{ marginTop: "50px", width: "45%" }}>
        <MultiStepProgressBar step={step} />
      </Container>
      <div className="bg-white vh-100 justify-content-center">
        <div className="container d-flex justify-content-center align-items-center">
          <div className="card p-3 w-50 mt-5">
            {
              {
                1: (
                  <PersonalInfo
                    handleChange={handleChange}
                    business_name={values.business_name}
                    category={values.category}
                  />
                ),
                2: (
                  <LocationInfo
                    handleChange={handleChange}
                    city={values.city}
                    address={values.address}
                    district={values.district}
                  />
                ),
                3: (
                  <ContactInfo
                    handleChange={handleChange}
                    contact_no={values.contact_no}
                    email={values.email}
                  />
                ),
                4: (
                  <UploadImage
                    handleUploadImage={handleUploadImage}
                    profile_image={values.profile_image}
                  />
                ),
                5: <FinalStep />,
              }[step]
            }
            <div className="d-flex justify-content-around px-5 mt-5">
              {step < 5 ? (
                <button
                  className="btn btn-warning"
                  onClick={prevStep}
                  disabled={step === 1}
                >
                  Back
                </button>
              ) : null}
              {step < 5 ? (
                <button className="btn btn-warning" onClick={nextStep}>
                  {step === 4 ? "Submit" : "Next"}
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default MultiForm;
