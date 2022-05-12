import axios from "axios";
import React, { useState } from "react";
import { baseURL, headers } from "../services/employee.service";
export const AddEmployee = () => {
  const initialMenuState = {
    id: null,
    name: "Your name here",
    email: "yourname@example.com.br",
    department: "Avangers",
    salary: 0.00,
    birth_date: "12/12/2012"
  };
  const [employee, setEmployee] = useState(initialEmployeeState);
  const [submitted, setSubmitted] = useState(false);
  const handleEmployeeChange = (e) => {
      const { name, value } = e.target;
      setEmployee({ ...employee, [name]: value });
  };
  const submitEmployee = () => {
    let data = {
      name: employee.name,
      email: employee.email,
      deparment: employee.deparment,
      salary: employee.salary,
      birth_date: employee.birth_date
    };
    axios
      .post(`${baseURL}/employee/`, data, {
        headers: {
          headers,
        },
      })
      .then((response) => {
        setEmployee({
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
          deparment: response.data.deparment,
          salary: response.data.salary,
          birth_date: response.data.birth_date
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  const newEmployee = () => {
    setEmployee(initialEmployeeState);
    setSubmitted(false);
  };
return (
  <div className="submit-form">
  {submitted ? (
    <div>
      <div
        className="alert alert-success alert-dismissible fade show"
        role="alert"
      >
        Employee Added!
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <button className="btn btn-success" onClick={newEmployee}>
        Add
      </button>
    </div>
  ) : (
    <div>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          required
          value={employee.name}
          onChange={handleMenuChange}
          name="name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          required
          value={employee.email}
          onChange={handleMenuChange}
          name="email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="deparment">Deparment</label>
        <input
          type="text"
          className="form-control"
          id="deparment"
          required
          value={employee.deparment}
          onChange={handleMenuChange}
          name="deparment"
        />
      </div>
      <div className="form-group">
        <label htmlFor="salary">Salary</label>
        <input
          type="number"
          className="form-control"
          id="salary"
          required
          value={employee.salary}
          onChange={handleMenuChange}
          name="salary"
        />
      </div>
      <button onClick={submitMenu} className="btn btn-success">
        Submit
      </button>
    </div>
  )}
</div>
  );
};