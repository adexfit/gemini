import Sidebar from "@/components/sidebar/Sidebar";
import Main from "@/components/main/Main";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Main />
    </div>
  );
}
