import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';

const modules = import.meta.glob('../../content/projetos/*.json', { eager: true });

const getSafeImageUrl = (img?: string) => {
  if (!img) return undefined;
  const cleanImg = img.startsWith('/') ? img.substring(1) : img;
  return `${import.meta.env.BASE_URL}${cleanImg}`;
};

export default function Projects() {
  // Estado para controlar em que página estamos
  const [currentPage, setCurrentPage] = useState(1);
  
  // Quantidade de cards por página (pode alterar este número!)
  const PROJECTS_PER_PAGE = 6; 

  // Puxa todos os projetos
  const projects = Object.keys(modules).map((path) => {
    const data = (modules[path] as any).default;
    const id = path.split('/').pop()?.replace('.json', ''); 
    return { id, ...data };
  }).sort((a, b) => (a.order ?? 999) - (b.order ?? 999)); 

  // Cálculos matemáticos da paginação
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const indexOfLastProject = currentPage * PROJECTS_PER_PAGE;
  const indexOfFirstProject = indexOfLastProject - PROJECTS_PER_PAGE;
  
  // Fatiar a lista para mostrar apenas os projetos da página atual
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  // Função para mudar de página e rolar a tela suavemente para cima
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projects" className="bg-background py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-12 text-center">Ações e Projetos</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {currentProjects.map((project) => (
            <Link 
              to={`/projeto/${project.id}`} 
              key={project.id} 
              className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer block flex flex-col"
            >
              <div className="h-64 overflow-hidden shrink-0">
                <ImageWithFallback
                  src={getSafeImageUrl(project.image)}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="mb-3">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed line-clamp-3 text-sm flex-grow">
                  {project.short_description}
                </p>
                <span className="text-primary mt-4 inline-block font-medium text-sm">Ver detalhes &rarr;</span>
              </div>
            </Link>
          ))}
        </div>

         {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-16">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md border text-sm font-medium transition-colors ${
                currentPage === 1 
                  ? 'bg-muted text-muted-foreground cursor-not-allowed opacity-50' 
                  : 'bg-background hover:bg-accent hover:text-accent-foreground text-foreground'
              }`}
            >
              &larr; Anterior
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`w-10 h-10 rounded-md border text-sm font-medium transition-colors flex items-center justify-center ${
                    currentPage === index + 1
                      ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                      : 'bg-background hover:bg-accent hover:text-accent-foreground text-foreground'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-md border text-sm font-medium transition-colors ${
                currentPage === totalPages 
                  ? 'bg-muted text-muted-foreground cursor-not-allowed opacity-50' 
                  : 'bg-background hover:bg-accent hover:text-accent-foreground text-foreground'
              }`}
            >
              Próxima &rarr;
            </button>
          </div>
        )}
      </div>
    </section>
  );
}