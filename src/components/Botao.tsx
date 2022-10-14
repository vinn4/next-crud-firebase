interface BotaoProps{
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
}

export default function Botao(props: BotaoProps){
    const cor = props.cor ?? 'gray'
    return(
       <button className={
        `bg-gradient-to-tr from-${cor}-300 to-${cor}-200 
        rounded-lg px-4 py-2 font-semibold hover:text-white
        ${props.className}` 
       }>
        {props.children}
       </button> 
    )
}