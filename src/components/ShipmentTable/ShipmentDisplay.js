import React, { useState } from 'react'
import Modal from 'react-modal';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');

const ShipmentDisplay = ({ shipment }) => {
    const { orderNo, date, customer, trackingNo, status } = shipment;


    const handleUpdate = (selectedItem) => {
        console.log(selectedItem);

    }
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>

            <tbody>
                <tr onClick={openModal}>
                    <td >{orderNo}</td>
                    <td >{date}</td>
                    <td >{customer}</td>
                    <td >{trackingNo}</td>
                    <td >{status}</td>
                    <td >{ }</td>
                    <td onClick={handleUpdate} >Update</td>
                    <td >Delete</td>
                </tr>
            </tbody>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button onClick={closeModal}>close</button>
                <div>I am a modal</div>
                <form>
                    <input />
                    <button>{shipment.orderNo}</button>
                    <button>{shipment.date}</button>
                    <button>{shipment.customer}</button>
                    <button>{shipment.trackingNo}</button>
                    <button>{shipment.status}</button>
                </form>
            </Modal>
        </div>
    )
}

export default ShipmentDisplay