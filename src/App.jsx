import Menu from './components/Menu'
import Header from './components/Header'
import Trivia from './components/Trivia'
import Galeria from './components/Galeria'
import Contacto from './components/Contacto'

export default function App() {
  return(
    <section className="contenedor">
      <Menu/>
      <Header/>
      <Trivia/>
      <Galeria/>
      <Contacto/>
    </section>
  )
}