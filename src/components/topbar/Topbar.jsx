import React from 'react';
import './topbar.css';
import {NotificationsNone,Language,Settings} from '@material-ui/icons/';
// import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span>Sophia-webdev</span></div>
                <div className="topRight">
                    <div className="iconWrapper">
                        <div className="icon">
                            <NotificationsNone />
                        </div>
                        <div className="iconBadge">2</div>
                    </div>

                    <div className="iconWrapper">
                        <div className="icon">
                            <Language />
                        </div>
                        <div className="iconBadge">2</div>
                    </div>
                    <div className="iconWrapper">
                        <div className="icon">
                            <Settings />
                        </div>
                    </div>
                    <img className="topbarImg"src="/img/avatar.png" alt="avatar" />


                </div>
            </div>
        </div>
    )
}
