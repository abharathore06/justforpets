import { Grid, Typography } from '@mui/material'
import React from 'react'
import Dogshow from '../images/dogshow.jpg'
import { styled } from '@mui/material';
import '../About/About.css';

const Typo=styled(Typography)({
    marginTop:'100px',
    marginBottom:'80px',
    fontSize: '30px',
    fontFamily: 'Berkshire Swash, cursive',
    color:'#black',
    textAlign:'center'
})

const TypoContent=styled(Typography)({
    marginTop:'200px',
    marginRight:'100px',
    fontSize: '20px',
    fontFamily: 'PT Serif, serif',
    color:'#black',
    textAlign:'center',
})

function About() {
  return (
    <React.Fragment>

        <Typo>About US</Typo>


    <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={6} md={8}>
            <img className='aboutimage' src={Dogshow} alt="Dogshow" />
        </Grid>
        <Grid xs={6} md={4}>
            <TypoContent>Reprehenderit proident velit occaecat esse qui ipsum sunt id cillum qui reprehenderit non. Proident deserunt sit incididunt proident irure aute sint nostrud magna enim. Nulla mollit anim id ex aliqua ullamco do qui voluptate aute.</TypoContent>
        </Grid>
    </Grid>
    </React.Fragment>
    
  )
}

export default About