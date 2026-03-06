import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, Button, Input, Select, Badge, Label } from "../components/ui";
import { Settings, Plus, Search, Edit2, Database, AlertCircle } from "lucide-react";

const factorsData = [
  { id: 1, category: "Fertilizer", activity: "Urea Application", unit: "kg N", factor: "0.01", source: "IPCC 2019 Refinement", updated: "2026-01-15" },
  { id: 2, category: "Fuel", activity: "Diesel Combustion (Mobile)", unit: "Liters", factor: "2.68", source: "EPA 2025 GHG Factors", updated: "2026-02-10" },
  { id: 3, category: "Fuel", activity: "Petrol Combustion (Mobile)", unit: "Liters", factor: "2.31", source: "EPA 2025 GHG Factors", updated: "2026-02-10" },
  { id: 4, category: "Electricity", activity: "Grid (Kenya National)", unit: "kWh", factor: "0.33", source: "Ecometrica 2026", updated: "2026-06-01" },
  { id: 5, category: "Livestock", activity: "Enteric Fermentation (Dairy)", unit: "Head/Yr", factor: "1,500", source: "IPCC Tier 1 Africa", updated: "2025-11-20" },
  { id: 6, category: "Waste", activity: "Manure Management (Solid)", unit: "kg VS", factor: "0.02", source: "IPCC Tier 1 Africa", updated: "2025-11-20" },
];

export function AdminFactors() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-charcoal-950 flex items-center gap-2">
            <Settings className="h-6 w-6 text-charcoal-700" /> System Configuration
          </h2>
          <p className="text-sm text-earth-600">Manage emission factor libraries and calculation parameters.</p>
        </div>
        <Button onClick={() => setShowModal(true)} className="gap-2">
          <Plus className="h-4 w-4" /> Add New Factor
        </Button>
      </div>

      <Card className="border-t-4 border-t-charcoal-800">
        <CardHeader className="border-b border-earth-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Database className="h-5 w-5 text-charcoal-600" />
            <CardTitle className="text-lg">Emission Factors Database</CardTitle>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-earth-500" />
              <Input placeholder="Search factors..." className="pl-9 h-9" />
            </div>
            <Select className="h-9 w-32 hidden sm:block" defaultValue="all">
              <option value="all">All Categories</option>
              <option value="fert">Fertilizer</option>
              <option value="fuel">Fuel</option>
              <option value="elec">Electricity</option>
            </Select>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-charcoal-700 font-mono">
              <thead className="text-xs uppercase bg-charcoal-50 text-charcoal-600 border-b border-earth-200">
                <tr>
                  <th className="px-6 py-4 font-semibold tracking-wider">Category</th>
                  <th className="px-6 py-4 font-semibold tracking-wider">Activity Type</th>
                  <th className="px-6 py-4 font-semibold tracking-wider">Unit</th>
                  <th className="px-6 py-4 font-semibold tracking-wider text-right">EF (kg CO2e)</th>
                  <th className="px-6 py-4 font-semibold tracking-wider">Source Document</th>
                  <th className="px-6 py-4 font-semibold tracking-wider">Last Updated</th>
                  <th className="px-6 py-4 font-semibold tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-earth-100 font-sans">
                {factorsData.map((row) => (
                  <tr key={row.id} className="hover:bg-earth-50 transition-colors">
                    <td className="px-6 py-4">
                      <Badge variant="secondary" className="font-medium text-[11px] uppercase">
                        {row.category}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 font-medium text-charcoal-900">{row.activity}</td>
                    <td className="px-6 py-4 text-earth-600">{row.unit}</td>
                    <td className="px-6 py-4 text-right font-mono font-bold text-primary-700">{row.factor}</td>
                    <td className="px-6 py-4 text-xs text-charcoal-600 truncate max-w-[200px]" title={row.source}>
                      {row.source}
                    </td>
                    <td className="px-6 py-4 text-xs text-earth-500">{row.updated}</td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-earth-500 hover:text-primary-600">
                        <Edit2 className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-earth-200 bg-earth-50 text-xs text-earth-500 flex items-center justify-between">
            <span>Showing 1 to 6 of 142 records</span>
            <div className="flex gap-1">
              <Button variant="outline" size="sm" className="h-7 text-xs bg-white">Prev</Button>
              <Button variant="outline" size="sm" className="h-7 text-xs bg-white">Next</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-900/50 p-4">
          <Card className="w-full max-w-lg shadow-xl">
            <CardHeader className="border-b border-earth-100 pb-4">
              <CardTitle>Add Emission Factor</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Category</Label>
                  <Select defaultValue="fertilizer">
                    <option value="fertilizer">Fertilizer</option>
                    <option value="fuel">Fuel</option>
                    <option value="electricity">Electricity</option>
                    <option value="livestock">Livestock</option>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Activity Type</Label>
                  <Input placeholder="E.g. Ammonia Application" />
                </div>
                <div className="space-y-2">
                  <Label>Unit of Measure</Label>
                  <Input placeholder="E.g. kg N" />
                </div>
                <div className="space-y-2">
                  <Label>Emission Factor (kg CO2e)</Label>
                  <Input type="number" placeholder="0.00" step="0.01" />
                </div>
                <div className="col-span-2 space-y-2">
                  <Label>Source Document / Reference</Label>
                  <Input placeholder="E.g. IPCC 2019 Refinement" />
                </div>
              </div>
              
              <div className="p-3 mt-4 bg-amber-50 text-amber-800 text-xs rounded-lg border border-amber-200 flex items-start gap-2">
                <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <p>Ensure emission factors match the GHG Protocol standards for geographic region. Changing factors may affect historical calculations.</p>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-earth-100 mt-6">
                <Button variant="outline" onClick={() => setShowModal(false)}>Cancel</Button>
                <Button onClick={() => setShowModal(false)}>Save Factor</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
