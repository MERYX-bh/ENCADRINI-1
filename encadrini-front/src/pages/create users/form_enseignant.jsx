import "./form_enseignant.scss";
import Sidebar from "../../components/Sidebar/AdminSidebar";
import Navbar from "../../components/Navbar/AdminNavbar";
import React from 'react';


const Form_enseignant = ({ inputs, title }) => {

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input required type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
            </form>
          </div>
        </div>
        <button>Confirm</button>
      </div>
    </div>
  );
};

export default Form_enseignant;