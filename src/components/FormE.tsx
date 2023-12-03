export const FormE = () => {
  return(
    <>
      <label className="font-medium text-gray-900 dark:text-gray-300 mt-7 text-xl mb-5">¿Crees que debería haber más panaderías en tu área?</label>
          <div className="flex items-center mb-4">
            <input  type="radio" name="e" value="si" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="country-option-1" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
            Sí
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input type="radio" name="e" value="no" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="country-option-1" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
            no
            </label>
          </div>
    </>
  )
}