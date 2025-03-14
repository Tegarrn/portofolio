import { useState } from "react";
import gifAnime from "./assets/anime-opening.gif";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

export default function App() {
  const [showContent, setShowContent] = useState(false);

  // Simulate opening animation
  setTimeout(() => setShowContent(true), 3000);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {!showContent ? (
        <div className="flex items-center justify-center h-screen">
          <img src={gifAnime} alt="Opening Animation" className="w-64" />
        </div>
      ) : (
        <>
          <Navbar />
          <main className="pt-20 p-6">
            <Home />
          </main>
        </>
      )}
    </div>
  );
}
