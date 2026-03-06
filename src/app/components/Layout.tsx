import { Link, Outlet, useLocation } from "react-router";
import { 
  LayoutDashboard, 
  Database, 
  CloudRain, 
  Sparkles, 
  TrendingUp, 
  FileText, 
  Leaf, 
  Settings,
  Presentation,
  Bell,
  Menu,
  User,
  LogOut
} from "lucide-react";
import { Button, cn } from "./ui";
import { useState } from "react";

const navItems = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Farm Data", path: "/dashboard/data", icon: Database },
  { name: "Emissions", path: "/dashboard/emissions", icon: CloudRain },
  { name: "AI Insights", path: "/dashboard/insights", icon: Sparkles },
  { name: "Forecasting", path: "/dashboard/forecasting", icon: TrendingUp },
  { name: "Reports", path: "/dashboard/reports", icon: FileText },
  { name: "Carbon Credits", path: "/dashboard/credits", icon: Leaf },
  { name: "Admin", path: "/dashboard/admin", icon: Settings },
  // { name: "Investor Pitch", path: "/dashboard/investor", icon: Presentation },
];

export function DashboardLayout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-earth-50 text-charcoal-900">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-charcoal-900/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-earth-200 bg-white transition-transform lg:static lg:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex h-16 items-center px-6 border-b border-earth-100">
          <Link to="/" className="flex items-center gap-2 text-primary-600 font-bold text-xl tracking-tight">
            <Leaf className="h-6 w-6" />
            Quantify AI
          </Link>
        </div>
        
        <nav className="flex-1 space-y-1 p-4 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || 
                             (item.path !== '/dashboard' && location.pathname.startsWith(item.path));
            const Icon = item.icon;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-primary-50 text-primary-700" 
                    : "text-earth-600 hover:bg-earth-100 hover:text-charcoal-900"
                )}
              >
                <Icon className="h-5 w-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-earth-100">
          <Link
            to="/login"
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-earth-600 hover:bg-earth-100 hover:text-charcoal-900 transition-colors"
          >
            <LogOut className="h-5 w-5" />
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="flex h-16 items-center justify-between border-b border-earth-200 bg-white px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
              <Menu className="h-5 w-5" />
            </Button>
            <div className="hidden sm:block">
              <h1 className="text-lg font-semibold">GreenAcres Farm</h1>
              <p className="text-xs text-earth-500">Nairobi, Kenya • Dairy & Crop</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2.5 h-2 w-2 rounded-full bg-red-500" />
            </Button>
            <div className="h-8 w-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold">
              <User className="h-4 w-4" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
