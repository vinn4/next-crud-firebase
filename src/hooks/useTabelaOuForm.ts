import { useState } from "react"

export default function useTabelaOuForm() {
    const[visivel, setVisivel]= useState<'tabela' | 'form'>('tabela')

    const exibirTabela = () => setVisivel('tabela')
    const exibirFormulario = () => setVisivel('form')

    return {
        formularioVisivel: visivel === 'form',
        tabeleVisivel: visivel === 'tabela',
        exibirFormulario,
        exibirTabela,
    }

}