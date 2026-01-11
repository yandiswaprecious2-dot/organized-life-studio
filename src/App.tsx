import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import BudgetingTemplates from "./pages/BudgetingTemplates";
import StudentsTemplates from "./pages/StudentsTemplates";
import ProfessionalsTemplates from "./pages/ProfessionalsTemplates";
import TradersTemplates from "./pages/TradersTemplates";
import WellnessTemplates from "./pages/WellnessTemplates";
import DailyPlanningTemplates from "./pages/DailyPlanningTemplates";
import GoalSettingTemplates from "./pages/GoalSettingTemplates";
import MarketersTemplates from "./pages/MarketersTemplates";
import EssentialTemplates from "./pages/EssentialTemplates";
import CoreTemplates from "./pages/CoreTemplates";
import CustomizedTemplates from "./pages/CustomizedTemplates";
import BrowseTemplates from "./pages/BrowseTemplates";
import MonthlyBudgetPlannerEssential from "./pages/templates/MonthlyBudgetPlannerEssential";
import ExpenseTrackerClassic from "./pages/templates/ExpenseTrackerClassic";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/templates/budgeting" element={<BudgetingTemplates />} />
            <Route path="/templates/budgeting/monthly-budget-planner-essential" element={<MonthlyBudgetPlannerEssential />} />
            <Route path="/templates/budgeting/expense-tracker-classic" element={<ExpenseTrackerClassic />} />
            <Route path="/templates/students" element={<StudentsTemplates />} />
            <Route path="/templates/professionals" element={<ProfessionalsTemplates />} />
            <Route path="/templates/traders" element={<TradersTemplates />} />
            <Route path="/templates/wellness" element={<WellnessTemplates />} />
            <Route path="/templates/daily-planning" element={<DailyPlanningTemplates />} />
            <Route path="/templates/goal-setting" element={<GoalSettingTemplates />} />
            <Route path="/templates/marketers" element={<MarketersTemplates />} />
            <Route path="/pricing/essential" element={<EssentialTemplates />} />
            <Route path="/pricing/core" element={<CoreTemplates />} />
            <Route path="/pricing/customized" element={<CustomizedTemplates />} />
            <Route path="/browse" element={<BrowseTemplates />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
