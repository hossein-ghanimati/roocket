import {FC, PropsWithChildren} from "react"
import "@/assets/styles/site/courses/desktop-sort-btn.css"
type SortBtnProps = {
  title: string;
  id: string
  checkedID: string
  onChange : (id: string) => void;
}

const SortBtn: FC<PropsWithChildren<SortBtnProps>> = ({
  id,
  checkedID,
  onChange,
  title
}) => {
  return (
    <button>
      <label className="cursor-pointer">
        <input 
          type="radio" 
          name="desktop-sort-btn" 
          checked={id === checkedID} 
          className="sort-input hidden"
          onChange={() => onChange(id)}
        />
        <span className="sort-btn">
          {
            title
          }
        </span>
      </label>
    </button>
  )
}

export default SortBtn