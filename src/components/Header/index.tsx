import { Grid } from '@mui/material'
import Logo from '../../containers/Logo'
import Menu from '../../containers/Menu'
import MobileMenu from '../../containers/MobileMenu'
import SizeContext from '../../context/SizeContext'
import SwitchLanguage from '../SwitchLanguage'

const Header = ({ ...props }: any) => {
  return (
    <SizeContext.Consumer>
      {(size: any) => {               
        return (
        <Grid container item xs={8} maxHeight='5em' width="100%">
          <Logo />
          {size[0] > 600 && <Menu />}
          {size[0] < 600 && <MobileMenu />}
          <SwitchLanguage />
        </Grid>
      )}}
    </SizeContext.Consumer>
  )
}
export default Header
