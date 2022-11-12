import { MenuItem, MenuList } from '@mui/material'
import { useTranslation } from 'react-i18next';

const MobileMenu = ({ ...props }: any) => {
  const { t } = useTranslation();

  return (
    <MenuList>
      <MenuItem>{t('app.header.menu.home')}</MenuItem>
      <MenuItem>{t('app.header.menu.packets')}</MenuItem>
      <MenuItem>{t('app.header.menu.about')}</MenuItem>
      <MenuItem>{t('app.header.menu.contacts')}</MenuItem>
    </MenuList>
  )
}
export default MobileMenu
