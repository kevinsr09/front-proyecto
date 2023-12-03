export const FormC = () => {
  return (
    <>
      <label className="font-medium text-gray-900 dark:text-gray-300 mt-7 text-xl mb-5">¿Cuáles son tus tipos de pan favoritos? (Selecciona todos los que apliquen)</label>
          <div className="flex items-center mb-4">
            <input type="checkbox" name='c1' value="Pan blanco" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="checkbox-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Blanco</label>
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" name='c2' value="Pan integral" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="checkbox-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Integral</label>
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" name='c3' value="Baguettes" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="checkbox-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Baguettes</label>
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" name='c4' value="Pan de avena" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="checkbox-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">De Avena</label>
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" name='c5' value="Pan de leche" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="checkbox-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">De leche</label>
          </div>

          <div className="mb-5">
            <label htmlFor="base-input" className=" block  text-sm font-medium text-gray-900 dark:text-white">Otros ....
            <input type="text" name='c6' id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-3" 
            placeholder='Croissant, chicharron, etc'/>
            </label>
          </div>
    </>
  )
}