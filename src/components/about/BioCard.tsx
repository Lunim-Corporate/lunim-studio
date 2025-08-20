import { TeamMember } from "../../utils/teamData";
import * as LucideIcons from "lucide-react";

interface BioCardProps {
  member: TeamMember;
  expanded: boolean;
}

export default function BioCard({ member, expanded }: BioCardProps) {
  return (
    <div
      className={`transition-all duration-500 ease-in-out overflow-hidden bg-slate-900/90 
        rounded-b-xl shadow-lg
        ${expanded ? "max-h-[500px] opacity-100 p-5" : "max-h-0 opacity-0 p-0"}`}
    >
      {/* Name + Role when expanded */}
      {expanded && (
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white">{member.name}</h3>
          <p className="text-sm text-slate-400">{member.role}</p>
        </div>
      )}

      <div className="text-slate-200 text-start text-sm space-y-2 py-2">
        {member.details.map((d, i) => (
          <p key={i}>{d}</p>
        ))}
      </div>

      {/* <div className="flex gap-4 mt-3">
        {member.social.map((s, i) => {
          const Icon =
            (LucideIcons as any)[
              s.icon.charAt(0).toUpperCase() + s.icon.slice(1)
            ] || LucideIcons.Circle;
          return (
            <a
              key={i}
              href={s.url}
              className="text-slate-400 hover:text-sky-400 transition"
            >
              <Icon size={20} />
            </a>
          );
        })}
      </div> */}
    </div>
  );
}
