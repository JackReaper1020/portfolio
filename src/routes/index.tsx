import { createFileRoute, Link } from "@tanstack/react-router";
import {  Mail, ArrowRight, Terminal } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Anuyog J. Mangrati — Portfolio" },
      { name: "description", content: "BCA graduate in Kathmandu — blending frontend code, visual design, and cybersecurity." },
    ],
  }),
});

function Index() {
  return (
    /* A soft, premium ambient background to make the main card pop */
<main 
      className="min-h-screen flex items-center justify-center p-4 md:p-8 font-sans selection:bg-blue-200 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      
      {/* Optional: Add a dark or blurred overlay so your main card still pops out */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm pointer-events-none" />
      
      {/* MAIN CARD CONTAINER - Increased to max-w-7xl */}
      <div className="w-full max-w-7xl bg-white rounded-3xl relative z-10 shadow-2xl shadow-slate-300/60 overflow-hidden flex flex-col transition-all">
        
        {/* TOP SECTION: PROFILE */}
{/* TOP SECTION: PROFILE */}
        <div className="relative z-10 flex flex-col items-center gap-6 bg-white px-8 pb-10 pt-12 text-center md:flex-row md:items-start md:gap-10 md:text-left md:px-16 md:pb-12 md:pt-16">
          
          {/* Avatar (Left) */}
<div className="flex h-38 w-38 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border border-3 border-[#4added]/80 bg-slate-50 text-slate-400 shadow-sm md:h-32 md:w-32">
            
            {/* Make sure the src matches the exact file name in your public folder */}
            <img 
              src="/photo.png" 
              alt="Anuyog J. Mangrati" 
              className="h-full w-full object-cover"
            />
            
          </div>

          {/* TEXT & SOCIALS WRAPPER */}
          <div className="mt-2 flex w-full flex-1 flex-col justify-between gap-8 md:flex-row md:gap-6">
            
            {/* Bio & Details (Center-Left) */}
            <div className="max-w-2xl">
              <h1 className="text-2xl font-extrabold uppercase tracking-tight text-slate-900 md:text-4xl">
                Anuyog J. Mangrati
              </h1>
              
              <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-lg">
                BCA graduate based in Darjeeling blending frontend code, visual design, and cybersecurity. Below are two distinct paths. Choose your side.
              </p>
            </div>

            {/* Social Links (Far Right) */}
            <div className="flex shrink-0 justify-center gap-4 md:mt-1 md:justify-end">
              
              {/* GitHub (Raw SVG) */}
              <a 
                href="https://github.com/JackReaper1020" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
              </a>

              {/* LinkedIn (Raw SVG) */}
              <a 
                href="https://linkedin.com/in/YOUR_USERNAME" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 hover:text-blue-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>

              {/* Email (Lucide) */}
              <a 
                href="mailto:anuyogjmangrati@gmail.com" 
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
              >
                <Mail size={18} />
              </a>
              
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: THE SPLIT */}
        <div className="flex flex-col md:flex-row relative z-0">
          
          {/* THE LIGHT SIDE */}
          <Link 
            to="/light/web-development"
            className="group flex-1 relative bg-gradient-to-br from-[#11c1e4]/25 to-[#fffdd0]/25 p-10 md:p-20 flex flex-col justify-center items-start border-t border-slate-100 md:border-r transition-all duration-500 ease-out hover:shadow-[0_-15px_40px_-15px_rgba(164,221,237,0.3)] hover:z-20"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a1b21] transition-transform duration-500 group-hover:translate-x-2">
             <span className="text-[#1a1b21] font-bold">{'</>'}</span> Web Dev
            </h2>
            <p className="mt-3 text-base text-[#1a1b21]/80 font-medium transition-transform duration-500 group-hover:translate-x-2 delay-75">
              Build & Create. Frontend & Design.
            </p>
            
            <div className="mt-10 inline-flex items-center gap-2 border border-[#1a1b21] rounded-full  px-7 py-3 text-sm font-medium text-[#1a1b21] shadow-md transition-all group-hover:shadow-[0_0_20px_rgba(74, 221, 237, 0.35)] duration-300 group-hover:text-[#4added] group-hover:bg-[#1a1b21] ">
              View Portfolio 
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </Link>

          {/* THE DARK SIDE */}
          <Link 
            to="/dark/cybersecurity"
            className="group flex-1 relative bg-[#1a1b21] p-10 md:p-20 flex flex-col justify-center items-start transition-all duration-500 ease-out hover:shadow-[0_-15px_40px_-15px_rgba(164,221,237,0.25)] hover:z-20 overflow-hidden"
          >
            <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:repeating-linear-gradient(0deg,#a4dded_0,#a4dded_1px,transparent_1px,transparent_3px)]" />
            
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight transition-transform duration-500 group-hover:translate-x-2">
              <span className="text-[#a4dded]">$</span> Cyber_Sec{" "}
            </h2>
            <p className="mt-3 text-base text-[#a4dded]/80 font-medium transition-transform duration-500 group-hover:translate-x-2 delay-75">
              &gt; Secure_&amp;_Exploit; network security and Linux.
            </p>
            
            <div 
              className="mt-10 inline-flex items-center gap-2 rounded-none border border-[#a4dded]  px-6 py-3 text-sm font-medium text-[#a4dded] group-hover:shadow-[0_0_20px_rgba(164,221,237,0.35)] transition-all hover:bg-[#a4dded]/20"
            >
              <Terminal className="h-5 w-5" /> Enter the Terminal_
            </div>
          </Link>

        </div>
      </div>
    </main>
  );
}
