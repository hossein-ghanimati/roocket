import { getUrlParam, setUrlParam } from "@/assets/ts/utils/url"
import SortOptionsType from "@/assets/types/site/sortOptions.type"
import { Dispatch, FC, PropsWithChildren, SetStateAction, createContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";

type CoursesSortContextType = {
  sortOption: SortOptionsType;
  setOption: (options: SortOptionsType) => void
}

const CoursesSortContext = createContext<CoursesSortContextType | null>(null)

const CoursesSortContextProvider: FC<PropsWithChildren> = ({children}) => {
  const [sortOption, setSortOption] = useState<SortOptionsType>(getUrlParam("sort") as SortOptionsType || "all")
  const params = useParams();

  
  const setOption = (option: SortOptionsType) => {
    setUrlParam("page", 1)
    setSortOption(option)
    setUrlParam("sort", option)
    
  }

  useEffect(() => {    
    setSortOption("all")
  }, [params?.category])

  return (
    <CoursesSortContext.Provider value={{sortOption, setOption}}>
      {
        children
      }
    </CoursesSortContext.Provider>
  )
}

export {
  CoursesSortContext,
  CoursesSortContextProvider
}