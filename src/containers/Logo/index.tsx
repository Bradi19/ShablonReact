import { Grid } from '@mui/material'
import RustModern from '../../assets/images/RustModern.png'
const Logo = () => {
  return (
    <Grid
      sx={{ '& img': { maxHeight: '5em' } }}>
      <img src={RustModern} alt="Rust Modern" />
    </Grid>
  )
}
export default Logo
