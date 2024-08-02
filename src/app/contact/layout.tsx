interface LayoutProps{
    children: React.ReactNode
}

export default function Layout(props:LayoutProps){

    return(
        <>
         <div className="flex flex-wrap gap-[6rem] md:gap-0 justify-center items-center w-full min-h-[100vh] bg-gray-950 pt-[15rem] pb-[10rem]">
              {props.children}
         </div>
        </>
    )
}