import { Grid } from '@mui/material'
import HomeImage from '../../assets/images/Home.jpg'

const Home = ({ ...props }) => {
  return (
    <Grid sx={{ overflow: 'none',"& img": { filter: 'grayscale(1)',height: "100vh", width: "100%" } }}> 
      <img src={HomeImage} alt="Home" />
    </Grid>
  )
}
export default Home
