
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import CreateToken from "@/pages/CreateToken";
import Liquidity from "@/pages/Liquidity";
import NotFound from "@/pages/NotFound";
import { SolanaWalletProvider } from "@/components/WalletProvider";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SolanaWalletProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/create-token" element={<CreateToken />} />
            <Route path="/liquidity" element={<Liquidity />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </SolanaWalletProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
