import React from "react";
import { Card, Reveal, SectionHeader } from "./ui";

const experienceData = [
  {
    title: "Backend & DevOps Engineer",
    company: "Copyleaks",
    period: "Nov 2024 - Present",
    current: true,
    groups: [
      {
        name: "Security & Platform",
        items: [
          "Lead a company-wide secrets management migration across multiple teams and services.",
          "Designed a zero-downtime cutover, rolled out to staging before production.",
          "Secured the platform with access policies as code, tested backups and audit logging.",
          "Built just-in-time access tooling, a secrets CLI and automatic secret rotation.",
        ],
      },
      {
        name: "Cloud & Data",
        items: [
          "Led the migration and integration of core business platforms from HubSpot to Salesforce.",
          "Migrated high-volume GCP buckets, and Cloud Functions and triggers to 2nd generation.",
          "Built a resumable data migration where standard tooling failed at high data volume.",
          "Migrated critical tables from Datastore to BigQuery; optimized database indexes to reduce query cost.",
        ],
      },
      {
        name: "Developer Productivity & SDKs",
        items: [
          "Moved builds to private worker pools and optimized Docker images, speeding up builds and releases.",
          "Own the core SDKs across Python, Java, Node.js, PHP, Ruby and C#: maintenance, upgrades and new product versions.",
          "Established Confluence documentation for every completed project as a team standard.",
        ],
      },
    ],
  },
  {
    title: "Academic Mentor",
    company: "Braude College",
    period: "Jan 2020 - Jan 2022",
    groups: [
      {
        items: ["Mentored first-year students on course planning and study strategies."],
      },
    ],
  },
];

const BulletList = ({ items }) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3 leading-relaxed text-slate-300">
        <span className="w-1.5 h-1.5 rounded-full bg-primary-300 mt-2.5 flex-shrink-0" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const Experience = () => (
  <section id="experience" className="section-padding">
    <div className="container mx-auto max-w-6xl">
      <SectionHeader index="02" eyebrow="Experience" title="Where I've" accent="worked" />

      <div className="space-y-5">
        {experienceData.map((job) => (
          <Reveal key={job.company}>
            <Card className="p-7 md:p-10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                    {job.title}
                  </h3>
                  <p className="mt-1 text-lg text-primary-300">{job.company}</p>
                </div>
                <span
                  className={`inline-flex w-fit items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-xs ${
                    job.current
                      ? "border-primary-300/30 bg-primary-300/10 text-primary-200"
                      : "border-white/10 bg-white/[0.04] text-slate-300"
                  }`}
                >
                  {job.period}
                </span>
              </div>

              <div className="divide-y divide-white/[0.07]">
                {job.groups.map((group, index) => (
                  <div
                    key={group.name || index}
                    className={`py-6 first:pt-0 last:pb-0 ${
                      group.name ? "grid md:grid-cols-[13rem_1fr] gap-4 md:gap-8" : ""
                    }`}
                  >
                    {group.name && (
                      <h4 className="font-semibold text-white">{group.name}</h4>
                    )}
                    <BulletList items={group.items} />
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
