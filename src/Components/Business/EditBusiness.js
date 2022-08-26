import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";

const EditBusinessInfo = () => {
  const navigate = useNavigate();
  const { business_id } = useParams();

  const [data, setData] = useState([]);

  console.log("business_id", business_id);

  let taglist = [];

  const handleChangeTaglist = (e) => {
    //check if tags already has this value, add if not, remove if is already there
    if (taglist.includes(e.target.name)) {
      taglist = taglist.filter((tag) => tag !== e.target.name);
    } else {
      taglist.push(e.target.name);
    }

    // console.log(tags);
  };

  let opening_days_list = [];

  const handleChangeOpeningDays = (e) => {
    //check if opening days already has this value, add if not, remove if is already there
    if (opening_days_list.includes(e.target.name)) {
      opening_days_list = opening_days_list.filter(
        (day) => day !== e.target.name
      );
    } else {
      opening_days_list.push(e.target.name);
    }

    // console.log(opening_days_list);
  };
  // get the info of the business

  useEffect(() => {
    const getBusiness = async () => {
      const response = await fetch(
        `http://localhost:5000/api/business/getbusiness/${business_id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // "auth-token": localStorage.getItem("token"),
          },
        }
      );
      const json = await response.json();
      console.log("business", json);
      setData(json);
    };
    getBusiness();
    console.log("data", data);
  }, []); // <- add empty brackets here

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    // formData.append("business_id", data._id);
    formData.append("business_name", data.business_name);
    formData.append("contact_no", data.contact_no);
    formData.append("address", data.address);
    formData.append("city", data.city);
    formData.append("district", data.district);
    formData.append("email", data.email);
    formData.append("category", data.category);
    formData.append("tags", data.tags);
    formData.append("about", data.about);

    const business_name = formData.get("business_name");
    const contact_no = formData.get("contact_no");
    const district = formData.get("district");
    const city = formData.get("city");
    const address = formData.get("address");
    const about = formData.get("about");
    const email = formData.get("email");
    const category = formData.get("category");
    const tags = formData.get("tags");
    const opening_days = formData.get("opening_days");
    const opening_time = formData.get("opening_time");
    const closing_time = formData.get("closing_time");
    console.log("business_name", category);

    const response = await fetch(
      `http://localhost:5000/api/business/updatebusiness/${business_id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "multipart/form-data",
          "auth-token": localStorage.getItem("token"),
          // business_name: business_name,
          // contact_no: contact_no,
          // district: district,
          // city: city,
          // address: address,
          // category: category,
          // about: about,
          // email: email,
          // tags: tags,
          // opening_days: opening_days,
          // opening_time: opening_time,
          // closing_time: closing_time,
        },
        body: JSON.stringify({
          business_name: business_name,
          contact_no: contact_no,
          district: district,
          city: city,
          address: address,
          category: category,
          about: about,
          email: email,
          tags: tags,
          // opening_days: opening_days,
          // opening_time: opening_time,
          // closing_time: closing_time,
        }),
      }
    );
    // console.log("name", business_name);
    const json = await response.json();
    // res = JSON.stringify(json);
    console.log(json);
    // showAlert("Query added successfully!", "success");
    // console.log("data", json.Success);
    if (json.Success) navigate(`/business/${business_id}`);
  };

  const handleCancel = async (e) => {
    e.preventDefault();
    navigate(`/business/${business_id}`);
  };

  return (
    <>
      <form
        // onSubmit={handleSubmit}
        encType="multipart/form-data"
        style={{
          marginTop: "150px",
          marginLeft: "500px",
        }}
      >
        <div className="form-group">
          <label htmlFor="name">Business Name</label>
          <input
            type="name"
            name="business_name"
            className="form-control"
            id="business_name"
            value={data.business_name}
            style={{ width: "500px" }}
            onChange={(e) =>
              setData({ ...data, business_name: e.target.value })
            }
          />
        </div>
        <div className="form-group" style={{ marginTop: "20px" }}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="user_email"
            className="form-control"
            id="user_email"
            aria-describedby="emailHelp"
            value={data.email}
            style={{ width: "500px" }}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact No</label>
          <input
            type="number"
            name="user_contact"
            className="form-control"
            id="user_contact"
            value={data.contact_no}
            style={{ width: "500px" }}
            onChange={(e) => setData({ ...data, contact_no: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <Select
            LabelId="business-category-select-label"
            id="business-category-select"
            margin="normal"
            label="category"
            title={data.address}
            aria-expanded="true"
            onChange={(e) => setData({ ...data, category: e.target.value })}
          >
            <MenuItem
              value="Restaurant"
              selected={data.category === "Restaurant" ? "selected" : ""}
            >
              Restaurant
            </MenuItem>
            <MenuItem
              value="HomeService"
              selected={data.category === "HomeService" ? "selected" : ""}
            >
              HomeService
            </MenuItem>
            <MenuItem
              value="Shop"
              selected={data.category === "Shop" ? "selected" : ""}
            >
              Shop
            </MenuItem>
            <MenuItem
              value="Others"
              selected={data.category === "Others" ? "selected" : ""}
            >
              Others
            </MenuItem>
          </Select>
        </div>
        <div className="form-group">
          <label htmlFor="district">District</label>
          <input
            type="text"
            name="user_district"
            className="form-control"
            id="district"
            value={data.district}
            style={{ width: "500px" }}
            onChange={(e) => setData({ ...data, district: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="user_city"
            className="form-control"
            id="city"
            value={data.city}
            style={{ width: "500px" }}
            onChange={(e) => setData({ ...data, city: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="user_address"
            className="form-control"
            id="user_address"
            value={data.address}
            style={{ width: "500px" }}
            onChange={(e) => setData({ ...data, address: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="about">About</label>
          <TextareaAutosize
            aria-label="about textarea"
            id="about"
            variant="outlined"
            value={data.about}
            fullWidth
            margin="normal"
            minRows={5}
            style={{ width: "100%" }}
            onChange={(e) => setData({ ...data, about: e.target.value })}
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="tags">Tags</label>
          <Box sx={{ display: "flex" }}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
              <FormLabel component="legend"></FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox onChange={handleChangeTaglist} name="Social" />
                  }
                  label="Social"
                />
                <FormControlLabel
                  control={
                    <Checkbox onChange={handleChangeTaglist} name="Food" />
                  }
                  label="Food"
                />
                <FormControlLabel
                  control={
                    <Checkbox onChange={handleChangeTaglist} name="Expensive" />
                  }
                  label="Expensive"
                />
              </FormGroup>
            </FormControl>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
              <FormLabel component="legend"></FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox onChange={handleChangeTaglist} name="Service" />
                  }
                  label="Service"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleChangeTaglist}
                      name="Entertainment"
                    />
                  }
                  label="Entertainment"
                />
                <FormControlLabel
                  control={
                    <Checkbox onChange={handleChangeTaglist} name="Local" />
                  }
                  label="Local"
                />
              </FormGroup>
            </FormControl>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
              <FormLabel component="legend"></FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox onChange={handleChangeTaglist} name="Sports" />
                  }
                  label="Sports"
                />
                <FormControlLabel
                  control={
                    <Checkbox onChange={handleChangeTaglist} name="Shopping" />
                  }
                  label="Shopping"
                />
                <FormControlLabel
                  control={
                    <Checkbox onChange={handleChangeTaglist} name="Repair" />
                  }
                  label="Repair"
                />
              </FormGroup>
            </FormControl>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
              <FormLabel component="legend"></FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox onChange={handleChangeTaglist} name="Public" />
                  }
                  label="Public"
                />
                <FormControlLabel
                  control={
                    <Checkbox onChange={handleChangeTaglist} name="Exclusive" />
                  }
                  label="Exclusive"
                />
                <FormControlLabel
                  control={
                    <Checkbox onChange={handleChangeTaglist} name="Homemade" />
                  }
                  label="Homemade"
                />
              </FormGroup>
            </FormControl>
          </Box>
        </div> */}
        {/*      <div className="form-group">
        <label htmlFor="opening_hours">Opening Hours</label>
        <Box sx={{ display: "flex" }} className="justify-content-center">
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component="legend"></FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleChangeOpeningDays}
                    name="Saturday"
                  />
                }
                label="Saturday"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleChangeOpeningDays}
                    name="Sunday"
                  />
                }
                label="Sunday"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleChangeOpeningDays}
                    name="Monday"
                  />
                }
                label="Monday"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleChangeOpeningDays}
                    name="Tuesday"
                  />
                }
                label="Tuesday"
              />
            </FormGroup>
          </FormControl>
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component="legend"></FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleChangeOpeningDays}
                    name="Wednesday"
                  />
                }
                label="Wednesday"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleChangeOpeningDays}
                    name="Thursday"
                  />
                }
                label="Thursday"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleChangeOpeningDays}
                    name="Friday"
                  />
                }
                label="Friday"
              />
            </FormGroup>
          </FormControl>
        </Box>
       </div> */}
        <Button
          className="btn btn-danger"
          onClick={handleCancel}
          style={{ marginTop: "50px", marginLeft: "80px" }}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          // className="btn btn-success"
          onClick={handleSubmit}
          style={{ marginTop: "50px", marginLeft: "150px" }}
        >
          Update Business Info
        </Button>
      </form>
    </>
  );
};

export default EditBusinessInfo;