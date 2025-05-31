import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import Resources from "@/pages/Resources";
import Contact from "@/pages/Contact";
import Remind from "@/pages/Remind";

function Router() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/resources" component={Resources} />
          <Route path="/contact" component={Contact} />
          <Route path="/remind" component={Remind} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Router />
      </div>
    </TooltipProvider>
  );
}

export default App;
