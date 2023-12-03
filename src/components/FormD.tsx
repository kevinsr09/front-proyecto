export const FormD = () => {
  return (
    <>
      <label className="font-medium text-gray-900 dark:text-gray-300 mt-7 text-xl mb-5">¿Prefieres comprar pan fresco en una panadería local o en una tienda de comestibles?</label>
          <div className="flex items-center mb-4">
            <input id="country-option-1" type="radio" name="d" value="Panaderia local" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" defaultChecked/>
            <label htmlFor="country-option-1" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
            Panadería local
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input id="country-option-1" type="radio" name="d" value="Tienda de comestibles" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="country-option-1" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
            Tienda de comestibles
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input id="country-option-1" type="radio" name="d" value="Ambos" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="country-option-1" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
              Ambos
            </label>
          </div>
    </>
  )
}