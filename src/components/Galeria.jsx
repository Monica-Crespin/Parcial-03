import Bowser from '../img/Bowser.png'
import Daisy from '../img/Daisy.png'
import Luigi from '../img/Luigi.png'
import Mario from '../img/Mario.png'
import Peach from '../img/Peach.png'
import Rosalina from '../img/Rosalina y Luma.png'
import Toad from '../img/Toad.png'
import Toadette from '../img/Toadette.png'
import Waluigi from '../img/Waluigi.png'
import Wario from '../img/Wario.png'
import Yoshi from '../img/Yoshi.png'

export default function Galeria(){
    return(
        <>
        <div className="separador"></div>
        <section className="galeria" id="galeria">
            <h2>Galería</h2>
            <div className="contenedor-galeria">
                <div className="item">
                    <img src={Mario} alt="Mario" width="150px"/>
                </div>
                <div className="item">
                    <img src={Luigi} alt="Luigi" width="150px"/>
                </div>
                <div className="item">
                    <img src={Peach} alt="Peach" width="150px"/>
                </div>
                <div className="item">
                    <img src={Daisy} alt="Daisy" width="150px"/>
                </div>
                <div className="item">
                    <img src={Rosalina} alt="Rosalina y Luma" width="150px"/>
                </div>
                <div className="item">
                    <img src={Yoshi} alt="Yoshi" width="150px"/>
                </div>
                <div className="item">
                    <img src={Bowser} alt="Bowser" width="150px"/>
                </div>
                <div className="item">
                    <img src={Wario} alt="Wario" width="150px"/>
                </div>
                <div className="item">
                    <img src={Waluigi} alt="Waluigi" width="150px"/>
                </div>
                <div className="item">
                    <img src={Toad} alt="Toad" width="150px"/>
                </div>
                <div className="item">
                    <img src={Toadette} alt="Toadette" width="150px"/>
                </div>
            </div>
        </section>
        </>
    )
}