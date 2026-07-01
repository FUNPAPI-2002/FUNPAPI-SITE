import { ImageWithFallback } from './figma/ImageWithFallback';
import heroImg from "../../imports/bb2b3e_8c1e90cc3c3b469c8a00abc7dedade5f_mv2.jpg";

export default function Hero() {
  return (
    <section id="home" className="bg-secondary py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6">QUEM SOMOS</h2>
            
            <p className="text-foreground leading-relaxed mb-4 text-justify">
              A Fundação de Proteção ao Meio Ambiente e Ecoturismo do Estado do Piauí - FUNPAPI foi constituída em 2002, é uma entidade filantrópica, reconhecida pelo Município de Teresina como de Utilidade Pública através da Lei nº 3579 de 20/11/2006 e pelo estado do Piauí através da Lei nº 7.756 de 21/03/2022.
            </p>
            
            <p className="text-foreground leading-relaxed mb-4 text-justify">
              A Fundação é formada por sócios fundadores, colaboradores e parceiros, constituindo equipes multiprofissionais que atuam nas áreas de agronomia, jornalismo, administração, direito, biologia, economia, assistência social e pedagogia dentro de uma perspectiva interdisciplinar, visando a complementariedade do saber.
            </p>
            
            <p className="text-foreground leading-relaxed text-justify">
              A Funpapi desenvolve atividades relativas à formulação, coordenação e articulação para proteção do meio ambiente, objetivando promover o desenvolvimento regional através do uso autossustentável dos recursos naturais, bem como a defesa dos interesses difusos e do meio ambiente, visando o máximo benefício para as atuais e futuras gerações.
            </p>
            
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <ImageWithFallback
              src={heroImg}
              alt="FUNPAPI - Proteção ambiental"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}