import { useParams, Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import ReactMarkdown from 'react-markdown'; // Importamos a nova ferramenta aqui!

const modules = import.meta.glob('../../content/projetos/*.json', { eager: true });

const getSafeImageUrl = (img?: string) => {
  if (!img) return undefined;
  const cleanImg = img.startsWith('/') ? img.substring(1) : img;
  return `${import.meta.env.BASE_URL}${cleanImg}`;
};

export default function ProjectDetails() {
  const { id } = useParams();

  const projectPath = `../../content/projetos/${id}.json`;
  const projectData = modules[projectPath] ? (modules[projectPath] as any).default : null;

  if (!projectData) {
    return <div className="text-center py-20 text-2xl font-bold">Projeto não encontrado!</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1>FUNPAPI</h1>
          <Link to="/" className="hover:opacity-80 transition-opacity">
            &larr; Voltar para Home
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-16 px-6">
        {projectData.image && (
          <ImageWithFallback 
            src={getSafeImageUrl(projectData.image)} 
            alt={projectData.title} 
            className="w-full h-96 object-cover rounded-2xl mb-8 shadow-lg" 
          />
        )}
        <h1 className="text-4xl font-bold mb-8">{projectData.title}</h1>
        
        {/* Renderiza o texto com negrito, itálico, links e listas */}
        <div className="text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap flex flex-col gap-4">
          <ReactMarkdown>{projectData.description}</ReactMarkdown>
        </div>

        {/* Renderiza a Galeria de Imagens apenas se o usuário tiver adicionado fotos */}
        {projectData.gallery && projectData.gallery.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Galeria de Imagens</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {projectData.gallery.map((img: string, index: number) => (
                <div key={index} className="overflow-hidden rounded-xl shadow-md">
                  <ImageWithFallback
                    src={getSafeImageUrl(img)}
                    alt={`Galeria ${index + 1}`}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}