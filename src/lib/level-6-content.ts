export const LEVEL_6_CONTENT = {
  title: "Level 6: Systemizing Your Workflow",
  subtitle: "Repeatable processes beat random bursts of productivity.",
  intro: `You've built something. Maybe a few things. Each one taught you lessons—what worked, what didn't, what you'd do differently next time.

The question now: Will you remember those lessons? Or will you start fresh each time, making the same mistakes, rediscovering the same solutions?

This level is about capture. Taking what you've learned and turning it into a system you can follow again and again. Not because systems are exciting, but because they're how you get consistently better instead of randomly lucky.`,

  sections: {
    repeatabilityOverTalent: {
      title: "Why Repeatability Matters More Than Talent",
      content: `Talent gets you through one project. Systems get you through a hundred.

Think about the difference:

**Talented but unsystematic:** Every project starts from scratch. You reinvent solutions you've already found. You forget lessons you've already learned. Some projects go great; others fail for reasons you've solved before. Progress is random.

**Systematic but average:** Every project builds on the last. You start with templates that work. You avoid mistakes you've documented. You improve the system each time. Progress compounds.

Over time, the systematic person outperforms the talented one. Not because they're smarter, but because they don't waste energy rediscovering what they already know.

This is especially true in vibe coding. AI handles the technical heavy lifting. Your job is judgment—knowing what to build, how to direct AI, when to ship. Those judgment calls benefit enormously from having a record of what worked before.`,
      insight: "Your first project is an experiment. Your second project should be an improvement. Your tenth project should be routine. That progression only happens if you capture what you learn.",
    },

    promptsIntoTemplates: {
      title: "Turning Prompts into Templates",
      content: `Every successful prompt is a template waiting to happen.

When you write a prompt that works well—one that gets AI to produce exactly what you need—don't just use it and move on. Save it. Strip out the project-specific details. Turn it into a template you can reuse.`,
      process: [
        {
          step: "Identify prompts worth saving",
          description: "Not every prompt is template-worthy. Save the ones that consistently produce good results, especially for common tasks: setting up projects, creating components, reviewing code, fixing bugs.",
        },
        {
          step: "Extract the structure",
          description: "Remove specific names, features, and details. Replace them with placeholders. What's left is the pattern that made the prompt work.",
        },
        {
          step: "Add context notes",
          description: "Future you won't remember why this prompt worked. Add a brief note: what situation this is for, what kind of output it produces, any gotchas to watch for.",
        },
        {
          step: "Organize by task type",
          description: "Group templates by what they do: project setup, component creation, bug fixing, code review, content writing. When you need one, you'll know where to look.",
        },
      ],
      example: {
        title: "Example: From Specific Prompt to Reusable Template",
        original: {
          label: "Original Prompt (Project-Specific)",
          content: "Create a contact form for my dog grooming website with fields for name, phone, and dog's name. Use a clean design with a teal color scheme. Show validation errors below each field. After submission, show a success message that says we'll call them within 24 hours.",
        },
        template: {
          label: "Reusable Template",
          content: `Create a [FORM TYPE] form for [PROJECT CONTEXT] with the following fields:
- [FIELD 1]
- [FIELD 2]
- [FIELD 3]

Design notes: [STYLE/COLOR PREFERENCES]

Validation: Show error messages below each field when validation fails.

After submission: Display a success message that says [CONFIRMATION MESSAGE].

Don't include: [EXPLICIT EXCLUSIONS]`,
        },
        note: "The template captures the structure that made the prompt effective. Fill in the blanks for any project.",
      },
    },

    documentingWhatWorked: {
      title: "Documenting What Worked and What Didn't",
      content: `Memory is unreliable. Documentation is not.

After each project—or even after significant milestones within a project—take a few minutes to write down what happened. Not a formal report. Just notes that future you will thank you for.`,
      framework: {
        title: "The Quick Capture Framework",
        sections: [
          {
            section: "What worked",
            prompt: "What went smoothly? What would you do exactly the same way next time?",
            example: "Starting with a minimal version and adding features only after the core worked. Kept scope small.",
          },
          {
            section: "What didn't work",
            prompt: "Where did you struggle? What took longer than expected? What would you avoid next time?",
            example: "Tried to build the whole thing at once. Spent hours debugging before realizing I should have tested smaller pieces.",
          },
          {
            section: "What surprised you",
            prompt: "What turned out differently than you expected—good or bad?",
            example: "AI-generated validation was better than I expected. Didn't need to be as specific as I thought.",
          },
          {
            section: "What you'd do differently",
            prompt: "If you started over today, what would you change about your approach?",
            example: "Would define the user journey before writing any prompts. Started building before I knew what I was building.",
          },
          {
            section: "Prompts worth saving",
            prompt: "Which prompts produced great results? Copy them for your template library.",
            example: "The prompt for setting up the form with validation—it worked first try. Saved it.",
          },
        ],
      },
      timing: "Do this while it's fresh. A week later, you won't remember the details. Five minutes of notes today saves hours of rediscovery later.",
    },

    personalPlaybook: {
      title: "Creating a Personal Build Playbook",
      content: `A playbook is your collection of systems, templates, and lessons organized into a reference you can follow.

It's not a textbook. It's not documentation for others. It's a personal guide that reflects how YOU work best—your prompts, your preferences, your lessons learned.`,
      structure: {
        title: "Playbook Structure",
        sections: [
          {
            section: "Project Kickoff Checklist",
            purpose: "Steps you take at the start of every project",
            includes: [
              "Define the problem in one sentence",
              "Identify who it's for",
              "List what's included in V1",
              "List what's explicitly excluded",
              "Map the basic user journey",
            ],
          },
          {
            section: "Prompt Templates",
            purpose: "Reusable prompts organized by task",
            includes: [
              "Project setup prompts",
              "Component creation prompts",
              "Review and feedback prompts",
              "Bug fixing prompts",
              "Content and copy prompts",
            ],
          },
          {
            section: "Decision Frameworks",
            purpose: "How you make common judgment calls",
            includes: [
              "When to add a feature vs. when to skip it",
              "When to fix something vs. when to leave it",
              "When to ship vs. when to keep building",
              "When to ask AI vs. when to do it yourself",
            ],
          },
          {
            section: "Lessons Learned",
            purpose: "Mistakes you've made and how to avoid them",
            includes: [
              "Project-specific notes",
              "Patterns you've noticed",
              "Things that always trip you up",
              "Solutions that always work",
            ],
          },
          {
            section: "Ship Checklist",
            purpose: "Steps you take before launching anything",
            includes: [
              "Core journey tested end-to-end",
              "Error states handled",
              "Copy reviewed for clarity",
              "Mobile/responsive checked",
              "Real person has tested it",
            ],
          },
        ],
      },
      advice: "Start simple. A single document with headers is enough. You can organize and expand later. The goal is capture, not perfection.",
    },

    preparingForScale: {
      title: "Preparing for Collaboration or Scale",
      content: `Right now, you're building alone. But someday you might want help—a collaborator, a contractor, a team.

The systems you build now determine how easy that transition will be.

If everything is in your head, collaboration means constant explanation. If everything is documented, collaboration means sharing a link.`,
      principles: [
        {
          principle: "Write like someone else will read it",
          explanation: "Even if that 'someone else' is future you. Clear notes, descriptive names, obvious organization. If a stranger couldn't follow your system, neither will a collaborator.",
        },
        {
          principle: "Separate the 'what' from the 'how'",
          explanation: "Document what you're trying to achieve, not just the steps you took. Goals outlive methods. If AI tools change, your goals stay the same.",
        },
        {
          principle: "Note your assumptions",
          explanation: "Every decision you make assumes something. 'I chose X because I assumed Y.' When assumptions change, you'll know which decisions to revisit.",
        },
        {
          principle: "Keep a 'how I work' summary",
          explanation: "A one-page overview of your workflow: how you start projects, how you use AI, how you decide what to build. Invaluable when bringing someone up to speed.",
        },
      ],
      note: "You may never scale. You may always work alone. But building systems that could scale costs nothing extra and keeps doors open.",
    },

    workflowOutline: {
      title: "Example: A Reusable Workflow Outline",
      intro: "Here's a complete workflow you can adapt. This isn't the only way to work—it's a starting point you can modify based on what you learn.",
      phases: [
        {
          phase: "Phase 1: Define",
          duration: "Before you touch AI",
          steps: [
            "Write the problem in one sentence",
            "Identify who this is for (specific)",
            "List 3-5 things this will do",
            "List 3-5 things this will NOT do",
            "Sketch the user journey (5-7 steps)",
          ],
          output: "A Build Description document you can reference throughout",
        },
        {
          phase: "Phase 2: Build Core",
          duration: "First working version",
          steps: [
            "Set up project structure with AI",
            "Build the main user flow, one step at a time",
            "Test each step before building the next",
            "Skip polish—focus on function",
            "Get the core journey working end-to-end",
          ],
          output: "A working prototype that does the main thing",
        },
        {
          phase: "Phase 3: Review",
          duration: "Before adding anything",
          steps: [
            "Test as if you're a new user",
            "Note friction points and confusion",
            "Have one real person try it",
            "List what's broken vs. what's merely imperfect",
            "Prioritize fixes by impact",
          ],
          output: "A short list of must-fix issues",
        },
        {
          phase: "Phase 4: Polish",
          duration: "Only what matters",
          steps: [
            "Fix critical issues from review",
            "Improve copy and clarity",
            "Add missing feedback states",
            "Handle obvious error cases",
            "Stop when it works, not when it's perfect",
          ],
          output: "A shippable product",
        },
        {
          phase: "Phase 5: Ship",
          duration: "Making it real",
          steps: [
            "Run through ship checklist",
            "Deploy or share",
            "Announce to intended users",
            "Watch for immediate problems",
            "Resist the urge to keep tweaking",
          ],
          output: "A live product in users' hands",
        },
        {
          phase: "Phase 6: Capture",
          duration: "Before you forget",
          steps: [
            "Document what worked",
            "Document what didn't",
            "Save useful prompts as templates",
            "Note lessons for next time",
            "Update your playbook",
          ],
          output: "Better systems for next time",
        },
      ],
      adaptation: "Modify this workflow based on your experience. Some projects need more definition. Some need less polish. The structure is a guide, not a rule.",
    },

    beginningNotEnd: {
      title: "This Is the Beginning, Not the End",
      content: `You've completed the Vibe Coding Roadmap.

But completion isn't the point. The point is what comes next.

You now have a framework for building software without becoming a programmer. You understand how to think about problems, direct AI, evaluate output, make decisions, and ship. You have templates, checklists, and systems to support you.

None of that matters if you don't use it.

The roadmap gave you structure. Real learning comes from building real things. Your first project will be clumsy. Your fifth will be smoother. Your twentieth will feel natural. But only if you start.

Every successful builder has a graveyard of abandoned projects, failed experiments, and embarrassing first attempts. That's not failure—that's the path. The only way to avoid it is to never start, and then you've failed for certain.

So start. Build something small. Ship it before you're ready. Learn from what happens. Build something else. Let your playbook grow with every project.

The roadmap is done. Your journey is beginning.

What will you build first?`,
    },
  },

  closing: `Level 6 is about sustainability.

Levels 0-5 taught you how to build. Level 6 taught you how to keep building—how to capture what you learn, systematize what works, and compound your skills over time.

Most people who learn new skills plateau quickly. They hit a comfortable level and stay there forever. The difference between them and people who keep improving is simple: systems.

You now have the foundation for a system. It's rough. It's incomplete. It's yours.

Every project you complete makes it better. Every lesson you capture makes you faster. Every template you save makes the next project easier.

This roadmap gave you a start. What you build from here is up to you.

Go build something.`,
};
