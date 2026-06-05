import { useParams, Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Importamos as imagens com ?url igual fizemos antes
import img1 from '../imports/Sunrise_over_Bali_Jungle.jpg?url';
import img2 from '../imports/Lush_Green_Plants_Thriving_in_a_Greenhouse_Bathed_in_Sunlight_Showing_Vibrant_Foliage_and_Water_Droplets.jpg?url';
import img3 from '../imports/View_of_the_Nature_of_Moldova.jpg?url';

export default function ProjectDetails() {
  // O useParams pega o ID do projeto que está na URL (ex: /projeto/1)
  const { id } = useParams();

  // Esta é a mesma lista do Projects.tsx (por enquanto).
  const projects = [
    { id: 1, title: "LOREM IPSUM 1", description: "Descrição completa do projeto 1...", image: img1 },
    { id: 2, title: "LOREM IPSUM 2", description: "Descrição completa do projeto 2...", image: img2 },
    { id: 3, title: "LOREM IPSUM 3", description: "Descrição completa do projeto 3...", image: img3 }
  ];

  // Procura o projeto pelo ID
  const project = projects.find(p => p.id === parseInt(id || "1"));

  if (!project) return <div className="text-center py-20">Projeto não encontrado!</div>;

  return (
    <div className="min-h-screen bg-background">
      {/* Um cabeçalho simples para poder voltar */}
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1>FUNPAPI</h1>
          <Link to="/" className="hover:opacity-80 transition-opacity">
            &larr; Voltar para Home
          </Link>
        </div>
      </header>

      {/* O conteúdo do projeto */}
      <main className="max-w-4xl mx-auto py-16 px-6">
        <ImageWithFallback 
          src={project.image} 
          alt={project.title} 
          className="w-full h-96 object-cover rounded-2xl mb-8 shadow-lg" 
        />
        <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {project.description}
          <br /><br />
          Aqui você poderá colocar textos gigantes, mais fotos, resultados alcançados pelo projeto e muito mais. 
          Cada projeto terá uma página igual a esta, preenchida dinamicamente!
        </p>
      </main>
    </div>
  );
}