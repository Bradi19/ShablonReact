import { MenuItem, MenuList } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Menu = ({ ...props }: any) => {
  const { t } = useTranslation()
  return (
    <MenuList
      sx={{
        display: 'flex',
        justifyContent: 'center',
        m: 'auto 5em',
        maxWidth: '50em',
        width: '100%',
      }}>
      <MenuItem><Link to={`/`}>{t('app.header.menu.home')}</Link></MenuItem>
      <MenuItem><Link to={`/`}>{t('app.header.menu.packets')}</Link></MenuItem>
      <MenuItem><Link to={`/`}>{t('app.header.menu.about')}</Link></MenuItem>
      <MenuItem><Link to={`/`}>{t('app.header.menu.contacts')}</Link></MenuItem>
    </MenuList>
  )
}
export default Menu
