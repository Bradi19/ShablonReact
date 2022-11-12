import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Header from '../Header'
import SizeContext from '../../context/SizeContext'
import {
  Route,
  Routes,
} from 'react-router-dom'
import Home from '../Home'
import { useTranslation } from 'react-i18next'

const App = ({ ...props }: any) => {
  const [size, setSize] = useState([0, 0])
  const { t, i18n } = useTranslation()
  useEffect(() => {
    const lang: any = window?.localStorage.getItem('language')
    i18n.changeLanguage(lang)
  }, [])
  
  const updateSize = () => {
    setSize([window.innerWidth, window.innerHeight])
  }
  useEffect(() => {
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return (
    <Grid sx={{ overflow: 'hidden' }} item xs={12}>
      <SizeContext.Provider value={{ ...size }}>
        <Grid
          sx={{ backgroundColor: '#ffffff6b' }}
          justifyContent="center"
          alignItems="center"
          container
          item
          xs={12}
          zIndex={2}
          position="fixed"
        >
          <Header />
        </Grid>
        <Grid maxHeight="100vh">
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Grid>
      </SizeContext.Provider>
    </Grid>
  )
}

export default App
