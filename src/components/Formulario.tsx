import { useState } from 'react'
import Cliente from './core/Cliente'
import Entrada from './Entrada'
import Botao from './Botao'
interface FormularioProps{
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps){
    const id = props.cliente?.id ?? null
    const [nome, setNome]= useState(props.cliente?.nome ?? '')
    const [idade, setIdade]= useState(props.cliente?.idade ?? 0)
    return (
        <div>
            {
                id? (
                    <Entrada
                    somenteLeitura
                    texto="Código"
                    valor={id} ></Entrada>
                ): false
            }
          
           <Entrada 
           texto="Nome"
            valor={nome}
            valorMudou={setNome}></Entrada>
           <Entrada 
           texto="Idade"
            tipo="number"
             valor={idade}
             valorMudou={setIdade}
            ></Entrada>

            <div className='flex flex-row justify-end m-2'>
                <Botao 
                className='bg-blue-400 m-1'
                onClick={()=> props.clienteMudou?.(new Cliente(nome, +idade, id))}
                >{id ? 'Alterar': 'Salvar'}</Botao>

                <Botao
                 onClick={props.cancelado}
                  className='bg-gray-400 m-1'>
                    Cancelar</Botao>
            </div>
        </div>

    )
}