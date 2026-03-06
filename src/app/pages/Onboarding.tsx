import { useNavigate } from "react-router";
import { Button, Card, CardContent, CardHeader, CardTitle, Input, Label, Select } from "../components/ui";
import { Leaf, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function Onboarding() {
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-earth-50 px-4 py-12 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-3xl space-y-8"
      >
        <div className="text-center">
          <Leaf className="mx-auto h-12 w-12 text-primary-600" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-charcoal-950">
            Setup Your Farm Profile
          </h2>
          <p className="mt-2 text-sm text-charcoal-600">
            Tell us about your operations to customize your carbon baseline.
          </p>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-xl">Farm Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-8" onSubmit={handleRegister}>
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="farm-name">Farm Name</Label>
                  <Input id="farm-name" placeholder="E.g. Green Valley Estate" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="farm-type">Primary Farm Type</Label>
                  <Select id="farm-type" required defaultValue="">
                    <option value="" disabled>Select farm type</option>
                    <option value="crop">Crop Farming</option>
                    <option value="dairy">Dairy Farming</option>
                    <option value="beef">Beef Farming</option>
                    <option value="agro-forestry">Agro-Forestry</option>
                    <option value="mixed">Mixed Farm</option>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location (Region / Country)</Label>
                  <Input id="location" placeholder="E.g. Rift Valley, Kenya" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="farm-size">Farm Size (Hectares)</Label>
                  <Input id="farm-size" type="number" placeholder="0" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="animals">Number of Animals (if applicable)</Label>
                  <Input id="animals" type="number" placeholder="0" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="crops">Main Crops</Label>
                  <Input id="crops" placeholder="E.g. Maize, Wheat, Coffee" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="energy">Primary Energy Sources</Label>
                  <Select id="energy" defaultValue="">
                    <option value="" disabled>Select energy source</option>
                    <option value="grid">Grid Electricity</option>
                    <option value="diesel">Diesel Generators</option>
                    <option value="solar">Solar / Renewable</option>
                    <option value="mixed">Mixed</option>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="transport">Primary Transport Modes</Label>
                  <Select id="transport" defaultValue="">
                    <option value="" disabled>Select transport mode</option>
                    <option value="trucks">Heavy Trucks</option>
                    <option value="tractors">Tractors</option>
                    <option value="light">Light Commercial Vehicles</option>
                    <option value="none">None / Outsourced</option>
                  </Select>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <Button type="submit" size="lg" className="w-full sm:w-auto gap-2">
                  Save Profile & Continue
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
