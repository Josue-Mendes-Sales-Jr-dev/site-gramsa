
type ITitleProps={
    className?:string
    Text1:string
    text2:string
    text3:string
    classNameP?: string

  }

export default function Text(props:ITitleProps){
    return(
      <>
      <div className={`absolute  text-gray-300 text-[1.25rem] md:text-[2.5rem] ${props.className}`}>
      <p> <span className={`text-blue-700`}>
        <strong>{props.Text1}</strong>
        </span> {props.text2}</p>
            <p className={`${props.classNameP}`}> 
              <strong>
              {props.text3}
              </strong></p>
      </div>
      </>
    )
}