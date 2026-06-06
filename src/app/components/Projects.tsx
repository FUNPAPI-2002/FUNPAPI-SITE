import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';

const modules = import.meta.glob('../../content/projetos/*.json', { eager: true });

const getSafeImageUrl = (img?: string) => {
  if (!img) return undefined;
  const cleanImg = img.startsWith('/') ? img.substring(1) : img;
  return `${import.meta.env.BASE_URL}${cleanImg}`;
};

export default function Projects() {
  const projects = Object.keys(modules).map((path) => {
    const data = (modules[path] as any).default;
    const id = path.split('/').pop()?.replace('.json', ''); 
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
                  src={getSafeImageUrl(project.image)}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-3">{project.title}</h3>
                
                {/* Aqui agora puxamos o resumo dedicado que você vai preencher no painel! */}
                <p className="text-muted-foreground leading-relaxed line-clamp-3 text-sm">
                  {project.short_description}
                </p>
                
                <span className="text-primary mt-4 inline-block font-medium text-sm">Ver detalhes &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}