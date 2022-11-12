import { experimental_sx as sx } from '@mui/material/styles'

export default (theme: any) => ({
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: 'Open Sans',
          fontSize: '1.2em',
          '@keyframes gradient': {
            '0%': {
              backgroundPosition: '0% 50%',
            },
            '50%': {
              backgroundPosition: '50% 50%',
            },
            '100%': {
              backgroundPosition: '100% 50%',
            },
          },
          '& a': {
            color: '#000',
            textDecoration: "none",
            "&.active": {
              borderRadius: '2em', 
              border: '1px solid #000'
            },
            '&:hover': {
              color: '#fff',
            },
          },
          '&:hover': {
            borderRadius: '10em',
            color: '#fff',
            background:
              'linear-gradient(90deg, orange, orange, orange, orange,  #4a3918, #4a3918)',
            backgroundSize: '400% 400%',
            backgroundPosition: '100% 50%',
            animation: 'gradient .5s linear',
            '& a': { 
              color: '#fff',
            }
          },
        },
      },
    },
  },
})
