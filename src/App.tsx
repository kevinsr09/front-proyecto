import './App.css'

function App() {

  const handleSubmit = async (event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    if(!(event.target instanceof HTMLFormElement))return
    const form = new FormData(event.target)
    const  a = form.get("a")
    const  b = form.get("b")
    const  c1 = form.get("c1")
    const  c2 = form.get("c2")
    const  c3 = form.get("c3")
    const  c4 = form.get("c4")
    const  c5 = form.get("c5")
    const  c6 = form.get("c6")
    const  d = form.get("d")
    const  e = form.get("e")
    const  f1 = form.get("f1")
    const  f2 = form.get("f2")
    const  f3 = form.get("f3")
    const  f4 = form.get("f4")
    const  g = form.get("g")
    const  h = form.get("h")
    const response = await fetch("https://backend-proyecto-n83q.onrender.com/encuesta",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        a,b,c: (c1?c1+", ":"")+(c2?c2+", ":"")+(c3?c3+", ":"")+(c4?c4+", ":"")+(c5?c5+", ":"")+(c6?c6:""),d, e, f: (f1?f1+", ":"")+(f2?f2+", ":"")+(f3?f3+", ":"")+(f4?f4:""), g, h
      })

      
    })
    if (response.ok){
      alert("Encuesta enviada")
    }

    
  }

  return (
    <main className='container m-auto max-w-5xl'>
      <form onSubmit={handleSubmit} className='flex  flex-col'>
        
        <label htmlFor="countries" className=" mt-7 block mb-2 text-xl font-medium text-gray-900 dark:text-white">¿Con qué frecuencia compras pan en una semana?</label>
          <select id="countries" name="a" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

          <option value="0">Selecciona una opción</option>
          <option value="7">A diario</option>
          <option value="3">2-3 veces por semana</option>
          <option value="1">Una vez por semana</option>
          <option value="0">Menos de una vez por semana</option>
        </select>

        <label htmlFor="b" className="mt-7 block mb-2 text-xl  font-medium text-gray-900 dark:text-white">En promedio, ¿cuánto dinero gasta comprando pan cada vez? </label>
        <input name="b" type="number" className=" shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />

        
        <label className="font-medium text-gray-900 dark:text-gray-300 mt-7 text-xl mb-5">¿Cuáles son tus tipos de pan favoritos? (Selecciona todos los que apliquen)</label>
        <div className="flex items-center mb-4">
          <input type="checkbox" name='c1' value="Pan blanco" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="checkbox-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pan blanco</label>
        </div>
        <div className="flex items-center mb-4">
          <input type="checkbox" name='c2' value="Pan integral" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="checkbox-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pan integral</label>
        </div>
        <div className="flex items-center mb-4">
          <input type="checkbox" name='c3' value="Baguettes" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="checkbox-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Baguettes</label>
        </div>
        <div className="flex items-center mb-4">
          <input type="checkbox" name='c4' value="Pan de avena" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="checkbox-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pan de avena</label>
        </div>
        <div className="flex items-center mb-4">
          <input type="checkbox" name='c5' value="Pan de leche" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="checkbox-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pan de leche</label>
        </div>

        <div className="mb-5">
          <label htmlFor="base-input" className=" block  text-sm font-medium text-gray-900 dark:text-white">Otros ....
          <input type="text" name='c6' id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-3" />
          </label>
        </div>

        <label className="font-medium text-gray-900 dark:text-gray-300 mt-7 text-xl mb-5">¿Prefieres comprar pan fresco en una panadería local o en una tienda de comestibles?</label>
        <div className="flex items-center mb-4">
          <input id="country-option-1" type="radio" name="d" value="Panadería local" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
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

        

       
              
        <button className='block mt-10 '>Enviar</button>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </form >

    </main>
  )
}

export default App
