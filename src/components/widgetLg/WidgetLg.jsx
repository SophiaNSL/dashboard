import React from 'react';
import './widgetLg.css';

export default function WidgetLg() {

    const Button = ({type}) => {
        return (
            // there is a space after "widgetButton"
            <button className={"widgetButton "+type}>{type}</button>
        )

    }

    return (
        <div className="widgetLg">
           <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetUser">
                        <img src="/img/avatar6.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">26 Aug 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type="Approved"/></td>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetUser">
                        <img src="/img/avatar7.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Lindsay wilkie</span>
                    </td>
                    <td className="widgetLgDate">15 Aug 2021</td>
                    <td className="widgetLgAmount">$360.00</td>
                    <td className="widgetLgStatus"><Button type="Pending"/></td>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetUser">
                        <img src="/img/avatar8.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Eric Bailey</span>
                    </td>
                    <td className="widgetLgDate">01 Aug 2021</td>
                    <td className="widgetLgAmount">$769.00</td>
                    <td className="widgetLgStatus"><Button type="Approved"/></td>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetUser">
                        <img src="/img/avatar9.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Olga Carry</span>
                    </td>
                    <td className="widgetLgDate">28 Jul 2021</td>
                    <td className="widgetLgAmount">$129.00</td>
                    <td className="widgetLgStatus"><Button type="Cancelled"/></td>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetUser">
                        <img src="/img/avatar10.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Linda Lohan</span>
                    </td>
                    <td className="widgetLgDate">22 Jul 2021</td>
                    <td className="widgetLgAmount">$540.00</td>
                    <td className="widgetLgStatus"><Button type="Approved"/></td>
                </tr>

            </table>
        </div>
    )
}
