import React from 'react'
import Modal from 'react-modal';

import {Form} from '../styles/Form.styled';
import {Div} from '../styles/Div.styled';
import {Title} from '../styles/Title.styled';
import {Button} from '../styles/Button.styled';


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

const ShipmentDisplay = ({ modal, modalIsOpen, closeModal }) => {
    const { orderNo, date, customer, trackingNo, status, consignee } = modal;
    console.log(modal);

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <Title>Shipment Details</Title>
                <Form>
                    <Div>
                        <label for="orderNo">orderNo</label>
                        <input type="text" name="orderNo" disabled value={orderNo} className="" /></Div>
                    <Div>
                        <label for="date">date</label>
                        <input type="text" name="date" disabled value={date} className="" /></Div>
                    <Div>
                        <label for="customer">customer</label>
                        <input type="email" name="customer" disabled value={customer} className="" /></Div>
                    <Div>
                        <label for="trackingNo">trackingNo</label>
                        <input type="email" name="trackingNo" disabled value={trackingNo} className="" /></Div>
                    <Div>
                        <label for="consignee">consignee</label>
                        <input type="email" name="consignee" disabled value={consignee} className="" /></Div>
                    <Div>
                        <label for="status">status</label>
                        <input type="email" name="status" disabled value={status} className="" /></Div>

                </Form>
                <Button onClick={closeModal}>Close</Button>
            </Modal>
        </div>
    )
}

export default ShipmentDisplay