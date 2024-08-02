interface LayoutProps{
    children: React.ReactNode
}

export default function Layout(props:LayoutProps){

    return(
        <>
         <div className="flex flex-wrap gap-[6rem]  md:mt-0 md:gap-0 justify-around items-center w-full min-h-[100vh] pt-[5rem] bg-teal-900 pb-[10rem]">
              {props.children}
         </div>
        </>
    )
}