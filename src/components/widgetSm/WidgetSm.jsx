import { Visibility } from '@material-ui/icons';
import React from 'react';
import './widgetSm.css';

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
            <li className="widgetSmListItem">
                    <img 
                    className="widgetSmImg"
                    src="/img/avatar1.jpg" 
                    alt="avatar" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                       <Visibility className="widgetSmIcon"/> Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img 
                    className="widgetSmImg"
                    src="/img/avatar2.jpg" 
                    alt="avatar" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Brant Fabian</span>
                        <span className="widgetSmUserTitle">Art Director</span>
                    </div>
                    <button className="widgetSmButton">
                       <Visibility className="widgetSmIcon"/> Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img 
                    className="widgetSmImg"
                    src="/img/avatar3.jpg" 
                    alt="avatar" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Thomas Liu</span>
                        <span className="widgetSmUserTitle">UI/UX Developer</span>
                    </div>
                    <button className="widgetSmButton">
                       <Visibility className="widgetSmIcon"/> Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img 
                    className="widgetSmImg"
                    src="/img/avatar4.jpg" 
                    alt="avatar" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Russ Linville</span>
                        <span className="widgetSmUserTitle">Manager</span>
                    </div>
                    <button className="widgetSmButton">
                       <Visibility className="widgetSmIcon"/> Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img 
                    className="widgetSmImg"
                    src="/img/avatar5.jpg" 
                    alt="avatar" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Alisha Davidson</span>
                        <span className="widgetSmUserTitle">Data Scientist</span>
                    </div>
                    <button className="widgetSmButton">
                       <Visibility className="widgetSmIcon"/> Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
