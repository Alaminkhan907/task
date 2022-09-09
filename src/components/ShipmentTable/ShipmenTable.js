import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ShipmentDisplay from './ShipmentDisplay'


const ShipmenTable = () => {

    const [shipment, setShipment] = useState([])
    
    useEffect(() => {
        fetch('Shipments.json')
            .then(res => res.json())
            .then(data => {
                setShipment(data)
                //console.log(data)
            })

    }, [])

    return (
        <div className='container'>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">Oder Number</th>
                        <th scope="col">Delivery Date</th>
                        <th scope="col">Customer</th>
                        <th scope="col">Tracking</th>
                        <th scope="col">Status</th>
                        <th scope="col">Consignee</th>

                    </tr>

                    {
                        shipment.map(shipment => <ShipmentDisplay key={shipment.orderNo} shipment={shipment}></ShipmentDisplay>)
                    }
                </thead>
            </table>
        </div>
    )
}

export default ShipmenTable