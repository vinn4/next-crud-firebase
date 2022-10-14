import Cliente from "../components/core/Cliente"
import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Botao from "../components/Botao"

export default function Home() {
  const clientes = [
    new Cliente('Vinicius',28,'1'),
    new Cliente('Julia',22,'2'),
    new Cliente('Bruno',20,'3'),
    new Cliente('Roberto',25,'4')
  ]
  function clientesSelecionados(cliente: Cliente){
   console.log(cliente.nome)
  }
  function clientesExcluido(cliente: Cliente){
    console.log(cliente.nome)
  }

  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-slate-500 to-purple-200
    `}>  
    <Layout titulo="Cadastro simples">
      <div className="flex justify-start">
      <Botao cor="gray" className="mb-4">Novo cliente</Botao>
      </div>      
        <Tabela clientes={clientes}
        clientesSelecionados ={clientesSelecionados}
         clientesExcluido={clientesExcluido}></Tabela>
    </Layout>
    
    </div>
  )
}
