export const LEVEL_1_CONTENT = {
  title: "Level 1: Defining Problems in Words",
  subtitle: "If you can explain it clearly, AI can build it.",
  intro: `Most failed projects don't fail because of bad code. They fail because nobody clearly defined what they were building in the first place.

This level teaches you the most underrated skill in building software: describing what you want in plain language, with enough clarity that someone (or something) else can actually build it.

No code. No tools. Just thinking and writing.`,

  sections: {
    whyVagueFails: {
      title: "Why Vague Requests Fail",
      content: `When you ask AI to build something vague, you get something vague back. Then you ask for changes. Then more changes. Then you start over. Hours lost.

This isn't AI's fault. It's a clarity problem.

Vague requests fail because they force AI to guess. And AI's guesses are based on averages—what most people probably mean, what the most common version looks like. Your idea isn't average. It's specific to you, your users, your context.

When you say "build me a website," AI doesn't know:
- Who is this website for?
- What should visitors do when they arrive?
- What information needs to be on it?
- What should it look like?
- What definitely should NOT be on it?

So it guesses. And you spend the next hour correcting guesses instead of building.

The fix isn't learning to write better prompts. The fix is learning to think more clearly about what you actually want before you ask for anything.`,
      examples: {
        title: "Vague vs. Clear: See the Difference",
        items: [
          {
            label: "Vague",
            bad: "Make me an app for my business.",
            good: "I run a dog grooming business. I need a simple booking page where customers can see available time slots for this week and request an appointment. They should enter their name, phone number, and dog's name. I'll confirm bookings manually by phone.",
            whyBetter: "Specifies the business type, the core function (booking), what information is collected, and how confirmation works. AI now knows exactly what to build.",
          },
          {
            label: "Vague",
            bad: "I need a portfolio website.",
            good: "I'm a freelance photographer. I need a single-page site with a grid of my 12 best photos, a short bio (2-3 sentences), and a contact form that sends inquiries to my email. No blog, no shop, no client login—just the essentials.",
            whyBetter: "Defines the profession, the exact layout (single page, grid), quantity (12 photos), and explicitly excludes features that aren't needed.",
          },
          {
            label: "Vague",
            bad: "Build a tool to track my tasks.",
            good: "I want a personal task list where I can add tasks with a title and due date, mark them complete, and delete them. Tasks should be sorted by due date. I'm the only user—no login needed. Data can reset when I close the browser for now.",
            whyBetter: "Lists exact features (add, complete, delete, sort), clarifies single-user context, and sets expectations about data persistence.",
          },
        ],
      },
    },

    describingInPlainLanguage: {
      title: "How to Describe a Product Using Plain Language",
      content: `You don't need technical vocabulary. You need to answer five questions clearly:

**1. Who is this for?**
Not "users" or "customers"—be specific. "Busy parents who meal prep on Sundays." "Freelance designers who invoice clients monthly." "Me, personally, to track my reading habit."

**2. What is the one main thing it does?**
Not a feature list. The core action. "Lets people book appointments." "Shows my work to potential clients." "Helps me remember what I need to do today."

**3. What does someone do when they use it?**
Walk through the experience. "They land on the page, see available times, pick one, enter their info, and submit. I get a notification."

**4. What information is involved?**
What goes in, what comes out. "They enter their name and email. They see a confirmation message. I receive an email with their details."

**5. What is explicitly NOT part of this?**
This is the most important question. "No user accounts. No payment processing. No mobile app—web only. No admin dashboard for now."

Answer these five questions and you have a description clear enough to build from.`,
      tip: `Write like you're explaining to a smart friend who has never heard of your idea. They're willing to help, but they need you to be specific. "You know, like Uber but for dogs" doesn't help. "People can request a dog walker, see who's available nearby, and book them for a 30-minute walk" does.`,
    },

    breakingDownIdeas: {
      title: "Breaking a Big Idea into Small, Buildable Parts",
      content: `Big ideas are exciting but unbuildable. Small pieces are boring but shippable.

Your job at this stage is to take your vision and find the smallest version of it that still delivers value. Not a watered-down version—a focused one.`,
      process: {
        title: "The Breakdown Process",
        steps: [
          {
            step: "Write down everything you imagine your product doing.",
            description: "Don't filter yet. Booking system, customer accounts, email reminders, payment processing, admin dashboard, analytics, mobile app—all of it.",
          },
          {
            step: "Circle the ONE thing that matters most.",
            description: "If your product only did one thing, what would it be? For a booking tool, it's probably: letting someone pick a time and submit their info. Everything else is extra.",
          },
          {
            step: "Ask: Can someone get value from just that one thing?",
            description: "If yes, that's your starting point. If no, add the minimum needed until the answer is yes.",
          },
          {
            step: "Move everything else to a 'Later' list.",
            description: "You're not throwing ideas away. You're sequencing them. Version 1 does the core thing. Version 2 adds the next most important thing. And so on.",
          },
        ],
      },
      example: {
        title: "Example: Breaking Down a Recipe App",
        fullVision: "An app where users can save recipes, plan weekly meals, generate shopping lists, track nutrition, share recipes with friends, and watch cooking videos.",
        breakdown: [
          {
            version: "Version 1",
            scope: "I can add a recipe with a title, ingredients, and steps. I can see all my recipes in a list and tap to view one.",
            why: "Core value: storing and viewing recipes. Everything else is enhancement.",
          },
          {
            version: "Version 2",
            scope: "I can mark recipes as favorites. I can search my recipes by title.",
            why: "Makes the core experience better without adding complexity.",
          },
          {
            version: "Version 3",
            scope: "I can create a weekly meal plan by assigning recipes to days.",
            why: "New capability, but builds on what exists.",
          },
        ],
        lesson: "Notice how Version 1 is useful on its own. You don't need meal planning or shopping lists to get value from saving recipes. Start there.",
      },
    },

    definingScope: {
      title: "Defining Scope: What Is Included vs. Excluded",
      content: `Scope is the boundary around your project. Inside the boundary: what you're building. Outside: what you're not building (yet).

Clear scope prevents two disasters:
1. **Scope creep**: Adding "just one more feature" until the project never ships.
2. **Misaligned expectations**: Building something different from what you imagined because you never defined the edges.

The trick is to be as specific about what you're NOT building as what you ARE building.`,
      framework: {
        title: "The Included / Excluded / Undecided Framework",
        description: "For every project, write three lists:",
        lists: [
          {
            name: "Included",
            description: "Features and capabilities that WILL be in this version.",
            example: "Add tasks, mark complete, delete tasks, sort by due date",
          },
          {
            name: "Excluded",
            description: "Things that will NOT be in this version. Be explicit.",
            example: "No user accounts, no mobile app, no recurring tasks, no categories or tags, no sharing",
          },
          {
            name: "Undecided",
            description: "Things you're not sure about yet. You'll decide during building.",
            example: "Maybe: dark mode, maybe: export to file",
          },
        ],
      },
      warning: `The "Excluded" list is where most people struggle. It feels negative to say what you won't do. But every item on that list is a decision you've made, a distraction you've eliminated, and a week of work you've saved.

Write the Excluded list with pride. It's proof you're thinking clearly.`,
    },

    writingBuildDescription: {
      title: "Writing a First-Pass Build Description",
      content: `Now you put it all together into a single document. This isn't a business plan or a technical spec. It's a clear, plain-language description of what you want to build—something you could hand to AI (or a developer, or a friend) and they'd know exactly what to create.`,
      template: {
        title: "Build Description Template",
        sections: [
          {
            heading: "What I'm Building",
            prompt: "One sentence that captures the core idea.",
            example: "A simple web page where customers can book grooming appointments for their dogs.",
          },
          {
            heading: "Who It's For",
            prompt: "Specific description of the user.",
            example: "Dog owners in my local area who want to book grooming appointments without calling.",
          },
          {
            heading: "The Main User Flow",
            prompt: "Step-by-step, what does someone do when they use this?",
            example: "1. Visitor lands on the page\n2. Sees available time slots for the next 7 days\n3. Picks a slot and enters their name, phone, and dog's name\n4. Submits the request\n5. Sees a confirmation message\n6. I receive an email with the booking details",
          },
          {
            heading: "What's Included (Version 1)",
            prompt: "Specific features in this version.",
            example: "- Display of available slots\n- Booking form with name, phone, dog name\n- Confirmation message after submission\n- Email notification to me",
          },
          {
            heading: "What's Excluded (for now)",
            prompt: "What you're explicitly NOT building yet.",
            example: "- No customer accounts or login\n- No online payment\n- No automatic calendar sync\n- No SMS reminders\n- No rescheduling or cancellation by customer",
          },
          {
            heading: "Design Notes",
            prompt: "Any preferences about how it should look or feel.",
            example: "Clean and simple. Friendly tone. Should work on phones since most customers will use mobile. My brand color is teal.",
          },
        ],
      },
    },

    levelOutput: {
      title: "Your Level 1 Output",
      description: "By the end of this level, you should have written a Build Description document that includes:",
      items: [
        "A one-sentence summary of what you're building",
        "A clear description of who it's for (specific, not generic)",
        "The main user flow written as numbered steps",
        "A list of what's included in Version 1",
        "A list of what's explicitly excluded",
        "Any notes about design or feel",
      ],
      length: "This document should be roughly one page—long enough to be clear, short enough to stay focused. If it's longer than two pages, you're probably including too much for Version 1.",
      nextStep: "Once you have this document, you're ready for Level 2: learning how to take this description and turn it into effective prompts for AI.",
    },
  },

  closing: `Defining problems in words is harder than it sounds. You'll be tempted to skip this step and just "start building." Resist that urge.

Every minute spent clarifying what you want saves ten minutes of confused building later. This document is your foundation. Make it solid.`,
};
