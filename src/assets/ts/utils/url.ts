const getUrlParam = (param: string) => {
  const splitedHash = location.hash.split('?')

  const urlParams = new URLSearchParams(splitedHash[1])
  return urlParams.get(param)
}

type ValueType = string | number | boolean

const setUrlParam = (param: string, value: ValueType, customSearchParams = "") => {
  value = `${value}`
  const splitedHash = location.hash.split('?')

  const searchParams = new URLSearchParams(customSearchParams || splitedHash[1]);

  searchParams.set(param, value)

  history.pushState({}, "", `${location.pathname}${splitedHash[0]}?${searchParams.toString()}`)
}

const removeUrlParam = (param: string, customSearchParams = "") => {
  const splitedHash = location.hash.split('?')  
  const searchParams = new URLSearchParams(customSearchParams || splitedHash[1]);

  if (searchParams.has(param)) {
    searchParams.delete(param)

    history.pushState({}, "", `${location.pathname}${splitedHash[0]}?${searchParams.toString()}`)
  }
}

export {
  getUrlParam,
  setUrlParam,
  removeUrlParam
}