import ServerLayout from "@/app/ServerLayout";
import RootLayout from "@/app/RootLayout";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <ServerLayout>
      <RootLayout>
        {children}
      </RootLayout>
    </ServerLayout>
  );
}
