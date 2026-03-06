import { Link } from "react-router";
import { Button } from "../components/ui";
import { Leaf, BarChart3, ShieldCheck, ArrowRight, CheckCircle2, Factory } from "lucide-react";
import { motion } from "motion/react";

export function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-charcoal-900">
      {/* Navbar */}
      <header className="flex h-20 items-center justify-between px-6 lg:px-12 border-b border-earth-100">
        <div className="flex items-center gap-2">
          <Leaf className="h-8 w-8 text-primary-600" />
          <span className="text-2xl font-bold tracking-tight text-charcoal-950">Quantify AI</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-charcoal-600">
          <a href="#features" className="hover:text-primary-600">Features</a>
          <a href="#how-it-works" className="hover:text-primary-600">How it Works</a>
          <a href="#impact" className="hover:text-primary-600">Impact</a>
        </nav>
        <div className="flex gap-4">
          <Link to="/login">
            <Button variant="ghost">Sign In</Button>
          </Link>
          <Link to="/onboarding">
            <Button>Get Started</Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative px-6 py-24 lg:px-12 lg:py-32 overflow-hidden bg-primary-50">
          <div className="mx-auto max-w-5xl text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-7xl font-bold tracking-tight text-charcoal-950 mb-6"
            >
              Monitor and reduce farm carbon footprints with <span className="text-primary-600">AI-powered insights</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-charcoal-600 mb-10 max-w-3xl mx-auto"
            >
              The intelligent sustainability platform for African farmers and enterprises. Convert farm activity into verified emissions, unlock carbon credits, and build an investor-ready climate profile.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/dashboard">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-semibold gap-2">
                  View Dashboard <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg bg-white border-charcoal-200">
                Request Demo
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Target Market Cards */}
        <section id="features" className="py-24 px-6 lg:px-12 bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-charcoal-950 mb-4">Built for Every Farm Type</h2>
              <p className="text-charcoal-600 max-w-2xl mx-auto">From smallholder crop farmers to large-scale dairy operations, Quantify AI adapts to your unique agricultural footprint.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Crop Farming", desc: "Track fertilizer, pesticides, and soil management emissions." },
                { title: "Dairy Farming", desc: "Monitor enteric fermentation and manure management metrics." },
                { title: "Beef Production", desc: "Analyze feed efficiency and lifecycle carbon costs." },
                { title: "Agro-forestry", desc: "Measure carbon sequestration and sustainable land use." }
              ].map((card, i) => (
                <div key={i} className="p-8 rounded-2xl border border-earth-200 bg-earth-50 hover:border-primary-300 transition-colors">
                  <div className="h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center mb-6">
                    <Leaf className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-charcoal-600">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section id="how-it-works" className="py-24 px-6 lg:px-12 bg-charcoal-950 text-white">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-charcoal-300 max-w-2xl mx-auto">Three simple steps to investor-ready sustainability data.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="mx-auto h-20 w-20 rounded-full bg-primary-900/50 flex items-center justify-center mb-6 text-2xl font-bold text-primary-400 border border-primary-800">1</div>
                <h3 className="text-xl font-semibold mb-3">Input Data</h3>
                <p className="text-charcoal-400">Enter farm activities like fuel use, livestock counts, and fertilizer applied.</p>
              </div>
              <div>
                <div className="mx-auto h-20 w-20 rounded-full bg-primary-900/50 flex items-center justify-center mb-6 text-2xl font-bold text-primary-400 border border-primary-800">2</div>
                <h3 className="text-xl font-semibold mb-3">Calculate Emissions</h3>
                <p className="text-charcoal-400">Our engine maps data to verified African emission factors to calculate your exact footprint.</p>
              </div>
              <div>
                <div className="mx-auto h-20 w-20 rounded-full bg-primary-900/50 flex items-center justify-center mb-6 text-2xl font-bold text-primary-400 border border-primary-800">3</div>
                <h3 className="text-xl font-semibold mb-3">Get Insights</h3>
                <p className="text-charcoal-400">Receive AI-driven reduction strategies and auto-generated sustainability reports.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Investor Metrics */}
        <section id="impact" className="py-24 px-6 lg:px-12 bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Investor-Ready Metrics</h2>
                <p className="text-charcoal-600 mb-8">
                  Quantify AI translates raw agricultural activity into the standardized carbon metrics required by climate financiers, impact investors, and carbon credit programs.
                </p>
                <div className="space-y-4">
                  {[
                    "Verified Emission Factors Database",
                    "Automated Carbon Reporting (GHG Protocol)",
                    "Audit-trail for Carbon Credit Claims",
                    "Financial & Environmental Forecasting"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary-500 flex-shrink-0" />
                      <span className="font-medium text-charcoal-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-earth-50 border border-earth-100">
                  <BarChart3 className="h-8 w-8 text-primary-600 mb-4" />
                  <div className="text-3xl font-bold mb-1">12K+</div>
                  <div className="text-sm text-charcoal-600">Farms Tracked</div>
                </div>
                <div className="p-6 rounded-2xl bg-earth-50 border border-earth-100 mt-8">
                  <ShieldCheck className="h-8 w-8 text-primary-600 mb-4" />
                  <div className="text-3xl font-bold mb-1">2.4M</div>
                  <div className="text-sm text-charcoal-600">Tonnes CO2e Verified</div>
                </div>
                <div className="p-6 rounded-2xl bg-earth-50 border border-earth-100">
                  <Factory className="h-8 w-8 text-primary-600 mb-4" />
                  <div className="text-3xl font-bold mb-1">350</div>
                  <div className="text-sm text-charcoal-600">Enterprises Using Platform</div>
                </div>
                <div className="p-6 rounded-2xl bg-earth-50 border border-earth-100 mt-8">
                  <Leaf className="h-8 w-8 text-primary-600 mb-4" />
                  <div className="text-3xl font-bold mb-1">$4M+</div>
                  <div className="text-sm text-charcoal-600">Carbon Credits Value Unlocked</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-charcoal-950 py-12 px-6 lg:px-12 text-charcoal-400 border-t border-charcoal-800">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-primary-600" />
            <span className="text-xl font-bold text-white">Quantify AI</span>
          </div>
          <p className="text-sm">© 2026 Quantify AI. All rights reserved. Built for African Agriculture.</p>
        </div>
      </footer>
    </div>
  );
}
