const getUrlParam = (param: string) => {
  const urlParams = new URLSearchParams(location.search)
  return urlParams.get(param)
}

type ValueType = string | number | boolean

const setUrlParam = (param: string, value: ValueType, customSearchParams = "") => {
  value = `${value}`
  // const url = new URL(customUrl || location.href)
  const searchParams = new URLSearchParams(customSearchParams || location.search);

  searchParams.set(param, value)

  history.pushState({}, "", `${location.pathname}${location.hash}?${searchParams.toString()}`)
}

const removeUrlParam = (param: string, customSearchParams = "") => {
  // const url = new URL(customUrl || location.href)
  const searchParams = new URLSearchParams(customSearchParams || location.search);

  if (location.search.includes(param)) {
    searchParams.delete(param)

    history.pushState({}, "", `${location.pathname}${location.hash}?${searchParams.toString()}`)
  }
}

export {
  getUrlParam,
  setUrlParam,
  removeUrlParam
}