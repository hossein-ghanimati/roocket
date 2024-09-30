const GoTopBtn = () => {
  return (
    <button
      onClick={() => scrollTo(0, 0)}
      className="text-white font-bold w-full bg-green-500 px-4 h-14 leading-7 cursor-pointer select-none rounded-full xs:hidden mb-10 mt-2"
    >برو بالا</button>
  )
}

export default GoTopBtn