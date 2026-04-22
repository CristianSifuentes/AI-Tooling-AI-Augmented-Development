import { NavLink } from "react-router-dom";
import type { PropsWithChildren } from "react";

const links = [
  { to: "/dashboard", label: "AI Engineer Dashboard" },
  { to: "/tooling", label: "LLM Tooling Lab" },
  { to: "/playbooks", label: "Validation Playbooks" }
];

export const AppShell = ({ children }: PropsWithChildren) => (
  <div className="layout">
    <aside className="sidebar">
      <h1>React AI Engineer 2026</h1>
      <p>Advanced project blueprint for AI-augmented development.</p>
      <nav>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
    <main className="content">{children}</main>
  </div>
);
