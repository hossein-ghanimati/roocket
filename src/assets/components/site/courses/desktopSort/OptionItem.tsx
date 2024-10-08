import SortOptionsType from '@/assets/types/site/sortOptions.type';
import { FC } from 'react'

type OptionItemProps = {
  id: SortOptionsType;
  checkedID: string;
  title: string;
  onChange: (id: SortOptionsType) => void
}

const OptionItem: FC<OptionItemProps> = ({
  id,
  title,
  checkedID,
  onChange
}) => {
  return (
    <label>
      <input 
        type="radio" 
        name="desktop-sort-input" 
        checked={id === checkedID}
        onChange={() => onChange(id)}
        className='desktop-sort-input hidden'
      />
      <span 
        className={`sort-btn transition-all cursor-pointer leading-[60px] inline-block border-y-2 text-sm  border-blue-600 dark:border-blue-400 ${id === checkedID ? "text-blue-600 dark:text-blue-400" : "!border-opacity-0"}`}
      >
        {
          title
        }
      </span>
    </label>
  )
}

export default OptionItem