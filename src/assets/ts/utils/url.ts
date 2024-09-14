const getUrlParam = (param: string) => {
  const urlParams = new URLSearchParams(location.search)
  return urlParams.get(param)
}

const setUrlParam = (param: string, value: string) => {
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