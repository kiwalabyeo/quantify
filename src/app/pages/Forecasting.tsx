import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, Button } from "../components/ui";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  Area,
  ComposedChart
} from "recharts";
import { TrendingUp, Plus, Activity, Sun, Droplets, ArrowRight } from "lucide-react";
import { cn } from "../components/ui";

const forecastData = [
  { name: 'Aug', actual: 400, predicted: 400 },
  { name: 'Sep', actual: 380, predicted: 380 },
  { name: 'Oct', actual: 420, predicted: 420 },
  { name: 'Nov', actual: null, predicted: 450, range: [420, 480] },
  { name: 'Dec', actual: null, predicted: 410, range: [380, 440] },
  { name: 'Jan', actual: null, predicted: 390, range: [360, 420] },
  { name: 'Feb', actual: null, predicted: 360, range: [330, 390] },
];

export function Forecasting() {
  const [activeScenario, setActiveScenario] = useState<number | null>(null);

  const scenarios = [
    {
      id: 1,
      title: "Reduce Fertilizer by 10%",
      icon: Plus,
      savings: "45 kg CO2e / mo",
      financial: "Est. savings: $120/mo",
      color: "text-emerald-600",
      bg: "bg-emerald-100",
      border: "border-emerald-200"
    },
    {
      id: 2,
      title: "Reduce Diesel by 20%",
      icon: Activity,
      savings: "85 kg CO2e / mo",
      financial: "Est. savings: $300/mo",
      color: "text-amber-600",
      bg: "bg-amber-100",
      border: "border-amber-200"
    },
    {
      id: 3,
      title: "Switch to Solar Irrigation",
      icon: Sun,
      savings: "120 kg CO2e / mo",
      financial: "ROI: 18 months",
      color: "text-blue-600",
      bg: "bg-blue-100",
      border: "border-blue-200"
    },
    {
      id: 4,
      title: "Improve Manure Management",
      icon: Droplets,
      savings: "60 kg CO2e / mo",
      financial: "Biogas potential",
      color: "text-rose-600",
      bg: "bg-rose-100",
      border: "border-rose-200"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-charcoal-950 flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-primary-600" /> Forecasting & Scenarios
        </h2>
        <p className="text-sm text-earth-600">Model future emissions and evaluate reduction strategies.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Predictive Emissions Model (6 Months)</CardTitle>
        </CardHeader>
        <CardContent className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={forecastData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e7e5e4" />
              <XAxis dataKey="name" stroke="#78716c" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#78716c" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e7e5e4' }}
              />
              <Legend iconType="circle" />
              
              {/* Prediction Range */}
              <Area type="monotone" dataKey="range" fill="#d1fae5" stroke="none" name="Confidence Interval" />
              
              <Line type="monotone" dataKey="actual" name="Actual Emissions" stroke="#059669" strokeWidth={3} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="predicted" name="Predicted Baseline" stroke="#34d399" strokeWidth={3} strokeDasharray="5 5" dot={{ r: 4 }} />
              
              {/* If a scenario is active, show the reduced line (mocked logic) */}
              {activeScenario && (
                <Line 
                  type="monotone" 
                  dataKey={(d) => d.predicted ? d.predicted * 0.85 : null} 
                  name="Scenario Projection" 
                  stroke="#3b82f6" 
                  strokeWidth={3} 
                  strokeDasharray="3 3" 
                />
              )}
            </ComposedChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div>
        <h3 className="text-lg font-semibold text-charcoal-900 mb-4">Simulation Scenarios</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {scenarios.map((scenario) => (
            <Card 
              key={scenario.id} 
              className={cn(
                "cursor-pointer transition-all hover:shadow-md border-2",
                activeScenario === scenario.id ? scenario.border : "border-transparent"
              )}
              onClick={() => setActiveScenario(activeScenario === scenario.id ? null : scenario.id)}
            >
              <CardContent className="p-5">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${scenario.bg}`}>
                  <scenario.icon className={`h-5 w-5 ${scenario.color}`} />
                </div>
                <h4 className="font-semibold text-charcoal-900 mb-1 leading-tight">{scenario.title}</h4>
                <div className="space-y-2 mt-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-earth-500">Carbon Savings</span>
                    <span className="font-medium text-primary-600">{scenario.savings}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-earth-500">Financial Impact</span>
                    <span className="font-medium text-charcoal-800">{scenario.financial}</span>
                  </div>
                </div>
                
                {activeScenario === scenario.id && (
                  <div className="mt-4 pt-4 border-t border-earth-100 flex items-center justify-between text-xs font-medium text-primary-600">
                    Active on Chart <ArrowRight className="h-4 w-4" />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
