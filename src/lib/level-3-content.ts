export const LEVEL_3_CONTENT = {
  title: "Level 3: Reading and Judging Code",
  subtitle: "You don't need to write code. You need to judge it.",
  intro: `AI writes code. You decide if it's good.

This isn't about becoming a programmer. It's about developing enough intuition to look at what AI produces and say "yes, this seems right" or "no, something's off here."

You already do this in other areas. You can tell when a room is well-designed without being an interior designer. You can sense when a car is running poorly without being a mechanic. Code is the same—patterns emerge, and you learn to recognize them.`,

  sections: {
    whyYouDontNeedToWrite: {
      title: "Why You Don't Need to Write Code to Judge It",
      content: `Writing and reading are different skills.

A film critic doesn't need to direct movies. A food critic doesn't need to cook professionally. An editor doesn't need to write the books they edit. Their job is evaluation, not creation.

Your job is the same. AI creates. You evaluate.

This works because most code problems aren't hidden in obscure technical details. They're visible in the structure, the organization, the obvious patterns. Does this look organized or chaotic? Are things named clearly? Does the flow make sense?

You can answer these questions without understanding every line.

The goal isn't to understand code perfectly. The goal is to understand it well enough to:
- Know if it does what you asked
- Spot obvious problems before they become bigger problems
- Ask intelligent questions when something seems off
- Decide when to trust AI's work and when to push back

That's a lower bar than writing code from scratch. It's achievable. And it's enough.`,
    },

    buildingMetaphor: {
      title: "Code as a Building",
      intro: "Think of code like a physical structure—a house, an office, a building. This metaphor will help you understand what you're looking at without needing technical knowledge.",
      comparisons: [
        {
          building: "The Foundation",
          code: "Core setup and configuration",
          meaning: "Just like a building needs a solid foundation before walls go up, code needs proper setup before features are built. If AI skips this or does it sloppily, everything built on top is unstable.",
          whatToLook: "Look for: Files that set up the project, configure settings, or establish how different parts connect. These should exist and look organized, not rushed.",
        },
        {
          building: "Rooms and Hallways",
          code: "Files and folders",
          meaning: "A well-designed building has logical rooms connected by clear hallways. A poorly designed one has random rooms, dead ends, and confusing paths. Code is the same—files should be grouped logically, with clear paths between related pieces.",
          whatToLook: "Look for: Folder names that make sense, files grouped by purpose, and a structure you could navigate without a map.",
        },
        {
          building: "Labeled Doors",
          code: "Named functions and components",
          meaning: "In a good building, doors are labeled. You know what's behind them before you open. In good code, things are named clearly. 'handleSubmit' tells you what it does. 'processData' tells you nothing.",
          whatToLook: "Look for: Names that describe what things do, not vague labels like 'helper', 'utils', or single letters.",
        },
        {
          building: "Electrical and Plumbing",
          code: "Logic and data flow",
          meaning: "You don't see the wiring in a building, but you trust it works because lights turn on and water flows. In code, you don't need to trace every wire—but when something doesn't work, you know the problem is in the 'plumbing' somewhere.",
          whatToLook: "Look for: Does clicking a button do what you expect? Does data appear where it should? If not, the internal wiring has a problem.",
        },
        {
          building: "Fire Exits",
          code: "Error handling",
          meaning: "Good buildings have fire exits clearly marked. Good code has ways to handle things going wrong—error messages, fallbacks, recovery paths. Bad code assumes nothing will ever fail.",
          whatToLook: "Look for: What happens when something goes wrong? Does the app crash, or does it show a helpful message? Are there 'what if this fails?' considerations?",
        },
      ],
      summary: "You don't need to be an architect to notice a building has no fire exits, confusing hallways, and unlabeled doors. You don't need to be a programmer to notice the same problems in code.",
    },

    structureVsChaos: {
      title: "How to Recognize Structure vs. Chaos",
      content: `When you look at code, you're looking for signs of organization—or signs of its absence.

You don't need to understand what the code does to see how it's organized. It's like looking at a bookshelf: you can tell if books are sorted by topic or thrown on randomly, even if you haven't read any of them.`,
      signs: {
        structure: {
          title: "Signs of Good Structure",
          items: [
            {
              sign: "Consistent patterns",
              description: "Similar things are done in similar ways. If buttons are built one way in one place, they're built the same way everywhere.",
            },
            {
              sign: "Clear grouping",
              description: "Related code is kept together. All the form-related code is in one place, all the navigation code in another.",
            },
            {
              sign: "Descriptive names",
              description: "You can guess what something does from its name. 'calculateTotal', 'showErrorMessage', 'userEmail' tell you what they are.",
            },
            {
              sign: "Appropriate size",
              description: "Nothing is unreasonably huge. A single piece of code that goes on for hundreds of lines is usually doing too much.",
            },
            {
              sign: "Comments where needed",
              description: "Unusual or complex parts have brief explanations. Not every line is commented—just the parts that need context.",
            },
          ],
        },
        chaos: {
          title: "Signs of Chaos",
          items: [
            {
              sign: "Inconsistency",
              description: "The same thing is done three different ways in three different places. No pattern to follow.",
            },
            {
              sign: "Everything in one file",
              description: "Hundreds or thousands of lines crammed together. No separation, no organization.",
            },
            {
              sign: "Cryptic names",
              description: "Variables called 'x', 'temp', 'data2', 'thing'. Functions called 'process' or 'handle' with no indication of what they process or handle.",
            },
            {
              sign: "Commented-out code",
              description: "Large blocks of code that are 'turned off' but left in place. Sign of uncertainty and mess.",
            },
            {
              sign: "No error handling",
              description: "The code assumes everything will always work perfectly. No 'what if this fails?' considerations.",
            },
          ],
        },
      },
      advice: "When you see chaos, don't try to fix it yourself. Point it out to AI: 'This file is very long and hard to follow. Can you reorganize it into smaller, clearly named sections?' Let AI do the restructuring—your job is noticing the problem.",
    },

    redFlags: {
      title: "Identifying Risky or Fragile Areas",
      intro: "Some code problems are dangerous. They might work now but break later, or work for you but fail for someone else. Learn to spot these red flags.",
      flags: [
        {
          flag: "Hardcoded values that should be flexible",
          example: "Code that says 'if user is john@email.com, show admin panel' instead of checking a proper admin setting.",
          risk: "Works for the specific case but breaks immediately when conditions change.",
          question: "Ask AI: 'Are there any hardcoded values here that should be configurable instead?'",
        },
        {
          flag: "No validation of inputs",
          example: "A form that accepts whatever you type without checking if it makes sense.",
          risk: "Users can enter garbage data, break the system, or cause unexpected behavior.",
          question: "Ask AI: 'What happens if a user enters unexpected or invalid data?'",
        },
        {
          flag: "Tight coupling",
          example: "Changing one small thing requires changing ten other things.",
          risk: "The system is fragile. Small changes cause chain reactions of problems.",
          question: "Ask AI: 'If I wanted to change X, how many other places would need to change?'",
        },
        {
          flag: "Unclear dependencies",
          example: "Code that mysteriously needs other code to run first, but this isn't obvious.",
          risk: "Things work by accident. Reorder something and everything breaks.",
          question: "Ask AI: 'Does this code depend on anything running before it? What happens if that doesn't happen?'",
        },
        {
          flag: "Optimistic assumptions",
          example: "Code assumes the network always works, the database always responds, and users always behave.",
          risk: "In reality, everything fails sometimes. Code that doesn't handle failure will crash.",
          question: "Ask AI: 'What happens if [external thing] fails or is unavailable?'",
        },
        {
          flag: "Security by obscurity",
          example: "Sensitive features are 'hidden' rather than properly protected.",
          risk: "Hiding isn't protecting. Anyone who looks can find and abuse it.",
          question: "Ask AI: 'Is there any sensitive data or functionality that's accessible without proper authorization?'",
        },
      ],
      note: "You don't need to understand the technical details of these problems. You just need to know they exist and ask AI about them. AI can identify and fix these issues—but only if you ask.",
    },

    whenNotToTouch: {
      title: "Knowing When NOT to Touch Working Code",
      content: `One of the most valuable skills in building software is restraint.

If something works, and you don't need to change it, leave it alone.

This sounds obvious, but it's surprisingly hard to follow. You'll see code that looks messy or old-fashioned, and you'll want to 'clean it up.' Resist this urge.`,
      principles: [
        {
          principle: "Working code has value",
          explanation: "Code that works has survived testing, edge cases, and real usage. It earned its place. New code hasn't proven anything yet.",
        },
        {
          principle: "Every change is a risk",
          explanation: "Even 'improvements' can introduce bugs. The safest code is code you don't touch.",
        },
        {
          principle: "Ugly but functional beats pretty but broken",
          explanation: "Users don't see your code. They see whether your product works. Prioritize function over aesthetics.",
        },
        {
          principle: "Refactoring is a separate task",
          explanation: "If code needs cleaning up, do it as a dedicated task with dedicated testing—not as a side effect of building something new.",
        },
      ],
      whenToTouch: {
        title: "When you SHOULD touch working code:",
        reasons: [
          "You need to add something that requires changing it",
          "It has a bug that affects users",
          "It has a security problem",
          "It's preventing you from building something necessary",
        ],
      },
      mantra: "If it works and you don't need to change it, don't touch it. Move on. Build something new instead.",
    },

    askingBetterQuestions: {
      title: "Asking AI Better Questions About Existing Code",
      content: `When you don't understand code, don't pretend you do. Ask AI to explain it.

But the quality of explanation depends on the quality of your question. Vague questions get vague answers. Specific questions get useful answers.`,
      badVsGood: [
        {
          bad: "What does this code do?",
          good: "Explain what this function does in plain English, as if I've never programmed before. What goes in, what comes out, and why would someone use it?",
          why: "The good version tells AI your context (non-programmer) and what you specifically want to know (input, output, purpose).",
        },
        {
          bad: "Is this code good?",
          good: "Review this code for potential problems. Are there any red flags, missing error handling, or assumptions that might cause issues?",
          why: "The good version defines what 'good' means and gives AI specific things to check.",
        },
        {
          bad: "Why doesn't this work?",
          good: "This code should [expected behavior], but instead it [actual behavior]. What might be causing this difference?",
          why: "The good version provides context about what you expected vs. what happened—essential for debugging.",
        },
        {
          bad: "Can you improve this?",
          good: "I want to make this code more maintainable. Can you identify the messiest parts and suggest how to reorganize them?",
          why: "The good version defines what 'improve' means to you and scopes the work.",
        },
      ],
      templates: {
        title: "Question Templates You Can Use",
        items: [
          "Explain this code to me like I'm not a programmer. What is it trying to accomplish?",
          "Walk me through what happens step by step when a user [specific action].",
          "What assumptions does this code make? What would happen if those assumptions were wrong?",
          "If this code were a building, what's the foundation, what are the rooms, and how are they connected?",
          "Are there any parts of this code that are fragile or likely to break if conditions change?",
          "What's the most important thing I should understand about how this works?",
        ],
      },
    },

    confidenceStatement: {
      title: "Reading Is Not Writing",
      content: `Let's be clear about what this level asks of you—and what it doesn't.

You are learning to read code, not write it. These are fundamentally different skills.

Reading requires recognition. You see patterns, notice organization, spot problems. You don't need to produce anything from scratch.

Writing requires generation. You start with nothing and create working code from your understanding of syntax, logic, and systems.

The gap between these skills is enormous. A person can learn to read music without ever composing a symphony. A person can learn to read blueprints without ever designing a building. A person can learn to read code without ever writing a program.

That's you. And that's enough.

When you finish this level, you won't be a programmer. You'll be something more useful for your purposes: someone who can look at what AI produces, understand whether it makes sense, and make informed decisions about what to do next.

You'll know when to trust AI's work and when to question it.
You'll know when to ask for changes and when to leave things alone.
You'll know when something looks right and when something feels wrong.

That's not a consolation prize. That's the skill. That's what makes vibe coding work.

Trust your growing intuition. Use it. And keep building.`,
    },
  },

  closing: `You've now reached the halfway point of this roadmap.

Behind you: mindset, problem definition, and prompting. You know how to think about building, describe what you want, and direct AI to create it.

Ahead: making small edits yourself, thinking in products, and building repeatable systems.

But right here, at Level 3, you've gained something crucial: the confidence to look at code and form opinions about it. Not expert opinions. Not opinions you'd defend in a technical interview. But working opinions—good enough to move forward, good enough to spot problems, good enough to build.

That's the foundation for everything that comes next.`,
};
