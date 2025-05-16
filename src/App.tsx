
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AetherProvider } from "./components/aether/AetherProvider";
import Index from "./pages/Index";
import AetherAssistantPage from "./pages/aether-assistant";
import FeaturesPage from "./pages/features";
import ArchitecturePage from "./pages/architecture";
import RoadmapPage from "./pages/roadmap";
import AboutPage from "./pages/about";
import LoginPage from "./pages/login";
import EarlyAccessPage from "./pages/early-access";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AetherProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/aether-assistant" element={<AetherAssistantPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/architecture" element={<ArchitecturePage />} />
            <Route path="/roadmap" element={<RoadmapPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/early-access" element={<EarlyAccessPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AetherProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
