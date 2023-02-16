import React from 'react'
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { Modal } from 'react-bootstrap';

const RegButton=styled(Button)({
  padding: '5px 13px',
  color: '#e63c83',
  fontSize: 12,
  fontWeight: 'bold',
  border: '1px solid',
  borderRadius: '30px',
  fontFamily: 'PT Serif, serif',
  '&:hover': {  
    borderColor: '#ffffff',
    backgroundColor: '#e63c83',
    color: '#ffffff',
    transition: '1ms' 
  
  },
})
function CardButton() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <React.Fragment>
      <RegButton onClick={() => setModalShow(true)} variant='text'>Register</RegButton>
      <Modal
      show={modalShow}
        onHide={() => setModalShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Registration Form
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
     
    </Modal>
    </React.Fragment>
    
  )
}

export default CardButton