import Link from "next/link";
import { ArrowLeft, Code, Heart, Users } from "lucide-react";

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-ipe-light/30 via-white to-cerrado-light/30 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-br from-ipe to-ipe-dark rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Heart className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-5xl font-bold text-neutral-dark mb-6">
              Sobre o Projeto
            </h1>

            <p className="text-xl text-neutral-dark/70 max-w-3xl mx-auto">
              Memória Viva+ é uma solução de tecnologia afetiva desenvolvida para o
              Ideathon Campus Party Goiás 2025 - Desafio 1
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-3xl p-12 shadow-xl mb-8">
            <h2 className="text-3xl font-bold text-neutral-dark mb-6">Nossa Missão</h2>
            <p className="text-lg text-neutral-dark/80 leading-relaxed mb-6">
              Ampliar o bem-estar mental e social do público 60+, fortalecendo sua
              autonomia e participação ativa na sociedade através de uma plataforma
              digital que combina inteligência artificial, conexões sociais genuínas
              e integração com serviços públicos de Goiás.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-ipe mb-2">40%</div>
                <p className="text-sm text-neutral-dark/70">Redução da solidão</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-ipe mb-2">60%</div>
                <p className="text-sm text-neutral-dark/70">
                  Participação comunitária
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-ipe mb-2">10 mil</div>
                <p className="text-sm text-neutral-dark/70">Idosos incluídos/ano</p>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="bg-gradient-to-br from-cerrado-light to-cerrado/30 rounded-3xl p-12 mb-8">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <Code className="w-8 h-8 text-cerrado-dark" />
              <h3 className="text-3xl font-bold text-neutral-dark">
                Stack Tecnológica
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <p className="font-medium text-neutral-dark">Next.js 15</p>
                <p className="text-sm text-neutral-dark/60">Framework React</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <p className="font-medium text-neutral-dark">TypeScript</p>
                <p className="text-sm text-neutral-dark/60">Tipagem estática</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <p className="font-medium text-neutral-dark">Tailwind CSS v4</p>
                <p className="text-sm text-neutral-dark/60">Estilização</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <p className="font-medium text-neutral-dark">Framer Motion</p>
                <p className="text-sm text-neutral-dark/60">Animações</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <p className="font-medium text-neutral-dark">Lucide React</p>
                <p className="text-sm text-neutral-dark/60">Ícones</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <p className="font-medium text-neutral-dark">IA (futuro)</p>
                <p className="text-sm text-neutral-dark/60">Conversacional</p>
              </div>
            </div>
          </div>

          {/* Team */}
          <div className="bg-white rounded-3xl p-12 shadow-xl mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-ipe" />
              <h2 className="text-3xl font-bold text-neutral-dark">Desenvolvedores</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Nicollas Rezende */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-ipe to-ipe-dark rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                  NR
                </div>
                <h3 className="text-lg font-bold text-neutral-dark mb-1 break-words">
                  Nicollas Rezende
                </h3>
                <p className="text-neutral-dark/70 text-sm">
                  Desenvolvedor Full Stack
                </p>
              </div>

              {/* Isadora Bittencourt */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cerrado to-cerrado-dark rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                  IB
                </div>
                <h3 className="text-lg font-bold text-neutral-dark mb-1 break-words px-2">
                  Isadora Bittencourt
                </h3>
                <p className="text-neutral-dark/70 text-sm">
                  Desenvolvedora
                </p>
              </div>

              {/* Eder Veloso */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-wisdom to-wisdom-dark rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                  EV
                </div>
                <h3 className="text-lg font-bold text-neutral-dark mb-1 break-words">
                  Eder Veloso
                </h3>
                <p className="text-neutral-dark/70 text-sm">
                  Desenvolvedor
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-ipe to-ipe-dark text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg"
            >
              <ArrowLeft className="w-5 h-5" />
              Voltar ao Início
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
