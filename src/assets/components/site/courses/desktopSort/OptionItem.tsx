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
      />
      <button className='sort-btn'>

      </button>
    </label>
  )
}

export default OptionItem