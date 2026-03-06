import { Link } from "react-router";
import { Card, CardContent, CardHeader, CardTitle, Button, Badge } from "../components/ui";
import { 
  Plus, 
  FileText, 
  Sparkles, 
  Leaf, 
  TrendingDown, 
  AlertTriangle, 
  Droplet,
  Zap,
  Truck,
  Wind
} from "lucide-react";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

const monthlyData = [
  { name: 'Jan', emissions: 400 },
  { name: 'Feb', emissions: 380 },
  { name: 'Mar', emissions: 420 },
  { name: 'Apr', emissions: 390 },
  { name: 'May', emissions: 450 },
  { name: 'Jun', emissions: 410 },
  { name: 'Jul', emissions: 380 },
];

const categoryData = [
  { name: 'Fertilizer', value: 45, color: '#059669' },
  { name: 'Livestock', value: 30, color: '#f59e0b' },
  { name: 'Diesel Fuel', value: 15, color: '#ef4444' },
  { name: 'Electricity', value: 10, color: '#3b82f6' },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-charcoal-950">Dashboard Overview</h2>
          <p className="text-sm text-earth-600">Track and manage your farm's carbon emissions.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link to="/dashboard/data">
            <Button className="gap-2">
              <Plus className="h-4 w-4" /> Add Data
            </Button>
          </Link>
          <Link to="/dashboard/reports">
            <Button variant="outline" className="gap-2">
              <FileText className="h-4 w-4" /> Report
            </Button>
          </Link>
          <Link to="/dashboard/insights">
            <Button variant="secondary" className="gap-2 bg-primary-100 text-primary-700 hover:bg-primary-200">
              <Sparkles className="h-4 w-4" /> Ask AI
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-primary-900 text-white border-primary-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-primary-200">Total Carbon Footprint</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">2,450 <span className="text-lg font-normal text-primary-300">kg CO2e</span></div>
            <p className="text-xs text-primary-300 mt-1 flex items-center">
              <TrendingDown className="h-3 w-3 mr-1" /> -4.5% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium text-earth-600">Top Contributor</CardTitle>
            <AlertTriangle className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-charcoal-900">Fertilizer (UREA)</div>
            <p className="text-xs text-earth-500 mt-1">45% of total footprint</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium text-earth-600">AI Reduction Opp</CardTitle>
            <Sparkles className="h-4 w-4 text-primary-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-charcoal-900">-12% Potential</div>
            <p className="text-xs text-earth-500 mt-1">Switch to precision irrigation</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium text-earth-600">Credit Readiness</CardTitle>
            <Leaf className="h-4 w-4 text-primary-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary-600">85 / 100</div>
            <div className="w-full bg-earth-200 h-2 mt-2 rounded-full overflow-hidden">
              <div className="bg-primary-500 h-full w-[85%]"></div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-1 lg:col-span-4">
          <CardHeader>
            <CardTitle className="text-lg text-charcoal-900">Emissions Trend (YTD)</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" vertical={false} />
                <XAxis dataKey="name" stroke="#a8a29e" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#a8a29e" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}kg`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e7e5e4' }}
                />
                <Line type="monotone" dataKey="emissions" stroke="#10b981" strokeWidth={3} dot={{ r: 4, fill: '#10b981' }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="col-span-1 lg:col-span-3">
          <CardHeader>
            <CardTitle className="text-lg text-charcoal-900">Emissions by Source</CardTitle>
          </CardHeader>
          <CardContent className="h-80 flex flex-col justify-center">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e7e5e4' }}
                  formatter={(value) => `${value}%`}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {categoryData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-xs text-charcoal-600">{item.name} ({item.value}%)</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Quick Activity Sources */}
        <div className="lg:col-span-1 space-y-4">
          <h3 className="text-sm font-semibold text-charcoal-900">Activity Quick View</h3>
          {[
            { name: "Fertilizer Use", value: "450 kg", icon: Droplet, color: "text-emerald-600", bg: "bg-emerald-100" },
            { name: "Diesel Consumption", value: "120 L", icon: Truck, color: "text-amber-600", bg: "bg-amber-100" },
            { name: "Electricity Grid", value: "340 kWh", icon: Zap, color: "text-blue-600", bg: "bg-blue-100" },
            { name: "Enteric Fermentation", value: "12 Head", icon: Wind, color: "text-rose-600", bg: "bg-rose-100" },
          ].map((stat, i) => (
            <Card key={i} className="flex items-center p-4 shadow-sm border-earth-100">
              <div className={`p-2 rounded-lg ${stat.bg} mr-4`}>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
              <div>
                <p className="text-xs text-earth-500 font-medium">{stat.name}</p>
                <p className="text-lg font-semibold text-charcoal-900">{stat.value}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Recent Activity Table */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg text-charcoal-900">Recent Activity Log</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-charcoal-700">
                <thead className="text-xs uppercase bg-earth-50 text-earth-500">
                  <tr>
                    <th className="px-4 py-3 font-medium rounded-tl-lg">Date</th>
                    <th className="px-4 py-3 font-medium">Activity Type</th>
                    <th className="px-4 py-3 font-medium">Amount</th>
                    <th className="px-4 py-3 font-medium">Est. Emissions</th>
                    <th className="px-4 py-3 font-medium rounded-tr-lg">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { date: "Oct 12, 2026", type: "Fertilizer (Nitrogen)", amt: "150 kg", em: "450 kg CO2e", status: "Verified" },
                    { date: "Oct 10, 2026", type: "Diesel Fuel", amt: "45 L", em: "120 kg CO2e", status: "Verified" },
                    { date: "Oct 08, 2026", type: "Grid Electricity", amt: "210 kWh", em: "85 kg CO2e", status: "Pending" },
                    { date: "Oct 01, 2026", type: "Manure Management", amt: "Daily", em: "140 kg CO2e", status: "Verified" },
                  ].map((row, i) => (
                     <tr key={i} className="border-b border-earth-100 last:border-0">
                      <td className="px-4 py-3">{row.date}</td>
                      <td className="px-4 py-3 font-medium text-charcoal-900">{row.type}</td>
                      <td className="px-4 py-3">{row.amt}</td>
                      <td className="px-4 py-3 text-red-600">{row.em}</td>
                      <td className="px-4 py-3">
                        <Badge variant={row.status === "Verified" ? "default" : "secondary"}>
                          {row.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-center">
              <Button variant="ghost" className="text-sm text-primary-600">View Full Log</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
