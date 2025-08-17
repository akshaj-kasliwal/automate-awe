import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Ensure light theme is applied on mount
    document.documentElement.classList.remove('dark');
    document.body.classList.remove('dark');
    
    // Set light theme CSS variables
    const root = document.documentElement;
    root.style.setProperty('--background', '0 0% 100%');
    root.style.setProperty('--foreground', '222.2 84% 4.9%');
    root.style.setProperty('--card', '0 0% 100%');
    root.style.setProperty('--card-foreground', '222.2 84% 4.9%');
    root.style.setProperty('--primary', '258 90% 60%');
    root.style.setProperty('--primary-foreground', '0 0% 100%');
    root.style.setProperty('--secondary', '220 20% 96%');
    root.style.setProperty('--secondary-foreground', '222.2 47.4% 11.2%');
    root.style.setProperty('--muted', '220 20% 96%');
    root.style.setProperty('--muted-foreground', '215.4 16.3% 46.9%');
    root.style.setProperty('--accent', '195 95% 55%');
    root.style.setProperty('--accent-foreground', '222.2 47.4% 11.2%');
    root.style.setProperty('--border', '214.3 31.8% 91.4%');
    root.style.setProperty('--input', '214.3 31.8% 91.4%');
    root.style.setProperty('--ring', '258 90% 60%');
    
    // Set body styles
    document.body.style.backgroundColor = 'hsl(0 0% 100%)';
    document.body.style.color = 'hsl(222.2 84% 4.9%)';
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
