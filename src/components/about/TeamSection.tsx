import { useState } from "react";
import { team } from "../../utils/teamData";
import TeamMember from "./TeamCard";

export default function Team() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="max-w-6xl mx-auto px-4">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member, i) => (
          <div
            key={i}
            className={`transition duration-300 ${
              active && active !== member.name ? "blur-sm opacity-70" : ""
            }`}
          >
            <TeamMember
              member={member}
              isActive={active === member.name}
              setActive={setActive}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
