import { createFileRoute } from "@tanstack/react-router";
import { SidePage, DarkList } from "@/components/side-page";

export const Route = createFileRoute("/dark/cybersecurity")({
  head: () => ({ meta: [{ title: "Cybersecurity" }] }),
  component: Page,
});

function Page() {
  return (
    <SidePage tone="dark" eyebrow="" title="Cybersecurity_">
      <p>
        &gt; Working through CTFs and structured learning paths — web exploitation, network
        recon, and privilege escalation on Linux boxes.
      </p>
      <DarkList
        items={[
          {
            title: "Security Research and Vulnerability Assessment",
            content: "Identified a CWE-798 (Hard-coded Credentials) vulnerability in a production React/Vite SPA, successfully bypassing client-side authentication. Exploited unauthenticated Convex Cloud API endpoints to demonstrate unauthorized read and write access to production databases and sensitive customer PII. Delivered a detailed technical vulnerability report providing a proof-of-concept and an actionable server-side remediation architecture."
          },
          {
            title: "TryHackMe / HackTheBox rooms and boxes",
            content: (
              <ul className="space-y-1 list-disc list-inside">
                <li>Completed: Basic Pentesting, Agent Sudo, Linux Fundamentals Part 1, Junior Security Analyst intro, Offensive Security intro, Lo-Fi, Defensive Security Intro, Search Skills, Advent of Cyber 2024, SOC Role in Blue Team, Cupid's Matchmaker, TryHeartMe, Hidden Deep into My Heart, Letter, Fools Mate, Billing</li>
                <li>Working on: Blue, Ice, Fools Mate Revenge</li>
                <li>Focus: Privilege escalation,VAPT, active directory and OSINT</li>
              </ul>
            )
          },
          {
            title: "Web: OWASP Top 10, auth bypass, IDOR",
            content: "Practicing SQL injection, Cross-Site Scripting (XSS), and finding logical flaws in authentication mechanisms."
          },
          {
            title: "Network scanning with nmap and Wireshark",
            content: "Learning to map out network typologies, find hidden ports, and analyze packet captures for credentials."
          },
          {
            title: "Writeups and personal notes",
            content: "I document all my box completions on Notion to build my own personal methodology cheat sheet."
          },
        ]}
      />
    </SidePage>
  );
}
