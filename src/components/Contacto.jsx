import {useState} from 'react'
import {isEmpty} from 'validator'
import Swal from 'sweetalert2'

export default function Contacto(){

    const [formulario, setFormulario] = useState({
        nombre: '',
        titulo: '',
        correo: '',
        descripcion: ''
    })

    const {nombre, titulo, correo, descripcion} = formulario;

    const [error, setError] = useState({
        activo: false,
        mensaje: ''
    })

    function capturarDatos(e){
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        })
    }

    function validarDatos(e){
        e.preventDefault();

        if (isEmpty(nombre) || isEmpty(titulo) || isEmpty(correo) || isEmpty(descripcion)) {
            setError({
                activo: true,
                mensaje: 'Complete todos los campos'
            })
        } else {
            setError({
                activo: false,
                mensaje: ''
            })
            setFormulario({
                nombre: '',
                titulo: '',
                correo: '',
                descripcion: ''
            })
            const Toast = Swal.mixin({
                toast: true,
                position: 'bottom-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true
            })
            Toast.fire({
                icon: 'success',
                title: 'Mensaje enviado'
            })
        }
    }

    return(
        <>
        <section className="contacto" id="contacto">
            <div className="bloque">
                <div className="item">
                    <h2>Noticias</h2>
                    <p>Manténgase al día con nuestras noticias y actualizaciones siempre próximas. Introduzca su correo electrónico y suscríbase a nuestro boletín informativo.</p>
                </div>
                <div className="item">
                    <h2>Acerca de</h2>
                    <p>Super Mario Bros es un juego de plataformas desarrollado y publicado por Nintendo. El sucesor del juego arcade de 1983, Mario Bros, y el primero de la serie de Super Mario. Fue lanzado en 1985 para el Famicom en Japón.</p>
                </div>
            </div>
            <form onSubmit={validarDatos}>
                <div className="bloque">
                    <div className="campo">
                        <input type="text" name="nombre" id="nombre" placeholder="Nombre" value={nombre} onChange={capturarDatos}/>
                    </div>
                    <div className="campo">
                        <input type="text" name="titulo" id="titulo" placeholder="Título" value={titulo} onChange={capturarDatos}/>
                    </div>
                    <div className="campo">
                        <input type="email" name="email" id="email" placeholder="Correo" value={correo} onChange={capturarDatos}/>
                    </div>
                    <div className="campo">
                        <textarea name="mensaje" id="mensaje" cols="30" rows="10" placeholder="Mensaje" value={descripcion} onChange={capturarDatos}></textarea>
                    </div>
                    <p className="error">{error.activo && error.mensaje}</p>
                    <div className="btns">
                        <button className="btn">Enviar</button>
                    </div>
                </div>
            </form>
        </section>
        </>
    )
}