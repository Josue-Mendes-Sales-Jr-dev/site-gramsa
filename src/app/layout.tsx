import ServerLayout from "@/app/ServerLayout"; // Importe o layout do servidor
import RootLayout from "@/app/RootLayout"; // Importe o layout do cliente

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ServerLayout>
      <RootLayout>
        {children}
      </RootLayout>
    </ServerLayout>
  );
}