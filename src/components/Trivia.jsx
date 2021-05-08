import upMushroom from '../img/1UP Mushroom.png'
import megaMushroom from '../img/Mega Mushroom.png'
import miniMushroom from '../img/Mini Mushrooms.png'
import superMushroom from '../img/Super Mushroom.png'

export default function Trivia(){
    return(
        <>
        <div className="separador"></div>
        <section className="trivia" id="trivia">
            <h2>Trivia</h2>
            <div className="contenedor">
                <div className="item">
                    <div className="hongo">
                        <img src={megaMushroom} alt="Mega Mushroom" width="100px"/>
                    </div>
                    <p>Hay 256 niveles con fallos técnicos en super Mario Bros.</p>
                </div>
                <div className="item">
                    <div className="hongo">
                        <img src={superMushroom} alt="Super Mushroom" width="100px"/>
                    </div>
                    <p>Super Mario Bros se suponía que sería el último juego de cartucho.</p>
                </div>
                <div className="item">
                    <div className="hongo">
                        <img src={upMushroom} alt="1UP Mushroom" width="100px"/>
                    </div>
                    <p>Originalmente, Bowser fue un buey.</p>
                </div>
                <div className="item">
                    <div className="hongo">
                        <img src={miniMushroom} alt="Mini Mushroom" width="100px"/>
                    </div>
                    <p>Mario fue nombrado en honor del propietario de Nintendo.</p>
                </div>
                <div className="item">
                    <div className="hongo">
                        <img src={superMushroom} alt="Super Mushroom" width="100px"/>
                    </div>
                    <p>El diseño de Mario está basado en imposibilidades gráficas.</p>
                </div>
                <div className="item">
                    <div className="hongo">
                        <img src={upMushroom} alt="1UP Mushroom" width="100px"/>
                    </div>
                    <p>La versión japonesa del Minus World es totalmente diferente.</p>
                </div>
                <div className="item">
                    <div className="hongo">
                        <img src={miniMushroom} alt="Mini Mushroom" width="100px"/>
                    </div>
                    <p>Super Mario Bros solo consume 256 kilobits.</p>
                </div>
                <div className="item">
                    <div className="hongo">
                        <img src={superMushroom} alt="Super Mushroom" width="100px"/>
                    </div>
                    <p>La tortuga 1UP no es un fallo técnico.</p>
                </div>
                <div className="item">
                    <div className="hongo">
                        <img src={megaMushroom} alt="Mega Mushroom" width="100px"/>
                    </div>
                    <p>Algunos movimientos de Super Mario Bros fueron inspirados en la Leyenda de Zelda.</p>
                </div>
            </div>
        </section>
        </>
    )
}