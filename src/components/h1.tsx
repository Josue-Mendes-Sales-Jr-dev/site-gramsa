interface H1Props{
    className?:string
    children:React.ReactNode
}
export default function H1(props:H1Props){
    return(
        <>
        <h1 className={`${props.className} relative `}>
            <strong>
             {props.children}
            </strong>
        
        </h1>
        </>
    )
}