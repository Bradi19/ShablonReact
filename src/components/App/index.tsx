import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Header from '../Header'
import SizeContext from '../../context/SizeContext'

const App = ({ ...props }: any) => {
  const [size, setSize] = useState([0, 0])
  const updateSize = () => {
    console.log(window.innerWidth);

    setSize([window.innerWidth, window.innerHeight])
  }
  useEffect(() => {
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return (
    <Grid item xs={12}>
      <SizeContext.Provider value={{ ...size }}>
        <Grid>
          <Header />
        </Grid>
      </SizeContext.Provider>
    </Grid>
  )
}

export default App
