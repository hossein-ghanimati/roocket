
import { getMenuItems } from '@/assets/services/axios/requests/shared/menuItems'
import { useQuery } from 'react-query'

const useMenuItems = () => {
  const {data: menuItems} = useQuery(["menuItems"], getMenuItems)
  

  return {menuItems}
}

export default useMenuItems