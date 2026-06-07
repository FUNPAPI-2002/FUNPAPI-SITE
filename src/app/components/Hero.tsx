import { ImageWithFallback } from './figma/ImageWithFallback';
import heroImg from "../../imports/bb2b3e_8c1e90cc3c3b469c8a00abc7dedade5f_mv2.jpg";

export default function Hero() {
  return (
    <section id="home" className="bg-secondary py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6">FUNPAPI</h2>
            <p className="text-foreground leading-relaxed mb-4">
              A Fundação de proteção ao meio Ambiente e Ecoturismo do Estado do Piauí – Funpapi foi constituída em 2002 com atuação há 18 anos. É uma entidade sem fins lucrativos, de direito privado, reconhecida pelo Município de Teresina como de Utilidade Pública através da Lei nº 3579 de 20/11/2006. A Fundação é formada por sócio-fundadores, colaboradores e parceiros, constituindo equipes multiprofissionais que atuam nas áreas de agronomia, jornalismo, administração, direito, biologia, economia, assistência social e pedagogia dentro de uma perspectiva interdisciplinar, visando a complementariedade do saber.
            </p>
            <p className="text-foreground leading-relaxed">
              A ONG atua em diversas frentes de trabalho, ciente de que essa atuação exige uma perspectiva interdisciplinar para garantir um futuro melhor a quem necessita.
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
