import { Card, CardContent, CardHeader, CardTitle, Button, Badge } from "../components/ui";
import { FileText, Download, Printer, Leaf, CheckCircle2 } from "lucide-react";

export function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-charcoal-950 flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary-600" /> Sustainability Reports
          </h2>
          <p className="text-sm text-earth-600">Generated automatically for compliance and carbon credit claims.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2 bg-white">
            <Download className="h-4 w-4" /> CSV Data
          </Button>
          <Button className="gap-2">
            <Printer className="h-4 w-4" /> Export PDF
          </Button>
        </div>
      </div>

      <div className="bg-white border border-earth-200 shadow-sm rounded-xl p-8 lg:p-12 max-w-4xl mx-auto">
        {/* Report Header */}
        <div className="border-b border-earth-200 pb-8 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Leaf className="h-6 w-6 text-primary-600" />
              <span className="text-xl font-bold tracking-tight text-charcoal-950">Quantify AI</span>
            </div>
            <h1 className="text-3xl font-serif text-charcoal-900 mb-1">GHG Emissions Report</h1>
            <p className="text-earth-500">Period: October 2026</p>
          </div>
          <div className="text-right text-sm text-charcoal-600 space-y-1">
            <p><span className="font-semibold text-charcoal-900">Farm:</span> GreenAcres Farm</p>
            <p><span className="font-semibold text-charcoal-900">Location:</span> Rift Valley, Kenya</p>
            <p><span className="font-semibold text-charcoal-900">Type:</span> Dairy & Crop</p>
            <p><span className="font-semibold text-charcoal-900">Generated:</span> Oct 31, 2026</p>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-charcoal-900 mb-4 border-b border-earth-100 pb-2">Executive Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-earth-50 rounded-lg">
              <p className="text-xs text-earth-500 uppercase tracking-wider mb-1">Total Emissions</p>
              <p className="text-2xl font-bold text-charcoal-900">1,367 <span className="text-sm font-normal">kg CO2e</span></p>
            </div>
            <div className="p-4 bg-earth-50 rounded-lg">
              <p className="text-xs text-earth-500 uppercase tracking-wider mb-1">MoM Change</p>
              <p className="text-2xl font-bold text-primary-600">-4.5%</p>
            </div>
            <div className="p-4 bg-earth-50 rounded-lg">
              <p className="text-xs text-earth-500 uppercase tracking-wider mb-1">YTD Total</p>
              <p className="text-2xl font-bold text-charcoal-900">14.2 <span className="text-sm font-normal">tonnes</span></p>
            </div>
            <div className="p-4 bg-earth-50 rounded-lg">
              <p className="text-xs text-earth-500 uppercase tracking-wider mb-1">Carbon Intensity</p>
              <p className="text-2xl font-bold text-charcoal-900">1.2 <span className="text-sm font-normal">kg/L milk</span></p>
            </div>
          </div>
        </div>

        {/* Breakdown & Forecast */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-charcoal-900 mb-4 border-b border-earth-100 pb-2">Emissions by Source</h3>
            <ul className="space-y-3">
              {[
                { name: "Fertilizer (Scope 1)", val: "400 kg", pct: "29%" },
                { name: "Livestock (Scope 1)", val: "300 kg", pct: "22%" },
                { name: "Grid Electricity (Scope 2)", val: "278 kg", pct: "20%" },
                { name: "Diesel Fuel (Scope 1)", val: "200 kg", pct: "15%" },
                { name: "Transport (Scope 3)", val: "189 kg", pct: "14%" },
              ].map((item, i) => (
                <li key={i} className="flex justify-between items-center text-sm">
                  <span className="text-charcoal-700">{item.name}</span>
                  <div className="text-right">
                    <span className="font-medium text-charcoal-900">{item.val}</span>
                    <span className="text-earth-400 ml-2 w-8 inline-block">{item.pct}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-charcoal-900 mb-4 border-b border-earth-100 pb-2">Forecast & Reductions</h3>
            <p className="text-sm text-charcoal-700 mb-4 leading-relaxed">
              Based on historical data, emissions are projected to decrease by 2% next month. The planned switch to solar irrigation (implemented 2 weeks ago) is already showing a positive trajectory in Scope 2 reductions.
            </p>
            <div className="bg-primary-50 border border-primary-100 p-4 rounded-lg">
              <h4 className="text-sm font-semibold text-primary-900 mb-2">Reduction Progress (YTD)</h4>
              <div className="w-full bg-primary-200 h-2 rounded-full overflow-hidden mb-1">
                <div className="bg-primary-600 h-full w-[65%]"></div>
              </div>
              <p className="text-xs text-primary-700 text-right">65% of annual target reached</p>
            </div>
          </div>
        </div>

        {/* Readiness */}
        <div>
          <h3 className="text-lg font-semibold text-charcoal-900 mb-4 border-b border-earth-100 pb-2">Carbon Credit Claim Readiness</h3>
          <div className="flex items-center justify-between p-4 bg-earth-50 rounded-lg border border-earth-200">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary-600" />
              <div>
                <p className="font-medium text-charcoal-900">Baseline Verified</p>
                <p className="text-xs text-earth-600">All activity data mapped to IPCC Tier 1 African factors.</p>
              </div>
            </div>
            <Badge className="bg-primary-100 text-primary-800 hover:bg-primary-200 border-transparent">
              Score: 85/100
            </Badge>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-earth-200 text-center text-xs text-earth-500">
          <p>This report is generated by Quantify AI. Calculations comply with the GHG Protocol Agricultural Guidance.</p>
          <p className="mt-1">Document ID: QAI-REP-2026-10-8842</p>
        </div>
      </div>
    </div>
  );
}
