import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';

// A mágica do Vite: Puxa todos os arquivos JSON da pasta automaticamente
const modules = import.meta.glob('../content/projetos/*.json', { eager: true });

export default function Projects() {
  // Transforma os arquivos encontrados numa lista (Array) de projetos
  const projects = Object.keys(modules).map((path) => {
    const data = (modules[path] as any).default;
    const id = path.split('/').pop()?.replace('.json', ''); // O ID será o nome do arquivo
    return { id, ...data };
  });

  return (
    <section id="projects" className="bg-background py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-12 text-center">Ações e Projetos</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link 
              to={`/projeto/${project.id}`} 
              key={project.id} 
              className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer block"
            >
              <div className="h-64 overflow-hidden">
                <ImageWithFallback
                  // O BASE_URL garante que o link funcione no GitHub Pages
                  src={project.image ? `${import.meta.env.BASE_URL}${project.image}` : undefined}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-3">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <span className="text-primary mt-4 inline-block font-medium">Ver detalhes &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}