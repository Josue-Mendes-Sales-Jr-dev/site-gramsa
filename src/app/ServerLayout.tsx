import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gramsa",
  description: "sua empresa de engenharia e consultoria",
};

export default function ServerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}