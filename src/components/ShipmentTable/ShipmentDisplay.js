import React from 'react'
import ShipmentDetails from '../ShipmentDetails/ShipmentDetails';

const ShipmentDisplay = ({ shipment }) => {
    const { orderNo, date, customer, trackingNo, status } = shipment;


 const result =   shipment.find(x=> x.orderNo === 'xc-086740-61172638-7179686');
 console.log(result);


    const handleUpdate = (orderNo) => {
        console.log(orderNo);
        
    }


    return (
        <div>
            <tbody>
                <tr>
                    <td >{orderNo}</td>
                    <td >{date}</td>
                    <td >{customer}</td>
                    <td >{trackingNo}</td>
                    <td >{status}</td>
                    <td >{ }</td>
                    <td onClick={() => handleUpdate(orderNo)} >Update</td>
                    <td >Delete</td>
                </tr>
            </tbody>

        </div>
    )
}

export default ShipmentDisplay