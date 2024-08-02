interface LayoutProps{
    children: React.ReactNode
}

export default function Layout(props:LayoutProps){

    return(
        <>
         <div className="flex flex-wrap gap-[6rem] md:gap-0 justify-around items-center w-full min-h-[100vh] pt-[10rem] pb-[10rem] bg-teal-950">
              {props.children}
         </div>
        </>
    )
}