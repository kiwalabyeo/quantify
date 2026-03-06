import { Card, CardContent } from "../components/ui";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";
import { Leaf, Globe, TrendingUp, ShieldCheck, Factory, PlayCircle } from "lucide-react";
import { motion } from "motion/react";

const growthData = [
  { name: 'Q1', farms: 1200, value: 100 },
  { name: 'Q2', farms: 3500, value: 350 },
  { name: 'Q3', farms: 7800, value: 900 },
  { name: 'Q4', farms: 12400, value: 2400 },
];

const segmentData = [
  { name: 'Dairy', value: 45 },
  { name: 'Crop', value: 35 },
  { name: 'Beef', value: 15 },
  { name: 'Agro-forestry', value: 5 },
];

export function InvestorMock() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-charcoal-950 text-white rounded-xl p-8 relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-900/20 to-transparent pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 space-y-12">
        {/* Header */}
        <div className="flex justify-between items-end border-b border-charcoal-800 pb-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-2 mb-4 text-primary-400">
              <Leaf className="h-8 w-8" />
              <span className="text-2xl font-bold tracking-tight">Quantify AI</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">Decarbonizing African Agriculture</h1>
            <p className="text-xl text-charcoal-400">Series A Investor Briefing • October 2026</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hidden md:flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-6 py-3 rounded-full font-medium cursor-pointer transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)]"
          >
            <PlayCircle className="h-5 w-5" /> Start Pitch Mode
          </motion.div>
        </div>

        {/* Hero KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Farms Onboarded", value: "12,450", icon: Globe, trend: "+315% YoY" },
            { label: "Emissions Tracked", value: "2.4M", unit: "Tonnes CO2e", icon: ShieldCheck, trend: "+420% YoY" },
            { label: "Reductions Identified", value: "450K", unit: "Tonnes CO2e", icon: TrendingUp, trend: "Validated" },
            { label: "Carbon Credit Pipeline", value: "$4.2M", unit: "USD", icon: Leaf, trend: "For 2027" }
          ].map((kpi, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-charcoal-900 border-charcoal-800 text-white h-full">
                <CardContent className="p-6">
                  <kpi.icon className="h-8 w-8 text-primary-500 mb-4" />
                  <p className="text-sm text-charcoal-400 font-medium uppercase tracking-wider mb-1">{kpi.label}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">{kpi.value}</span>
                    {kpi.unit && <span className="text-sm text-charcoal-400">{kpi.unit}</span>}
                  </div>
                  <p className="text-xs text-primary-400 mt-2 font-medium bg-primary-900/30 inline-block px-2 py-1 rounded">
                    {kpi.trend}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-6 text-white border-l-4 border-primary-500 pl-3">Exponential Adoption Curve</h3>
            <Card className="bg-charcoal-900 border-charcoal-800 p-6">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={growthData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorFarms" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#3f3f46" />
                    <XAxis dataKey="name" stroke="#a1a1aa" tickLine={false} axisLine={false} />
                    <YAxis stroke="#a1a1aa" tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#18181b', borderColor: '#3f3f46', color: '#fff' }}
                      itemStyle={{ color: '#10b981' }}
                    />
                    <Area type="monotone" dataKey="farms" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorFarms)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-6 text-white border-l-4 border-blue-500 pl-3">Market Segmentation (MRR)</h3>
            <Card className="bg-charcoal-900 border-charcoal-800 p-6">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={segmentData} layout="vertical" margin={{ top: 10, right: 30, left: 20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#3f3f46" />
                    <XAxis type="number" stroke="#a1a1aa" tickLine={false} axisLine={false} />
                    <YAxis dataKey="name" type="category" stroke="#e4e4e7" fontSize={14} tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#18181b', borderColor: '#3f3f46', color: '#fff' }}
                      formatter={(value) => [`${value}%`, 'Share']}
                    />
                    <Bar dataKey="value" fill="#3b82f6" radius={[0, 4, 4, 0]}>
                      {segmentData.map((entry, index) => (
                        <cell key={`cell-${index}`} fill={index === 0 ? '#3b82f6' : index === 1 ? '#10b981' : '#f59e0b'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Footer info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="pt-8 border-t border-charcoal-800 flex justify-between items-center text-sm text-charcoal-500"
        >
          <div className="flex items-center gap-2">
            <Factory className="h-4 w-4" /> Enterprise B2B SaaS Model
          </div>
          <div>Confidential • Not for public distribution</div>
        </motion.div>
      </div>
    </div>
  );
}
