export const LEVEL_4_CONTENT = {
  title: "Level 4: Minimal Changes, Maximum Impact",
  subtitle: "Small, targeted changes are safer than big rewrites.",
  intro: `You have something that works. Now you want to make it better.

The temptation is to add more—more features, more options, more cleverness. Resist this. The best improvements often come from small, focused changes that amplify what's already working.

This level teaches restraint. Not because building more is wrong, but because knowing what NOT to change is a skill that separates people who ship from people who endlessly tinker.`,

  sections: {
    whyMoreIsWorse: {
      title: "Why More Features Usually Make Products Worse",
      content: `Every feature you add has costs you don't see at first.

**Complexity for users.** More buttons mean more choices. More choices mean more confusion. Users came to accomplish something specific—every extra option is a distraction from that goal.

**Maintenance burden.** Every feature needs to keep working as you change other things. The more features you have, the more things can break, and the more time you spend fixing instead of improving.

**Diluted focus.** When everything is important, nothing is. Products with ten features rarely do any of them exceptionally well. Products with three features can perfect those three.

**Slower iteration.** Big products move slowly. Small products can pivot, adjust, and respond to feedback quickly. Every feature you add makes the next change harder.

The question isn't "would this feature be nice to have?" The answer to that is almost always yes. The question is "does this feature justify the cost?" The answer to that is usually no.`,
      examples: {
        title: "Addition vs. Subtraction",
        items: [
          {
            addition: "Add a settings page with 15 customization options",
            subtraction: "Pick the best default and remove the need to configure",
            lesson: "Users don't want to configure. They want it to work.",
          },
          {
            addition: "Add keyboard shortcuts, touch gestures, and voice commands",
            subtraction: "Make the primary action obvious and one click away",
            lesson: "Multiple ways to do something isn't helpful if the main way is clear.",
          },
          {
            addition: "Add detailed analytics dashboard with 20 metrics",
            subtraction: "Show the one number that actually matters",
            lesson: "More data isn't more insight. The right data is insight.",
          },
        ],
      },
    },

    highImpactAreas: {
      title: "Identifying High-Impact Areas",
      content: `Not all changes are equal. Some tweaks create massive improvements. Others barely register. Your job is to find the high-impact spots.

High-impact areas share common traits:`,
      areas: [
        {
          area: "First impressions",
          description: "What users see in the first 5 seconds. Headlines, primary buttons, initial state. Small improvements here affect everyone who visits.",
          example: "Changing a button from 'Submit' to 'Get My Results' can double click rates. Same button, better words.",
        },
        {
          area: "Friction points",
          description: "Where users hesitate, get confused, or give up. Error messages, form fields, loading states.",
          example: "Adding a single line of helper text below a confusing field can cut support questions in half.",
        },
        {
          area: "Completion moments",
          description: "What happens when users finish something. Confirmation messages, next steps, success states.",
          example: "A clear 'You're all set!' message with one obvious next action keeps users engaged instead of confused.",
        },
        {
          area: "Error recovery",
          description: "What happens when something goes wrong. Error messages, fallbacks, retry options.",
          example: "Changing 'Error 500' to 'Something went wrong. Click here to try again.' transforms frustration into action.",
        },
        {
          area: "Empty states",
          description: "What users see when there's no content yet. New accounts, empty lists, zero results.",
          example: "Instead of a blank screen, show 'No tasks yet. Add your first one below.' with a clear prompt.",
        },
      ],
      principle: "Focus your energy where it multiplies. A 10% improvement to something everyone sees beats a 50% improvement to something few people reach.",
    },

    safeReversibleChanges: {
      title: "Making Safe, Reversible Changes",
      content: `The best changes are ones you can undo if they don't work.

This isn't about being timid—it's about being smart. Every change is a hypothesis: "I think this will be better." Sometimes you're wrong. When you're wrong, you want to go back to what worked, not debug a mess.`,
      principles: [
        {
          principle: "Change one thing at a time",
          why: "If you change three things and something breaks, you don't know which change caused it. Change one, test, confirm, then change the next.",
          how: "Before making a change, ask: 'Is this one change or multiple changes disguised as one?'",
        },
        {
          principle: "Keep the old version accessible",
          why: "You might need to go back. You might want to compare. You might realize the old way was actually better.",
          how: "Before making a change, save the current state. A simple copy, a screenshot, a note—something you can reference.",
        },
        {
          principle: "Test before announcing",
          why: "Broken changes that users see damage trust. Broken changes you catch privately are just learning.",
          how: "After making a change, verify it works before telling anyone. Click the buttons. Fill the forms. See it in action.",
        },
        {
          principle: "Give changes time to prove themselves",
          why: "First impressions of a change aren't always accurate. What feels weird today might feel natural in a week.",
          how: "After making a change, wait before making another. Let users respond. Watch what happens.",
        },
      ],
      warning: "The urge to 'quickly fix one more thing' is how small, safe changes become big, tangled messes. Finish one change completely—including testing—before starting the next.",
    },

    clarityOverComplexity: {
      title: "Improving Clarity Instead of Adding Complexity",
      content: `When something isn't working, the instinct is to add more. More explanation, more options, more fallbacks.

Usually the better answer is to simplify.`,
      comparisons: [
        {
          problem: "Users don't understand what this button does",
          complexSolution: "Add a tooltip, an info icon, and a help link",
          claritySolution: "Rename the button so it's obvious",
          lesson: "If you need to explain something, it's probably named wrong.",
        },
        {
          problem: "Users don't complete the signup form",
          complexSolution: "Add progress indicators, save-and-continue, email reminders",
          claritySolution: "Remove three unnecessary fields",
          lesson: "Every field is a reason to quit. Remove the ones that don't matter.",
        },
        {
          problem: "Users don't find the feature they need",
          complexSolution: "Add search, filters, categories, and a sitemap",
          claritySolution: "Put the most-used feature in the most visible spot",
          lesson: "Organization doesn't fix visibility. Priority does.",
        },
        {
          problem: "Users get confused by error messages",
          complexSolution: "Add error codes, documentation links, and support chat",
          claritySolution: "Write the error in plain English with a clear next step",
          lesson: "Users don't want to research errors. They want to fix them.",
        },
      ],
      summary: "Complexity is easy. Clarity is hard. Anyone can add more. It takes skill to take away until only the essential remains.",
    },

    communicatingToAI: {
      title: "Communicating Intent to AI When Requesting Edits",
      content: `When you ask AI to change something, the quality of the change depends on how well you communicate what you want—and equally important, what you don't want.

AI has no context about your users, your brand, or your goals unless you provide it. A request for a 'small edit' can turn into a complete rewrite if you're not specific.`,
      guidelines: [
        {
          guideline: "State the current behavior first",
          bad: "Fix the submit button",
          good: "Currently, the submit button says 'Submit' and does nothing visible when clicked. Change it to say 'Send Message' and show 'Sending...' while processing.",
          why: "AI needs to understand what exists before it can change it intelligently.",
        },
        {
          guideline: "Specify the scope of the change",
          bad: "Improve the form",
          good: "In the contact form, change only the button text and its loading state. Don't modify the form fields, validation, or layout.",
          why: "Without scope limits, AI might 'improve' things you wanted left alone.",
        },
        {
          guideline: "Explain the goal, not just the task",
          bad: "Make the error message red",
          good: "Make the error message more noticeable. Users are missing it currently. Try a red color and maybe a small icon, but keep it professional.",
          why: "When AI understands the goal, it can make better decisions about how to achieve it.",
        },
        {
          guideline: "Define what 'better' means to you",
          bad: "Make this better",
          good: "Make this more scannable. Users should be able to understand the main point in 3 seconds without reading everything.",
          why: "'Better' is subjective. Your definition of better might not match AI's default.",
        },
      ],
      template: {
        title: "Edit Request Template",
        content: `Here's a structure for requesting targeted edits:

**Current state:** [What exists now]
**Problem:** [Why it needs to change]
**Desired change:** [Specifically what should be different]
**Scope:** [What should NOT change]
**Success looks like:** [How you'll know it worked]`,
        example: `Current state: The confirmation message after form submission just says "Submitted."
Problem: Users aren't sure if it worked and don't know what happens next.
Desired change: Change the message to confirm success and tell them what to expect.
Scope: Only change the confirmation message text. Don't change the form itself or add new elements.
Success looks like: After submitting, users see a friendly message that says their submission was received and what happens next (e.g., "Thanks! We'll reply within 24 hours.").`,
      },
    },

    smallChangeBigResult: {
      title: "Small Change, Big Result",
      intro: "These examples show how minimal changes can dramatically improve user experience. None of them require new features—just better execution of what exists.",
      examples: [
        {
          change: "Button text: 'Submit' → 'Get My Free Guide'",
          impact: "Users click more because they see what they get, not what they do",
          effort: "5 seconds to change a few words",
        },
        {
          change: "Error message: 'Invalid input' → 'Please enter a valid email address'",
          impact: "Users can fix the problem instead of guessing what's wrong",
          effort: "10 seconds to write a helpful sentence",
        },
        {
          change: "Empty state: Blank screen → 'No items yet. Here's how to add one.'",
          impact: "New users understand what to do instead of thinking something is broken",
          effort: "30 seconds to write one helpful line",
        },
        {
          change: "Form field: 'Name' → 'Your full name (as it appears on your ID)'",
          impact: "Users enter the right information the first time, reducing back-and-forth",
          effort: "15 seconds to add clarifying text",
        },
        {
          change: "Loading state: Blank pause → 'Loading your results...'",
          impact: "Users know the app is working instead of wondering if it froze",
          effort: "10 seconds to add a loading message",
        },
        {
          change: "Success message: 'Done' → 'Saved! You can close this window.'",
          impact: "Users have closure and know what to do next",
          effort: "10 seconds to write a complete message",
        },
      ],
      observation: "Notice the pattern: none of these changes add features. They add clarity. They take seconds, not hours. And they have outsized impact on how users experience the product.",
    },

    changeVsLeaveAlone: {
      title: "What to Change vs. What to Leave Alone",
      intro: "Use this as a decision framework when you're tempted to make changes.",
      change: {
        title: "Change This",
        items: [
          {
            item: "Words that confuse users",
            reason: "Clear language is free and high-impact. Change button text, labels, error messages, and instructions that aren't landing.",
          },
          {
            item: "Missing feedback",
            reason: "If users do something and nothing visible happens, add feedback. Loading states, confirmations, error messages.",
          },
          {
            item: "Broken flows",
            reason: "If users get stuck or lost, fix the path. But fix the specific break—don't redesign the whole flow.",
          },
          {
            item: "Placeholder content",
            reason: "If you left 'Lorem ipsum' or 'TODO' anywhere, replace it with real content. Placeholder text confuses users and looks unprofessional.",
          },
          {
            item: "Obvious errors",
            reason: "Typos, broken links, wrong colors—things that are clearly mistakes. Fix them without overthinking.",
          },
        ],
      },
      leaveAlone: {
        title: "Leave This Alone",
        items: [
          {
            item: "Working features you're not actively using",
            reason: "If it works and you're not building on it right now, don't touch it. You'll introduce bugs solving problems no one has.",
          },
          {
            item: "Code structure you don't fully understand",
            reason: "Reorganizing code you don't understand creates chaos. If it works, respect that it works.",
          },
          {
            item: "Design choices that are 'fine'",
            reason: "'Fine' is underrated. If something is fine but not perfect, move on. Perfect is the enemy of shipped.",
          },
          {
            item: "Performance that's 'fast enough'",
            reason: "If it's not slow enough to annoy users, it's fast enough. Optimization without a problem is just tinkering.",
          },
          {
            item: "Features you might need 'someday'",
            reason: "Someday never comes. Don't build, maintain, or refine features for hypothetical future use. Build for today's users.",
          },
        ],
      },
      mantra: "Change what blocks users. Leave alone what serves them. Ship and move on.",
    },
  },

  closing: `Restraint is a competitive advantage.

While others add feature after feature, wondering why users don't engage, you'll focus on making what exists actually work. While others rebuild from scratch when things get messy, you'll make targeted improvements that compound over time.

The discipline to make small changes—and to leave everything else alone—is what separates people who build sustainable products from people who build sandcastles that collapse under their own weight.

At Level 4, you've learned the hardest lesson in product development: sometimes the best thing you can do is almost nothing. But that "almost nothing" has to be exactly the right thing.

Now you're ready for Level 5, where we zoom out from individual changes to think about products as a whole.`,
};
