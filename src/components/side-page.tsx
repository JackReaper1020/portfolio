import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

type Tone = "light" | "dark";

export function SidePage({
  tone,
  eyebrow,
  title,
  children,
}: {
  tone: Tone;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  if (tone === "light") {
    return (
      <main className="group flex-1 relative bg-gradient-to-br from-[#fffdd0]/25 to-[#11c1e4]/25 p-10 md:p-20 flex flex-col justify-center items-start border-t border-slate-100 md:border-r transition-all duration-500 ease-out hover:shadow-[0_-15px_40px_-15px_rgba(164,221,237,0.3)] hover:z-20">
        <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-900 transition-colors hover:text-neutral-600"
          >
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            {eyebrow}
          </p>
          <h1 className="mt-2 font-serif text-4xl font-bold leading-tight md:text-6xl">
            {title}
          </h1>
          <div className="mt-8 space-y-6 text-neutral-700 leading-relaxed">{children}</div>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen w-full bg-[#1a1b21] font-mono text-[#4added]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:repeating-linear-gradient(0deg,#4added_0,#4added_1px,transparent_1px,transparent_3px)]" />
      <div className="relative mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-[#4added] transition-colors hover:[text-shadow:0_0_12px_#a4dded] "
        >
          <ArrowLeft className="h-4 w-4 text-[#4added]" /> cd ../
        </Link>
        <p className="mt-10 text-xs uppercase tracking-[0.3em] text-[#4added]">{eyebrow}</p>
        <h1 className="mt-2 text-4xl font-bold leading-tight text-white md:text-6xl">
          <span className="text-[#4added]">$ </span>
          {title}
        </h1>
        <div className="mt-8 space-y-6 leading-relaxed text-[#4added]">{children}</div>
      </div>
    </main>
  );
}

export function LightList({ items }: { items: { title: string; content?: React.ReactNode }[] }) {
  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <details 
          key={index} 
          open={true}
          className="group rounded-lg border border-neutral-200 bg-[#f8fafc]/80 p-3 text-sm text-neutral-700 transition-all hover:bg-[#f1f5f9]/90 hover:shadow-sm"
        >
          {/* hide default arrow and use the custom text arrow */}
          <summary className="flex cursor-pointer list-none items-center gap-3 outline-none [&::-webkit-details-marker]:hidden">
            <span className="text-neutral-400 transition-transform duration-200 group-open:rotate-90">
              ›
            </span>
            <span className="font-semibold text-neutral-900">{item.title}</span>
          </summary>
          
          {/* The hidden content that reveals on click */}
          {item.content && (
            <div className="mt-3 border-t border-neutral-100 pl-5 pt-3 text-sm leading-relaxed text-neutral-600">
              {item.content}
            </div>
          )}
        </details>
      ))}
    </div>
  );
}

export function DarkList({ items }: { items: { title: string; content?: React.ReactNode }[] }) {
  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <details 
          key={index} 
          open={true}
          className="group rounded-none border border-[#a4dded] bg-[#1a1b21] p-3 text-sm text-[#a4dded] transition-all hover:bg-[#a4dded]/5"
        >
          {/* hide default arrow and use our custom > symbol */}
          <summary className="flex cursor-pointer list-none items-center gap-3 outline-none [&::-webkit-details-marker]:hidden">
            <span className="text-[#a4dded] transition-transform duration-200 group-open:rotate-90">
              &gt;
            </span>
            <span className="font-bold">{item.title}</span>
          </summary>
          
          {/* The hidden content that reveals on click */}
          {item.content && (
            <div className="mt-3 border-t border-[#a4dded]/30 pl-5 pt-3 text-sm leading-relaxed text-[#a4dded]/80">
              {item.content}
            </div>
          )}
        </details>
      ))}
    </div>
  );
}
