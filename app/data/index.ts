export const navItems = [
  { name: "Acerca de mi", link: "#about" },
  { name: "Proyectos", link: "#projects" },
  { name: "Testimonios", link: "#testimonials" },
  { name: "Contacto", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Priorizo la colaboración con los clientes, fomentando una comunicación abierta.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Soy muy flexible con la comunicación.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Mi stack",
    description: "Constantemente busco mejorar",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Entusiasta de la tecnología con pasión por el desarrollo.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Actualmente estoy desarrollando un Casino Online",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "¿Te gustaría comenzar un proyecto juntos?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Juegalo - Casino Online",
    des: "Desarrollo de un casino online con tecnologias modernas y escalables.",
    img: "/j1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://juegalo.com",
  },
  {
    id: 2,
    title: "Quantum Foro - Buscador",
    des: "Encuentra los emprendedores recomendados de tu zona.",
    img: "/j2.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://quantumforo.vercel.app",
  },
  {
    id: 3,
    title: "Betnroll - Casino Online",
    des: "Desarrollo de un casino online multiregional con tecnologias modernas y escalables.",
    img: "/j3.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://betnroll.net",
  },
  /*{
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },*/
];

export const testimonials = [
  {
    "quote": "Trabajar con el equipo fue una experiencia increíble. Su profesionalismo, rapidez y compromiso con el éxito de mi tienda virtual superaron mis expectativas. Gracias a ellos, ahora tengo una plataforma eficiente y atractiva para mis clientes.",
    "name": "Héctor Flores",
    "title": "CEO de Mueblería Flores"
  },
  {
    "quote": "Gracias a su apoyo, pude lanzar mi tienda virtual en tiempo récord y con un diseño que realmente refleja mi marca. La atención a los detalles y la capacidad de adaptación del equipo hicieron que todo fuera mucho más sencillo de lo que imaginé.",
    "name": "Camilo José",
    "title": "Fundador de Café Sustentable"
  },
  {
    "quote": "Con su ayuda, logré posicionar mi negocio de forma efectiva en línea. La tienda virtual que crearon no solo es fácil de usar, sino que también ha aumentado mis ventas desde el primer mes. Estoy más que satisfecho.",
    "name": "María González",
    "title": "Dueña de Modas y Estilos"
  },
  {
    "quote": "Elegir sus servicios fue la mejor decisión que pude haber tomado para llevar mi emprendimiento al siguiente nivel. Ahora tengo una tienda en línea que me permite llegar a más clientes y destacar en mi sector.",
    "name": "Luis Martínez",
    "title": "Propietario de Tech Zone"
  }
]


export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Lider Tecnico Frontend - Casino Online Juegalo",
    desc: "Desarrollo de un casino online con tecnologias modernas y escalables.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Desarrollador Full Stack - Sicom",
    desc: "Desarrollo de aplicacion web para la gestion de luminarias publicas con protocolo Talq",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Desarrollador Freelance - Quantum Foro",
    desc: "Desarrollo de aplicacion web para la gestion de busquedas de emprendedores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
