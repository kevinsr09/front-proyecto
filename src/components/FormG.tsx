export const FormG = () => {
  return(
    <>
      <label htmlFor="g" className="mt-7 block mb-2 text-xl  font-medium text-gray-900 dark:text-white">¿Hay algo más que te gustaría compartir sobre tus hábitos de compra de pan o tus preferencias? (Campo abierto)</label>
          <input name="g" id="g" type="text" className=" shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"/>

          <label className="font-medium text-gray-900 dark:text-gray-300 mt-7 text-xl mb-5">Gracias por participar en nuestra encuesta. ¿Te gustaría recibir actualizaciones sobre nuestras ofertas especiales y productos?</label>
          <div className="flex items-center mb-4">
            <input type="radio" name="h" value="si" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
            <label className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
            Sí
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input type="radio" name="h" value="no" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
            <label  className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
            no
            </label>
          </div>
    </>
  )
}