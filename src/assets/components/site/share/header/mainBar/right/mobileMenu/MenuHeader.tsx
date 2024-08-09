import { FormEventHandler, memo, useState } from "react"
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
type MenuHeaderProps = {
  onClose: Function;
}

const MenuHeader = memo(({onClose}: MenuHeaderProps) => {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState("")

  const formSubmitHandler: FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault()
    navigate(`search/${inputValue.trim()}`)
    onClose()
  }


  return (
    <div>
      <div dir="ltr">
        <button onClick={() => onClose()}>
          <IoMdClose className="size-6"/>
        </button>
      </div>

      <Link to="/" className="mt-1 flex items-center justify-center">
        <img className="dark:hidden inline-block w-36" src="/public/image/header/logo.svg" alt="logo" />
        <img className="hidden dark:inline-block w-36" src="/public/image/header/dark-logo.svg" alt="dark-logo" />
      </Link>

      <form className="mt-3 w-full h-10 mx-auto relative" onSubmit={formSubmitHandler}>
          <div 
            className={`py-1 w-full bg-custom-white dark:bg-gray-800  absolute inset-0 rounded-md`}
          >
            <label htmlFor="main-search-input" className="w-full flex items-center justify-between gap-2 px-2 h-full">              
              <input
                id="main-search-input" 
                type="text"
                placeholder="جستجو کنید..."
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                className="bg-transparent w-8/12 border-none outline-none"
              />
              <button type="submit"><CiSearch className="size-5"/></button>
            </label>
          </div>
      </form>
    </div>
  )
})

export default MenuHeader