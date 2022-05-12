import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { baseURL, headers } from "/services/employee.service";
import { useHistory } from "react-router-dom";
export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const history = useHistory();
  const countRef = useRef(0);
  const [deleted, setDeleted] = useState(false);
  useEffect(() => {
    retrieveAllEmployees();
  }, [countRef]);
  const retrieveAllEmployees = () => {
    axios
      .get(`${baseURL}/employees/`, {
        headers: {
          headers,
        },
      })
      .then((response) => {
        setMenus(response.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  const deleteEmployee = (id) => {
    axios
      .delete(`${baseURL}/employees/${id}/`, {
        headers: {
          headers,
        },
      })
      .then((response) => {
        setDeleted(true);
        retrieveAllEmployees();
      })
      .catch((e) => {
        console.error(e);
      });
  }
  const handleUpdateClick = (id) => {
    history.push(`/employee/${id}/update/`);
  }
return (
    <div className="row justify-content-center">
          <div className="col">
            {deleted && (
              <div
                className="alert alert-danger alert-dismissible fade show"
                role="alert"
              >
                Employee deleted!
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            )}
            {menus &&
              employees.map((employee, index) => (
                <div className="card my-3 w-25 mx-auto">
                  <div className="card-body">
                    <h2 className="card-title font-weight-bold">{employee.name}</h2>
                    <h3 className="card-subtitle mb-3">{employee.email}</h3>
                    <h4 className="card-subtitle mb-2">{employee.deparment}</h4>
                    <p className="card-text">{employee.salary}</p>
                    <p className="card-text">{employee.birth_date}</p>
                  </div>
                  <div classNameName="card-footer">
                    <div
                      className="btn-group justify-content-around w-75 mb-1 "
                      data-toggle="buttons"
                    >
                      <span>
                        <button
                          className="btn btn-info"
                          onClick={() => handleUpdateClick(employee.id)}
                        >
                          Update
                        </button>
                      </span>
                      <span>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteEmployee(employee.id)}
                        >
                          Delete
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
);
}