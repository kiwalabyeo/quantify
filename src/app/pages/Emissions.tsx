import { Card, CardContent, CardHeader, CardTitle, Button, Select, Badge } from "../components/ui";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from "recharts";
import { Filter, ArrowUpRight, ArrowDownRight, Download } from "lucide-react";

const comparisonData = [
  { name: 'Fertilizer', current: 400, previous: 240 },
  { name: 'Livestock', current: 300, previous: 139 },
  { name: 'Fuel', current: 200, previous: 980 },
  { name: 'Electricity', current: 278, previous: 390 },
  { name: 'Transport', current: 189, previous: 480 },
];

export function Emissions() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-charcoal-950">Emissions Analysis</h2>
          <p className="text-sm text-earth-600">Deep dive into your farm's greenhouse gas sources.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" /> Export Data
          </Button>
        </div>
      </div>

      <Card className="bg-white border-earth-200 shadow-sm mb-6">
        <CardContent className="p-4 flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-2 text-charcoal-700 text-sm font-medium">
            <Filter className="h-4 w-4" /> Filters
          </div>
          <Select className="w-40 h-8 text-xs" defaultValue="oct">
            <option value="all">All Months</option>
            <option value="oct">October 2026</option>
            <option value="sep">September 2026</option>
          </Select>
          <Select className="w-40 h-8 text-xs" defaultValue="season">
            <option value="season">Current Season</option>
            <option value="long">Long Rains</option>
          </Select>
          <Select className="w-40 h-8 text-xs" defaultValue="all-sources">
            <option value="all-sources">All Sources</option>
            <option value="direct">Direct (Scope 1)</option>
            <option value="indirect">Indirect (Scope 2)</option>
          </Select>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-l-4 border-l-amber-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-earth-600">Highest Contributor</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-charcoal-900">Fertilizer (UREA)</div>
            <div className="flex items-center text-sm text-red-600 mt-1 font-medium">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              +14% vs Previous Month
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-l-4 border-l-primary-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-earth-600">Biggest Improvement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-charcoal-900">Diesel Fuel</div>
            <div className="flex items-center text-sm text-primary-600 mt-1 font-medium">
              <ArrowDownRight className="h-4 w-4 mr-1" />
              -25% vs Previous Month
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-earth-600">Total Net Emissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-charcoal-900">1,367 kg CO2e</div>
            <div className="flex items-center text-sm text-charcoal-500 mt-1">
              October 2026
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Comparison: Current vs Previous Month</CardTitle>
        </CardHeader>
        <CardContent className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={comparisonData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e7e5e4" />
              <XAxis dataKey="name" stroke="#78716c" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#78716c" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e7e5e4' }}
                cursor={{ fill: '#f5f5f4' }}
              />
              <Legend iconType="circle" />
              <Bar dataKey="previous" name="Previous Month" fill="#a8a29e" radius={[4, 4, 0, 0]} />
              <Bar dataKey="current" name="Current Month" fill="#059669" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Detailed Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-charcoal-700">
              <thead className="text-xs uppercase bg-earth-50 text-earth-500">
                <tr>
                  <th className="px-4 py-3 font-medium rounded-tl-lg">Category</th>
                  <th className="px-4 py-3 font-medium">Activity Detail</th>
                  <th className="px-4 py-3 font-medium text-right">Scope</th>
                  <th className="px-4 py-3 font-medium text-right">Emissions (kg CO2e)</th>
                  <th className="px-4 py-3 font-medium text-right rounded-tr-lg">Trend</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { cat: "Fertilizer", det: "Urea Application (150kg)", scope: "Scope 1", em: "400", trend: "+14%", isUp: true },
                  { cat: "Livestock", det: "Dairy Cattle (12 head)", scope: "Scope 1", em: "300", trend: "+2%", isUp: true },
                  { cat: "Fuel", det: "Diesel Generator (45L)", scope: "Scope 1", em: "200", trend: "-25%", isUp: false },
                  { cat: "Electricity", det: "Grid Usage (340kWh)", scope: "Scope 2", em: "278", trend: "-5%", isUp: false },
                  { cat: "Transport", det: "Market Delivery (120km)", scope: "Scope 3", em: "189", trend: "+1%", isUp: true },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-earth-100 last:border-0">
                    <td className="px-4 py-3 font-medium text-charcoal-900">{row.cat}</td>
                    <td className="px-4 py-3">{row.det}</td>
                    <td className="px-4 py-3 text-right">
                      <Badge variant="outline" className="text-[10px]">{row.scope}</Badge>
                    </td>
                    <td className="px-4 py-3 text-right font-semibold text-charcoal-900">{row.em}</td>
                    <td className="px-4 py-3 text-right">
                      <span className={`inline-flex items-center text-xs font-medium ${row.isUp ? 'text-red-600' : 'text-primary-600'}`}>
                        {row.isUp ? <ArrowUpRight className="h-3 w-3 mr-1" /> : <ArrowDownRight className="h-3 w-3 mr-1" />}
                        {row.trend}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
