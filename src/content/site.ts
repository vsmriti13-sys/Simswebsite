// All the words on the site live here, so they can be updated without touching the design.
// Anything in [square brackets] is a placeholder waiting for real information.

export const site = {
  name: "Smriti Vasistha",
  url: "https://smriti-vasistha.vercel.app", // [replace with your own domain once you have one]
  role: "Educator, teacher trainer and course designer",
  location: "Prague, Czech Republic",
  description:
    "Smriti Vasistha is an educator, international teacher trainer and course designer in Prague, helping teachers make learning more creative, inclusive and meaningful.",
};

export const contact = {
  // Leave a value empty ("") to show a placeholder until you add it.
  email: "",
  linkedin: "",
  organisationUrl: "", // [ITC International Prague website]
};

export const hero = {
  eyebrow: "Educator · Teacher trainer · Course designer · Prague",
  headlineStart: "Making learning more",
  headlineWords: ["creative", "inclusive", "meaningful"],
  intro:
    "I design learning experiences for teachers from all over the world. Together we explore ideas by living them first: playing the game, running the experiment, asking the question. Then we reflect on what happened and shape it into something that works in your own classroom.",
};

export const orbitWords = ["curiosity", "play", "reflection", "inclusion", "collaboration", "agency"];

export const about = {
  title: "From theory to the classroom, by way of experience",
  paragraphs: [
    "I am the Academic Director and Head Teacher Trainer at ITC International Prague, where I have worked since 2011. I design and lead professional development programmes, including Erasmus+ KA1 courses, for teachers who come to Prague from different countries, subjects and stages of their careers.",
    "My roots are in English language teaching, including Business English and corporate language training. Working with adult learners in real workplaces taught me that people learn best when the learning matters to them, and that lesson has shaped everything I have designed since.",
    "Today my work sits where pedagogy, creativity and technology meet. I help teachers turn educational theory into practical classroom experiences, and I build tools, including AI-supported ones, that put good pedagogy first.",
  ],
  facts: [
    { label: "Role", value: "Academic Director & Head Teacher Trainer, ITC International Prague" },
    { label: "Since", value: "2011" },
    { label: "Based in", value: "Prague, Czech Republic" },
    { label: "Works with", value: "Teachers from across Europe and beyond" },
  ],
};

export const philosophy = {
  title: "What I believe about learning",
  note: "Suggested wording, ready for you to refine.",
  principles: [
    {
      title: "Meaning before method",
      text: "Learning sticks when it connects to something real: a question worth asking, a problem worth solving, a story worth finishing.",
    },
    {
      title: "Every learner, by design",
      text: "Inclusion is planned from the start, not added at the end. Choice, voice and flexible paths let more learners succeed.",
    },
    {
      title: "Pedagogy leads, technology follows",
      text: "Digital tools and AI are powerful when they serve a clear learning purpose. They should support good teaching, never dictate it.",
    },
    {
      title: "Curiosity is the engine",
      text: "Exploration, critical thinking and creative risk-taking are not extras. They are how deep learning happens.",
    },
  ],
};

export const approach = {
  title: "How teachers learn with me",
  intro:
    "Teachers learn particularly well when they experience a methodology themselves. So my courses are not lectures about good practice. They are good practice.",
  steps: [
    { title: "Experience", text: "Step into the learner's shoes and try the method for real." },
    { title: "Reflect", text: "Notice what worked, what felt hard, and why." },
    { title: "Discover", text: "Connect the experience to the research and principles behind it." },
    { title: "Apply", text: "Adapt it to your subject, your learners and your context." },
  ],
};

export type ExpertiseArea = {
  title: string;
  summary: string;
  tone: "terracotta" | "teal" | "ochre" | "plum";
  items: string[];
};

export const expertise: ExpertiseArea[] = [
  {
    title: "Inclusive & learner-centred education",
    summary: "Designing so that every learner has a way in.",
    tone: "terracotta",
    items: [
      "Universal Design for Learning (UDL)",
      "Inclusive classroom practices",
      "Learner agency, choice and voice",
      "Differentiation and learning barriers",
    ],
  },
  {
    title: "Innovative teaching methodologies",
    summary: "Approaches that make learners think, make and question.",
    tone: "teal",
    items: [
      "Gamification and game-based learning",
      "Project-Based Learning",
      "Inquiry-based learning",
      "CLIL",
      "Creative thinking",
      "STEAM and interdisciplinary learning",
    ],
  },
  {
    title: "Technology & AI in education",
    summary: "Purposeful, critical and creative use of new tools.",
    tone: "ochre",
    items: [
      "AI for teaching and learning",
      "Digital tools and innovative learning experiences",
      "Interactive simulations and educational apps",
      "Critical AI literacy and responsible AI integration",
    ],
  },
  {
    title: "Teacher professional development",
    summary: "Courses where teachers live the methods they learn.",
    tone: "plum",
    items: [
      "Erasmus+ teacher training",
      "Course and curriculum design",
      "Experiential learning",
      "Collaborative learning and reflective practice",
    ],
  },
];

export const services = [
  {
    title: "Teacher training",
    text: "Erasmus+ KA1 and other professional development courses for international groups of teachers from different subjects, backgrounds and levels.",
  },
  {
    title: "Course & curriculum design",
    text: "Programmes built around clear goals, active participation and ideas teachers can take straight back to their classrooms.",
  },
  {
    title: "Educational innovation",
    text: "New tools, apps and approaches, including AI-supported ones, designed with pedagogy first and tested with real teachers.",
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  status: "live" | "in-development";
  tags: string[];
  image?: { src: string; alt: string };
  link?: { href: string; label: string };
};

// To add a project, copy one of these blocks and change the details.
export const projects: Project[] = [
  {
    name: "QuestCraft",
    tagline: "Lessons become story-driven adventures",
    description:
      "An interactive app that helps teachers transform their own lesson content into quests, with meaningful academic challenges, team play and boss battles. Accessibility and Universal Design for Learning are built in, from read-aloud and reading levels to a word helper.",
    status: "live",
    tags: ["Gamification", "UDL", "AI"],
    image: {
      src: "/projects/questcraft.webp",
      alt: "QuestCraft preview: a classroom adventure game for teachers",
    },
    link: { href: "https://education-smoky-delta.vercel.app", label: "Visit QuestCraft" },
  },
  {
    name: "SparkLab",
    tagline: "Learning by experimenting",
    description:
      "An emerging project exploring interactive educational simulations for STEAM learning, where students test ideas, change variables and see what happens.",
    status: "in-development",
    tags: ["STEAM", "Simulations", "Inquiry"],
  },
];

export const ideas = {
  title: "Ideas & Resources",
  intro:
    "A growing collection of articles, teaching ideas, tools, practical activities and reflections on education. The first pieces are on their way.",
  categories: [
    { name: "Articles", text: "Longer thoughts on pedagogy, inclusion and innovation." },
    { name: "Teaching ideas", text: "Activities you can try in your next lesson." },
    { name: "Tools", text: "Apps, templates and resources worth knowing." },
    { name: "Reflections", text: "Notes from training rooms and classrooms." },
  ],
};

export const contactSection = {
  text: "I welcome professional connections, collaborations, invitations to speak or train, and good conversations about education. If you are planning a course, a project or simply have an idea to share, I would love to hear from you.",
};
