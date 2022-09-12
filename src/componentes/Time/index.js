import Operador from '../Operador'
import './Time.css'

const Time =(props) => {
    return (
        


        <section className='time' style={{ backgroundColor: props.corPrimaria }}>

            <h3 style={{borderColor: props.corSecundaria}}>{props.nome}</h3>

            <div className='operadores'>
                {props.operadores.map(operador => <Operador corDeFundo={props.corSecundaria} key={operador} imagem={operador.imagem} nome={operador.nome} cargo={operador.cargo}/> )}
            </div>
        </section>

    ) 
}

export default Time