import { FC, PropsWithChildren, memo } from "react"

interface IconProps extends PropsWithChildren {
  onClick?: () => void; 
}


const Icon: FC<IconProps> = memo(({children, onClick}) => {

  return (
    <li className={`${onClick ? "size-11" : "size-10"} rounded-full bg-custom-white dark:bg-gray-800 p-2 flex items-center justify-center cursor-pointer`} onClick={() => onClick && onClick()}>
      {children}
    </li>
  )
})


export default Icon