import { Container } from '@mui/material'
import React from 'react'

import Construccion from '../../assets/svg/building.svg'

export const HomePage = () => {
  return (
    <Container sx={{height: '90vh', display: 'flex', justifyContent: 'center'}}>
      <img 
        src={ Construccion }
        alt='en-construccion'
        style={{
          display: 'block',
          width: '400px',
          maxWidth: '90%'
        }}
      />
    </Container>
  )
}
