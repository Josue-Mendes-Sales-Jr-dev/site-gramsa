interface LayoutProps{
    children: React.ReactNode
}

export default function Layout(props:LayoutProps){
return(
    <>
    <div className="w-[100vw] min-h-[100vh] flex flex-wrap items-center justify-center">
     {props.children}
    </div>
 
    </>
)
}