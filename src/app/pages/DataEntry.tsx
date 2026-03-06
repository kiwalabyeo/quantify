import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, Button, Input, Label, Select } from "../components/ui";
import { Info, Calculator, Save, AlertCircle } from "lucide-react";
import { motion } from "motion/react";

export function DataEntry() {
  const [activeTab, setActiveTab] = useState("fertilizer");

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="flex-1 space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-charcoal-950">Add Farm Data</h2>
          <p className="text-sm text-earth-600">Enter activity data to automatically calculate your emissions.</p>
        </div>

        <div className="flex flex-wrap gap-2 pb-4 border-b border-earth-200">
          {[
            { id: "fertilizer", label: "Fertilizer & Soil" },
            { id: "fuel", label: "Fuel & Energy" },
            { id: "livestock", label: "Livestock & Feed" },
            { id: "transport", label: "Transport" },
            { id: "waste", label: "Waste Management" }
          ].map(tab => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab(tab.id)}
              className="rounded-full"
            >
              {tab.label}
            </Button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between border-b border-earth-100">
              <CardTitle className="text-lg">
                {activeTab === 'fertilizer' && 'Fertilizer & Soil Application'}
                {activeTab === 'fuel' && 'Fuel & Energy Usage'}
                {activeTab === 'livestock' && 'Livestock Management'}
                {activeTab === 'transport' && 'Farm Transport'}
                {activeTab === 'waste' && 'Waste & Manure Management'}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Date of Activity</Label>
                    <Input type="date" defaultValue="2026-10-15" />
                  </div>
                  <div className="space-y-2">
                    <Label>Season / Period</Label>
                    <Select defaultValue="long-rains">
                      <option value="long-rains">Long Rains (Mar-May)</option>
                      <option value="short-rains">Short Rains (Oct-Dec)</option>
                      <option value="dry">Dry Season</option>
                      <option value="annual">Annual Summary</option>
                    </Select>
                  </div>

                  {activeTab === 'fertilizer' && (
                    <>
                      <div className="space-y-2">
                        <Label>Fertilizer Type</Label>
                        <Select defaultValue="urea">
                          <option value="urea">Urea (46% N)</option>
                          <option value="can">CAN (26% N)</option>
                          <option value="dap">DAP (18-46-0)</option>
                          <option value="npk">NPK (Mixed)</option>
                          <option value="organic">Organic Compost</option>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Quantity Applied (kg)</Label>
                        <Input type="number" placeholder="0" />
                      </div>
                      <div className="space-y-2">
                        <Label>Application Area (Hectares)</Label>
                        <Input type="number" placeholder="0.0" step="0.1" />
                      </div>
                      <div className="space-y-2">
                        <Label>Pesticide Type & Volume</Label>
                        <Input type="text" placeholder="E.g. Herbicide, 5L" />
                      </div>
                    </>
                  )}

                  {activeTab === 'fuel' && (
                    <>
                      <div className="space-y-2">
                        <Label>Fuel Type</Label>
                        <Select defaultValue="diesel">
                          <option value="diesel">Diesel (Generators/Tractors)</option>
                          <option value="petrol">Petrol</option>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Volume Consumed (Liters)</Label>
                        <Input type="number" placeholder="0" />
                      </div>
                      <div className="space-y-2">
                        <Label>Electricity Grid Usage (kWh)</Label>
                        <Input type="number" placeholder="0" />
                      </div>
                      <div className="space-y-2">
                        <Label>Water Pump Usage (Hours)</Label>
                        <Input type="number" placeholder="0" />
                      </div>
                    </>
                  )}

                  {activeTab === 'livestock' && (
                    <>
                      <div className="space-y-2">
                        <Label>Animal Type</Label>
                        <Select defaultValue="dairy">
                          <option value="dairy">Dairy Cows</option>
                          <option value="beef">Beef Cattle</option>
                          <option value="sheep">Sheep / Goats</option>
                          <option value="poultry">Poultry</option>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Head Count</Label>
                        <Input type="number" placeholder="0" />
                      </div>
                      <div className="space-y-2">
                        <Label>Feed Concentrate Amount (kg)</Label>
                        <Input type="number" placeholder="0" />
                      </div>
                    </>
                  )}
                </div>

                <div className="pt-4 border-t border-earth-100 flex items-center justify-between">
                  <p className="text-xs text-earth-500 flex items-center gap-1">
                    <Info className="h-4 w-4" /> Calculations use IPCC Tier 1 African regional emission factors.
                  </p>
                  <Button type="button" className="gap-2">
                    <Save className="h-4 w-4" /> Save Record
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="lg:w-80 space-y-6">
        <Card className="bg-charcoal-50 border-charcoal-200">
          <CardHeader className="pb-4">
            <CardTitle className="text-md flex items-center gap-2 text-charcoal-800">
              <Calculator className="h-5 w-5 text-primary-600" />
              Live Estimate Preview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-white rounded-lg border border-earth-200 shadow-sm">
              <p className="text-sm text-earth-600 mb-1">Estimated Emissions</p>
              <div className="text-3xl font-bold text-red-600">~245 <span className="text-lg font-medium text-red-400">kg CO2e</span></div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-charcoal-700 uppercase tracking-wider">Breakdown</h4>
              <div className="flex justify-between text-sm">
                <span className="text-earth-600">Direct N2O</span>
                <span className="font-medium text-charcoal-900">180 kg</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-earth-600">Manufacturing (Indirect)</span>
                <span className="font-medium text-charcoal-900">65 kg</span>
              </div>
            </div>

            <div className="mt-4 p-3 bg-blue-50 text-blue-800 text-xs rounded-md border border-blue-100 flex gap-2">
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              <span>Consider switching to precision application to reduce runoff and lower N2O emissions by up to 15%.</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
