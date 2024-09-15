import React, { FC } from 'react'

type OptionItemProps = {
  id: string;
  checkedID: string;
  title: string;
  onChange: (id: string) => void
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
        className={`sort-btn transition-all cursor-pointer leading-[60px] inline-block border-y-2 text-sm  border-blue-400 ${id === checkedID ? "text-blue-400" : "border-opacity-0"}`}
      >
        {
          title
        }
      </span>
    </label>
  )
}

export default OptionItem