export default function Titulo(props) {
    return (
        <div className={`flex flex-col justify-center font-semibold`}>
            <h1 className={`px-5 py-2 text-2xl`}>
                {props.children}
            </h1>
            <hr className="border-2"/>
        </div>
    )
}