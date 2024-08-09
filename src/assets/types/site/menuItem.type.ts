type MenuItemType = {
  id: `${string}-${string}-${string}-${string}`
  title: string;
  href: string;
  subItems?: {
    id: `${string}-${string}-${string}-${string}`
    title: string;
    href: string;
  }[] | null
}

export default MenuItemType