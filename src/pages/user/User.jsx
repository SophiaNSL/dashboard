import { CalendarToday, LocationOn, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import './user.css';

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/create">
                  <button className="addUserButton">Create</button>
                </Link>

            </div>

            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="/img/avatar.png" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUserName">Sophia LI</span>
                            <span className="userShowUserTitle">CEO</span>
                        </div>

                    </div>
                    <div className="userShowBottom">
                        <div className="userShowTitle">Account Details</div>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon"/>
                            <span className="userShowInfoDetail">sophia001</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon"/>
                            <span className="userShowInfoDetail">xx Oct. 19xx</span>
                        </div>
                        <div className="userShowTitle">Contact</div>

                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon"/>
                            <span className="userShowInfoDetail">04xx xxx xxx</span>
                        </div>

                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon"/>
                            <span className="userShowInfoDetail">sophia001@test.com</span>
                        </div>

                        <div className="userShowInfo">
                            <LocationOn className="userShowIcon"/>
                            <span className="userShowInfoDetail">ACT|Australia</span>
                        </div>

                    </div>
                </div>

                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>UserName</label>
                                <input 
                                type="text"
                                placeholder="sophia001"
                                className="userUpdateInput"
                                />
                            </div>

                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input 
                                type="text"
                                placeholder="Sophia LI"
                                className="userUpdateInput"
                                />
                            </div>

                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input 
                                type="email"
                                placeholder="sophia001@test.com"
                                className="userUpdateInput"
                                />
                            </div>

                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input 
                                type="tel"
                                placeholder="04xx xxx xxx"
                                className="userUpdateInput"
                                />
                            </div>

                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input 
                                type="text"
                                placeholder="ACT|Australia"
                                className="userUpdateInput"
                                />
                            </div>
                        </div>

                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="/img/avatar.png" alt="" className="userUpdateImg"/>
                                <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                                <input type="file" id="file" style={{display: "none"}}/>
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    )
}
