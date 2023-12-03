export const FormA = () => {
  return (
    <>
    <label htmlFor="countries" className=" mt-7 block mb-2 text-xl font-medium text-gray-900 dark:text-white">¿Con qué frecuencia compras pan en una semana?</label>
    <select id="countries" name="a" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>

    <option value="0">Selecciona una opción</option>
    <option value="7">A diario</option>
    <option value="3">2-3 veces por semana</option>
    <option value="1">Una vez por semana</option>
    <option value="0">Menos de una vez por semana</option>
  </select>
    </>
  )
}