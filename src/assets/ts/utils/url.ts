const getUrlParam = (param: string) => {
  const urlParams = new URLSearchParams(location.search)
  return urlParams.get(param)
}

type ValueType = string | number | boolean

const setUrlParam = (param: string, value: ValueType) => {
  value = `${value}`
  const url = new URL(location.href)
  const searchParams = url.searchParams;

  searchParams.set(param, value)
  url.search = searchParams.toString()

  history.pushState({}, "", url.toString())
}

export{
  getUrlParam,
  setUrlParam 
}