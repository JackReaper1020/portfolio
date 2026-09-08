import { createFileRoute } from "@tanstack/react-router";
import { SidePage, LightList } from "@/components/side-page";

export const Route = createFileRoute("/light/web-development")({
  head: () => ({ meta: [{ title: "Web Development & Design" }] }),
  component: Page,
});

function Page() {
  return (
    <SidePage tone="light" eyebrow="" title="Web Dev & Design">
      <p>
        Crafting clean, responsive frontend interfaces and engaging visual designs.
      </p>
      <LightList
        items={[
          {
            title: "Current Stack & Tools",
            content: "C, Python, Dart (basics), HTML, JavaScript, SQL, Django, Flask, Node JS"
          },
          {
            title: "Full-Stack Web Development. (Django)",
            content: "Built a full-featured website for Shalom English School using a Django backend, implementing dynamic templates and robust user authentication. Currently developing an automated student attendance system using Python, Flask, and SQLite3 that integrates fingerprint authentication hardware for improved tracking accuracy"
          },
          {
            title: "Autmated Student Attendance System. (Flask)",
            content: "Develop a system to automate student attendance recording via fingerprint authentication while using python for backend logic, Flask as the web framework and SQLite3 for database management. Also designed a user friendlyinterface for seamless attendance marking and retrieval aiming to improve accuract and efficiency of attendance tracking in educational insitiutions."
          },
          {
            title: "Application Develeopment. (Flutter)",
            content: "Created a mobile daily task manager using Flutter. Learnt how to handle custom UI layouts and state management.",
          },
          {
            title: "Video Editing",
            content: "Edited gameplay and highlight videos for YouTube using Adobe Premiere Pro."
          },
          {
            title: "Graphic Design & Branding",
            content: (
              <div className="space-y-4">
                <p><strong>NP-MUN:</strong> Created title cards, certificates, placards and banners</p>
                
                {/* Example Image 1 */}
                <div className="overflow-hidden rounded-md border border-neutral-200">
                  <img src="/npmun-bro.png" alt="NP-MUN Banner Design" className="w-full object-cover" />
                </div>

                {/* Example Image 2 */}
                <div className="overflow-hidden rounded-md border border-neutral-200">
                  <img src="/cert-npmun.jpg" alt="Vibes di Vista Certificate" className="w-full object-cover" />
                </div>
                {/* Image 3 */}
                <div className="overflow-hidden rounded-md border border-neutral-200">
                  <img src="/NPMUN.png" alt="Vibes di Vista Certificate" className="w-full object-cover" />
                </div>
                <p><strong>Vibes di Vista:</strong> Designed event certificates and promotional banners.</p>
                
                {/* Example Image 1 */}
                <div className="overflow-hidden rounded-md border border-neutral-200">
                  <img src="/vibes_cert.jpg" alt="NP-MUN Banner Design" className="w-full object-cover" />
                </div>

                {/* Example Image 2 */}
                <div className="overflow-hidden rounded-md border border-neutral-200">
                  <img src="/poster.jpg" alt="Vibes di Vista Certificate" className="w-full object-cover" />
                </div>
                <p><strong>WeRise Foundation:</strong> Designed event promotional banners.</p>
                {/* Image werise */}
                <div className="overflow-hidden rounded-md border border-neutral-200">
                  <img src="/werise.png" alt="Vibes di Vista Certificate" className="w-full object-cover" />
                </div>
              </div>
            )
          },
        ]}
      />
    </SidePage>
  );
}
