import { createBrowserRouter, redirect } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { Login } from "./pages/Login";
import { Onboarding } from "./pages/Onboarding";
import { DashboardLayout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { DataEntry } from "./pages/DataEntry";
import { Emissions } from "./pages/Emissions";
import { AiInsights } from "./pages/AiInsights";
import { Forecasting } from "./pages/Forecasting";
import { Reports } from "./pages/Reports";
import { CarbonCredits } from "./pages/CarbonCredits";
import { AdminFactors } from "./pages/AdminFactors";
import { InvestorMock } from "./pages/InvestorMock";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/onboarding",
    Component: Onboarding,
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "data", Component: DataEntry },
      { path: "emissions", Component: Emissions },
      { path: "insights", Component: AiInsights },
      { path: "forecasting", Component: Forecasting },
      { path: "reports", Component: Reports },
      { path: "credits", Component: CarbonCredits },
      { path: "admin", Component: AdminFactors },
      { path: "investor", Component: InvestorMock },
    ],
  },
  {
    path: "*",
    loader: () => redirect("/")
  }
]);
