export const FormF = () => {
  return(
    <>
      <label className="font-medium text-gray-900 dark:text-gray-300 mt-7 text-xl mb-5">Si prefieres comprar en panaderías locales, ¿cuáles son las principales razones? (Selecciona todas las que apliquen)</label>
          <div className="flex items-center mb-4">
            <input type="checkbox" name='f1' value="Frescura" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="checkbox-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Frescura</label>
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" name='f2' value="Variedad" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="checkbox-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Variedad</label>
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" name='f3' value="Apoyo a negocios locales" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="checkbox-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Apoyo a negocios locales</label>
          </div>
          <div className="mb-5">
            <label  className=" block  text-sm font-medium text-gray-900 dark:text-white">Otros ....
            <input type="text" name='f4' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-3" />
            </label>
          </div>
    </>
  )
}