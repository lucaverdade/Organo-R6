import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => { 

    const times = [
        'Luca',
        'Leo',
        'Osma',
        'Jorge',
        'Éder',
        'Abud',
        'Vini',
        '-'
    ]

    const [nome, setNome] = useState ('')
    const [cargo, setCargo] = useState ('')
    const [imagem, setImagem] = useState ('')
    const [time, setTime] = useState ('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido')
    }
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card de jogador</h2>
                <CampoTexto
                 obrigatorio={true} label="Operador"
                  placeholder="Digite o Operador favorito"
                  valor={nome}
                  aoAlterado={valor => setNome(valor)}
                  />
                <CampoTexto obrigatorio={true}label="Função"
                 placeholder="Sua função na equipe" 
                 valor={cargo}
                  aoAlterado={valor => setCargo(valor)}
                 />
                <CampoTexto label="Imagem" 
                placeholder="Digite o endereço da imagem" 
                valor={imagem}
                  aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa obrigatorio={true}
                label="Player"itens={times}
                valor={time}
                aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario