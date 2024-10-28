import  { useEffect } from 'react'

const useDocTitle = (title: string, dep: any[] = []) => {
  useEffect(() => {
    document.title = title;
  }, dep)
}

export default useDocTitle