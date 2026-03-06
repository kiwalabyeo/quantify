import { Card, CardContent, CardHeader, CardTitle, Button, Badge } from "../components/ui";
import { CheckCircle2, Circle, AlertCircle, UploadCloud, ChevronRight, Leaf } from "lucide-react";

export function CarbonCredits() {
  const readinessItems = [
    {
      title: "Activity Data Completeness",
      desc: "12 consecutive months of farm data recorded without gaps.",
      status: "ready",
      action: "View Data"
    },
    {
      title: "Evidence Uploaded",
      desc: "Receipts for fertilizer, fuel, and electricity bills matched to records.",
      status: "in-progress",
      action: "Upload Receipts"
    },
    {
      title: "Baseline Established",
      desc: "Historical emissions baseline successfully calculated using IPCC factors.",
      status: "ready",
      action: "View Baseline"
    },
    {
      title: "Reduction Trend Documented",
      desc: "Demonstrable reduction in carbon intensity over a 6-month period.",
      status: "missing",
      action: "View Forecasts"
    },
    {
      title: "Reporting Quality",
      desc: "GHG Protocol compliant reports generated for current period.",
      status: "ready",
      action: "View Reports"
    }
  ];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div>
        <h2 className="text-2xl font-bold text-charcoal-950 flex items-center gap-2">
          <Leaf className="h-6 w-6 text-primary-600" /> Carbon Credit Readiness
        </h2>
        <p className="text-sm text-earth-600">Track your progress toward verifying and selling carbon credits on voluntary markets.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader className="border-b border-earth-100 bg-earth-50 rounded-t-xl">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Verification Checklist</CardTitle>
              <span className="text-sm font-medium text-charcoal-600">Score: 60%</span>
            </div>
            <div className="w-full bg-earth-200 h-2 mt-3 rounded-full overflow-hidden">
              <div className="bg-primary-500 h-full w-[60%]"></div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-earth-100">
              {readinessItems.map((item, i) => (
                <div key={i} className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-earth-50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0">
                      {item.status === 'ready' && <CheckCircle2 className="h-5 w-5 text-primary-600" />}
                      {item.status === 'in-progress' && <Circle className="h-5 w-5 text-amber-500 fill-amber-100" />}
                      {item.status === 'missing' && <AlertCircle className="h-5 w-5 text-red-500" />}
                    </div>
                    <div>
                      <h4 className="font-medium text-charcoal-900">{item.title}</h4>
                      <p className="text-sm text-earth-600 mt-1">{item.desc}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto mt-2 sm:mt-0 pl-9 sm:pl-0">
                    <Badge 
                      variant={
                        item.status === 'ready' ? 'default' : 
                        item.status === 'in-progress' ? 'secondary' : 'destructive'
                      }
                      className={
                        item.status === 'in-progress' ? 'bg-amber-100 text-amber-800 hover:bg-amber-200' : ''
                      }
                    >
                      {item.status === 'ready' ? 'Ready' : 
                       item.status === 'in-progress' ? 'In Progress' : 'Missing Data'}
                    </Badge>
                    <Button variant="ghost" size="sm" className="gap-1 text-primary-600 hidden sm:flex">
                      {item.action} <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="bg-charcoal-950 text-white border-charcoal-800">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-primary-900 flex items-center justify-center mb-4">
                <Leaf className="h-6 w-6 text-primary-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Monetize Your Reductions</h3>
              <p className="text-sm text-charcoal-300 mb-6 leading-relaxed">
                Based on your current trajectory, your farm has the potential to generate verifiable carbon credits by Q3 2027.
              </p>
              <div className="p-4 bg-charcoal-900 rounded-lg border border-charcoal-800 mb-6">
                <p className="text-xs text-charcoal-400 mb-1 uppercase tracking-wider">Estimated Value</p>
                <p className="text-3xl font-bold text-primary-400">$2,400 <span className="text-sm font-normal text-charcoal-400">/ year</span></p>
              </div>
              <Button className="w-full bg-primary-600 hover:bg-primary-700 text-white border-0">
                Connect to Broker
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold">Evidence Upload</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-earth-300 rounded-xl p-6 text-center hover:bg-earth-50 transition-colors cursor-pointer">
                <UploadCloud className="h-8 w-8 mx-auto text-earth-400 mb-2" />
                <p className="text-sm font-medium text-charcoal-900">Upload Receipts & Logs</p>
                <p className="text-xs text-earth-500 mt-1">PDF, JPG, PNG up to 10MB</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
