import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Download, 
  Code2, 
  Database, 
  Terminal, 
  Cpu, 
  MapPin, 
  Menu, 
  X,
  ChevronRight
} from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- DATA OBJECTS (Easy to update later) ---
  const personalInfo = {
    name: "Anand Maurya",
    role: "Full Stack Developer & Competitive Programmer",
    bio: "B.Tech CSE Student at MMMUT. I build scalable web systems and solve algorithmic problems. Passionate about MERN stack and Automation.",
    email: "2023021009@mmmut.ac.in",
    location: "Gorakhpur, India",
    resumeLink: "/Resume_college_format.docx", // Ensure this file is in your public folder
    avatar: "https://avatars.githubusercontent.com/u/170529548?v=4", 
    social: {
      github: "https://github.com/Anandmaurya321",
      linkedin: "https://linkedin.com/in/anand-maurya",
      leetcode: "https://leetcode.com/", // Add full link
      codechef: "https://www.codechef.com/" // Add full link
    }
  };

  const stats = [
    { label: "LeetCode Rating", value: "1814", color: "text-yellow-400" },
    { label: "CodeChef Rating", value: "1639", color: "text-orange-400" },
    { label: "Codeforces Rating", value: "1249", color: "text-cyan-400" },
  ];

  const skills = {
    languages: ["C++", "JavaScript", "Java", "SQL", "HTML/CSS"],
    frameworks: ["React.js", "Node.js", "Express.js", "Tailwind CSS"],
    tools: ["Git & GitHub", "VS Code", "n8n (Automation)", "MongoDB", "Postman"],
    core: ["Data Structures", "Algorithms", "OOPs", "DBMS", "CN"]
  };

  const projects = [
    {
      title: "Home_Help",
      description: "A real-world service aggregation platform bridging the gap between daily wage workers (plumbers, electricians) and local users.",
      tech: ["React", "Node.js", "MongoDB", "Google Maps API", "Socket.io"],
      features: [
        "Live Geolocation Tracking",
        "Real-time Chat System",
        "JWT Authentication",
        "Admin Dashboard"
      ],
      link: "#", // Add project link
      image: "https://placehold.co/600x400/1e293b/3b82f6?text=Home_Help+Preview" // Placeholder
    },
    {
      title: "AI Email Automation Agent",
      description: "An intelligent workflow automation tool using n8n and LLMs to categorize and reply to career-related emails automatically.",
      tech: ["n8n", "OpenAI API", "Gmail API", "Webhooks"],
      features: [
        "7-Stage Email Classification",
        "Automated Context-Aware Replies",
        "Google Sheets Sync",
        "Daily Trigger Execution"
      ],
      link: "#",
      image: "https://placehold.co/600x400/1e293b/10b981?text=AI+Agent+Workflow" // Placeholder
    }
  ];

  const experience = [
    {
      role: "Competitive Programming Assistant",
      org: "Computer Engineering Society (CES), MMMUT",
      duration: "May 2025 - Present",
      desc: "Mentoring juniors, creating problem sets for university contests, and strengthening the coding culture."
    },
    {
      role: "Executive Board Member",
      org: "Computer Engineering Society (CES), MMMUT",
      duration: "April 2024 - May 2025",
      desc: "Organized 'Game of Codes' (327+ logins) and 'Code Crusade'. Led event operations and problem setting."
    }
  ];

  // --- RENDER COMPONENT ---
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-cyan-500/30">
      
      {/* 1. NAVIGATION */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            AM<span className="text-white">.</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            {['Projects', 'Experience', 'Skills', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex gap-4">
             <a href={personalInfo.resumeLink} download className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 transition-all text-sm">
                <Download size={16} /> Resume
             </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-slate-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-white/10 px-6 py-4 flex flex-col gap-4">
             {['Projects', 'Experience', 'Skills', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-slate-400 hover:text-cyan-400">
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* 2. HERO SECTION */}
      <header className="pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Terminal size={12} />
            <span>Looking for Internship Opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              {personalInfo.name}
            </span>
          </h1>
          
          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            {personalInfo.bio}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#contact" className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-medium transition-all shadow-lg shadow-cyan-500/20">
              Contact Me
            </a>
            <div className="flex items-center gap-4 px-4">
              <a href={personalInfo.social.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-transform hover:scale-110"><Github size={24}/></a>
              <a href={personalInfo.social.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-transform hover:scale-110"><Linkedin size={24}/></a>
              <a href={`mailto:${personalInfo.email}`} className="text-slate-400 hover:text-white transition-transform hover:scale-110"><Mail size={24}/></a>
            </div>
          </div>
        </div>

        {/* Profile Image with Glow Effect */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <img 
            src={personalInfo.avatar} 
            alt="Anand Maurya" 
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-slate-900 shadow-2xl"
          />
        </div>
      </header>

      {/* 3. STATS STRIP */}
      <div className="border-y border-white/5 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center gap-1 group cursor-default">
              <span className={`text-4xl font-bold ${stat.color} drop-shadow-lg`}>{stat.value}</span>
              <span className="text-slate-500 text-sm font-medium uppercase tracking-wider group-hover:text-slate-300 transition-colors">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 4. PROJECTS SECTION */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <Code2 className="text-cyan-500" size={32} />
          <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={index} className={`flex flex-col md:flex-row gap-8 md:gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              {/* Project Image Placeholder */}
              <div className="w-full md:w-3/5 relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative h-64 md:h-80 bg-slate-900 rounded-xl border border-slate-700 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-500" />
                  
                  {/* Overlay for 'Coming Soon' if needed, or just link */}
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 opacity-0 group-hover:opacity-100 transition duration-300">
                     <span className="text-white font-medium border border-white/30 px-4 py-2 rounded-full backdrop-blur-md">View Project Details</span>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="w-full md:w-2/5 space-y-6">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-slate-400 leading-relaxed">{project.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-slate-300">Key Features:</h4>
                  <ul className="text-sm text-slate-500 space-y-1">
                    {project.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <ChevronRight size={14} className="text-cyan-500" /> {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-950/50 border border-cyan-500/20 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                
                <a href={project.link} className="inline-flex items-center gap-2 text-white hover:text-cyan-400 font-medium transition-colors">
                  View Source <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. EXPERIENCE & SKILLS GRID */}
      <section id="experience" className="py-24 bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          
          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Database className="text-purple-500" size={28} />
              <h2 className="text-2xl font-bold text-white">Experience</h2>
            </div>
            
            <div className="relative border-l border-slate-800 space-y-12 ml-3 pl-8">
              {experience.map((exp, idx) => (
                <div key={idx} className="relative">
                  <span className="absolute -left-[38px] top-1 h-5 w-5 rounded-full border-2 border-slate-700 bg-slate-900 block">
                    <span className="absolute inset-1 rounded-full bg-purple-500"></span>
                  </span>
                  <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                  <p className="text-purple-400 text-sm mb-2">{exp.org}</p>
                  <p className="text-slate-500 text-sm mb-4 font-mono">{exp.duration}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Column */}
          <div id="skills">
             <div className="flex items-center gap-3 mb-8">
              <Cpu className="text-green-500" size={28} />
              <h2 className="text-2xl font-bold text-white">Technical Skills</h2>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-slate-300 text-sm font-semibold uppercase tracking-wider mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map(s => (
                    <span key={s} className="px-4 py-2 bg-slate-800 rounded-lg text-slate-300 text-sm hover:bg-slate-700 hover:text-white transition cursor-default">{s}</span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-slate-300 text-sm font-semibold uppercase tracking-wider mb-4">Frameworks & Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map(s => (
                    <span key={s} className="px-4 py-2 bg-slate-800 rounded-lg text-slate-300 text-sm hover:bg-slate-700 hover:text-white transition cursor-default">{s}</span>
                  ))}
                </div>
              </div>

               <div>
                <h3 className="text-slate-300 text-sm font-semibold uppercase tracking-wider mb-4">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map(s => (
                    <span key={s} className="px-4 py-2 bg-slate-800 rounded-lg text-slate-300 text-sm hover:bg-slate-700 hover:text-white transition cursor-default">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. CONTACT FOOTER */}
      <footer id="contact" className="py-20 px-6 border-t border-white/5 bg-slate-950 relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-slate-400 mb-10 text-lg">
            I am currently open to internships and full-time opportunities. 
            Whether you have a question or just want to say hi, my inbox is always open.
          </p>
          
          <a 
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-1 transition-all"
          >
            <Mail size={20} /> Say Hello
          </a>

          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
            <p>© 2026 Anand Maurya. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
               <a href={personalInfo.social.github} className="hover:text-cyan-400 transition">GitHub</a>
               <a href={personalInfo.social.linkedin} className="hover:text-cyan-400 transition">LinkedIn</a>
               <a href={personalInfo.social.leetcode} className="hover:text-cyan-400 transition">LeetCode</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;