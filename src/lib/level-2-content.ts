export const LEVEL_2_CONTENT = {
  title: "Level 2: Directing AI with Prompts",
  subtitle: "AI is your junior developer. You're the manager.",
  intro: `You've defined what you want to build. Now you need to communicate it to AI in a way that gets results.

This isn't about magic words or secret techniques. It's about structure, clarity, and treating AI like a capable but literal-minded collaborator.

The difference between frustrating AI sessions and productive ones usually comes down to how you ask—not what you ask.`,

  sections: {
    whyDoEverythingFails: {
      title: "Why 'Do Everything' Prompts Fail",
      content: `The most common mistake: dumping your entire vision into a single prompt and hoping for the best.

"Build me a complete booking system with a calendar view, customer accounts, email notifications, payment processing, and an admin dashboard."

This fails for several reasons:

**AI loses focus.** The more you ask for at once, the more likely AI will cut corners on each part. It's trying to satisfy everything, so it satisfies nothing well.

**You can't course-correct.** When everything comes out at once, you can't tell which part went wrong. Was it the calendar? The accounts? The payments? You end up starting over instead of fixing.

**Context gets diluted.** AI has a working memory. Fill it with ten features, and the details of each one get fuzzy. Ask for one thing at a time, and you get AI's full attention on that thing.

**You skip the thinking.** Asking for everything at once usually means you haven't thought through the sequence. What needs to happen first? What depends on what? AI can't figure that out for you.

The solution isn't to ask for less. It's to ask in sequence—one clear request at a time, reviewing the output before moving on.`,
      badExample: {
        label: "The 'Do Everything' Prompt",
        prompt: "Create a full task management app with user authentication, task creation with titles and due dates, categories, priority levels, recurring tasks, team sharing, notifications, a calendar view, and a dark mode toggle. Make it look modern and professional.",
        whyItFails: [
          "Too many features competing for attention",
          "No indication of what matters most",
          "No sequence or dependencies defined",
          "Impossible to review or debug when something goes wrong",
          "AI will make arbitrary decisions about each feature",
        ],
      },
    },

    assigningRoles: {
      title: "Assigning Roles to AI",
      content: `AI doesn't know what kind of help you need unless you tell it. The same request gets very different responses depending on the role you assign.

Think of it like hiring. You wouldn't ask "someone" to help with your project. You'd hire a frontend developer, or a designer, or a copywriter—each brings a different lens.

Assigning a role does two things:
1. It focuses AI's knowledge on what's relevant
2. It sets the tone and format of the response`,
      roles: [
        {
          role: "You are a frontend developer",
          effect: "AI focuses on code structure, user interface, and browser behavior. Responses will include code.",
          useWhen: "You need something built or implemented.",
        },
        {
          role: "You are a code reviewer",
          effect: "AI looks for problems, inconsistencies, and improvements. More critical, less creative.",
          useWhen: "You have code and want feedback before using it.",
        },
        {
          role: "You are a UX consultant",
          effect: "AI focuses on user experience, flow, and usability. Less code, more structure and reasoning.",
          useWhen: "You're deciding what to build, not how to build it.",
        },
        {
          role: "You are a technical writer",
          effect: "AI explains clearly, avoids jargon, structures information for understanding.",
          useWhen: "You need to understand what AI built or why something works.",
        },
      ],
      tip: `You can switch roles mid-conversation. Build something as a "frontend developer," then switch to "code reviewer" to check your own work. Different perspectives catch different problems.`,
    },

    breakingIntoSteps: {
      title: "Breaking Work into Steps",
      content: `The key to effective prompting is sequencing. Instead of one massive request, you break work into steps—each one small enough to review before moving on.

This isn't slower. It's faster. You catch problems early, when they're easy to fix. You build on working foundations instead of shaky ones.`,
      principle: `Each prompt should do ONE thing. When that thing is done and verified, move to the next.`,
      goodExample: {
        label: "A Multi-Step Approach",
        context: "You're building a simple contact form for your website.",
        steps: [
          {
            step: 1,
            prompt: "Create a contact form component with three fields: name, email, and message. All fields are required. Use a simple, clean design. Don't worry about submission logic yet—just the form structure and basic styling.",
            why: "Start with structure only. Don't mix form building with form handling.",
          },
          {
            step: 2,
            prompt: "Now add client-side validation. Name must be at least 2 characters. Email must be a valid email format. Message must be at least 10 characters. Show error messages below each field when validation fails.",
            why: "Add one layer of functionality. You can test validation before moving on.",
          },
          {
            step: 3,
            prompt: "Add a submit handler that logs the form data to the console when all fields are valid. Show a loading state while 'submitting' and a success message after. We'll connect it to a real backend later.",
            why: "Handle submission separately. Console logging lets you verify it works without needing a backend yet.",
          },
          {
            step: 4,
            prompt: "Review this component for any issues. Check for accessibility problems, edge cases I might have missed, and any code that could be cleaner.",
            why: "Switch to reviewer role. Catch problems before building more.",
          },
        ],
        contrast: "Compare this to asking for 'a contact form with validation, submission, loading states, success messages, and error handling' all at once. Same end result, but the multi-step approach lets you verify each piece works before adding the next.",
      },
    },

    reviewingOutput: {
      title: "How to Review AI Output Before Moving On",
      content: `AI will give you something that looks right. Your job is to verify it actually is right before building on top of it.

You don't need to understand every line of code. You need to check that the output matches what you asked for and works as expected.`,
      reviewChecklist: [
        {
          check: "Does it match what I asked for?",
          how: "Re-read your prompt. Compare it to what AI produced. Did it include everything? Did it add things you didn't ask for?",
        },
        {
          check: "Can I see it working?",
          how: "Run it, click it, test it. Don't just read the code—see it in action. Does the button actually do something? Does the form actually validate?",
        },
        {
          check: "Does the structure make sense?",
          how: "Even without understanding the code deeply, you can see organization. Are things grouped logically? Are there comments explaining what different parts do?",
        },
        {
          check: "Are there obvious mistakes?",
          how: "Look for things like placeholder text that wasn't replaced, hardcoded values that should be dynamic, or references to things that don't exist.",
        },
        {
          check: "What assumptions did AI make?",
          how: "AI fills in gaps you didn't specify. That's fine—but you should know what it assumed. Ask: 'What assumptions did you make in this implementation?'",
        },
      ],
      whenToStop: `If something doesn't look right, stop and fix it before continuing. Building on broken foundations wastes time. It's faster to go back one step than to debug five steps later.`,
    },

    iterationAsWorkflow: {
      title: "Iteration as a Normal Workflow",
      content: `Getting things right on the first try is rare. Iteration isn't failure—it's the process.

Professional developers don't write perfect code immediately. They write something, test it, find problems, fix them, and repeat. Vibe coding works the same way, except AI does the writing and you do the directing.`,
      iterationTypes: [
        {
          type: "Refinement",
          description: "The output is close but not quite right.",
          example: "'The button color is too dark. Change it to a lighter blue that has better contrast with the white text.'",
          mindset: "Small adjustments. You're polishing, not rebuilding.",
        },
        {
          type: "Correction",
          description: "Something is wrong or missing.",
          example: "'The form submits even when fields are empty. The validation isn't working. Fix the validation so empty fields show an error instead of submitting.'",
          mindset: "Point to the specific problem. Don't ask AI to guess what's wrong.",
        },
        {
          type: "Expansion",
          description: "The current piece works, now you're adding to it.",
          example: "'The form works. Now add a feature to clear all fields when the user clicks a 'Reset' button.'",
          mindset: "Only expand after the current piece is verified. Don't add to broken code.",
        },
        {
          type: "Pivot",
          description: "You realize the approach isn't working and need a different direction.",
          example: "'This isn't what I had in mind. Let's try a different approach. Instead of a multi-step form, make it a single page with all fields visible.'",
          mindset: "It's okay to change direction. Better to pivot early than commit to a bad path.",
        },
      ],
      normalizing: `Expect to iterate. If you get something perfect on the first try, that's lucky—not normal. Most prompts go through 2-4 iterations before you're satisfied. That's fine. Each iteration is fast, and you're learning what works for future projects.`,
    },

    promptingCorrectly: {
      title: "Signs You Are Prompting Correctly",
      description: "Use this checklist to evaluate your prompting approach:",
      signs: [
        {
          sign: "Each prompt focuses on one thing",
          detail: "You're not asking for five features at once. One request, one outcome.",
        },
        {
          sign: "You can explain what you expect before seeing the output",
          detail: "If you can't articulate what 'success' looks like, the prompt isn't clear enough.",
        },
        {
          sign: "You review output before building on it",
          detail: "You don't blindly stack prompts. You verify each step works.",
        },
        {
          sign: "Your iterations are specific, not vague",
          detail: "'Fix the button' is vague. 'The button doesn't change color on hover—add a hover state' is specific.",
        },
        {
          sign: "You provide context when it's needed",
          detail: "AI knows what you're building because you reminded it. 'In the contact form we built, add...'",
        },
        {
          sign: "You assign roles when switching tasks",
          detail: "Builder mode for building. Reviewer mode for reviewing. You don't expect AI to do both at once.",
        },
        {
          sign: "You're comfortable saying 'that's not right, try again'",
          detail: "You're not frustrated by iteration. You expect it and handle it directly.",
        },
        {
          sign: "You make small edits yourself when appropriate",
          detail: "Changing a color or fixing a typo doesn't need a prompt. You handle trivial changes directly.",
        },
      ],
    },
  },

  closing: `Prompting is a skill. You will get better at it with practice.

Start with the structure: one request at a time, review before moving on, iterate as needed. As you do this more, you'll develop intuition for how much to ask for, how much context to give, and when to push back on AI's output.

For now, focus on the sequence. Clear request. Review output. Next step.

That's the rhythm of productive AI collaboration.`,
};
