type LayoutProps = {
    children: React.ReactNode;
  };
  
  export default function Layout({ children }: LayoutProps) {
    return (
      <div className="flex flex-wrap gap-16 md:gap-0 justify-around items-center w-full min-h-screen pt-20 bg-teal-900 pb-40">
        {children}
      </div>
    );
  }
  