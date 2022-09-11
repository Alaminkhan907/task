import React from 'react'
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
                <div>Shipment Details</div>
                <form>
                    <div>
                        <label for="orderNo">orderNo</label>
                        <input type="text" name="orderNo" disabled value={orderNo} className="" /></div>
                    <div>
                        <label for="date">date</label>
                        <input type="text" name="date" disabled value={date} className="" /></div>
                    <div>
                        <label for="customer">customer</label>
                        <input type="email" name="customer" disabled value={customer} className="" /></div>
                    <div>
                        <label for="trackingNo">trackingNo</label>
                        <input type="email" name="trackingNo" disabled value={trackingNo} className="" /></div>
                    <div>
                        <label for="consignee">consignee</label>
                        <input type="email" name="consignee" disabled value={consignee} className="" /></div>
                    <div>
                        <label for="status">status</label>
                        <input type="email" name="status" disabled value={status} className="" /></div>

                </form>
                <button onClick={closeModal}>close</button>
            </Modal>
        </div>
    )
}

export default ShipmentDisplay