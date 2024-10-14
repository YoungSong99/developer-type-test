
// 백엔드 : 0
// 프론트 : 1
// 디자인: 2
// 기획 : 3

// 4가지 결과

const qnaList = [
  {
  q: 'Your friend shares cookies they baked. Along with gratitude, what are you thinking?',
  a: [
    { answer: 'a. What ratio and recipe did they use to make them taste this good?', type: [0,1] },
    { answer: 'b. The cookies are so pretty I don’t even want to eat them!', type: [2,1] },
    { answer: 'c. I should suggest we start a baking business together!',type:[0,3]},
  ]
  },
  {

    q: 'Your professor says you can work in a team or solo on a project. What do you choose?',
    a: [
      { answer: 'a. Projects are all about teamwork! Let’s collaborate!', type: [1,2,3] },
      { answer: 'b. I’m more comfortable working on my own. ', type: [0] },
      { answer: 'c. I don’t mind either way!',type:[3]},
    ]
  },
  {
    q: 'When working in a team, which role do you naturally take?',
    a: [
      { answer: 'a. I’ll make the presentation! (Making it look nice helps keep people focused.)', type: [1,2] },
      { answer: 'b. I’ll handle the research. (The key is good data and strong arguments.)', type: [0] },
      { answer: 'c. I’ll do the talking — I love presenting!', type: [3] },
    ]
  },
  {
    q: 'You’re in charge of making a presentation for your team. What’s your style?',
    a: [
      { answer: 'a. I’ll just write the text on a plain white slide... no fuss.', type: [0] },
      { answer: 'b. It has to look great! Let’s find a cool template. ', type: [1] },
      { answer: 'c. Templates? I’ll design everything from scratch! ', type: [3,2] }
    ]
  },
  {
    q: 'You’re going to study at a café. Which type of café do you prefer?',
    a: [
      { answer: 'a. A quiet, noise-free study café!', type: [0] },
      { answer: 'b. I like a little background noise while I work!', type: [2,1] },
      { answer: 'c. I love loud, busy places like Starbucks!',type:[2,3]},
    ]
    },
  {
    q: 'A new MacBook just came out! What’s your reaction?...!?',
    a: [
      { answer: 'a. Wow... the design is incredible! So sleek!', type: [2,1] },
      { answer: 'b. Wait... it has an M2 chip?! That performance is wild!', type: [0] },
      { answer: 'c. MacBook? I use Windows, so I’m not that interested.',type:[4]},
    ]
  },
  {
    q: 'Your friend suggests watching a movie on Netflix. What’s your pick?',
    a: [
      { answer: 'a. A detective mystery! Solving crimes is so fun!', type: [0] },
      { answer: 'b. Let’s watch a popular movie with a well-structured story.', type: [3]},
      { answer: 'c. I’m all about the visuals! I love beautifully shot films.', type: [1,2] },
    ]
  },
  {
    q: 'You’re buying a planner for the new year. Which one do you choose?',
    a: [
      { answer: 'a. A neat, organized planner that helps me stay on top of things!', type: [3] },
      { answer: 'b. A stylish, artistic planner that shows off my unique taste!', type: [1,2]},
      { answer: 'c. I don’t care about the design, as long as it’s a planner.', type: [0] },
    ]
  },
  {
    q: 'How do you handle difficult study material?',
    a: [
      { answer: 'a. I keep studying until I fully understand it.  ', type: [0] },
      { answer: 'b. I just memorize it and move on quickly.', type: [2,3]},
      { answer: 'c. I don’t study.',type:[4]},
    ]
  },
  {
    q: 'You’re decorating your new place! What’s your approach?',
    a: [
      { answer: 'a. Measure the room first, then find furniture that fits. ', type: [0,3] },
      { answer: 'b. I don’t care about size—pretty furniture comes first!', type: [1]},
      { answer: 'c. Ugh, decorating... I’ll just buy whatever.', type: [0] },
    ]
  },
]
const infoList = [
  {
    nameIntro: "I'll quietly get it all done from behind!",
    name: 'Backend Type',
    descTitle1: '🦁 You’re a strategist who gets maximum efficiency in any situation!',
    desc1: 'You can’t stand repetitive tasks! Always chasing the most efficient solutions, you’ve got the perfect mindset of a true developer!',
    descTitle2: '🦁 You’ve got a wide understanding and excellent design skills.',
    desc2: 'Backend developers work on things you can’t see. That’s why it takes a special ability to grasp abstract concepts. You’ve got the talent to understand and build structures for services and data storage.',
    descTitle3: '🦁 You’re someone who never gives up easily. You’ve got steady determination and perseverance.',
    desc3: 'With your persistence, you keep building and fixing things, always holding the fort in the background. Backend developers like you are the backbone of any service.',
    resultif: '🔍 Want to become a backend developer?',
    resultbasic1: '✔️ Basics: C/C++, Python, Java',
    resultbasic2: '✔️ Must-know: Networking (HTTP), Database (DB), Operating Systems (OS)',
    resultbasic3: '✔️ Advanced: Django, Spring, Node.js, Flask',
  },
  {
    nameIntro: "I’ll handle the visible parts!",
    name: 'Frontend Type',
    descTitle1: '🦁 You’re full of curiosity and love a challenge.',
    desc1: 'With a creative and adventurous spirit, you’re always ready to dive into the latest web tech trends and master them fast!',
    descTitle2: '🦁 You’ve got a keen eye for detail.',
    desc2: 'You can spot the tiniest things from the user’s perspective, making sure the UI is always just right for them.',
    descTitle3: '🦁 You’re great at communication.',
    desc3: 'You know how to collaborate with different teams, adjust details, and communicate smoothly with planners, designers, and backend developers.',
    resultif: '🔍 Want to become a frontend developer?',
    resultbasic1: '✔️ Basics: HTML, CSS, JavaScript',
    resultbasic2: '✔️ Must-know: Web concepts, Bootstrap, jQuery',
    resultbasic3: '✔️ Advanced: Angular, React, Vue.js',
  },
  {
    nameIntro: "I’ve got the design covered!",
    name: 'Designer Type',
    descTitle1: '🦁 You’ve got a natural artistic flair.',
    desc1: 'With an eye for beauty and color, you effortlessly come up with trendy, creative designs.',
    descTitle2: '🦁 You have sharp insight and observation skills to understand what others need.',
    desc2: 'As a designer, it’s all about making things user-friendly. You can catch what users need, even if they don’t say it.',
    descTitle3: '🦁 You’re a pro at organizing things neatly!',
    desc3: 'With your knack for making info clear and easy to understand, you design interfaces that are both visually appealing and functional.',
    resultif: '🔍 Want to become a UI/UX designer?',
    resultbasic1: '✔️ Basics: HTML, CSS, JavaScript',
    resultbasic2: '✔️ Must-know: UI/UX concepts, Web layout, Design',
    resultbasic3: '✔️ Advanced: Adobe XD, Figma, Sketch',
  },
  {
    nameIntro: "Leave the planning to me~",
    name: 'Project Manager Type',
    descTitle1: '🦁 You’ve got great leadership and collaboration skills.',
    desc1: 'As a planner, you communicate with everyone — designers, backend, frontend — and lead the project efficiently with natural leadership.',
    descTitle2: '🦁 You’re skilled at analyzing things in detail.',
    desc2: 'Planners analyze user needs and behavior to steer the service in the right direction, with a sharp eye for detail.',
    descTitle3: '🦁 You’re multi-talented and have a wide skill set.',
    desc3: 'To communicate effectively with all teams, planners need to understand both design and development, so you’re a well-rounded expert in IT.',
    resultif: '🔍 Want to become a PM?',
    resultbasic1: '✔️ Basics: HTML, CSS, JavaScript',
    resultbasic2: '✔️ Must-know: UI/UX concepts, Data analysis, Marketing',
    resultbasic3: '✔️ Advanced: Protopie, GA, Adobe XD/Figma',
  }
]
