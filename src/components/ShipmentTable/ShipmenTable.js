import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ShipmentDisplay from './ShipmentDisplay'
import {Table} from '../styles/Table.styled';




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

    const [modalIsOpen, setIsOpen] = useState(false);
    
    function openModal() {
        setIsOpen(true);
        console.log('Modal opened');
    }
    function closeModal() {
        setIsOpen(false);
    }

    const handleDelete = (event) =>{
        console.log(event);
        const remaining = shipment.filter(s =>s.orderNo !== event);
        setShipment(remaining);
    }
    
       
    return (
        <div style={{display: 'flex' ,justifyContent: 'center'}}>
            <Table> 
                <thead>
                    <tr class="head-data">
                        <td>Oder Number</td>
                        <td>Delivery Date</td>
                        <td>Customer</td>
                        <td>Tracking</td>
                        <td>Status</td>
                        <td class="last-td">Consignee</td>
                        <td></td>
                    </tr>
                </thead>
                
                <tbody>
                    {
                        shipment.map(shipment => <tr>
                            <td>{shipment.orderNo}</td>
                            <td>{shipment.date}</td>
                            <td>{shipment.customer}</td>
                            <td>{shipment.trackingNo}</td>
                            <td>{shipment.status}</td>
                            <td class="last-td">{shipment.consignee}</td>
                            <td>
                                <button  onClick={()=>{openModal();setModal(shipment);}}>Update</button>
                                <button  onClick={()=>handleDelete(shipment.orderNo)}>Delete</button>
                            </td>
                        </tr>
                        )
                    }
                </tbody>  
            </Table>
            {modal  &&<ShipmentDisplay modal={modal} modalIsOpen={modalIsOpen} closeModal={closeModal} ></ShipmentDisplay>}
        </div>
    )
}

export default ShipmenTable