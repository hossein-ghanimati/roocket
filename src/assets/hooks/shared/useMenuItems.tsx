
import { getMenuItems } from '@/assets/services/axios/requests/shared/menuItems'
import { sortByFirst } from '@/assets/ts/utils/calculation';
import MenuItemType from '@/assets/types/site/menuItem.type';
import { useQuery } from 'react-query'

const useMenuItems = () => {
  const {data: menuItems} = useQuery(["menuItems"], getMenuItems, {
    select: (queryData) => {
      const data: MenuItemType[] = queryData || []
      return sortByFirst(data) ;
    }
  })
  

  return {menuItems} || null
}

export default useMenuItems