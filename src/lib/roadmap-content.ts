export interface RoadmapLevel {
  level: number;
  title: string;
  philosophy: string;
  willLearn: string[];
  willNotLearn: string[];
  outcome: string;
  example: {
    scenario: string;
    description: string;
  };
}

export const VIBE_CODING_ROADMAP: RoadmapLevel[] = [
  {
    level: 0,
    title: "Mindset Reset",
    philosophy: "You don't need to become a programmer. You need to become a builder.",
    willLearn: [
      "What vibe coding actually is (and what it isn't)",
      "Why traditional coding education fails most people",
      "How AI changes the rules of who can build software",
      "The difference between writing code and directing code",
    ],
    willNotLearn: [
      "Programming languages or syntax",
      "Computer science theory",
      "How to set up complex development environments",
    ],
    outcome: "You'll understand why you don't need years of study to build real software, and you'll stop feeling like an imposter before you even start.",
    example: {
      scenario: "The landing page that took 10 minutes",
      description: "Sarah wanted a simple landing page for her coaching business. Instead of hiring a developer or spending weeks learning HTML, she described what she wanted to an AI assistant and had a working page deployed in under an hour. She didn't write a single line of code from scratch. She directed the AI, reviewed what it made, and asked for adjustments. That's vibe coding.",
    },
  },
  {
    level: 1,
    title: "Defining Problems in Words",
    philosophy: "If you can explain it clearly, AI can build it.",
    willLearn: [
      "How to break down a vague idea into specific, buildable pieces",
      "The skill of writing problem statements that AI understands",
      "How to separate 'what I want' from 'how it should work'",
      "Why constraints make your requests better, not worse",
      "How to scope a project so it's actually finishable",
    ],
    willNotLearn: [
      "Technical specifications or system design",
      "Database schemas or architecture diagrams",
      "How to estimate development time like an engineer",
    ],
    outcome: "You'll be able to take any idea in your head and translate it into a clear description that an AI can act on immediately.",
    example: {
      scenario: "From 'I want an app' to something buildable",
      description: "Bad: 'I want to make an app for my restaurant.' Good: 'I need a single page where customers can see today's menu, check our hours, and tap a button to call us directly. The menu changes daily, so I need a simple way to update it myself.' The second version gives AI everything it needs. The first version leads to twenty follow-up questions.",
    },
  },
  {
    level: 2,
    title: "Prompting and Directing AI",
    philosophy: "AI is your junior developer. You're the manager.",
    willLearn: [
      "How to give AI context it can actually use",
      "The structure of prompts that get usable results on the first try",
      "When to be specific vs. when to let AI make decisions",
      "How to course-correct when AI misunderstands you",
      "The art of iterating without starting over",
    ],
    willNotLearn: [
      "Prompt engineering for image generation or chat models",
      "How large language models work internally",
      "Advanced prompting techniques for researchers",
    ],
    outcome: "You'll communicate with AI coding assistants efficiently, getting working code in fewer attempts with less frustration.",
    example: {
      scenario: "The difference one sentence makes",
      description: "First attempt: 'Make me a contact form.' Result: A basic form that doesn't match your site and sends data nowhere. Second attempt: 'Add a contact form to my existing page that matches the current dark theme, validates email format before submitting, and shows a success message after submission. Don't set up a backend yet—just log the data to the console so I can see it works.' Result: Exactly what you needed.",
    },
  },
  {
    level: 3,
    title: "Reading Code Without Writing It",
    philosophy: "You don't need to write code. You need to judge it.",
    willLearn: [
      "How to skim code and understand what it does at a high level",
      "Red flags that indicate something is wrong (even if you don't know why)",
      "How to read error messages and extract the useful part",
      "When to trust AI's code and when to ask questions",
      "How to verify that code does what you asked for",
    ],
    willNotLearn: [
      "Syntax rules for any programming language",
      "How to debug code line by line",
      "Memory management or performance optimization",
    ],
    outcome: "You'll look at code AI generates and quickly assess whether it's doing the right thing, even without understanding every line.",
    example: {
      scenario: "Catching a mistake you can't fully explain",
      description: "AI generates a function to calculate prices. You notice it references 'USD' but you asked for prices in euros. You don't need to understand the code's logic—you spotted that the output won't match your requirements. You tell AI: 'This seems to use USD somewhere. I need all prices in EUR.' Problem solved. You didn't debug. You directed.",
    },
  },
  {
    level: 4,
    title: "Minimal Edits, Maximum Impact",
    philosophy: "Small, targeted changes are safer than big rewrites.",
    willLearn: [
      "How to make tiny adjustments to existing code yourself",
      "Changing text, colors, and simple values without breaking things",
      "How to use find-and-replace strategically",
      "When a small manual edit is faster than re-prompting AI",
      "How to undo mistakes confidently",
    ],
    willNotLearn: [
      "Refactoring or rewriting code architecture",
      "Adding complex new features from scratch",
      "Writing functions or logic yourself",
    ],
    outcome: "You'll make quick fixes and tweaks yourself instead of going back to AI for every tiny change, saving time and building confidence.",
    example: {
      scenario: "The five-second fix",
      description: "Your site says 'Welcome to Acme Corp' but your company is called 'Acme Co.' You could ask AI to change it. Or you could open the file, find that text, change 'Corp' to 'Co.', and save. Done. You didn't need to understand the code around it. You found words, changed words. That's a safe edit.",
    },
  },
  {
    level: 5,
    title: "Thinking in Products",
    philosophy: "Features don't matter. Problems solved for real people matter.",
    willLearn: [
      "How to prioritize what to build based on user value, not coolness",
      "The difference between a feature list and a product",
      "How to cut scope without cutting quality",
      "When to ship something imperfect vs. when to wait",
      "How to get feedback and decide what to change",
    ],
    willNotLearn: [
      "Agile methodology or sprint planning",
      "Product management frameworks",
      "How to write user stories in formal formats",
    ],
    outcome: "You'll make decisions like a product owner—knowing what to build, what to skip, and when to ship.",
    example: {
      scenario: "The feature you almost built",
      description: "You're making a booking tool. You almost ask AI to build a complex calendar with recurring appointments, time zone support, and email reminders. Then you stop. Your actual users just need to pick a date and time from a short list you control. You build the simple version in an hour. Users love it. The complex version would have taken a week and confused everyone.",
    },
  },
  {
    level: 6,
    title: "Systemizing Your Workflow",
    philosophy: "Repeatable processes beat random bursts of productivity.",
    willLearn: [
      "How to create your own reusable prompts and templates",
      "Organizing projects so you can pick them up after a break",
      "Version control basics: saving your work so you can go back",
      "How to document what you built so you remember why",
      "Building a personal library of patterns that work for you",
    ],
    willNotLearn: [
      "CI/CD pipelines or deployment automation",
      "Team collaboration workflows",
      "Enterprise-scale project management",
    ],
    outcome: "You'll have a personal system for building software that you can repeat, refine, and rely on for any future project.",
    example: {
      scenario: "Your second project takes half the time",
      description: "Your first project was messy. Files everywhere, prompts scattered across chat history, no idea how you got things working. Your second project is different. You start with a template you saved. You have a prompt that sets up your project structure. You keep notes as you go. When you finish, you save what worked. Project three will be even faster.",
    },
  },
];

export const ROADMAP_INTRO = {
  headline: "The Vibe Coding Roadmap",
  subheadline: "A practical path to building software without becoming a programmer",
  description: `This roadmap is for people who want to build real things—websites, tools, apps—without spending years learning to code the traditional way.

Vibe coding is not about memorizing syntax or understanding algorithms. It's about learning to think clearly, direct AI effectively, and ship working software.

If you've ever felt like coding was a wall between you and your ideas, this roadmap shows you the door.`,
  forWho: [
    "Non-technical founders who want to prototype without hiring developers",
    "Designers who want to bring their mockups to life",
    "Marketers and operators who want to build internal tools",
    "Curious developers who want to see what AI-first workflows look like",
    "Anyone who's started a coding tutorial and quit halfway through",
  ],
};

export const ROADMAP_NOT_FOR = {
  headline: "Who This Roadmap is NOT For",
  description: "This isn't the right path for everyone. Be honest with yourself.",
  reasons: [
    "You want to become a professional software engineer and get hired at a tech company. Traditional CS education or bootcamps are better for that.",
    "You need to build systems that handle millions of users or sensitive financial data. That requires deeper engineering knowledge.",
    "You want to understand how computers work at a fundamental level. This roadmap skips that entirely.",
    "You think AI will do everything perfectly without your input. Vibe coding still requires thinking, judgment, and iteration.",
    "You're not willing to ship imperfect things and improve them later. This approach values progress over perfection.",
  ],
};
