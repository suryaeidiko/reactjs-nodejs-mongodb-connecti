import React from 'react'
import { Link } from 'react-router-dom'

const ViewStudent = () => {
  return (
    <div className="container mt-5">
      <Link className="btn btn-primary mt-5" to="/">
        Home
      </Link>
      <div className="row mt-5">
        <div className="col-md-6">
          <ul class="list-group">
            <li class="list-group-item active" aria-current="true">
              Student Details
            </li>
            <li class="list-group-item">Name :- Name</li>
            <li class="list-group-item">Cource :- Cource</li>
            <li class="list-group-item">Mobile :- Mobile</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ViewStudent