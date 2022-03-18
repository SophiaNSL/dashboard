import React from 'react';
import './newuser.css';

export default function NewUser() {
    return (
        <div className="newuser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUerItem">
                    <label>User Account</label>
                    <input type="text" placeholder="sophia001"/>
                </div>
                <div className="newUerItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="Sophia LI"/>
                </div>
                <div className="newUerItem">
                    <label>Email</label>
                    <input type="email" placeholder="sophia@test.com"/>
                </div>
                <div className="newUerItem">
                    <label>Password</label>
                    <input type="password" placeholder="********"/>
                </div>
                <div className="newUerItem">
                    <label>Phone</label>
                    <input type="text" placeholder="04xx xxx xxx"/>
                </div>
                <div className="newUerItem">
                    <label>Address</label>
                    <input type="text" placeholder="ACT|Australia"/>
                </div>
                <div className="newUerItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" id="male" name="gender" value="male"/>
                        <label htmlFor="male">Male</label>
                        <input type="radio" id="female" name="gender" value="female"/>
                        <label htmlFor="female">Female</label>
                        <input type="radio" id="other" name="gender" value="other"/>
                        <label htmlFor="other">Other</label>
                    </div>
                </div>
                <div className="newUerItem">
                    <label>Active</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </form>
            <button className="newUserButton">Create</button>
        </div>
    )
}
