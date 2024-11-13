# Countdown toolbar

A countdown toolbar for Zebar, with features to help with time perception difficulties, such as people with ADHD.

[Screenshots]

## Features

- Time progress bar, with divisions
- Animations for
- Current focused window
- Workspaces
- Current time
- Remaining minutes for half and whole hour
- Long format day of the week
- Colors for skimming
- Fun [Human Era year format](https://www.youtube.com/watch?v=czgOWmtGVGs)

## Design

- Figma link
-

## Getting Started

- Install Zebar
- Install Countdown Bar

[Installation and usage instructions will go here]

## Rationale

> [!note] tl;dr
> I've recently discovered that I have ADHD and wanted a tool to help me see time pass

### How ADHD impairs one to execute multi-step projects

**Time-blindness**[^1] is a concept popularised by Dr. Russel Barkley that explains why people with ADHD have problems with planning and acting on future behaviour.

On this model, **people with the disorder don't experience the passage of time normally**, so consequences that are not presently imminent[^3] will not evoke the expected attention and set of actions that you'd observe on a person without the disorder.

Additionally, people with ADHD experience a **working memory deficit**, which makes it difficult to maintain focus and persist with tasks, meaning remembering what one was doing, often acting on distractions that would normally be dismissed and side-tracking.[^2]

### The silver linings

For ADHD, besides medication, part of the treatment for some of the impairments is the **externalization of information**, that would otherwise be kept in the temporary working memory, with "visual prosthesis" that serve as aids.

Dr. Barkley recommends sticky notes and hourglass-like clocks[^4] where one can **visualise time pass**, instead of relying solely on ones internal clock and working memory (both of which ADHD disrupts).

![hourglass-like clock](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdinkumtribe.com%2Fwp-content%2Fuploads%2F2021%2F11%2FIMG_1881.jpg&f=1&nofb=1&ipt=2cfef39f92c033290ab916c31b7181f44985b2c2b29037c21f0ecaf1a1fa63d1&ipo=images)

## Product design

With this newfound knowledge I sought tools that would help me with my day-to-day needs as a computer (power) user.

### Requirements

Such tools would need meet the following requirements:

- A floating text with my current task
- A visual indicator of the passage of time
- Integrate and serve my workflow
- Be visually appealing and have an awesome UX (duh, [I have a degree in Design](https://www.linkedin.com/in/eduardohilariodev/overlay/education/356162303/multiple-media-viewer/?profileId=ACoAAB6o84oBYxqMaAyJhijsL9kTI7tvh-I6MiA&treasuryMediaId=1704169964394) 😂)

### What's out there

For my disappointment, all the tools out there wouldn't "quite get there". I tried
[Stickies](https://www.zhornsoftware.co.uk/stickies) for the current task tracking, despite being useful for other use-cases, the program was too over-featured for what I needed.

For the time one, this search didn't rendered any good results, most of the solutions are mobile apps (shout-out for [Intervals Pro](https://apps.apple.com/us/app/intervals-pro-hiit-timer/id957586938), the best HIIT out there with the least amount of bloat), which I tried for a couple of days but didn't **felt seamless to my workflow**.

### Background story

I must admit: [Gates locked me into his eco-system 🪟](https://www.youtube.com/watch?v=AdygBbbEnco).

I've tried Linux several times, but I grew up using this MS mess of a system and kind of **thrived in it's madness**, [in spite of all its dangers](https://open.spotify.com/track/7zvMaTcCspbRMahT4DcjQG).

What I loved in Unix systems tho, was how it approached the concept of [window managers](https://www.wikiwand.com/en/articles/Window_manager). In Windows, I didn't even knew this was a thing.

Observing a friend of mine using GNU+Linux with [i3](https://i3wm.org) just blew my mind with its simplicity and complete lack of need for a mouse (yes [João](https://github.com/JotaVeUltra), I'm talking of ya hahah).

After dozens of times trying to configure Arch (by the way, with EndeavourOS) and Ubuntu, just to use this thing, I gave up looking at the mountain of processes and way of doing things I would have to transpile to a Unix-based system and simply returned to the comfort of home.

For a long time I relied on [AutoHotKey](https://www.autohotkey.com/docs/v2) to help me with window-stuff. It was then that through [Scoop](https://github.com/ScoopInstaller/Scoop), I discovered [Komorebi](https://github.com/LGUG2Z/komorebi), which then led me to find [GlazeWM](https://github.com/glzr-io/glazewm), that had "inspired by i3wm" in its product description.

It offered the same functionalities one finds in i3, but for Windows' windows.

For months I used version 2, with a simple YAML configuration file that offered me hotkeys for windows manipulation, creation of virtual workspaces (similar to Windows' virtual desktops that you create with <kbd> Tab</kbd>), personalization options, window-specific behaviour rules and all the goodies.

[GlazeWM release of version 3](https://github.com/glzr-io/glazewm/releases/tag/v3.1.0) saw a major improvement compared to previous versions: rewritten in Rust codebase with better performance, a nicer documentation and the separation of its taskbar to the separate project [Zebar](https://github.com/glzr-io/zebar).

**The part, that sparked this whole project, was that Zebar renders the taskbar as an Electron app.**

This meant that the sky is the limit with what is possible UX-wise, I could then envision a solution to my (and possibly other people's) productivity needs.

### The UX

With the knife and cheese at hand, my first impulse was to jump into Figma and start to sketch this project.

I knew from the beginning that I wanted something gamified, to be visually engaging and not to look flat and boring like all other productivity solutions we see out there.

What I was aiming for was for physicality, to perceive volume and textures, assets the [skeuomorphism design cues](https://www.wikiwand.com/en/articles/Skeuomorph) has in buckets.

I took heavy inspiration in progress bars of games, specially of life bars, with God of War hovering my head along the whole process.

![God of War (2018) in-game screenshot](https://interfaceingame.com/wp-content/uploads/god-of-war/god-of-war-in-game-1920x1080.jpg)

This then led me to iterate over lots of versions and aesthetics.

> [!info]
> All of the following were designed in Figma and implemented in React

The first version of the progress bar was really punchy.

![Progress Bar V1](docs/bar.jpg)

I had implemented also a version where the buttons for the workspaces would lift from a space in the taskbar surface.

<video controls src="docs/workspaces.mp4" title="Title"></video>

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/design/9UQGp4iCcKDYPv9mPHo2v2/Zebar---Countdown-bar?node-id=0-1&embed-host=share" allowfullscreen></iframe>

## Support

[Support information will go here]

## Contributing

[Contributing guidelines will go here]

## Footnotes

[^1]: ADHD & Time Blindness, “ADHD & Time Blindness,” YouTube, Aug. 10, 2023. <https://www.youtube.com/watch?v=IHgbNGPZphc> (accessed Nov. 13, 2024).
[^2]: R. A. Barkley, Ph.D., "Trevor Noah Brilliantly Describes His ADHD," YouTube, Aug. 11, 2024. <https://www.youtube.com/watch?v=RLf9THaFWpk> (accessed Nov. 13, 2024).
[^3]: R. A. Barkley, Ph.D., "30 Essential Ideas you should know about ADHD, 5A ADHD is Time Blindness," YouTube, Aug. 22, 2014. <https://www.youtube.com/watch?v=wmV8HQUuPEk> (accessed Nov. 13, 2024).
[^4]:
    R. A. Barkley, Ph.D., and C. M. Benton, Taking charge of adult ADHD : proven strategies to succeed at work, at home, and in relationships. New York: The Guilford Press, 2022.
    ‌
