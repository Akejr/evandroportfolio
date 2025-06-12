import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'pt' | 'en' | 'es';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

const translations = {
  pt: {
    // Header
    'nav.home': 'Início',
    'nav.projects': 'Projetos',
    'nav.about': 'Sobre mim',
    
    // Hero
    'hero.title': 'Projetando experiências digitais incríveis e desenvolvendo interfaces que funcionam de verdade.',
    'hero.subtitle': 'bonitas, intuitivas e acessíveis.',
    'hero.contact': 'Contactar',
    
    // About
    'about.title': 'Sobre mim',
    'about.text1': 'Sou Evandro Casanova: Desenvolvedor Web e UI Designer com 4 anos de experiência atuando como freelancer.',
    'about.text2': 'Tenho paixão por criar soluções criativas e funcionais, unindo design e tecnologia para entregar produtos digitais que realmente fazem a diferença. Ao longo da minha trajetória, desenvolvi interfaces intuitivas e aplicações que equilibram estética, desempenho e usabilidade.',
    'about.text3': 'Com um olhar atento ao detalhe e uma abordagem centrada no usuário, busco sempre superar expectativas — entregando projetos que não só funcionam bem, mas também encantam.',
    'about.cta': 'Vamos construir algo inesquecível juntos? 🚀',
    
    // Projects
    'projects.title': 'Projetos',
    'projects.seeAll': 'Ver Todos os Projetos',
    'projects.seeLess': 'Ver Menos',
    'projects.showing': 'Mostrando',
    'projects.project': 'projeto',
    'projects.projects': 'projetos',
    'projects.of': 'de',
    
    // Education
    'education.title': 'Educação',
    'education.uistart.degree': 'Especialização UI Start',
    'education.uistart.location': 'São Paulo, Brasil',
    'education.uistart.period': 'Setembro 2024',
    'education.uistart.description': 'Especialização em design de interfaces modernas e experiência do usuário. Foco em metodologias ágeis, design thinking e prototipagem de alta fidelidade. Desenvolvimento de habilidades práticas em ferramentas de design e frameworks modernos.',
    'education.uiux.degree': 'Pós-graduação em Web UI/UX',
    'education.uiux.location': 'Lisboa, Portugal',
    'education.uiux.period': 'Março 2023',
    'education.uiux.description': 'Especialização em design de interfaces e experiência do usuário. Estudos aprofundados em arquitetura da informação, design responsivo, usabilidade e prototipagem. Projetos práticos focados em acessibilidade, testes com usuários e design centrado no usuário.',
    'education.cs.degree': 'Graduação em Ciências da Computação',
    'education.cs.location': 'Luanda, Angola',
    'education.cs.period': 'Agosto 2021',
    'education.cs.description': 'Formação sólida em fundamentos da computação, algoritmos, estruturas de dados e desenvolvimento de software. Participação em projetos acadêmicos e iniciação científica com foco em aplicações web e mobile.',
    
    // Projects descriptions
    'projects.dotangola.description': 'DOT Angola é a maior plataforma de entretenimento digital de Angola, especializada na venda de gift cards nacionais e internacionais. Com uma interface intuitiva e responsiva, a plataforma foi projetada para proporcionar uma experiência de compra simples, rápida e segura, conectando os usuários aos seus serviços e jogos digitais favoritos com apenas alguns cliques.',
    'projects.minimalist.description': 'minimalist.fit é um tracker de dieta completo, desenvolvido para oferecer uma experiência simples, limpa e altamente funcional. A plataforma permite o controle eficiente de peso, alimentação e treinos, além de oferecer calendários interativos, gráficos de progresso e lembretes personalizados — tudo com uma interface minimalista e centrada no usuário.',
    'projects.navegante.description': 'Estudo de caso completo para uma plataforma de navegação, focando na experiência do usuário e interface intuitiva. Projeto desenvolvido com metodologias de UX Research e Design Thinking.',
    'projects.socialriot.description': 'Design de interface para plataforma social focada em jogos. Interface moderna e engajante com foco na comunidade gamer e experiência social.',
    'projects.zapcinemas.description': 'Redesign da interface do ZAP Cinemas, focando em melhorar a experiência de compra de ingressos e navegação entre filmes. Design clean e funcional.',
    'projects.yetubit.description': 'Interface para plataforma de exchange de criptomoedas, priorizando clareza de informações, segurança visual e facilidade de uso para traders.',
    
    // Contact
    'contact.title': 'Vamos conversar?',
    'contact.subtitle': 'Focado em Desenvolvimento Web e UI/UX Design.',
    'contact.cta': 'Vamos nos conectar e dar vida ao seu projeto!',
    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.resume': 'Currículo',
    
    // Footer
    'footer.text': 'Projetado e Desenvolvido por Evandro Casanova',
    
    // Highlighted words
    'highlight.evandro': 'Evandro Casanova',
    'highlight.webdev': 'Desenvolvedor Web',
    'highlight.uidesigner': 'UI Designer',
    'highlight.experience': '4 anos de experiência',
    'highlight.freelancer': 'freelancer',
    'highlight.creative': 'criar soluções criativas e funcionais',
    'highlight.design': 'design',
    'highlight.technology': 'tecnologia',
    'highlight.interfaces': 'interfaces intuitivas',
    'highlight.applications': 'aplicações',
    'highlight.performance': 'desempenho',
    'highlight.usability': 'usabilidade',
    'highlight.usercentered': 'centrada no usuário',
    'highlight.exceed': 'superar expectativas',
  },
  
  en: {
    // Header
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About me',
    
    // Hero
    'hero.title': 'Designing incredible digital experiences and developing interfaces that really work.',
    'hero.subtitle': 'beautiful, intuitive and accessible.',
    'hero.contact': 'Contact me',
    
    // About
    'about.title': 'About me',
    'about.text1': 'I am Evandro Casanova: Web Developer and UI Designer with 4 years of experience working as a freelancer.',
    'about.text2': 'I have a passion for creating creative and functional solutions, combining design and technology to deliver digital products that really make a difference. Throughout my journey, I have developed intuitive interfaces and applications that balance aesthetics, performance and usability.',
    'about.text3': 'With a keen eye for detail and a user-centered approach, I always seek to exceed expectations — delivering projects that not only work well, but also delight.',
    'about.cta': "Let's build something unforgettable together? 🚀",
    
    // Projects
    'projects.title': 'Projects',
    'projects.seeAll': 'See All Projects',
    'projects.seeLess': 'See Less',
    'projects.showing': 'Showing',
    'projects.project': 'project',
    'projects.projects': 'projects',
    'projects.of': 'of',
    
    // Education
    'education.title': 'Education',
    'education.uistart.degree': 'UI Start Specialization',
    'education.uistart.location': 'São Paulo, Brazil',
    'education.uistart.period': 'September 2024',
    'education.uistart.description': 'Specialization in modern interface design and user experience. Focus on agile methodologies, design thinking and high-fidelity prototyping. Development of practical skills in design tools and modern frameworks.',
    'education.uiux.degree': 'Postgraduate in Web UI/UX',
    'education.uiux.location': 'Lisbon, Portugal',
    'education.uiux.period': 'March 2023',
    'education.uiux.description': 'Specialization in interface design and user experience. Deep studies in information architecture, responsive design, usability and prototyping. Practical projects focused on accessibility, user testing and user-centered design.',
    'education.cs.degree': 'Bachelor in Computer Science',
    'education.cs.location': 'Luanda, Angola',
    'education.cs.period': 'August 2021',
    'education.cs.description': 'Solid formation in computer fundamentals, algorithms, data structures and software development. Participation in academic projects and scientific initiation with focus on web and mobile applications.',
    
    // Projects descriptions
    'projects.dotangola.description': 'DOT Angola is the largest digital entertainment platform in Angola, specialized in the sale of national and international gift cards. With an intuitive and responsive interface, the platform was designed to provide a simple, quick and secure purchase experience, connecting users to their favorite digital services and games with just a few clicks.',
    'projects.minimalist.description': 'minimalist.fit is a complete diet tracker, developed to offer a simple, clean and highly functional experience. The platform allows efficient weight control, nutrition and workouts, as well as providing interactive calendars, progress graphs and personalized reminders — all with a minimalist interface and centered on the user.',
    'projects.navegante.description': 'Complete case study for a navigation platform, focusing on user experience and intuitive interface. Project developed with UX Research and Design Thinking methodologies.',
    'projects.socialriot.description': 'Interface design for a social platform focused on games. Modern and engaging interface with focus on gamer community and social experience.',
    'projects.zapcinemas.description': 'Redesign of the ZAP Cinemas interface, focusing on improving the movie ticket purchase experience and navigation between movies. Clean and functional design.',
    'projects.yetubit.description': 'Interface for a cryptocurrency exchange platform, prioritizing clarity of information, visual security and ease of use for traders.',
    
    // Contact
    'contact.title': "Let's talk?",
    'contact.subtitle': 'Focused on Web Development and UI/UX Design.',
    'contact.cta': "Let's connect and bring your project to life!",
    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.resume': 'Resume',
    
    // Footer
    'footer.text': 'Designed and Developed by Evandro Casanova',
    
    // Highlighted words
    'highlight.evandro': 'Evandro Casanova',
    'highlight.webdev': 'Web Developer',
    'highlight.uidesigner': 'UI Designer',
    'highlight.experience': '4 years of experience',
    'highlight.freelancer': 'freelancer',
    'highlight.creative': 'creating creative and functional solutions',
    'highlight.design': 'design',
    'highlight.technology': 'technology',
    'highlight.interfaces': 'intuitive interfaces',
    'highlight.applications': 'applications',
    'highlight.performance': 'performance',
    'highlight.usability': 'usability',
    'highlight.usercentered': 'user-centered',
    'highlight.exceed': 'exceed expectations',
  },
  
  es: {
    // Header
    'nav.home': 'Inicio',
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí',
    
    // Hero
    'hero.title': 'Diseñando experiencias digitales increíbles y desarrollando interfaces que realmente funcionan.',
    'hero.subtitle': 'hermosas, intuitivas y accesibles.',
    'hero.contact': 'Contáctame',
    
    // About
    'about.title': 'Sobre mí',
    'about.text1': 'Soy Evandro Casanova: Desarrollador Web y Diseñador UI con 4 años de experiencia trabajando como freelancer.',
    'about.text2': 'Tengo pasión por crear soluciones creativas y funcionales, uniendo diseño y tecnología para entregar productos digitales que realmente hacen la diferencia. A lo largo de mi trayectoria, he desarrollado interfaces intuitivas y aplicaciones que equilibran estética, rendimiento y usabilidad.',
    'about.text3': 'Con un ojo atento al detalle y un enfoque centrado en el usuario, siempre busco superar expectativas — entregando proyectos que no solo funcionan bien, sino que también encantan.',
    'about.cta': '¿Construyamos algo inolvidable juntos? 🚀',
    
    // Projects
    'projects.title': 'Proyectos',
    'projects.seeAll': 'Ver Todos los Proyectos',
    'projects.seeLess': 'Ver Menos',
    'projects.showing': 'Mostrando',
    'projects.project': 'proyecto',
    'projects.projects': 'proyectos',
    'projects.of': 'de',
    
    // Education
    'education.title': 'Educación',
    'education.uistart.degree': 'Especialización UI Start',
    'education.uistart.location': 'São Paulo, Brasil',
    'education.uistart.period': 'Septiembre 2024',
    'education.uistart.description': 'Especialización en diseño de interfaces modernas y experiencia del usuario. Enfoque en metodologías ágiles, design thinking y prototipado de alta fidelidad. Desarrollo de habilidades prácticas en herramientas de diseño y frameworks modernos.',
    'education.uiux.degree': 'Posgrado en Web UI/UX',
    'education.uiux.location': 'Lisboa, Portugal',
    'education.uiux.period': 'Marzo 2023',
    'education.uiux.description': 'Especialización en diseño de interfaces y experiencia del usuario. Estudios profundos en arquitectura de la información, diseño responsivo, usabilidad y prototipado. Proyectos prácticos enfocados en accesibilidad, pruebas con usuarios y diseño centrado en el usuario.',
    'education.cs.degree': 'Grado en Ciencias de la Computación',
    'education.cs.location': 'Luanda, Angola',
    'education.cs.period': 'Agosto 2021',
    'education.cs.description': 'Formación sólida en fundamentos de la computación, algoritmos, estructuras de datos y desarrollo de software. Participación en proyectos académicos y de inicio científico con enfoque en aplicaciones web y móviles.',
    
    // Projects descriptions
    'projects.dotangola.description': 'DOT Angola es la mayor plataforma de entretenimiento digital de Angola, especializada en la venta de tarjetas regalo nacionales e internacionales. Con una interfaz intuitiva y responsiva, la plataforma fue diseñada para proporcionar una experiencia de compra simple, rápida y segura, conectando a los usuarios a sus servicios y juegos digitales favoritos con solo unos clics.',
    'projects.minimalist.description': 'minimalist.fit es un seguimiento de dieta completo, desarrollado para ofrecer una experiencia simple, limpia y altamente funcional. La plataforma permite el control eficiente del peso, la alimentación y el ejercicio, así como proporcionar calendarios interactivos, gráficos de progreso y recordatorios personalizados — todo con una interfaz minimalista y centrada en el usuario.',
    'projects.navegante.description': 'Estudio de caso completo para una plataforma de navegación, centrándose en la experiencia del usuario y la interfaz intuitiva. Proyecto desarrollado con metodologías de Investigación de UX y Pensamiento de Diseño.',
    'projects.socialriot.description': 'Diseño de interfaz para una plataforma social centrada en juegos. Interfaz moderna y atractiva con enfoque en la comunidad gamer y experiencia social.',
    'projects.zapcinemas.description': 'Rediseño de la interfaz de ZAP Cinemas, centrándose en mejorar la experiencia de compra de boletos y navegación entre películas. Diseño limpio y funcional.',
    'projects.yetubit.description': 'Interfaz para una plataforma de intercambio de criptomonedas, priorizando la claridad de la información, la seguridad visual y la facilidad de uso para comerciantes.',
    
    // Contact
    'contact.title': 'Hablemos?',
    'contact.subtitle': 'Enfocado en Desarrollo Web y Diseño UI/UX.',
    'contact.cta': '¡Conectémonos y demos vida a tu proyecto!',
    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.resume': 'Currículum',
    
    // Footer
    'footer.text': 'Diseñado y Desarrollado por Evandro Casanova',
    
    // Highlighted words
    'highlight.evandro': 'Evandro Casanova',
    'highlight.webdev': 'Desarrollador Web',
    'highlight.uidesigner': 'Diseñador UI',
    'highlight.experience': '4 años de experiencia',
    'highlight.freelancer': 'freelancer',
    'highlight.creative': 'crear soluciones creativas y funcionales',
    'highlight.design': 'diseño',
    'highlight.technology': 'tecnología',
    'highlight.interfaces': 'interfaces intuitivas',
    'highlight.applications': 'aplicaciones',
    'highlight.performance': 'rendimiento',
    'highlight.usability': 'usabilidad',
    'highlight.usercentered': 'centrado en el usuario',
    'highlight.exceed': 'superar expectativas',
  }
};

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['pt']] || key;
  };
  
  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}; 