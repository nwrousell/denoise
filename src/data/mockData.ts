export interface Content {
    id: string
    title: string
    date: string
    readingLength: string
    excerpt: string
    fullText?: string
}

export interface GraphNode {
    id: string
    name: string
    category?: string
    color?: string
}

export interface GraphLink {
    source: string
    target: string
}

export interface GraphData {
    nodes: GraphNode[]
    links: GraphLink[]
}

export const searchResults: Content[] = [
    {
        id: '1',
        title: 'Do Things that Don\'t Scale',
        date: '2013-07-01',
        readingLength: '12 min read',
        excerpt: 'One of the most common types of advice we give at Y Combinator is to do things that don\'t scale. A lot of would-be founders believe that startups either take off or don\'t.',
        fullText: 'One of the most common types of advice we give at Y Combinator is to do things that don\'t scale. A lot of would-be founders believe that startups either take off or don\'t. You build something, make it available, and if you\'ve made a better mousetrap, people beat a path to your door as promised. Or they don\'t, in which case the market must not exist.\n\nActually startups take off because the founders make them take off. There may be a handful that just grew by themselves, but usually it takes some sort of push to get them going. A good metaphor would be the cranking that\'s required to start an old car. Once the engine catches, it\'ll run by itself. But there\'s a separate and crucial step you have to take to get it to that point.\n\nThe most common unscalable thing founders have to do at the start is to recruit users manually. Nearly all startups have to. You can\'t wait for users to come to you. You have to go out and get them. Stripe is one of the most successful startups we\'ve funded, and the problem they solved was an urgent one. If anyone could have sat back and waited for users, it was Stripe. But in fact they\'re famous within YC for aggressive early user acquisition.\n\nStripe\'s problem was that they were starting a new payments processor for web sites. The problem for most companies is to get users. But Stripe had an additional problem: it needed to get permission from the credit card companies and banks to do what it wanted to do. I remember thinking as I watched them that they were "doing the impossible" by getting that permission. But they did it, and now it\'s a multi-billion dollar company.'
    },
    {
        id: '2',
        title: 'How to Pick a Technical Co-founder',
        date: '2019-11-27',
        readingLength: '15 min read',
        excerpt: 'I often get asked for advice on how non-technical founders can find technical co-founders. It\'s a critical question, because technical talent can make or break a startup.',
        fullText: 'I often get asked for advice on how non-technical founders can find technical co-founders. It\'s a critical question, because technical talent can make or break a startup.\n\nThe most important thing to understand about picking a technical co-founder is that it\'s not primarily a technical decision. The most valuable trait in a co-founder is that you can work well together, which involves a lot of factors: whether you have complementary skills, whether you have compatible working styles, whether you can resolve conflicts productively. The person who\'s the most talented engineer might not be the best co-founder for you if you don\'t work well together.\n\nThat said, a technical co-founder\'s technical abilities are also critical. So how should a non-technical founder evaluate a technical co-founder? The most common mistake I see non-technical founders make is not being rigorous enough about this assessment. They often end up choosing someone who is not sufficiently experienced or who doesn\'t have the right kind of technical skills for the company they\'re trying to build.\n\nThe best way to evaluate technical skill is to talk to other technical people. If you don\'t know any, you should start building your network. Go to meetups, participate in online communities, get to know engineers. Ask them to help you evaluate potential technical co-founders. Ideally, you want someone who has built a system similar to what you\'re trying to build, at a similar scale.\n\nYou should also look for evidence of effectiveness. Has the person shipped real products? Do they build things that work well? Are they pragmatic, or do they get caught up in perfectionism? The best engineers are often force multipliers who can not only build things themselves but also enable others to build things more effectively.'
    },
    {
        id: '3',
        title: 'What I Worked On',
        date: '2021-02-24',
        readingLength: '20 min read',
        excerpt: 'Before college the two main things I worked on, outside of school, were writing and programming. I didn\'t write essays. I wrote what beginning writers were supposed to write then, and probably still are: short stories.',
        fullText: 'Before college the two main things I worked on, outside of school, were writing and programming. I didn\'t write essays. I wrote what beginning writers were supposed to write then, and probably still are: short stories. My stories were awful. They had hardly any plot, just characters with strong feelings, which I imagined was the serious literary way to write.\n\nThe programs I wrote were mostly games, and mostly for the IBM 1401 that our school district used for what was then called "data processing." This was in the early 1970s, when computers were still big mysterious machines, and using one was a big deal. I got to use the 1401 because my mother, who taught at my school, got the school district to hire me as a "student programmer" to do something with the attendance records, and afterwards no one remembered to tell me to stop using the computer.\n\nThe language I used was an early version of Fortran. I was not very good at optimizing the code I wrote, partly because the 1401 was so slow and had so little memory (a few kilobytes at most) that you had to use key data structures like lookup tables on separate magnetic tape drives, and partly because I didn\'t know about things like lookup tables. But I did at least make my programs work.\n\nI got into college on the strength of my performance on standardized tests, especially math tests. But when I got to college I found I didn\'t like math so much. I found a lot of the work seemed to be about translating word problems into a form where you could apply known techniques that were basically elaborate versions of those x + y = 12, 2x + y = 15 problems you\'ve already been doing in high school.\n\nIt wasn\'t till my second year of college that I found something that really grabbed my attention: programming language design. There was a special department called Applied Math that was separate from the regular Math department, and I started taking some of their courses. I discovered I liked Applied Math a lot more than Pure Math, because it seemed to be more about how things worked and less about proofs.\n\nI spent a lot of time on a big project my last year of college: an optimizing compiler called T. At the time a friend of mine, Robert Morris, and I were effectively jointly specializing in programming language design. We both wanted to design a new programming language, and we ended up working on separate but related projects: I worked on a compiler for a dialect of Lisp, and he worked on an interpreter for a dialect of Smalltalk.'
    },
    {
        id: '4',
        title: 'Schlep Blindness',
        date: '2012-01-01',
        readingLength: '8 min read',
        excerpt: 'There are great startup ideas lying around unexploited right under our noses. One reason we don\'t see them is a phenomenon I call "schlep blindness."',
        fullText: 'There are great startup ideas lying around unexploited right under our noses. One reason we don\'t see them is a phenomenon I call "schlep blindness."\n\nSchlep was originally a Yiddish word but has passed into general use in the US. It means a tedious, unpleasant task.\n\nNo one likes schleps, but hackers especially dislike them. Most hackers who start startups wish they could start them with just a bunch of code, which they\'d push to a server somewhere, and watch as it got popular and made them rich. They\'d prefer not to deal with tedious problems or get involved in messy ways with the real world. Which is a reasonable preference, because such things slow you down. But this preference is so widespread that the space of convenient startup ideas has been stripped pretty clean. If you\'re going to build a successful startup, you\'re going to have to address a real need, and if you\'re going to address a real need, you\'re going to have to schlep. You can\'t start a successful startup without being willing to do schleps.\n\nThe most dangerous thing about our dislike of schleps is that much of it is unconscious. Your unconscious won\'t even let you see ideas that involve painful schleps. That\'s schlep blindness.\n\nThe phenomenon isn\'t limited to startups. Most people don\'t consciously decide not to be in as good physical shape as Olympic athletes, for example. Their unconscious mind decides for them, shrinking from the work involved.\n\nThe most striking example I know of schlep blindness is Stripe, or rather Stripe\'s idea. For over a decade, every hacker who\'d ever had to process payments online knew how painful the experience was. Thousands of people must have known about this problem. And yet when they started startups, they decided to build recipe sites, or aggregators for local events. Why? Why work on problems few care much about and no one will pay for, when you could fix one of the most important components of the world\'s infrastructure? Because schlep blindness prevented people from even considering the idea of fixing payments.\n\nI was as guilty of this as anyone. Till I was about 19 I was intend on being a physicist. I didn\'t realize it at the time, but what was attracting me to physics was the way it elegantly evaded the problems I would have faced in other majors.'
    },
    {
        id: '5',
        title: 'When to Shut Down a Project',
        date: '2021-07-12',
        readingLength: '10 min read',
        excerpt: 'One of the hardest decisions in professional life, especially for entrepreneurs and leaders, is when to shut down a project. Almost nobody gets this decision consistently right.',
        fullText: 'One of the hardest decisions in professional life, especially for entrepreneurs and leaders, is when to shut down a project. Almost nobody gets this decision consistently right.\n\nThe most common pathology is sunk cost bias: the tendency to continue investing (money, time, political capital) despite mounting evidence that a project is not achieving its goals. I think of this as giving up too late.\n\nBut in domains where a few large winners dominate all the smaller ones—venture capital, writing, music, product management—many people too easily give up on good ideas. This is giving up too early.\n\nA third less well-known failure mode is poor diagnostics: being too quick to stop iterating on the fundamentals of a project. When people shut down a project, often what they\'re thinking is, "we did everything we could, and nothing worked." But did you really try everything?\n\nThe decisions with the largest impact on outcomes tend to be those made at the very beginning of a project: which people you hire, which strategy you pursue, which partners you start working with. But changing these things once you\'ve started is very costly. So when a project isn\'t going as hoped, people tend to try small tweaks at the periphery.\n\nI\'ve made this mistake myself. For almost a year at Wave, we tried to recruit managers for our operations by posting job descriptions and hiring mostly from outside the company. Managers recruited this way tended to struggle with the role, so we spent most of our time tweaking the support we gave them and making incremental adjustments to their job descriptions. But this never worked. We only fixed the problem when we finally tried a fundamentally different approach: promoting the strongest operations staff to be managers, rather than hiring from outside.\n\nIf a project isn\'t working out, ask: have I really tried all the fundamentally different approaches? Or am I making small tweaks to the same basic strategy and hoping for different results? If the latter, be prepared to make deep changes. This often requires a kind of intellectual flexibility that\'s hard for me. When I pour a lot of effort into a plan, I feel emotionally invested in it, and it takes real willpower to change course and admit that my original plan was the problem.'
    },
    {
        id: '6',
        title: 'Aggressively Early',
        date: '2022-11-03',
        readingLength: '14 min read',
        excerpt: 'When we analyze the productivity of our team at Wave, I notice a surprising pattern: the most effective people are often preparing for organizational needs before the rest of us even realize we have them.',
        fullText: 'When we analyze the productivity of our team at Wave, I notice a surprising pattern: the most effective people are often preparing for organizational needs before the rest of us even realize we have them.\n\nFor example, one of our engineers built a framework for automated testing when we had just five engineers on the team. Many startups don\'t invest in testing that early, but by the time we grew to fifteen engineers, we were moving much faster than comparable-sized teams because we had caught bugs early rather than debugging them in production.\n\nAnother engineer set up a metrics tracking system when we had only a handful of users. Soon after, we discovered a bunch of edge cases causing payment failures that we wouldn\'t have found for weeks or months without those metrics. In retrospect, I\'m confident that these early investments paid off many times over in our ability to iterate quickly as we grew.\n\nThe pattern seems to apply broadly. For example, Google invested in a massive, custom-built infrastructure early on, including building their own containers, distributed computing, and file systems. At the time, some people saw this as excessive. Today, it seems obvious that these early investments were integral to Google\'s ability to scale to trillions of search queries.\n\nYou might worry that investing early in infrastructure and tooling will slow you down initially, even if it helps later. My experience has been the opposite. My most productive periods have been when I\'m working with great infrastructure: clean codebases, comprehensive metrics, fast test suites, etc. My least productive periods have been dealing with spaghetti code, debugging mysterious failures, or trying to understand what the hell is going on with our metrics.\n\nThe question isn\'t whether to make leveraged investments, but which ones to make. Building your own database is usually a bad idea, but tools that help you understand what\'s happening in your product are almost always worth it. Setting up a complex release process when you only ship weekly is premature, but designing your system to be easy to understand—using proper abstractions, standardized logging, clean interfaces—is rarely something you\'ll regret.\n\nYou should be aggressively early on investments that (1) help you understand your system, (2) catch bugs quickly, and (3) improve the leverage of your most important contributors.'
    },
    {
        id: '7',
        title: 'How to Get Startup Ideas',
        date: '2012-11-01',
        readingLength: '18 min read',
        excerpt: 'The way to get startup ideas is not to try to think of startup ideas. It\'s to look for problems, preferably problems you have yourself.',
        fullText: 'The way to get startup ideas is not to try to think of startup ideas. It\'s to look for problems, preferably problems you have yourself.\n\nThe very best startup ideas tend to have three things in common: they\'re something the founders themselves want, that they themselves can build, and that few others realize are worth doing. Microsoft, Apple, Yahoo, Google, and Facebook all began this way.\n\nWhy is it so important to work on a problem you have? Among other things, it ensures the problem really exists. It sounds obvious to say you should only work on problems that exist. And yet by far the most common mistake startups make is to solve problems no one has.\n\nI made it myself. In 1995 I started a company to put art galleries online. But galleries didn\'t want to be online. It\'s not how the art business works. So why did I spend 6 months working on this stupid idea? Because I didn\'t pay attention to users. I invented a model of the world that didn\'t correspond to reality, and worked from that. I didn\'t notice my model was wrong until I tried to convince users to pay for what we\'d built. Even then I took embarrassingly long to catch on. I was attached to my model of the world, and I didn\'t want to discover it was wrong.\n\nTo generate good ideas you need two things: to know about needs, and to be able to build things. The second one is perhaps less obvious. Most hackers know how to build things, but the other key ingredient, an intimate knowledge of needs, is rarer. Part of the reason is that the kind of people who become good at technology are often those who are not innately perceptive about people or good at understanding and communicating with them. But the other part is that getting exposed to needs is not as straightforward as learning to hack.\n\nYou can\'t just stand there passively hoping that needs will intrude on your awareness. You have to look actively for needs. And curiosity alone is not enough. It takes effort to identify problems and imagine how things could be better. It requires both curiosity and a certain impatience with the way things are. You need to be the sort of person who, when they encounter something that\'s broken, can\'t just live with it but needs to either fix it or replace it.'
    },
    {
        id: '8',
        title: 'The Bus Ticket Theory of Genius',
        date: '2019-11-01',
        readingLength: '9 min read',
        excerpt: 'Everyone knows that to do great work you need both natural ability and determination. But there\'s a third ingredient that\'s not as well understood: an obsessive interest in a particular topic.',
        fullText: 'Everyone knows that to do great work you need both natural ability and determination. But there\'s a third ingredient that\'s not as well understood: an obsessive interest in a particular topic.\n\nTo explain this point I need to burn my reputation with some readers, so I\'m going to use an example that will seem ridiculously marginal to most of you: collectors of old bus tickets. Most people would say that someone who devoted a substantial portion of their life to collecting old bus tickets was eccentric at best. If that\'s what you think, put your hands over your ears, because I\'m going to say something that would cure anyone of bus ticket collecting if they heard it: the greatest human achievements have the same shape.\n\nThe bus ticket theory is that there\'s a kind of genius that\'s fueled by collecting bus tickets, or whatever the moral equivalent happens to be in some field. Richard Feynman loved figuring out how to solve integrals, even though there was no obvious use for them. The young Ramanujan spent his time playing with formulas from old math textbooks. John McCarthy was writing papers on "Programs with Common Sense" in the 1950s. No one would have called any of them a genius for what they were doing at the time; yet all were doing what eventually led to ideas that changed the world.\n\nWhy do people work on things that have a very small chance of helping them get rich or famous? Because they\'re genuinely interested in these things. And when you\'re genuinely interested in something, you\'ll inevitably encounter gaps in knowledge and understanding that will pull you further into learning and discovery.\n\nFrom the outside, the bus ticket theory seem to be about collecting useless knowledge. Actually it\'s about curiosity. The bus ticket collector\'s curiosity seems narrow because it\'s focused on collecting bus tickets. But within the world of bus tickets it\'s unbounded. They want to know everything about bus tickets: how they\'re made, why some are printed differently than others, what the typography and design history is, what buses existed throughout history, etc.\n\nThe bus ticket theory is similar to the familiar theory that innovations come from combining ideas, but it adds that collecting ideas often means collecting apparently useless ones. Genius deepens in narrow but unbounded domains, and it\'s seldom clear in advance which domains will turn out to be important. That\'s why you find bus ticket collectors in the prehistory of so many fields.'
    }
]

export const graphData: GraphData = {
    nodes: [
        { id: '1', name: 'Do Things that Don\'t Scale', category: 'startup' },
        { id: '2', name: 'How to Pick a Technical Co-founder', category: 'startup' },
        { id: '3', name: 'What I Worked On', category: 'biography' },
        { id: '4', name: 'Schlep Blindness', category: 'startup' },
        { id: '5', name: 'When to Shut Down a Project', category: 'management' },
        { id: '6', name: 'Aggressively Early', category: 'management' },
        { id: '7', name: 'How to Get Startup Ideas', category: 'startup' },
        { id: '8', name: 'The Bus Ticket Theory of Genius', category: 'philosophy' }
    ],
    links: [
        { source: '1', target: '3' },
        { source: '1', target: '6' },
        { source: '2', target: '4' },
        { source: '3', target: '7' },
        { source: '4', target: '1' },
        { source: '5', target: '8' },
        { source: '6', target: '1' },
        { source: '7', target: '3' },
        { source: '8', target: '5' }
    ]
}

// Function to get color based on category
export const getCategoryColor = (category?: string): string => {
    switch (category) {
        case 'startup':
            return '#3b82f6' // blue
        case 'management':
            return '#10b981' // green
        case 'biography':
            return '#8b5cf6' // purple
        case 'philosophy':
            return '#f59e0b' // amber
        default:
            return '#6b7280' // gray
    }
}