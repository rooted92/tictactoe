import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const GameOverModal = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(true);
    // const handleShow = () => setShow(true);

    return (
    <>
        <Modal className='modalBG' show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h1>Your are not perfect</h1>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    </>
    );
}

export default GameOverModal;