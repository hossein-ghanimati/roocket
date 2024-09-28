import { FC, PropsWithChildren } from "react"
type CloserWrapperProps = {
  closerFuncs : () => void;
  isHidden : boolean;
  hiddenClass: string;
  customClass?: string;
}

const CloserWrapper: FC<PropsWithChildren<CloserWrapperProps>> = ({
  children,
  closerFuncs,
  isHidden,
  hiddenClass = "",
  customClass = ""
}) => {  
  return (
    <div
      className={`w-full h-screen fixed top-0 right-0 bottom-0 z-40 transition ${isHidden ? hiddenClass : ""} ${customClass}`}
      onClick={() => closerFuncs()}
    >
      {
        children
      }
    </div>
  )
}

export default CloserWrapper