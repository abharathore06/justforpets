import React from 'react'
import Win from '../images/win1.png';
import Petcare from '../images/petcare.png'
import Winner from '../images/winner.png'
import '../Head/Head.css';
import { Grid, styled, Typography } from '@mui/material';
import { Carousel } from 'react-bootstrap';  

const Typo=styled(Typography)({
    marginTop:'200px',
    marginLeft: '150px',
    fontSize: '30px',
    fontFamily: 'Berkshire Swash, cursive',
    color:'#ffffff',
    textAlign:'center'
})
function Head() {
  return (
    <React.Fragment>
      
      <Grid className='gridclass' container maxWidth='xl' maxHeight='100vh' spacing={2} sx={{ background: 'linear-gradient(to left, #bdc3c7  , #2c3e50)', marginTop:'2px' }} >
     
        <Grid>
          <Typo>Everyone thinks they have the best pet. </Typo>
          <Typo sx={{ marginTop:'0px' }}>Let us decide!!</Typo>
          
        </Grid>
      <Grid xs={6}>
      <Carousel slide controls={false}>
              
              <Carousel.Item >
                <img style={{height:'500px', width:'800px'}} 
                  src={Win}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item >
                <img style={{height:'500px', width:'800px'}} 
                  src={Petcare}
                  alt="First slide"
                />
              </Carousel.Item>

              <Carousel.Item >
                <img style={{height:'500px', width:'800px'}} 
                  src={Winner}
                  alt="Second slide"
                /> 
              </Carousel.Item>

            </Carousel>
            
      </Grid>
      
      
    </Grid>





    {/* <Container maxWidth='xl' sx={{ background: 'linear-gradient(to right, #ff0084, #33001b)' }}>
        <Stack direction="row" spacing={2}>
          
            

            <Carousel fade controls={false}>
              
              <Carousel.Item>
                <img style={{height:'550px', width:'800px', overflow:'hidden'}} 
                  src={Win}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img style={{height:'550px', width:'800px', overflow:'hidden'}} 
                  src={Petcare}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img style={{height:'550px', width:'800px', overflow:'hidden'}} 
                  src={Pets}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img style={{height:'550px', width:'800px', overflow:'hidden'}} 
                  src={Winner}
                  alt="Second slide"
                /> 
              </Carousel.Item>
              <Carousel.Item>
                <img style={{height:'550px', width:'800px', overflow:'hidden'}}
                  src={Winner1}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
            
            <Stack direction="column" spacing={2}>
                <Typo>Everyone thinks they have the best pet. </Typo>
                <Typo>Let us decide!!</Typo>
            </Stack>
            
        </Stack>
        
    </Container> */}
    </React.Fragment>







    
  )
}

export default Head