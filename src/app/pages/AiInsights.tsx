import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, Button, Input, Badge } from "../components/ui";
import { Sparkles, MessageSquare, ArrowRight, Zap, TrendingDown, Info, Send, Bot } from "lucide-react";
import { motion } from "motion/react";

export function AiInsights() {
  const [prompt, setPrompt] = useState("");
  const [chatLog, setChatLog] = useState([
    { role: 'assistant', text: "Hello! I'm your Quantify AI farm assistant. How can I help you optimize your carbon footprint today?" }
  ]);

  const handleAsk = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setChatLog([...chatLog, { role: 'user', text: prompt }]);
    setPrompt("");

    // Mock AI response
    setTimeout(() => {
      setChatLog(prev => [...prev, {
        role: 'assistant',
        text: "Based on your recent activity data, the 14% increase in fertilizer emissions was caused by applying 150kg of Urea during the short rains prep phase. Switching to a precision application method or using organic compost could reduce this by approximately 15% next season."
      }]);
    }, 1000);
  };

  const handleSuggest = (question: string) => {
    setPrompt(question);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-charcoal-950 flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary-600" /> AI Insights
        </h2>
        <p className="text-sm text-earth-600">Actionable intelligence derived from your farm's carbon data.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Insight Cards */}
        <div className="lg:col-span-1 space-y-4">
          <Card className="border-l-4 border-l-amber-500 bg-amber-50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-amber-900 flex items-center gap-2">
                <Info className="h-4 w-4" /> Anomaly Detected
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-amber-800">
                Diesel consumption spiked by 40% in week 2. Check generator efficiency or log if an unusual event occurred.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-primary-500 bg-primary-50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-primary-900 flex items-center gap-2">
                <TrendingDown className="h-4 w-4" /> Reduction Opportunity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-800">
                Switching 20% of your current UREA usage to organic compost will reduce your total carbon footprint by ~6.5%.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500 bg-blue-50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-blue-900 flex items-center gap-2">
                <Zap className="h-4 w-4" /> Efficiency Benchmark
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-blue-800">
                Your dairy emission intensity is 1.2 kg CO2e / L milk, which is 15% better than the regional average for mid-sized farms.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* AI Assistant Chat */}
        <Card className="lg:col-span-2 flex flex-col h-[600px] border-primary-200 shadow-md">
          <CardHeader className="border-b border-earth-100 bg-white rounded-t-xl pb-4">
            <CardTitle className="text-lg flex items-center gap-2 text-charcoal-900">
              <Bot className="h-5 w-5 text-primary-600" /> Ask Quantify
            </CardTitle>
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 bg-earth-50">
            {chatLog.map((msg, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] rounded-2xl p-4 text-sm shadow-sm
                    ${msg.role === 'user' 
                      ? 'bg-primary-600 text-white rounded-tr-none' 
                      : 'bg-white text-charcoal-800 border border-earth-200 rounded-tl-none'
                    }
                  `}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </CardContent>

          <div className="p-4 bg-white border-t border-earth-100 rounded-b-xl">
            <div className="mb-4 flex flex-wrap gap-2">
              <p className="text-xs text-earth-500 w-full mb-1 font-medium">Suggested queries:</p>
              {[
                "What caused emissions to increase this month?",
                "What is my biggest emission source?",
                "How can I reduce fertilizer-related emissions?",
                "Predict next quarter’s footprint"
              ].map((q, i) => (
                <Badge 
                  key={i} 
                  variant="secondary" 
                  className="cursor-pointer hover:bg-primary-100 hover:text-primary-700 transition-colors font-normal text-[11px] px-3 py-1.5"
                  onClick={() => handleSuggest(q)}
                >
                  {q}
                </Badge>
              ))}
            </div>
            
            <form onSubmit={handleAsk} className="flex gap-2 relative">
              <Input 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ask about your farm's carbon data..." 
                className="pr-12 h-12 text-sm rounded-full bg-earth-50 border-earth-200"
              />
              <Button type="submit" size="icon" className="absolute right-1 top-1 h-10 w-10 rounded-full">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
}
