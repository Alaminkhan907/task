import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ShipmentDisplay from './ShipmentDisplay'



const ShipmenTable = () => {

    const [shipment, setShipment] = useState([])
    const [ modal , setModal] = useState(null);

    {/* useEffect(() => {
        fetch('Shipments.json')
            .then(res => res.json())
            .then(data => {
                setShipment(data)
                console.log(data)
            })

    }, []) */}

    useEffect(() => {
        async function getUser() {
            try {
                const response = await axios.get('Shipments.json');
                //console.log(response.data);
                setShipment(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getUser();
    }, [])

        //console.log(modal);
       
    return (
        <div >
            <table className="table table-striped table-hover">
                    <tr >
                        <th scope="col">Oder Number</th>
                        <th scope="col">Delivery Date</th>
                        <th scope="col">Customer</th>
                        <th scope="col">Tracking</th>
                        <th scope="col">Status</th>
                        <th scope="col">Consignee</th>
                    </tr>

                    {
                        shipment.map(shipment => <tr >
                            <td >{shipment.orderNo}</td>
                            <td >{shipment.date}</td>
                            <td >{shipment.customer}</td>
                            <td >{shipment.trackingNo}</td>
                            <td >{shipment.status}</td>
                            <td >{shipment.consignee}</td>
                            <button onClick={()=>setModal(shipment)} >Update</button>
                            <button >Delete</button>
                        </tr>
                        )
                    }
            </table>
            {modal  && <ShipmentDisplay modal={modal} ></ShipmentDisplay>}
        </div>
    )
}

export default ShipmenTable