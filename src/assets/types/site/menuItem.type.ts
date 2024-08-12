type SubmenuType = {
  _id: string;
  title: string;
  href: string;
  parent: string;
  createdAt: string;
  updatedAt: string;
  __v: number
}

type MenuItemType = {
  _id: string;
  title: string;
  href: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  submenus: SubmenuType[]
}

export default MenuItemType