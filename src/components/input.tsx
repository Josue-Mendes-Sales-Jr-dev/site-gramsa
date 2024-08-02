type InputProps={
    type: string
    palceHolder?: string
    handleClick?: (e:any|never)=>void
    value?: any|never
    className?: string
}

export default function Input(props:InputProps){
    return(
        <>
         <input className={`${props.className} w-[80%] h-[3rem] rounded-md`} type={props.type} value={props.value} placeholder={props.palceHolder} onClick={props.handleClick}/>
        </>
    )
}