
import { 
    Building, 
    Home, 
    HeartPulse, 
    ShieldCheck, 
    Sparkles, 
    Scissors, 
    Target, 
    Eye, 
    Lightbulb, 
    Users, 
    ThumbsUp, 
    Zap,
    Linkedin,
    Instagram,
    Facebook,
    LucideIcon
} from 'lucide-react';
// import photo '..';

export const NAV_LINKS = [
  { href: '#/', label: 'Home' },
  { href: '#/about', label: 'About' },
  { href: '#/services', label: 'Services' },
  { href: '#/team', label: 'Meet Our Team' },
  { href: '#/contact', label: 'Contact' },
];

export const INDUSTRIES = [
    { name: 'Construction', icon: Building },
    { name: 'Real Estate', icon: Home },
    { name: 'Skincare', icon: HeartPulse },
    { name: 'Insurance', icon: ShieldCheck },
    { name: 'Laundry', icon: Sparkles },
    { name: 'Salon', icon: Scissors },
];

export const CORE_PROMISES = [
    { title: 'Creative Strategy', description: 'We craft unique, data-informed strategies that resonate with your target audience and set you apart from the competition.' },
    { title: 'Measurable Results', description: 'Our campaigns are built on clear KPIs, providing transparent reporting and tangible returns on your investment.' },
    { title: 'Long-Term Growth', description: 'We focus on sustainable growth, building a strong brand foundation that thrives long after the campaign ends.' },
];

export const DIFFERENTIATORS = [
    { icon: Target, title: 'Multi-Niche Expertise', description: 'We possess deep, specialized knowledge across diverse industries, ensuring your marketing is not just generic but contextually brilliant.' },
    { icon: Eye, title: 'Data-Driven Creativity', description: 'Our creative process is fueled by analytics and insights, blending artistic innovation with scientific precision for maximum impact.' },
    { icon: Lightbulb, title: 'Tailored Solutions', description: 'We reject one-size-fits-all approaches. Every strategy is custom-built to align perfectly with your unique business goals and market position.' },
    { icon: Users, title: 'Collaborative Partnership', description: 'We see ourselves as an extension of your team, working closely with you to ensure transparency, alignment, and shared success.' },
];

export const VALUES = ['Integrity', 'Innovation', 'Collaboration', 'Results'];

export const SERVICES_DATA = [
    { icon: Building, title: 'Construction Marketing', description: 'We build powerful marketing blueprints for construction companies, from lead generation for contractors to branding for large-scale developers.', cta: 'Build Your Brand' },
    { icon: Home, title: 'Real Estate Marketing', description: 'Selling properties faster with captivating virtual tours, targeted digital ads, and sophisticated lead nurturing for agents and brokerages.', cta: 'Showcase Properties' },
    { icon: HeartPulse, title: 'Skincare & Beauty Marketing', description: 'We help beauty brands glow online through influencer partnerships, compelling social media content, and e-commerce optimization.', cta: 'Enhance Your Glow' },
    { icon: ShieldCheck, title: 'Insurance Marketing', description: 'Building trust and generating qualified leads for insurance agencies with educational content, local SEO, and professional branding.', cta: 'Secure More Clients' },
    { icon: Sparkles, title: 'Laundry & Cleaning Marketing', description: 'From local laundromats to commercial cleaning services, we create marketing strategies that clean up the competition.', cta: 'Freshen Up Your Marketing' },
    { icon: Scissors, title: 'Salon & Spa Marketing', description: 'Attracting more clients to your chairs and tables with beautiful visuals, easy online booking funnels, and loyalty programs.', cta: 'Book More Appointments' },
];

export const TEAM_MEMBERS = [
    {
        name: 'Daniel Oni',
        position: 'Ai video Editor',
        bio: 'With a vision to merge data and creativity, Daniel leads the charge in revolutionizing multi-niche marketing.',
        quote: 'Marketing is no longer about the stuff you make, but about the stories you tell.',
        image: 'Assets/Daniel.jpg',
        linkedin: '#',
    },
    {
        name: 'Asonganyi Rodric',
        position: 'Devops Engineer',
        bio: 'Asonganyi turns market insights into compelling brand narratives that captivate audiences and drive action.',
        quote: 'Good marketing makes the company look smart. Great marketing makes the customer feel smart.',
        image: 'Assets/Asonganyi.jpg',
        linkedin: '#',
    },
    {
        name: 'Aboubakar Abdourazak',
        position: 'Ai website Developer',
        bio: 'Aboubakar is the mastermind behind our data-driven approach, ensuring every campaign is optimized for peak performance.',
        quote: 'In God we trust; all others must bring data.',
        image: 'Assets/abubakar.jpg',
        linkedin: '#',
    },
    {
        name: 'Amadi Dominic',
        position: 'Devops/ cloud engineer',
        bio: 'Amadi crafts viral-worthy content and builds thriving online communities for our diverse portfolio of clients.',
        quote: 'Content is fire; social media is gasoline.',
        image: 'Assets/dominic.jpg',
        linkedin: '#',
    },
    {
        name: 'Peter Michael',
        position: 'Video Editor',
        bio: 'With a background in architecture, Peter builds robust marketing foundations for our industrial clients.',
        quote: 'We shape our buildings; thereafter, they shape us.',
        image: 'Assets/peterMichael.jpg',
        linkedin: '#',
    },
    {
        name: 'Adebayo Mary ',
        position: 'Graphic Designer',
        bio: 'Adebayo has an intuitive feel for the beauty industry, creating campaigns that resonate deeply with consumers.',
        quote: 'Beauty begins the moment you decide to be yourself.',
        image: 'Assets/ADEbayo.jpg',
        linkedin: '#',
    },
    {
        name: 'Abdulsamad Ishaq',
        position: ' Frontend Developer',
        bio: 'Abdulsamad has an intuitive feel for the beauty industry, creating campaigns that resonate deeply with consumers.',
        quote: 'Beauty begins the moment you decide to be yourself.',
        image: 'Assets/abdulshamaq.jpg',
        linkedin: '#',
    },
    {
        name: 'Nkwambi Honour ',
        position: 'Website Developer',
        bio: 'Nkwambi has an intuitive feel for the beauty industry, creating campaigns that resonate deeply with consumers.',
        quote: 'Beauty begins the moment you decide to be yourself.',
        image: 'Assets/Nkwambi.jpg',
        linkedin: '#',
    }
];

export const SOCIAL_LINKS: { name: string; icon: LucideIcon; href: string }[] = [
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
];
