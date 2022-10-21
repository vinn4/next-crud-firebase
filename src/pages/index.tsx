import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import useClientes from "../hooks/useClientes"

export default function Home() {

const {
  tabeleVisivel,
  exibirTabela,
  clientes,
  cliente,
  clientesExcluido,
  novoCliente,
  clientesSelecionados,
  salvarCliente} = useClientes()




  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-l from-slate-500 to-slate-900
    `}>  
    <Layout titulo="Cadastro simples">
      {tabeleVisivel ? (
        <>
        <div className="flex justify-start">
        <Botao onClick={novoCliente} className="mb-4 bg-purple-500"
        >
          Novo cliente</Botao>
        </div>      
          <Tabela clientes={clientes}
          clientesSelecionados ={clientesSelecionados}
           clientesExcluido={clientesExcluido}></Tabela>
           </>
      ):(
          <Formulario
           cliente={cliente}
           clienteMudou={salvarCliente}
            cancelado={()=> exibirTabela()}
            ></Formulario>
      )}
      
         
    </Layout>
    
    </div>
  )
}
