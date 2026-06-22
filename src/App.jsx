import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionTemplate, useScroll, useSpring, useTransform } from "framer-motion";
import finalCv from "./assets/finalcv.pdf";
import portfolioPhoto from "./assets/newimage.png";
import cropDisease1 from "./Images/cropdisease.jpeg";
import cropDisease2 from "./Images/cropdisease2.jpeg";
import cropDisease3 from "./Images/cropdisaese3.jpeg";
import cropDisease4 from "./Images/cropdisease4.jpeg";
import cropDisease5 from "./Images/Cropdisease5.jpeg";
import disaster1 from "./Images/d1.png";
import disaster2 from "./Images/d2.png";
import disaster3 from "./Images/d3.png";
import solarHome from "./Images/solarhome.png";
import solar2 from "./Images/s2.png";
import solar3 from "./Images/s3.png";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Send,
  X,
} from "lucide-react";

const navItems = ["Home", "About", "Projects", "Experience", "Contact"];
const githubUrl = "https://github.com/mani911574-dev";
const linkedinUrl = "https://www.linkedin.com/in/usman-mani-015625418/";
const emailAddress = "mani911574@gmail.com";

const roles = ["React Native Developer", "Machine Learning Enthusiast", "AI Developer", "Full Stack Engineer"];

const skills = [
  "React Native",
  "Full Stack Development",
  "Machine Learning",
  "Mobile App Development",
  "Google Colab",
  "Hugging Face",
  "React.js",
  "Node.js",
  "Firebase",
  "MongoDB",
  "Tailwind CSS",
  "JavaScript",
  "Python",
  "AI Integration",
];

const projects = [
  {
    title: "AI Based Crop Disease Detection",
    category: "AI Mobile App",
    description: "React Native application using machine learning and Hugging Face to detect plant diseases from crop leaf images.",
    preview: "Users capture or upload a crop image, the AI model analyzes disease patterns, and the app returns a diagnosis-style result with guidance.",
    image: cropDisease1,
    screenshots: [cropDisease1, cropDisease2, cropDisease3, cropDisease4, cropDisease5],
    stack: ["React Native", "Machine Learning", "Hugging Face", "Python"],
    links: [
      { label: "GitHub Repo", href: "https://github.com/mani911574-dev/Crop-Disaese-Detection-Mobile-App-Expo-Go", type: "github" },
      { label: "Hugging Face", href: "https://huggingface.co/spaces/KlausX9/riceapi", type: "external" },
    ],
  },
  {
    title: "Disaster Detection Using AI Model",
    category: "Computer Vision",
    description: "AI monitoring concept for identifying disaster signals from visual data and supporting fast response decisions.",
    preview: "The preview dashboard shows incoming visual signals, model confidence, emergency level, and response status.",
    image: disaster1,
    screenshots: [disaster1, disaster2, disaster3],
    stack: ["AI Model", "Python", "React.js", "Computer Vision"],
    links: [
      { label: "GitHub Repo", href: "https://github.com/mani911574-dev/Disaster-Detection-AI", type: "github" },
    ],
  },
  {
    title: "Solar Panel Defect Detection",
    category: "Inspection AI",
    description: "AI defect detection system for solar panels that identifies cracks, dirt, hot spots, and damaged areas.",
    preview: "A technical inspection interface highlights defect regions, confidence scores, and maintenance priority.",
    image: solarHome,
    screenshots: [solarHome, solar2, solar3],
    stack: ["Machine Learning", "Computer Vision", "Python", "React"],
    links: [
      { label: "Hugging Face", href: "https://huggingface.co/spaces/Remus0777/solardefect", type: "external" },
    ],
  },
  {
    title: "Professional Inventory Management Website",
    category: "Full Stack Website",
    description: "Professional inventory management website for product tracking, stock operations, and business workflow management.",
    preview: "The website focuses on inventory records, management actions, and a clean business interface for daily operations.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=85",
    screenshots: [
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
    ],
    stack: ["React", "Full Stack", "Dashboard", "Inventory"],
    links: [
      { label: "GitHub Repo", href: "https://github.com/mani911574-dev/Inventory-Managment-Wesbite", type: "github" },
    ],
  },
  {
    title: "Machine Learning Prediction Model",
    category: "Data Science",
    description: "Google Colab workflow for data cleaning, model training, evaluation, and prediction visualization.",
    preview: "A clean analytics layout presents dataset insights, feature charts, model accuracy, and prediction results.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",
    ],
    stack: ["Python", "Google Colab", "Scikit-learn", "Pandas"],
    links: [{ label: "GitHub Profile", href: githubUrl, type: "github" }],
  },
  {
    title: "AI Chat Application",
    category: "Full Stack AI",
    description: "Conversational AI assistant with contextual prompts, chat history, auth, and a polished realtime interface.",
    preview: "The app shows prompt suggestions, message states, AI responses, and conversation history in a focused chat workspace.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85",
    screenshots: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1535378620166-273708d44e4c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=85",
    ],
    stack: ["React", "Node.js", "AI Integration", "MongoDB"],
    links: [{ label: "GitHub Profile", href: githubUrl, type: "github" }],
  },
  {
    title: "Real-Time Chat App",
    category: "Realtime App",
    description: "Socket-powered messaging app with online presence, typing status, private rooms, and clean mobile UX.",
    preview: "The preview displays live conversations, online users, typing indicators, private rooms, and message delivery states.",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&w=1200&q=85",
    screenshots: [
      "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=85",
    ],
    stack: ["Socket.io", "React", "Node.js", "Firebase"],
    links: [{ label: "GitHub Profile", href: githubUrl, type: "github" }],
  },
];

const experience = [
  {
    role: "Mobile App Developer",
    company: "BitBuilt",
    dates: "2023 - 2025",
    summary: "Built scalable cross-platform mobile apps with React Native, including AI-powered products for real users.",
    details: [
      "Developed high-performance React Native interfaces for mobile applications.",
      "Engineered an AI-powered Plant Disease Detection app for smart farming workflows.",
      "Managed backend and inventory data with PostgreSQL, FastAPI, and Row Level Security policies.",
    ],
    stack: ["React Native", "FastAPI", "PostgreSQL", "AI Integration"],
  },
  {
    role: "Full Stack Developer",
    company: "Brain X Ltd, Abbottabad",
    dates: "2022 - 2023",
    summary: "Delivered complete web systems across frontend, backend, third-party integrations, and client requirements.",
    details: [
      "Built scalable, efficient, and user-friendly web systems using frontend and backend technologies.",
      "Worked directly with clients to gather requirements and translate them into working software.",
      "Integrated third-party APIs and delivered complete end-to-end software solutions.",
    ],
    stack: ["Full Stack", "APIs", "Frontend", "Backend"],
  },
  {
    role: "Machine Learning Developer",
    company: "Freelance Consulting",
    dates: "Present",
    summary: "Develops custom machine learning models for practical client and business use cases.",
    details: [
      "Trained custom machine learning models tailored to client requirements.",
      "Built AI solutions for real-world prediction, automation, and decision-support challenges.",
      "Focused on practical deployment and user-friendly AI workflows.",
    ],
    stack: ["Machine Learning", "Python", "Model Training", "AI Solutions"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 34, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

function Typewriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [letterCount, setLetterCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const delay = deleting ? 36 : 70;
    const pause = !deleting && letterCount === current.length ? 1200 : delay;
    const timer = setTimeout(() => {
      if (!deleting && letterCount < current.length) return setLetterCount((count) => count + 1);
      if (!deleting && letterCount === current.length) return setDeleting(true);
      if (deleting && letterCount > 0) return setLetterCount((count) => count - 1);
      setDeleting(false);
      setRoleIndex((index) => (index + 1) % roles.length);
    }, pause);
    return () => clearTimeout(timer);
  }, [deleting, letterCount, roleIndex]);

  return <span className="typing-caret text-mint">{roles[roleIndex].slice(0, letterCount)}</span>;
}

function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-white"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55 }}
    >
      <motion.div
        className="grid h-24 w-24 place-items-center rounded-full border border-mint/20 bg-mint text-2xl font-black text-white shadow-silver"
        animate={{ scale: [0.92, 1.05, 0.92] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      >
        UR
      </motion.div>
    </motion.div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 120], [0, 18]);
  const background = useTransform(scrollY, [0, 120], ["rgba(255,255,255,0)", "rgba(255,255,255,0.9)"]);
  const backdropFilter = useMotionTemplate`blur(${blur}px)`;

  return (
    <motion.header
      className="fixed left-0 top-0 z-50 w-full border-b border-purple-100 px-4 py-4 md:px-8"
      style={{ backdropFilter, background }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-mint font-black text-white shadow-silver">UR</span>
          <span className="leading-4">
            <span className="block text-sm font-black uppercase text-zinc-950">Usman</span>
            <span className="block text-sm font-black uppercase text-zinc-950">Rasheed</span>
          </span>
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`rounded-full px-5 py-2 text-sm font-bold transition ${
                index === 0 ? "bg-mint text-white shadow-silver" : "text-zinc-700 hover:bg-purple-50 hover:text-purple-700"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href={finalCv}
          download="Usman-Rasheed-CV.pdf"
          className="hidden items-center gap-2 rounded-full bg-mint px-5 py-2 text-sm font-black text-white transition hover:scale-105 lg:flex"
        >
          <span className="grid h-6 w-6 place-items-center rounded-full bg-white text-mint">
            <ArrowRight size={14} />
          </span>
          Download CV
        </a>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-full border border-purple-200 text-zinc-950 md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="mx-auto mt-4 grid max-w-7xl gap-2 rounded-3xl border border-purple-100 bg-white p-3 shadow-panel md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 font-bold text-zinc-700 hover:bg-purple-50"
              >
                {item}
              </a>
            ))}
            <a
              href={finalCv}
              download="Usman-Rasheed-CV.pdf"
              onClick={() => setOpen(false)}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-mint px-4 py-3 font-black text-white"
            >
              <ArrowRight size={16} />
              Download CV
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-white px-4 pt-24 text-zinc-950 sm:px-6 lg:px-8">
      <div className="grid-mask absolute inset-0 opacity-35" />
      <div className="absolute left-1/2 top-16 h-[34rem] w-[24rem] -translate-x-1/2 rounded-full bg-purple-200/60 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.8 }}>
          <p className="mb-4 text-lg font-bold text-zinc-700 sm:text-2xl">
            Hello, I am <span className="text-mint">Usman</span>
          </p>
          <p className="mb-5 text-xs font-black uppercase tracking-[0.45em] text-mint">I build intelligent software</p>
          <h1 className="max-w-4xl text-[3.35rem] font-black uppercase leading-[0.86] tracking-tight sm:text-[6rem] lg:text-[7.9rem]">
            Software Engineer
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600">
            Full Stack Developer | Mobile App Developer | AI Developer creating premium, fast, and practical digital products.
          </p>
          <p className="mt-5 min-h-9 text-2xl font-black">
            <Typewriter />
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <motion.a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-mint px-6 py-3 font-black text-white shadow-silver transition"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-mint">
                <ArrowRight size={16} />
              </span>
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-purple-200 bg-white px-6 py-3 font-black text-purple-700 transition hover:bg-purple-50"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
            </motion.a>
            <motion.a
              href={finalCv}
              download="Usman-Rasheed-CV.pdf"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-mint/40 px-6 py-3 font-black text-mint transition hover:bg-purple-50 lg:hidden"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              Download CV
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="relative min-h-[28rem] sm:min-h-[32rem] lg:min-h-[34rem]"
          initial={{ opacity: 0, x: 45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="absolute bottom-8 right-1 z-10 rounded-full bg-mint px-4 py-2 text-xs font-black text-white shadow-silver sm:right-2 sm:px-5 sm:py-3 sm:text-sm">
            AI + Mobile + Web
          </div>
          <img
            src={portfolioPhoto}
            alt="Professional developer portrait"
            className="absolute bottom-0 left-1/2 h-[28rem] w-[19rem] -translate-x-1/2 rounded-t-[12rem] object-cover grayscale sm:h-[32rem] sm:w-[22rem] lg:h-[34rem] lg:w-[24rem]"
          />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-2 gap-px border-y border-purple-100 py-6 md:grid-cols-5">
        {[
          ["12+", "Software Projects"],
          ["6+", "AI Concepts"],
          ["85%", "Academic Score"],
          ["3+", "Core Domains"],
          ["100%", "Client Focus"],
        ].map(([value, label]) => (
          <div key={label} className="flex items-center gap-3 px-2 py-3">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-purple-50 text-mint">
              <BadgeCheck size={20} />
            </span>
            <p>
              <span className="block text-2xl font-black">{value}</span>
              <span className="text-sm text-zinc-500">{label}</span>
            </p>
          </div>
        ))}
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-4 left-1/2 z-20 grid -translate-x-1/2 place-items-center text-purple-500"
        animate={{ y: [0, 9, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ArrowDown />
      </motion.a>
    </section>
  );
}

function SectionHeader({ label, title, text }) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-3xl text-center"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
    >
      <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-mint">{label}</p>
      <h2 className="text-4xl font-black leading-tight text-zinc-950 md:text-6xl">{title}</h2>
      {text && <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-600">{text}</p>}
    </motion.div>
  );
}

function About() {
  return (
    <section id="about" className="bg-white px-4 py-24 text-zinc-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-purple-100 bg-purple-50/55 p-6 md:p-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-mint">About Me</p>
          <h2 className="max-w-3xl text-3xl font-black leading-tight md:text-5xl">
            Are you looking for a creative software engineer? Let me help you build it.
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-zinc-600">
            Graduated Software Engineer from Pak-Austria Fachhochschule Institute of Applied Sciences and Technology
            (PAF-IAST), Mang Haripur. I work across full stack development, React Native mobile apps, machine learning,
            and AI integration.
          </p>

          <div className="mt-7 rounded-3xl border border-purple-100 bg-white p-5 shadow-sm">
            <p className="text-sm font-bold text-zinc-500">Academic Performance</p>
            <p className="mt-1 text-4xl font-black">85%</p>
            <div className="mt-4 h-3 overflow-hidden rounded-full bg-purple-100">
              <motion.div
                className="h-full rounded-full bg-mint"
                initial={{ width: 0 }}
                whileInView={{ width: "85%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.1 }}
              />
            </div>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {["React Native Apps", "Machine Learning Systems", "Full Stack Dashboards", "AI Integrations"].map((item) => (
              <p key={item} className="flex items-center gap-3 text-zinc-700">
                <BadgeCheck className="text-mint" size={18} />
                {item}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  return (
    <section id="projects" className="bg-purple-50/55 px-4 py-24 text-zinc-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Projects"
          title="My Projects"
          text="A cleaner project list with the core problem, stack, and quick preview in one place."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") setSelectedProject(project);
              }}
              className="group flex cursor-pointer flex-col overflow-hidden rounded-[1.25rem] border border-purple-100 bg-white outline-none shadow-sm transition hover:-translate-y-2 hover:border-mint/35 hover:shadow-silver"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.07 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="h-full w-full bg-zinc-950 object-contain transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/70 via-purple-950/15 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-black text-purple-700 shadow-sm">
                  {project.category}
                </span>
                <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-full bg-mint text-white shadow-silver">
                  <Code2 size={20} />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-2xl font-black leading-tight">{project.title}</h3>
                <p className="mt-3 min-h-24 leading-7 text-zinc-600">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-purple-100 bg-purple-50 px-3 py-1 text-xs font-bold text-purple-700">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-purple-100 pt-4">
                  <span className="text-sm font-black text-mint">Preview details</span>
                  <ArrowRight className="text-mint transition group-hover:translate-x-1" size={18} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-purple-200 bg-white px-6 py-3 font-black text-purple-700 transition hover:bg-purple-100"
          >
            <Github size={18} />
            View GitHub Profile
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[95] grid place-items-center overflow-y-auto bg-purple-950/40 px-4 py-8 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="relative w-full max-w-5xl overflow-hidden rounded-[1.75rem] border border-purple-100 bg-white shadow-panel"
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close preview"
                onClick={() => setSelectedProject(null)}
                className="absolute right-6 top-6 z-10 grid h-11 w-11 place-items-center rounded-full border border-purple-100 bg-white/90 text-zinc-950"
              >
                <X />
              </button>
              <button
                type="button"
                aria-label={`Open ${selectedProject.title} main image`}
                onClick={() => setPreviewImage({ src: selectedProject.image, alt: `${selectedProject.title} preview` })}
                className="block w-full cursor-zoom-in bg-zinc-950"
              >
                <img
                  src={selectedProject.image}
                  alt=""
                  className="mx-auto h-[28rem] max-h-[70vh] w-full object-contain p-3 sm:h-[34rem]"
                />
              </button>
              <div className="grid gap-6 p-6 md:grid-cols-[1.2fr_0.8fr] md:p-8">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-mint">{selectedProject.category}</p>
                  <h3 className="mt-3 text-4xl font-black">{selectedProject.title}</h3>
                  <p className="mt-5 leading-8 text-zinc-600">{selectedProject.preview}</p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {selectedProject.screenshots.map((screenshot, index) => (
                      <button
                        key={screenshot}
                        type="button"
                        aria-label={`Open ${selectedProject.title} screenshot ${index + 1}`}
                        onClick={() => setPreviewImage({ src: screenshot, alt: `${selectedProject.title} screenshot ${index + 1}` })}
                        className="overflow-hidden rounded-2xl bg-zinc-950 p-2 outline-none ring-mint/40 transition hover:-translate-y-1 hover:ring-4 focus-visible:ring-4"
                      >
                        <img
                          src={screenshot}
                          alt={`${selectedProject.title} screenshot ${index + 1}`}
                          className="h-56 w-full cursor-zoom-in object-contain sm:h-64"
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-black uppercase text-zinc-500">Tech Stack</p>
                  <p className="mt-3 leading-7 text-zinc-600">
                    This project is part of my software engineering, AI, and full stack portfolio work.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {selectedProject.stack.map((tech) => (
                      <span key={tech} className="rounded-full border border-purple-100 bg-purple-50 px-3 py-2 text-xs font-bold text-purple-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 grid gap-3">
                    {selectedProject.links.map((link) => {
                      const LinkIcon = link.type === "github" ? Github : ExternalLink;

                      return (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-mint px-5 font-black text-white"
                        >
                          <LinkIcon size={18} />
                          {link.label}
                          <ExternalLink size={16} />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {previewImage && (
          <motion.div
            className="fixed inset-0 z-[110] grid place-items-center bg-zinc-950/90 px-4 py-8 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewImage(null)}
          >
            <button
              type="button"
              aria-label="Close image preview"
              onClick={() => setPreviewImage(null)}
              className="absolute right-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur"
            >
              <X />
            </button>
            <motion.img
              src={previewImage.src}
              alt={previewImage.alt}
              className="max-h-[88vh] w-full max-w-6xl rounded-2xl object-contain shadow-panel"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              onClick={(event) => event.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="bg-white px-4 py-24 text-zinc-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Experience"
          title="Professional Experience"
          text="Company experience from my latest CV, organized by role, timeline, responsibilities, and technology."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {experience.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.role}`}
              className="flex min-h-full flex-col rounded-[1.25rem] border border-purple-100 bg-white p-6 shadow-sm"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-mint text-white shadow-silver">
                  <BriefcaseBusiness />
                </div>
                <span className="rounded-full border border-purple-100 bg-purple-50 px-3 py-1 text-xs font-black text-purple-700">
                  {item.dates}
                </span>
              </div>
              <p className="text-sm font-black uppercase text-mint">{item.company}</p>
              <h3 className="mt-2 text-2xl font-black leading-tight">{item.role}</h3>
              <p className="mt-4 leading-7 text-zinc-600">{item.summary}</p>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-zinc-600">
                {item.details.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <BadgeCheck className="mt-0.5 shrink-0 text-mint" size={17} />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                {item.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-purple-100 bg-purple-50 px-3 py-1 text-xs font-bold text-purple-700">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-purple-50/55 px-4 py-24 text-zinc-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-purple-100 bg-white p-6 shadow-sm md:p-10">
        <SectionHeader label="Contact" title="Let us build something sharp." text="Reach out for mobile apps, full stack platforms, and AI integrations." />
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h3 className="text-3xl font-black">Connect with Usman Rasheed</h3>
            <p className="mt-4 max-w-xl leading-8 text-zinc-600">
              Open to internships, freelance projects, and software engineering opportunities.
            </p>
            <div className="mt-8 grid gap-3">
              {[
                [Github, "GitHub", githubUrl],
                [Linkedin, "LinkedIn", linkedinUrl],
                [Mail, "Email", `mailto:${emailAddress}`],
              ].map(([Icon, label, href]) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="flex min-h-14 items-center justify-between rounded-full border border-purple-100 px-5 font-bold text-zinc-700 transition hover:bg-purple-50 hover:text-purple-700"
                >
                  <span className="flex items-center gap-3">
                    <Icon size={19} />
                    {label}
                  </span>
                  <ArrowRight size={17} />
                </a>
              ))}
            </div>
          </div>

          <form className="grid gap-5" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-5 sm:grid-cols-2">
              <input className="min-h-14 rounded-full border border-purple-100 bg-purple-50/50 px-5 text-zinc-950 outline-none focus:border-mint/50" placeholder="Name" />
              <input className="min-h-14 rounded-full border border-purple-100 bg-purple-50/50 px-5 text-zinc-950 outline-none focus:border-mint/50" placeholder="Email" />
            </div>
            <textarea className="min-h-40 resize-none rounded-[1.5rem] border border-purple-100 bg-purple-50/50 p-5 text-zinc-950 outline-none focus:border-mint/50" placeholder="Message" />
            <motion.button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-mint px-6 font-black text-white shadow-silver sm:w-fit"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
              <Send size={18} />
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-purple-100 bg-white px-4 py-8 text-center text-sm font-semibold text-zinc-500">
      <p>© 2026 Usman Rasheed. Software Engineer Portfolio.</p>
    </footer>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
      <motion.div className="fixed left-0 top-0 z-[80] h-1 origin-left bg-mint" style={{ scaleX }} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
