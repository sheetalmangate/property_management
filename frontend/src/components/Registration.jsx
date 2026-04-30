import { useState } from "react";

import "./Registration.css";
import api from "./../api/axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function Registration() {

    const [dateOfBirth, setDateOfBirth] = useState(null);

    

    const handleUserRegistration = async(formData) => {

        try {

            const response = await api.post('/users/register', formData);
            console.log(response.data);

        } catch(error) {

            console.error(error);
        }

    }

    return (
        <form id="registration-container" action={handleUserRegistration}> 
            <h2 className="title">Registration</h2>
            <div className="controls">

                <div className="row">

                   <div className="field">
                        <label htmlFor="firstname" >First Name</label>
                        <input id="firstname" type="text" required />
                    </div> 

                    <div className="field">
                        <label htmlFor="lastname">Last Name</label>
                        <input id="lastname" type="text"  required />
                    </div>
                </div>
                <div className="row">
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input  type="email" id="email" required />
                    </div>
                    <div className="field">
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" id="phone" required />
                    </div>
                </div>
                <div className="row">
                    <div className="field">
                        <label htmlFor="addressLine1">Address</label>
                        <input type="text" id="addressLine1" required />
                    </div>
                    <div className="field">
                        <label htmlFor="state">State</label>
                        <select id="state">
                            <option value="MH">MH</option>
                            <option value="MP">MP</option>
                            <option value="DH">DH</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="field">
                        <label htmlFor="zipcode">Zipcode</label>
                        <input id="zipcode" type="text" name="zipcode" required />
                    </div>
                    <div className="field">
                        <label htmlFor="city">City</label>
                        <select id="city">
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="field">
                        <label htmlFor="dob">DOB</label>
                        <DatePicker 
                            id="dob"
                            showYearDropdown
                            scrollableYearDropdown 
                            yearDropdownItemNumber={100}
                            maxDate={dateOfBirth}
                            selected={dateOfBirth}
                            onChange={(date) => setDateOfBirth(date)}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="register_as">Register as</label>
                        <select id="register_as">
                        </select>
                    </div>
                </div>
            </div>

            <div className="actions">
                <button type="button" className="text-button">Sign In</button>
                <button type="submit" className="registration-button">Create Account</button>
            </div>     
        </form>
    );
    
}