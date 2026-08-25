import {
  BriefcaseBusiness,
  Building2,
  DraftingCompass,
  GraduationCap,
  LampDesk,
  MonitorUp,
  Paintbrush,
  PanelsTopLeft,
  PencilRuler,
  Ruler,
  Sofa,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  alt: string;
};

export type IllustratedItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const professional = {
  name: "Cynthia Aparecida da Silva",
  shortName: "Cynthia A. da Silva",
  role: "Acadêmica de Arquitetura e Urbanismo | Técnica em Edificações",
  location: "Chapecó, Santa Catarina",
  portrait: "/images/cynthia-aparecida.jpeg",
};

export const contact = {
  phone: "(49) 9 9968-6054",
  phoneHref: "tel:+5549999686054",
  email: "contato@cynthiasilva.com",
  emailHref: "mailto:contato@cynthiasilva.com",
  instagram: "@proj.cynthias",
  instagramHref: "https://www.instagram.com/proj.cynthias",
  whatsappHref:
    "https://wa.me/5549999686054?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20um%20projeto%20com%20voc%C3%AA!",
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Refúgio Zen",
    description:
      "Um espaço de tranquilidade e equilíbrio, onde cada elemento foi pensado para promover bem-estar e serenidade.",
    image: "/images/projects/refugio-zen.jpg",
    category: "Residencial",
    alt: "Sala de estar do projeto Refúgio Zen, com tons naturais e mobiliário contemporâneo",
  },
  {
    id: 2,
    title: "Casa dos Sonhos",
    description:
      "Onde cada detalhe conta uma história de amor, funcionalidade e beleza em perfeita harmonia.",
    image: "/images/projects/casa-dos-sonhos.jpg",
    category: "Residencial",
    alt: "Ambiente integrado do projeto Casa dos Sonhos, com madeira e iluminação acolhedora",
  },
  {
    id: 3,
    title: "Loft Urbano",
    description:
      "Modernidade e sofisticação se encontram neste projeto inovador que redefine o conceito de moradia urbana.",
    image: "/images/projects/loft-urbano.jpg",
    category: "Comercial",
    alt: "Interior contemporâneo do projeto Loft Urbano",
  },
  {
    id: 4,
    title: "Escritório Criativo",
    description:
      "Um ambiente de trabalho que inspira criatividade e produtividade, com elementos naturais e iluminação planejada.",
    image: "/images/projects/escritorio-criativo.jpg",
    category: "Comercial",
    alt: "Escritório amplo e iluminado do projeto Escritório Criativo",
  },
  {
    id: 5,
    title: "Suíte Aconchegante",
    description:
      "Um quarto que abraça e acolhe, com paleta suave e texturas que convidam ao descanso profundo.",
    image: "/images/projects/suite-aconchegante.jpg",
    category: "Residencial",
    alt: "Quarto em tons suaves do projeto Suíte Aconchegante",
  },
  {
    id: 6,
    title: "Cozinha Gourmet",
    description:
      "Funcionalidade e elegância em um espaço gastronômico pensado para reunir família e amigos com conforto.",
    image: "/images/projects/cozinha-gourmet.jpg",
    category: "Residencial",
    alt: "Cozinha planejada do projeto Cozinha Gourmet",
  },
];

export const services: IllustratedItem[] = [
  {
    icon: Sofa,
    title: "Projetos de Interiores",
    description:
      "Desenvolvimento de ambientes residenciais com foco em conforto, estética e funcionalidade.",
  },
  {
    icon: Ruler,
    title: "Detalhamento Técnico",
    description:
      "Detalhamentos construtivos, marcenaria planejada e especificações de materiais.",
  },
  {
    icon: LampDesk,
    title: "Iluminação e Ambientação",
    description:
      "Projetos de iluminação que valorizam cada ambiente com aconchego e personalidade.",
  },
  {
    icon: MonitorUp,
    title: "Modelagem 3D e Renderização",
    description:
      "Visualização realista dos projetos em SketchUp, Lumion, Enscape e 5D Render.",
  },
  {
    icon: Paintbrush,
    title: "Composição de Materiais",
    description:
      "Seleção e harmonização de revestimentos, cores, texturas e acabamentos.",
  },
  {
    icon: PencilRuler,
    title: "Consultoria e Apoio Projetual",
    description:
      "Orientação técnica em todas as etapas, do briefing à execução do projeto.",
  },
];

export const experiences: IllustratedItem[] = [
  {
    icon: Building2,
    title: "Órgãos Públicos",
    description:
      "Atuei com análise e aprovação de projetos arquitetônicos, licenças para construção, regularização, Habite-se e atendimento ao público.",
  },
  {
    icon: DraftingCompass,
    title: "Topografia e Soluções Ambientais",
    description:
      "Trabalhei com transformação de dados de campo em desenhos técnicos, conversão de coordenadas geográficas e elaboração de mapas, plantas e relatórios.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Escritórios de Arquitetura",
    description:
      "Auxiliei na elaboração de projetos arquitetônicos, paisagismo, complementares e detalhamentos de interiores.",
  },
  {
    icon: GraduationCap,
    title: "Marcenaria e Interiores",
    description:
      "Atuei com projetos de interiores, visitas técnicas, medições e encaminhamento de projetos para produção.",
  },
];

export const tools = [
  { icon: PanelsTopLeft, name: "AutoCAD" },
  { icon: Sparkles, name: "SketchUp" },
  { icon: LampDesk, name: "Lumion" },
  { icon: MonitorUp, name: "Enscape" },
  { icon: DraftingCompass, name: "Revit" },
  { icon: PanelsTopLeft, name: "5D Render" },
];

export const softSkills = [
  "Comunicação clara e objetiva",
  "Resolução de problemas",
  "Atendimento e suporte ao público",
  "Atenção aos detalhes",
];

export const processSteps = [
  {
    number: "01",
    title: "Briefing",
    description:
      "Tudo começa com uma conversa atenta sobre suas necessidades, rotina e expectativas. Entender quem você é e como vive é o ponto de partida para um projeto com identidade e propósito.",
  },
  {
    number: "02",
    title: "Estudo e Conceito",
    description:
      "Com base no briefing, desenvolvo referências visuais, paleta de cores, seleção de materiais e o conceito do projeto, traduzindo suas ideias em uma linguagem visual clara e coerente.",
  },
  {
    number: "03",
    title: "Desenvolvimento e Visualização 3D",
    description:
      "O projeto ganha forma com plantas, layouts e imagens realistas em 3D. Você visualiza cada ambiente antes da execução, com todos os detalhes de mobiliário, iluminação e acabamentos.",
  },
  {
    number: "04",
    title: "Detalhamento e Acompanhamento",
    description:
      "Finalizo com detalhamentos técnicos, especificações de materiais e marcenaria planejada, garantindo que cada elemento seja executado com precisão e fidelidade ao projeto.",
  },
];
