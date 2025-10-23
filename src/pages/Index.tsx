"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
}

const Index = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Fetch projects from JSON file
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error loading projects:", err));
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-6 py-4">
          <ul className="flex gap-8 justify-center">
            <li>
              <a href="#home" className="text-muted-foreground hover:text-primary transition-smooth">
                Home
              </a>
            </li>
            <li>
              <a href="#experience" className="text-muted-foreground hover:text-primary transition-smooth">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-smooth">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-smooth">
                Skills
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gradient animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Shiva Karthik Y
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
            Senior Front-End Engineer (React • TypeScript • MUI)
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            Front-end engineer with 8+ years building data-intensive apps in React, TypeScript, MUI, Redux-Saga, and React Query. 
            Known for launching greenfield products as a solo FE owner, partnering tightly with backend and business stakeholders, 
            and turning fragmented legacy tools into fast, cohesive internal platforms with measurable productivity gains.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 justify-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <a
              href="https://linkedin.com/in/shiva-karthik"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card hover:bg-primary/10 transition-smooth shadow-elegant"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://github.com/shivalr03"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card hover:bg-primary/10 transition-smooth shadow-elegant"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://leetcode.com/shivalr03"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card hover:bg-primary/10 transition-smooth shadow-elegant"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-2.365-1.914-5.776-1.649-7.974.675L5.68 7.03 4.23 8.569c-.215.213-.356.48-.428.776a.72.72 0 0 0-.008.117 1.579 1.579 0 0 0 .062.396.718.718 0 0 0 .169.339c.2.196.475.289.759.289.31 0 .618-.117.847-.352.031-.031.061-.065.091-.1l1.45-1.538 1.635-1.751 4.537-4.836c.256-.273.645-.423 1.015-.423z"/>
              </svg>
            </a>
            <a
              href="https://shiva-karthik.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card hover:bg-primary/10 transition-smooth shadow-elegant"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </a>
            <a
              href="mailto:shivalr03@gmail.com"
              className="p-3 rounded-lg bg-card hover:bg-primary/10 transition-smooth shadow-elegant"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>

          {/* Download CV Button */}
          <a href="/Shiva_Karthik_Y_CV.pdf" download>
            <Button size="lg" className="shadow-glow animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </Button>
          </a>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Professional Experience</h2>
          
          <div className="space-y-12">
            {/* Web Synergies */}
            <Card className="p-6 card-gradient shadow-elegant transition-smooth hover:shadow-glow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-2">Senior Front-End Engineer</h3>
                  <p className="text-lg text-foreground">Web Synergies - Schreiber Foods (OPERA Platform)</p>
                  <p className="text-sm text-muted-foreground mt-1">React, TypeScript, Material UI, Redux-Saga, React Query</p>
                </div>
                <span className="text-muted-foreground mt-2 md:mt-0">Aug 2024 - Present</span>
              </div>
              
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-foreground mb-2">Key Contributions</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span>Designed FE architecture (module structure, server-state caching, state orchestration, error boundaries, i18n hooks)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span>Built reusable UI primitives & feature modules: high-density tables, charts, filter panels, form engine, export & audit trails</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span>Implemented React Query for server-state and Redux-Saga for long-running workflows; standardized Axios clients & typed API models</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span>Delivered performance baselines: DataGrid virtualization, suspense-style loading, code-splitting, memoized selectors and list rendering</span>
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-semibold text-foreground mb-2">Impact (Measurable)</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span>Unified 5 plants onto one web app (replacing 10+ fragmented tools/spreadsheets) → 100+ monthly active internal users across NOB/STO/TAL/TEN/CAS</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span>Cut report TAT from ~1 day of manual collation to &lt; 15 minutes via one-click exports and pre-filtered dashboards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span>Improved page load from ~4.5s → ~2.2s (-51%) and heavy table render from &gt;1.2s → &lt;300ms using virtualization & caching</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span>Reduced duplicate data entry ~60% and UI-related support tickets ~35% after two release iterations (usability + validation)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span>Increased data accuracy ~30% by enforcing typed forms, mandatory validations and server-side checks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span>Shipped v1 in 10 weeks and sustained bi-weekly releases with &lt;2% regressions using Jest/RTL smoke suites</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Modules</h4>
                <p className="text-muted-foreground">AutoControl, Cleaning Registry, Diary Book, CIP (dashboards, interval timers, frequency-based polling, line-status workflows, exports)</p>
              </div>
            </Card>
            <Card className="p-6 card-gradient shadow-elegant transition-smooth hover:shadow-glow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-2">Senior Software Engineer</h3>
                  <p className="text-lg text-foreground">WondermentApps</p>
                  <p className="text-sm text-muted-foreground mt-1">React, Redux Toolkit, React Query, TypeScript, Tailwind CSS</p>
                </div>
                <span className="text-muted-foreground mt-2 md:mt-0">Jun 2024 - Aug 2024</span>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">▹</span>
                  <span>Spearheaded development of a cutting-edge application with a robust, scalable architecture to meet complex client requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">▹</span>
                  <span>Engineered and deployed dynamic tables, interactive charts, and authentication forms (login/signup) to enhance UX and functionality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">▹</span>
                  <span>Configured and optimized the project environment, integrating essential tools and libraries for performance and efficient workflow</span>
                </li>
              </ul>
            </Card>

            {/* Lifesight-Moda */}
            <Card className="p-6 card-gradient shadow-elegant transition-smooth hover:shadow-glow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-2">Software Engineer</h3>
                  <p className="text-lg text-foreground">Lifesight - Moda</p>
                  <p className="text-sm text-muted-foreground mt-1">React, TypeScript, SCSS, Redux-Saga, Next.js</p>
                </div>
                <span className="text-muted-foreground mt-2 md:mt-0">Oct 2022 - May 2024</span>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">▹</span>
                  <span>Built trendline & cohort analytics and data-heavy tables; improved reliability of integrations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">▹</span>
                  <span>Drove Next.js marketing site migration and FE performance improvements</span>
                </li>
              </ul>
            </Card>

            {/* Jitfin */}
            <Card className="p-6 card-gradient shadow-elegant transition-smooth hover:shadow-glow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-2">Front-End Engineer II</h3>
                  <p className="text-lg text-foreground">Jitfin (JiT Techlabs)</p>
                  <p className="text-sm text-muted-foreground mt-1">React, JavaScript, Node.js</p>
                </div>
                <span className="text-muted-foreground mt-2 md:mt-0">Aug 2021 - Oct 2022</span>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">▹</span>
                  <span>Delivered SPA features, transactional analytics graphs, and marketing email flows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">▹</span>
                  <span>Introduced Dockerized CI/CD and Node.js microservices for selected workloads</span>
                </li>
              </ul>
            </Card>

            {/* Happay */}
            <Card className="p-6 card-gradient shadow-elegant transition-smooth hover:shadow-glow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-2">Web Developer</h3>
                  <p className="text-lg text-foreground">Happay (VA Tech Ventures)</p>
                  <p className="text-sm text-muted-foreground mt-1">React, JavaScript, HTML5, CSS3</p>
                </div>
                <span className="text-muted-foreground mt-2 md:mt-0">Jun 2017 - Jul 2021</span>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">▹</span>
                  <span>Worked on multiple client projects, delivering high-quality frontend solutions using modern web technologies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">▹</span>
                  <span>Gained extensive experience in React.js, JavaScript, and responsive web design principles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">▹</span>
                  <span>Collaborated with design and backend teams to create seamless user experiences</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden card-gradient shadow-elegant transition-smooth hover:shadow-glow hover:scale-105">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-smooth"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-smooth"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills & Competencies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Core Competencies */}
            <Card className="p-6 card-gradient shadow-elegant">
              <h3 className="text-2xl font-semibold text-primary mb-6">Core Competencies</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Front-End Web Design, Development & Maintenance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Responsive Web Design Principles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>UI UX Design & Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Performance Analysis & Tuning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Cross-Browser Compatibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>MERN Full Stack Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Performance Optimization (Webpack)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Accessibility Standards (WCAG, 508)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Team Management & Leadership</span>
                </li>
              </ul>
            </Card>

            {/* Technical Skills */}
            <Card className="p-6 card-gradient shadow-elegant">
              <h3 className="text-2xl font-semibold text-primary mb-6">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "JavaScript", "TypeScript", "React", "Next.js", "Redux", "Redux-Saga",
                  "HTML5", "CSS3", "SCSS", "Tailwind CSS", "Bootstrap",
                  "Node.js", "Express", "MongoDB", "AngularJS",
                  "Git", "Bitbucket", "JIRA", "Jest", "React Testing Library",
                  "Webpack", "SEO", "jQuery", "Data Structures"
                ].map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-sm py-1 px-3">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Shiva Karthik Y. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
