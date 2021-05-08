import Logo from '../img/Logo.png'

export default function Menu(){
    return(
        <>
        <nav className="escritorio">
            <div className="logo">
                <img src={Logo} alt="Logo" width="50px"/>
            </div>
            <div className="enlaces">
                <a href="../public/index.html">Inicio</a>
                <a href="#trivia">Trivia</a>
                <a href="#galeria">Galería</a>
                <a href="#contacto">Contacto</a>
            </div>
        </nav>
        </>
    )
}