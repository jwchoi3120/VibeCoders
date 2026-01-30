export const LEVEL_0_CONTENT = {
  title: "Level 0: Mindset Reset",
  subtitle: "You don't need to become a programmer. You need to become a builder.",
  intro: `Before you write a single prompt or look at any code, you need to unlearn some things.

Most of what you believe about coding—who can do it, how long it takes, what you need to know first—is based on a world that no longer exists.

This level is about clearing that out.`,

  sections: {
    wrongBeliefs: {
      title: "What Most People Believe About Coding (And Why It's Wrong)",
      content: `There's a story most people carry around about coding. It goes something like this:

**"Coding is for smart people with technical minds."**

This belief keeps millions of capable people from ever trying. The truth is that coding has always been about problem-solving, not raw intelligence. And now, with AI handling the technical translation, even the problem-solving part has become more accessible.

**"You need to study for months or years before you can build anything useful."**

This was true when you had to memorize syntax, understand memory management, and debug cryptic errors alone. It's not true anymore. The barrier to building something functional has dropped from years to days—sometimes hours.

**"If you can't write code from scratch, you're not really building."**

By this logic, film directors aren't really making movies because they don't operate the cameras themselves. A builder is someone who makes decisions, solves problems, and ships something that works. How the code gets written is a detail.

**"Making mistakes in code is dangerous and expensive."**

Mistakes are cheap now. Undo exists. Version control exists. AI can explain what went wrong and fix it in seconds. The cost of experimenting has never been lower.

These beliefs made sense in a different era. Holding onto them now is like refusing to use a calculator because "real mathematicians do it by hand."`,
    },

    whatVibeCodingMeans: {
      title: "What Vibe Coding Actually Means",
      content: `Vibe coding is not a shortcut. It's not "coding for lazy people." It's a different skill set entirely.

Traditional coding asks: *Can you translate logic into syntax that a computer understands?*

Vibe coding asks: *Can you clearly define what you want, evaluate what you get, and guide the process to a working result?*

The first question tests your ability to speak a computer's language. The second tests your ability to think clearly and communicate precisely.

Both are valid. Both produce working software. But only one requires years of specialized training.

Vibe coding is the practice of building software by directing AI—describing what you need, reviewing what it produces, and iterating until it works. You stay in control of the *what* and the *why*. AI handles the *how*.

This doesn't mean you understand nothing about what's happening. You'll develop an intuition for code, recognize patterns, and spot problems. But you won't be the one typing out every function and debugging every semicolon.

You'll be the one making decisions.`,
    },

    responsibilities: {
      title: "What You Are Responsible For vs. What AI Is Responsible For",
      yourResponsibilities: [
        "Defining the problem clearly—what are you trying to build and why?",
        "Making decisions about scope—what's essential vs. what's nice to have?",
        "Evaluating output—does this do what I asked? Does it feel right?",
        "Providing context—what does AI need to know to help you?",
        "Knowing when to ship—is this good enough for now?",
      ],
      aiResponsibilities: [
        "Translating your intent into working code",
        "Remembering syntax and technical details",
        "Suggesting approaches you might not know exist",
        "Explaining what it did and why",
        "Making changes when you ask for them",
      ],
      summary: `Notice what's not on your list: memorizing syntax, understanding compiler errors, knowing which library to use for a specific task.

Notice what's not on AI's list: deciding what to build, knowing when something is good enough, understanding your users.

This division of labor is the foundation of vibe coding. Respect it, and you'll build faster than you thought possible. Ignore it, and you'll either try to do AI's job (frustrating) or expect AI to do yours (disappointing).`,
    },

    commonFears: {
      title: "Common Fears Beginners Have",
      fears: [
        {
          fear: "I'll build something that breaks and I won't know how to fix it.",
          response: "You'll learn to describe problems to AI the same way you describe what you want to build. 'This button doesn't work when I click it' is often enough information to get a fix. You don't need to diagnose the problem technically—you need to describe what's wrong clearly.",
        },
        {
          fear: "I'll hit a wall where I need 'real' coding knowledge to continue.",
          response: "Walls exist, but they're rarely about coding knowledge. They're usually about unclear thinking. When you get stuck, it's almost always because you haven't defined what you want precisely enough. This roadmap teaches you to recognize that and fix it.",
        },
        {
          fear: "People will judge me for not being a 'real' developer.",
          response: "Some will. Most won't care. Users definitely won't. The person using your app doesn't ask how it was built. They ask if it works. Ship something useful and the question of your legitimacy answers itself.",
        },
        {
          fear: "AI will make mistakes and I won't catch them.",
          response: "AI makes mistakes constantly. So do human developers. The difference is that AI's mistakes are usually obvious and easy to fix once you spot them. You'll learn to verify outputs, test before trusting, and iterate quickly. Catching mistakes is a skill—this roadmap builds it.",
        },
        {
          fear: "This is just a trend. I should learn 'real' coding instead.",
          response: "Maybe. If your goal is to become a professional software engineer at a tech company, traditional education is still the path. But if your goal is to build things—tools, websites, products—the fastest path is the one that gets you building. You can always learn more later. You can't get back the months you spent preparing instead of doing.",
        },
      ],
    },

    mentalModel: {
      title: "The Mental Model: You Are the Director, AI Is the Worker",
      content: `Imagine you're directing a film.

You don't operate the camera. You don't adjust the lighting. You don't edit the footage frame by frame. You have people for that—skilled professionals who know their craft.

Your job is different. You decide what story you're telling. You know what emotions you want the audience to feel. You look at what your team produces and say "yes, that's it" or "no, let's try something else."

You can't do their jobs. They can't do yours.

Vibe coding works the same way.

AI is your technical crew. It knows how to write code, structure files, and make things work on a technical level. It's very good at this—often better than most human developers at routine tasks.

You are the director. You know what you're building and who it's for. You evaluate whether what AI produces matches your vision. You make the calls.

A director who tries to operate every camera makes a worse film and burns out. A director who gives no direction gets a mess.

The skill is in the collaboration. Clear direction, honest evaluation, continuous iteration.

That's the vibe.`,
    },

    readyChecklist: {
      title: "You Are Ready for Level 1 If You Can...",
      items: [
        "Accept that you don't need to understand how code works to build working software",
        "See yourself as someone who directs and decides, not someone who needs to learn a technical language first",
        "Commit to describing what you want clearly, even when it feels tedious",
        "Let go of the idea that 'real' builders write every line themselves",
        "Start before you feel ready, knowing that clarity comes from doing, not preparing",
      ],
    },
  },

  closing: `Level 0 has no exercises. No homework. No quiz.

The only thing you need to do is decide: Are you willing to try a different approach?

If yes, move to Level 1. You'll start learning how to define problems in words—the foundation of everything that comes next.`,
};
