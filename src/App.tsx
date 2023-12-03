import './App.css'
import { FormA } from './components/FormA'
import { FormB } from './components/FormB'
import { FormC } from './components/FormC'
import { FormD } from './components/FormD'
import { FormE } from './components/FormE'
import { FormF } from './components/FormF'
import { FormG } from './components/FormG'
import { Header } from './components/Header'

function App() {

  const clear = (arra: string[]):string[]=>{
    
    return arra.map((el)=>el.toLowerCase().replace(/pan /g ,"").replace(/de /g, "").replace(/la /g, "").replace(/\s/g, ""))

  }

  const clearForm = (arra: string[]):string[] =>{
    return clear(arra.filter((item)=>item))
  }

  const clearLastItemsForm = (item: string):string[] =>{
    return clear(item.split(","))
  }

  const handleSubmit = async (event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault()


    if(!(event.target instanceof HTMLFormElement))return
    const form = new FormData(event.target)

    
    
    const  a = form.get("a")
    const  b = form.get("b")
    const  c1 = form.get("c1") as string
    const  c2 = form.get("c2")as string
    const  c3 = form.get("c3")as string
    const  c4 = form.get("c4")as string
    const  c5 = form.get("c5")as string
    // eslint-disable-next-line @typescript-eslint/ban-types
    const  c6 = form.get("c6")as String
    const  d = form.get("d")
    const  e = form.get("e")
    const  f1 = form.get("f1")as string
    const  f2 = form.get("f2")as string
    const  f3 = form.get("f3")as string
    const  f4 = form.get("f4")as string
    const  g = form.get("g")
    const  h = form.get("h")

    const arrayC = c6 ? [...clearForm([c1,c2,c3,c4,c5,] as string[]), ...clearLastItemsForm(c6 as string)] : [...clearForm([c1,c2,c3,c4,c5,] as string[])]

    const arrayF = f4? [...clearForm([f1,f2,f3,] as string[]), ...clearLastItemsForm(f4 as string)] : [...clearForm([f1,f2,f3,] as string[])]

    // const test = "http://localhost:3000/api/v1/encuesta"
    const prod = "https://backend-proyecto-n83q.onrender.com/api/v1/encuesta"
    const response = await fetch(prod,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        frecuencia_compra:Number(a),
        gasto_promedio:Number(b),
        panes_favoritos: arrayC,
        lugar_pref_compra_pan:d,
        opinion_panaderias_area: e,
        razones_pref_panaderias_locales: arrayF, 
        comentarios_habitos_compra_pan: g,
        acepta_ofertas_actualizaciones: h
      })

      
    })
    if (!response.ok){
      alert("Ha ocurrido un problema...\nVuelve a enviar la encuesta.")
    }
    alert("Encuesta Enviada.")

    
  }

  return (
    <>
      <Header/>
      
      <main className='container m-auto max-w-5xl'>
        <form onSubmit={handleSubmit} className='flex  flex-col'>
          
          <FormA/>
          <FormB/>
          <FormC/>
          <FormD/>
          <FormE/>
          <FormF/>
          <FormG/>    
       
          <button className='block mt-10 '>Enviar</button>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </form >


      </main>
    </>
  )
}

export default App
