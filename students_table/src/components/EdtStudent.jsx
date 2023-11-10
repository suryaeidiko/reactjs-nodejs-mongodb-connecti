import React, { useState } from "react";
import { Link } from "react-router-dom";

const EdtStudent = () => {
  const [inputVal, setInputVal] = useState({
    name: "",
    course: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setInputVal((prev) => {
        return {
            ...prev,[name]:value
        }
    })
  }

  return (
    <div className="container mt-5">
      <form className="mx-auto w-50 shadow p-5">
        <Link className="btn btn-primary" to="/">
          Home
        </Link>
        <h3 className="mt-5">Edit Details</h3>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Student Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            name="name"
            value={inputVal.name}
            onChange={handleChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Student Cource
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            name="course"
            value={inputVal.course}
            onChange={handleChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Student Mobile
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            name="mobile"
            value={inputVal.mobile}
            onChange={handleChange}
            aria-describedby="emailHelp"
          />
        </div>
        <button className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};

export default EdtStudent;
