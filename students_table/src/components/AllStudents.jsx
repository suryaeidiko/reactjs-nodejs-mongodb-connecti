import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const AllStudents = () => {
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");

  //fetch Student data from mongodb

  const [students, setStudents] = useState([]);
  // const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your Express backend when the component mounts
    fetch("http://localhost:5000/getAll")
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setText("Student Added");
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div className="container mt-5">
            <div className="mt-3">
              <Link className="btn btn-outline-primary mt-5" to="/addstudents">
                Add Students
              </Link>
            </div>
          </div>
          <div>
            <h1>Student List</h1>
            <table className="table" style={{ border: "1px solid" }}>
              <thead>
                <tr className="table-success">
                  <th>Name</th>
                  <th>Course</th>
                  <th>Mobile</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student._id}>
                    <td>{student.name}</td>
                    <td>{student.course}</td>
                    <td>{student.mobile}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default AllStudents;
