import React from 'react';
import './featuredInfo.css';
import {ArrowDownward,ArrowUpward } from '@material-ui/icons'

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,454</span>
                    <span className="featuredMoneyRate">-1.4</span>
                    <ArrowDownward className="featuredIcon negative"/>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,203</span>
                    <span className="featuredMoneyRate">+2.1</span>
                    <ArrowUpward className="featuredIcon"/>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">-11.4</span>
                    <ArrowDownward className="featuredIcon negative"/>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

        </div>
    )
}
