import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddStudents = () => {
  const naviagte = useNavigate();
  
  const [inputVal, setInputVal] = useState({
    name: "",
    course: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputVal((perv) => {
      return {
        ...perv,
        [name]: value,
      };
    });
  };
  
  
  const addstuddata = async (e) => {
    e.preventDefault();
    const { name, course, mobile } = inputVal;
    const res = await fetch("http://localhost:5000/StudentData", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, course, mobile }),
    });
    const data = await res.json();
    if (
      res.status === 422 ||
      res.status === 404 ||
      res.status === 400 ||
      !data
    ) {
      // alert("Error")
      setInputVal({ name: "", course: "", mobile: "" });
      toast.error("Error");
    } else {
      // setInputVal(data);
      setInputVal({ name: "", course: "", mobile: "" });
      // alert("Student Added")
      naviagte("/");
      toast.success("Student Added");
    }
  };

  return (
    <>
    
    <div className="container mt-5">
      <form className="mx-auto w-50 shadow p-5">
        <Link className="btn btn-primary" to="/">
          Home
        </Link>
        <h3 className="mt-5">Fill-up Details</h3>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Student Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            name="name"
            onChange={handleChange}
            value={inputVal.name}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Student Cource
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            name="course"
            onChange={handleChange}
            value={inputVal.course}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Student Mobile
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            name="mobile"
            onChange={handleChange}
            value={inputVal.mobile}
            aria-describedby="emailHelp"
          />
        </div>
        <button className="btn btn-primary" onClick={addstuddata}>
          Add
        </button>
      </form>
      <ToastContainer />
    </div>
    </>
  );
};

export default AddStudents;
