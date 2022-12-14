import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => { 

    

    const [nome, setNome] = useState ('')
    const [cargo, setCargo] = useState ('')
    const [imagem, setImagem] = useState ('')
    const [time, setTime] = useState ('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoOperadorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card de jogador</h2>
                <CampoTexto
                 obrigatorio={true} label="Digite seu Mapa, Operador ou escreva 'Função'"
                  placeholder="Ex: Oregon, Ash ou ''Função:'' "
                  valor={nome}
                  aoAlterado={valor => setNome(valor)}
                  />
                <CampoTexto obrigatorio={true}label="Explicação do escolhido"
                 placeholder="Ex: Operador/Mapa Favorito ou sua função na equipe" 
                 valor={cargo}
                  aoAlterado={valor => setCargo(valor)}
                 />
                <CampoTexto label="Imagem" 
                placeholder="Digite o endereço da imagem" 
                valor={imagem}
                  aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa obrigatorio={true}
                label="Player"
                itens={props.Player}
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