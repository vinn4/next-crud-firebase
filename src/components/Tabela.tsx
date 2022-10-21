import Cliente from "./core/Cliente"
import { IconeEdicao, IconeTrash } from "./Icones"

interface Tabelaprops{
    clientes: Cliente []
    clientesSelecionados?: (cliente: Cliente)=> void
    clientesExcluido?: (cliente: Cliente)=> void
}

export default function Tabela(props: Tabelaprops){

        const exibirAcoes = props.clientesExcluido || props.clientesSelecionados

    function renderizarCabecalho(){
        return(
            <tr>
            <th className="text- p-2">Códido ID</th>
            <th className="text- p-2">Nome do cliente</th>
            <th className="text- p-2">Idade do cliente</th>
            {exibirAcoes ? <th className="text- p-2">Ações</th>: false}
        </tr>
        )
    }

    function renderizarDados(){
        return props.clientes?.map((cliente, i)=> {
            return (
                <tr key={cliente.id}
                className={`${i %2 === 0 ? 'bg-slate-100': 'bg-slate-200' }`}>
                    <td className="text-center p-1">{cliente.id}</td>
                    <td className="text-center p-1">{cliente.nome}</td>
                    <td className="text-center p-1">{cliente.idade}</td>
                    {exibirAcoes ? renderizarAcoes(cliente) : false}
                </tr>
            )
        })       
    }

    function renderizarAcoes(cliente :Cliente){
        return (
            <td className="p-1">
                {props.clientesSelecionados ? (
                    <button onClick={()=> props.clientesSelecionados?.(cliente)} className=" p-1 m-1  rounded-full hover:bg-gray-300 ">{IconeEdicao}</button>
                ): false}
                {props.clientesExcluido ? (
                <button onClick={()=> props.clientesExcluido?.(cliente)} className=" p-1 m-1 rounded-full hover:bg-gray-300">{IconeTrash}</button> 
                ): false}                
            </td>
        )
    }


    return (
     <table className="w-full rounded-xl overflow-hidden">
      <thead className="bg-neutral-200">
      {renderizarCabecalho()}
      </thead>
      <tbody className="">
        {renderizarDados()}
      </tbody>
     </table>
    )
}