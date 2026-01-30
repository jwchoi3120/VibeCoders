export const LEVEL_5_CONTENT = {
  title: "Level 5: Thinking in Products, Not Features",
  subtitle: "Features don't matter. Problems solved for real people matter.",
  intro: `You can build features all day. AI makes that easy. The hard part isn't building—it's knowing what to build.

This level is about zooming out. Instead of asking "what can I add?" you'll learn to ask "what problem does this solve?" and "for whom?"

It's the difference between someone who can construct a house and someone who can design a home people want to live in. Both use the same materials. Only one creates something valuable.`,

  sections: {
    featuresNotValue: {
      title: "Why Features Don't Equal Value",
      content: `A feature is something your product does. Value is something your user gains.

These are not the same thing.

You can have dozens of features and deliver zero value—if none of those features solve a real problem for a real person. You can have a single feature and deliver massive value—if that feature is exactly what someone needed.

Features are what you build. Value is what users experience. The gap between them is where most products fail.`,
      examples: [
        {
          feature: "Export to 15 different file formats",
          value: "Users can share their work with anyone, regardless of what software they use",
          gap: "Most users need 1-2 formats. The other 13 add complexity without adding value for them.",
        },
        {
          feature: "Customizable dashboard with drag-and-drop widgets",
          value: "Users can quickly see the information that matters most to them",
          gap: "Customization requires effort. A well-designed default dashboard might deliver the value without the work.",
        },
        {
          feature: "AI-powered suggestions based on usage patterns",
          value: "Users discover features they didn't know existed",
          gap: "If users needed those features, they'd look for them. Suggestions can feel intrusive rather than helpful.",
        },
      ],
      lesson: "Before building a feature, ask: What value does this create for the user? If you can't answer clearly, the feature might be for you, not them.",
    },

    userIntent: {
      title: "Understanding User Intent",
      content: `Users don't want your product. They want what your product lets them do.

Nobody wants a booking system. They want an easy way to schedule appointments without phone tag.

Nobody wants a task manager. They want to feel in control of their day.

Nobody wants a portfolio website. They want potential clients to see their work and reach out.

The feature is the mechanism. The intent is the goal. Build for the intent.`,
      framework: {
        title: "Finding Intent Behind Requests",
        steps: [
          {
            question: "What is the user trying to accomplish?",
            surface: "'I need a calendar feature'",
            intent: "They want to see availability at a glance",
            implication: "A calendar might be overkill. A simple list of available times might be enough.",
          },
          {
            question: "What happens if they succeed?",
            surface: "'I need user accounts'",
            intent: "They want returning visitors to not re-enter information",
            implication: "Browser storage might solve this without the complexity of accounts.",
          },
          {
            question: "What happens if they fail?",
            surface: "'I need better error handling'",
            intent: "Users are getting stuck and giving up",
            implication: "Maybe the error isn't the problem—maybe the flow that causes the error is.",
          },
          {
            question: "Why this solution specifically?",
            surface: "'I need a mobile app'",
            intent: "Users want access on their phones",
            implication: "A responsive website might satisfy the same intent with 10% of the effort.",
          },
        ],
      },
      advice: "When you catch yourself saying 'I need to build X,' pause and ask 'what is X supposed to accomplish?' The answer might lead to a simpler solution.",
    },

    userJourney: {
      title: "Mapping a Simple User Journey",
      content: `A user journey is the path someone takes from first contact to accomplished goal. Mapping it helps you see your product through their eyes instead of yours.

You don't need fancy tools or detailed diagrams. You need to answer: What does someone do, step by step, to get value from this?`,
      example: {
        title: "Example: A Simple Booking Page",
        product: "A page where customers can book grooming appointments for their dogs",
        journey: [
          {
            step: 1,
            action: "User lands on the page",
            userThinking: "'Is this the right place? Can I book here?'",
            productJob: "Immediately confirm what this is and that they can book",
          },
          {
            step: 2,
            action: "User looks for available times",
            userThinking: "'When can I come in? Is there anything this week?'",
            productJob: "Show available times clearly, without requiring clicks or scrolling",
          },
          {
            step: 3,
            action: "User selects a time",
            userThinking: "'That works for me. Now what?'",
            productJob: "Make selection obvious and show clear next step",
          },
          {
            step: 4,
            action: "User enters their information",
            userThinking: "'What do they need to know? This better not take forever.'",
            productJob: "Ask only essential questions. Name, contact, dog's name. Nothing else.",
          },
          {
            step: 5,
            action: "User submits",
            userThinking: "'Did it work? What happens now?'",
            productJob: "Confirm success immediately. Tell them what to expect next.",
          },
          {
            step: 6,
            action: "User leaves",
            userThinking: "'I'm done, right? I don't need to do anything else?'",
            productJob: "They should feel finished, not uncertain. Clear closure.",
          },
        ],
        insight: "Notice how the journey isn't about features—it's about questions users have and answers the product provides. Each step is a potential drop-off point if the product doesn't deliver.",
      },
      exercise: `For your own product, write out:
1. Who is the user?
2. What do they want to accomplish?
3. What are the 4-6 steps they take?
4. What are they thinking at each step?
5. What is the product's job at each step?

If you can't answer these, you don't understand your product well enough yet.`,
    },

    definingDone: {
      title: "Defining 'Done'",
      content: `One of the most dangerous words in building is "done."

Without a clear definition, you'll keep adding, tweaking, and polishing forever. You'll never ship, because there's always one more thing to improve.

"Done" isn't when the product is perfect. Done is when the product delivers the core value you promised.`,
      framework: {
        title: "A Definition of Done",
        criteria: [
          {
            criterion: "The core user journey works end-to-end",
            explanation: "Someone can go from start to finish without getting stuck. Not perfectly, not beautifully—but completely.",
          },
          {
            criterion: "The main value is deliverable",
            explanation: "If your product helps people book appointments, someone can actually book an appointment. The core promise is kept.",
          },
          {
            criterion: "Critical errors are handled",
            explanation: "The product doesn't crash or show blank screens. When something goes wrong, users see a message, not a disaster.",
          },
          {
            criterion: "A real person could use it",
            explanation: "Not a test account. Not you pretending to be a user. An actual human being could accomplish their goal.",
          },
        ],
        notRequired: [
          "Every edge case handled perfectly",
          "Beautiful design in every state",
          "Fast performance under all conditions",
          "Feature parity with competitors",
          "Zero known issues",
        ],
      },
      distinction: "Version 1 done is not Version 10 done. Don't hold Version 1 to Version 10 standards. Ship, learn, improve.",
    },

    whenToStop: {
      title: "Knowing When to Stop Building",
      content: `Stopping is harder than starting. There's always something to add, something to fix, something to improve. The urge to keep building is constant.

But building past the point of value is waste. It delays feedback, burns energy, and often makes the product worse, not better.`,
      signals: {
        title: "Signals It's Time to Stop",
        stop: [
          {
            signal: "You're adding features no one asked for",
            explanation: "If you're building based on 'users might want this' instead of 'users told me they need this,' you're guessing. Stop guessing and start asking.",
          },
          {
            signal: "Changes are getting smaller and smaller",
            explanation: "Moving a button 2 pixels, adjusting a color shade, rewording a message for the third time. These are signs of avoiding the real work: shipping.",
          },
          {
            signal: "You're building to avoid launching",
            explanation: "Adding 'just one more thing' before you share it with anyone is often fear disguised as productivity. Ship it scared.",
          },
          {
            signal: "The core experience works",
            explanation: "If a user can accomplish the main goal, you have a product. Everything else is enhancement for later.",
          },
        ],
        keep: [
          {
            signal: "The core experience is broken",
            explanation: "If users can't complete the main journey, that's a real problem. Fix it before shipping.",
          },
          {
            signal: "Users gave you specific feedback",
            explanation: "Real feedback from real users is gold. If someone said 'I couldn't figure out how to X,' that's worth fixing.",
          },
          {
            signal: "There's an obvious error",
            explanation: "Broken links, typos on the main page, crashes on common actions. Fix these. They're not polish—they're broken.",
          },
        ],
      },
      mantra: "Ship when it works. Improve when you learn. Don't improve in isolation.",
    },

    beginnerTraps: {
      title: "Common Traps Beginners Fall Into",
      intro: "Awareness is defense. Know these traps so you can avoid them.",
      traps: [
        {
          trap: "Building for yourself instead of your users",
          description: "You assume everyone thinks like you, needs what you need, and uses products like you do. They don't.",
          escape: "Talk to one real potential user before building. Ask what they actually need, not what you think they need.",
        },
        {
          trap: "Comparing to mature products",
          description: "You look at products with 10 years of development and 100 employees and feel your Version 1 is inadequate.",
          escape: "Compare your Version 1 to their Version 1, not their Version 50. Every product started simple.",
        },
        {
          trap: "Solving problems you don't have yet",
          description: "You build for 10,000 users when you have 10. You optimize for scale that may never come.",
          escape: "Build for the users you have. When you have new problems, solve them then.",
        },
        {
          trap: "Perfecting before validating",
          description: "You spend months polishing something nobody wants. The polish was wasted because the foundation was wrong.",
          escape: "Ship rough. Get feedback. Then polish the things that matter.",
        },
        {
          trap: "Adding complexity to seem legitimate",
          description: "You think simple products look amateur, so you add features to look 'professional.'",
          escape: "Simple products that work beat complex products that overwhelm. Users want results, not features.",
        },
        {
          trap: "Hiding behind building",
          description: "Building feels productive. Launching feels scary. So you keep building to avoid launching.",
          escape: "Set a launch date. Tell someone. Make it real. Use the deadline to force decisions.",
        },
      ],
    },

    uncomfortable: {
      title: "If This Feels Uncomfortable, You're Doing It Right",
      content: `Thinking in products is uncomfortable because it requires saying no.

No to features that sound cool but don't serve users.
No to polish that delays shipping.
No to your ego that wants to show off what you can build.
No to the fear that says it's not ready yet.

Every "no" is uncomfortable. But every "no" is also what separates products people use from projects people abandon.

Building is the easy part. You've learned how to build. AI handles most of the hard work.

The hard part is judgment. Knowing what to build. Knowing when it's enough. Knowing when to ship and when to wait. Knowing that simple and complete beats complex and half-finished.

That discomfort you feel? That's growth. That's you becoming a builder who ships, not just a builder who builds.

If you're feeling resistance to the ideas in this level—the simplicity, the restraint, the "ship before it's perfect" mindset—that resistance is exactly why you need this level.

Sit with the discomfort. Ship anyway. Learn from what happens. Repeat.

That's the path from someone who can build things to someone who can build things people actually use.`,
    },
  },

  closing: `You've now completed the thinking portion of this roadmap.

Levels 0 through 5 were about mindset, process, and judgment. How to think about building. How to direct AI effectively. How to make decisions about what matters.

Level 6 is different. It's about taking everything you've learned and turning it into a repeatable system. Your personal workflow for going from idea to shipped product, again and again.

You're one level away from having a complete approach to building software without becoming a programmer.

Let's finish this.`,
};
