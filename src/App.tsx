import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Welcome from "./components/Welcome";
import Shots from "./components/Shots";
import Header from "./components/Header";
import Nav from "./components/Nav";
import bgImage from "./images/padel-bg.jpg";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <div
      style={{ backgroundImage: "url(" + bgImage + ")" }}
      className="relative flex min-h-screen flex-col bg-cover bg-center text-primary-50"
    >
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Header />
          <div className="flex-1 bg-black bg-opacity-95">
            <div className="container py-8">
              <div className="flex justify-between gap-20">
                <Nav />
                <Routes>
                  <Route path="/" element={<Welcome />} />
                  <Route path="/shots" element={<Shots />} />
                </Routes>
              </div>
            </div>
          </div>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById("root");
if (!container) {
  throw new Error("Could not find root container");
}
const root = createRoot(container);
root.render(<App />);
