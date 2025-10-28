import { motion } from "framer-motion";
import { Play, Plus } from "lucide-react";

const PROFILE_NAME = "Vijaya Amruth Krishna Kavaturi";
const TAGLINE = "Data Science | ML | AI Engineering | Analytics";
const ONE_LINER =
  "Turning messy real-world data into intelligent products people actually use.";

const DATA_SCIENCE_RESUME_URL =
  "https://drive.google.com/file/d/1eB8aRmiCU4B1pNeSF5TvWiDdgOafR57_/view?usp=drive_link";

type RoleInfo = {
  title: string;
  blurb: string;
  resumeUrl?: string;
};

const ROLES: RoleInfo[] = [
  {
    title: "Data Scientist",
    blurb: "Experiment design, predictive modeling, storytelling with data.",
    resumeUrl: DATA_SCIENCE_RESUME_URL,
  },
  {
    title: "Data Engineer",
    blurb: "Pipelines, APIs, AWS, scalable data platforms.",
  },
  {
    title: "ML Engineer",
    blurb: "LLMs, training loops, deployment, monitoring.",
  },
  {
    title: "AI Engineer",
    blurb: "RAG, GenAI products, user-facing AI features.",
  },
  {
    title: "Data Analyst",
    blurb: "Dashboards, insights, exec-facing decisions.",
  },
];

function HeroBanner() {
  return (
    <section className="p-8 rounded-2xl bg-gradient-to-b from-black via-zinc-900 to-black border border-red-600/20 shadow-[0_0_60px_rgba(255,0,0,0.15)]">
      <h1 className="text-3xl font-bold text-white">
        Now Streaming: {PROFILE_NAME}
      </h1>
      <p className="text-zinc-300 text-lg">{TAGLINE}</p>
      <p className="text-zinc-400 text-sm max-w-xl">{ONE_LINER}</p>

      <div className="flex gap-3 pt-4">
        <a
          href="https://www.linkedin.com/in/vijayaamruth/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold hover:bg-zinc-200"
        >
          <Play className="h-4 w-4" />
          Watch Trailer
        </a>

        <a
          href={DATA_SCIENCE_RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-zinc-900 border border-zinc-700 text-white flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold hover:bg-zinc-800"
        >
          <Plus className="h-4 w-4" />
          View Resume
        </a>
      </div>
    </section>
  );
}

function ProfilesRow() {
  return (
    <section className="text-white space-y-4">
      <h2 className="text-xl font-semibold">Who's Watching?</h2>
      <p className="text-zinc-500 text-[11px] -mt-2">
        Click to open the role-specific resume (Data Science available)
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {ROLES.map((role) => (
          <motion.a
            key={role.title}
            whileHover={{ scale: 1.05 }}
            href={role.resumeUrl}
            target={role.resumeUrl ? "_blank" : undefined}
            rel={role.resumeUrl ? "noopener noreferrer" : undefined}
            className="bg-zinc-900 p-3 rounded-lg border border-zinc-700 block cursor-pointer hover:shadow-[0_0_30px_rgba(229,9,20,0.4)]"
          >
            <h3 className="text-sm font-semibold text-white flex items-center justify-between">
              <span>{role.title}</span>
              {role.resumeUrl && (
                <span className="text-[10px] text-red-500 font-semibold uppercase">
                  Open ▶
                </span>
              )}
            </h3>

            <p className="text-xs text-zinc-400 leading-snug pt-1">
              {role.blurb}
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default function NetflixResumePage() {
  return (
    <main className="min-h-screen w-full bg-black text-white font-sans antialiased p-6 md:p-10 space-y-10 max-w-screen-xl mx-auto">
      <HeroBanner />
      <ProfilesRow />
    </main>
  );
}
