import { useEffect, useState } from "react"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../components/core/Cliente"
import ClienteRepositorio from "../components/core/ClienteRepositorio"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useClientes(){
    const repo: ClienteRepositorio = new ColecaoCliente()

    const {exibirFormulario,exibirTabela,tabeleVisivel} = useTabelaOuForm()

    const[cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const[clientes, setClientes] = useState<Cliente[]>([])
    
  
  useEffect(obterTodos,[])
  
  function obterTodos(){
    repo.obterTodos().then(clientes =>{
      setClientes(clientes)
      exibirTabela()
    })
  }
    
    function clientesSelecionados(cliente: Cliente){
     setCliente(cliente)
     exibirFormulario()
    }
    async function clientesExcluido(cliente: Cliente){
      await repo.excluir(cliente)
      obterTodos()
    }
  
    function novoCliente(){
      setCliente(Cliente.vazio())
      exibirFormulario()
    }
  
    async function salvarCliente(cliente: Cliente){
      await repo.salvar(cliente)
      obterTodos()
    }
    return{
        tabeleVisivel,
        exibirTabela,
        cliente,
        clientes,
        setCliente,
        setClientes,       
        salvarCliente,
        novoCliente,
        clientesExcluido,
        clientesSelecionados,
        obterTodos
    }
}