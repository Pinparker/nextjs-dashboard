import SideNav from "@/app/ui/dashboard/sidenav";

// Next.js 会预渲染你的路由中的静态部分，并将动态部分推迟到用户请求时再执行。
export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
