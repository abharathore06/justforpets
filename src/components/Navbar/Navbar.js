import { Container } from '@mui/system'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import Logo from '../images/logo.png';
import '../Navbar/Navbar.css'
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material';

const LogButton=styled(Button)({
  padding: '8px 23px',
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


const SignButton=styled(Button)({
  padding: '8px 23px',
  backgroundColor: '#e63c83',
  fontSize: 12,
  fontWeight: 'bold',
  borderRadius: '30px',
  fontFamily: 'PT Serif, serif',
  '&:hover': {
    border: '1px solid',
    backgroundColor: '#ffffff',
    borderColor: '#e63c83',
    color: '#e63c83',
    transition: '1ms' 
  },
})


const NavTab = styled(Tab)({
  backgroundColor: '#ffffff',
  fontSize: '14px',
  padding: '2px',
  fontFamily: 'PT Serif, serif',
  '&:hover': {
    border: '1px solid',
    backgroundColor: '#ffffff',
    borderColor: '#e63c83',
    borderRadius: '30px',
    color: '#e63c83',
    transition: '1ms',
    padding: '2px', 
  },
  // '&:hover': {
  //   border: '2px solid',
  //   backgroundColor: '#e63c83',
  //   borderColor: '#e63c83',
  //   borderRadius: '30px',
  //   color: '#ffffff',
  //   transition: '1ms',
  //   padding: '2px', 
  // },
})
function Navbar() {
  return (
    <Container maxWidth='xl'>
        <AppBar position="static" elevation={0} 
        sx={{
            bgcolor: '#ffffff',
            height: '10vh',
            marginTop: '1%'
        }}>
            <Toolbar>
                <img className='logo' src={Logo} alt="Just For Pets!" />

                <Tabs sx={{ marginLeft: 'auto'}}>
                  <NavTab label="Home" />
                  <NavTab label="About" />
                  <NavTab label="Events" />
                  <NavTab label="Gallery" />
                  <NavTab label="Contact" />
                </Tabs>

                <LogButton sx={{ marginLeft:'auto'}} variant='text'>Login</LogButton>
                <SignButton sx={{ marginLeft:'10px'}} variant='contained'>Sign Up</SignButton>



        
                
            </Toolbar>
            
 
        </AppBar>
    </Container>
  )
}

export default Navbar