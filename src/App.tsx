import './App.css'
import {useState} from 'react' 

interface Product {
  title: string 
  description: string
  id: number
  image:string 
  section:string
  price:number
}

function App() {

  const [pText, setPtext] = useState<Product[]>([])

  return (
    <>
      <h1>HOLA MUNDO</h1> 
      <button onClick={async () => {
       try {
       const response = await fetch('http://127.0.0.1:3000/products'); 
        const data = await response.json();
        setPtext(data.products)
        console.log(data.products)
       } catch (error) {
        console.log(error)
       }
      }}>Conectar servidor</button> 

        {pText.map(product => (
          <div key={product.id}>
            <h1>{product.section}</h1>  
            <img  src={product.image} alt="" />
          </div>
        ))}
    </>
  )
}

export default App
  