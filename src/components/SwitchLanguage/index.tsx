import { Divider, MenuItem, MenuList } from '@mui/material'
import { useTranslation } from 'react-i18next'

const SwitchLanguage = ({ ...props }: any) => {
  const lang = window.localStorage.getItem('i18nextLng')
  const { i18n } = useTranslation()
  const changeLamg = (lang: any) => {
    console.log(lang);
    
    window.localStorage.setItem('language', lang)
    i18n.changeLanguage(lang)
  }
  return (
    <MenuList
      sx={{
        display: 'flex',
        justifyContent: 'center',
        maxHeight: '2em',
        m: 'auto',
      }}
    >
      <MenuItem
        className={lang === 'en' ? 'active' : ''}
        onClick={() => changeLamg('en')}
      >
        EN
      </MenuItem>
      <Divider sx={{ height: '1.1em' }} orientation="vertical" />
      <MenuItem
        className={lang === 'ua' ? 'active' : ''}
        onClick={() => changeLamg('ua')}
      >
        UA
      </MenuItem>
      <Divider sx={{ height: '1.1em' }} orientation="vertical" />
      <MenuItem
        className={lang === 'pl' ? 'active' : ''}
        onClick={() => changeLamg('pl')}
      >
        PL
      </MenuItem>
    </MenuList>
  )
}
export default SwitchLanguage
