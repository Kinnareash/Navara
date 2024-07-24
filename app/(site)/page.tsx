import Image from "next/image";
import RootLayout from "../layout";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <RootLayout>
      <Sidebar>
        <div></div>
      </Sidebar>
    </RootLayout>
  );
}
