import React from "react";
import {
  FaCode,
  FaCloud,
  FaCubes,
  FaShieldAlt,
  FaLayerGroup,
  FaComments,
} from "react-icons/fa";
import { Card, Reveal, SectionHeader } from "./ui";

const skillGroups = [
  {
    name: "DevOps",
    icon: <FaCubes />,
    span: "lg:col-span-2",
    skills: [
      "Kubernetes (GKE)",
      "Terraform",
      "Vault",
      "External Secrets",
      "Argo CD",
      "Kustomize",
      "Docker",
      "CI/CD",
      "Linux",
    ],
  },
  {
    name: "Languages",
    icon: <FaCode />,
    skills: ["Python", "C#", "Java", "Node.js", "TypeScript", "PHP", "Ruby", "C", "SQL"],
  },
  {
    name: "Cloud & Data",
    icon: <FaCloud />,
    skills: ["GCP", "BigQuery", "Datastore", "Cloud Functions", "MySQL", "PostgreSQL"],
  },
  {
    name: "Security",
    icon: <FaShieldAlt />,
    skills: ["Secrets management", "Keycloak / OIDC", "Elastic", "Cloud Logging"],
  },
  {
    name: "Other",
    icon: <FaLayerGroup />,
    skills: ["React", "Salesforce", "HubSpot"],
  },
];

const spokenLanguages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "Hebrew", level: "Fluent" },
];

const GroupTitle = ({ icon, name }) => (
  <div className="flex items-center gap-3 mb-5">
    <span className="text-primary-300">{icon}</span>
    <h3 className="text-lg font-semibold text-white">{name}</h3>
  </div>
);

const LanguagesAndSkills = () => (
  <section id="skills" className="section-padding">
    <div className="container mx-auto max-w-6xl">
      <SectionHeader index="04" eyebrow="Skills" title="The tools I" accent="work with" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group, index) => (
          <Reveal key={group.name} className={group.span || ""} delay={index * 0.05}>
            <Card className="p-7 h-full">
              <GroupTitle icon={group.icon} name={group.name} />
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}

        <Reveal className="md:col-span-2 lg:col-span-3" delay={0.1}>
          <Card className="p-7">
            <GroupTitle icon={<FaComments />} name="Spoken" />
            <div className="grid sm:grid-cols-3 gap-3">
              {spokenLanguages.map((language) => (
                <div
                  key={language.name}
                  className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3"
                >
                  <span className="font-medium text-white">{language.name}</span>
                  <span className="font-mono text-xs text-primary-200">{language.level}</span>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>
      </div>
    </div>
  </section>
);

export default LanguagesAndSkills;
