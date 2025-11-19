"use client";

import { motion } from "framer-motion";
import { Calendar, Baby, GraduationCap, Heart as HeartIcon, Briefcase, Star } from "lucide-react";

const timelineEvents = [
  {
    icon: Baby,
    period: "Infância",
    year: "1955-1965",
    title: "Crescendo em Pirenópolis",
    description: "As brincadeiras na praça, o cheiro de pequi, as festas juninas...",
    color: "cerrado",
  },
  {
    icon: GraduationCap,
    period: "Juventude",
    year: "1970-1980",
    title: "Estudos em Goiânia",
    description: "A mudança para capital, os amigos do colégio, os bailes...",
    color: "ipe",
  },
  {
    icon: HeartIcon,
    period: "Família",
    year: "1975",
    title: "Casamento e filhos",
    description: "O grande amor, a construção de uma família, as alegrias...",
    color: "wisdom",
  },
  {
    icon: Briefcase,
    period: "Trabalho",
    year: "1980-2015",
    title: "Carreira profissional",
    description: "Os desafios, as conquistas, os colegas que viraram amigos...",
    color: "ipe",
  },
  {
    icon: Star,
    period: "Hoje",
    year: "2025",
    title: "Nova fase da vida",
    description: "Compartilhando sabedoria, fazendo novos amigos, vivendo plenamente...",
    color: "cerrado",
  },
];

export default function MemoryTimeline() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-white via-cerrado-light/10 to-white relative overflow-hidden">
      {/* Asymmetric decorative elements - Enhanced */}
      <div className="absolute top-20 right-0 w-1/2 h-96 bg-gradient-to-l from-wisdom-light/20 to-transparent rounded-l-full" />
      <div className="absolute bottom-0 left-0 w-2/5 h-80 bg-gradient-to-tr from-cerrado-light/15 to-transparent rounded-tr-[200px]" />
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-ipe/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Asymmetric header - not centered */}
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-10 h-10 text-wisdom" />
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark">
                Sua História, Seu Legado
              </h2>
            </div>
            <p className="text-xl text-neutral-dark/70 ml-13">
              Grave suas memórias por voz e veja sua vida se transformar em um
              livro digital interativo, organizado por IA.
            </p>
          </div>
        </motion.div>

        {/* Timeline - Asymmetric layout */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cerrado via-ipe to-wisdom transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const isEven = index % 2 === 0;
              const colorClasses = {
                cerrado: "bg-cerrado text-cerrado-dark border-cerrado",
                ipe: "bg-ipe text-ipe-dark border-ipe",
                wisdom: "bg-wisdom text-wisdom-dark border-wisdom",
              };

              return (
                <motion.div
                  key={index}
                  className={`relative flex items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ${isEven ? "md:text-right" : "md:text-left"} ml-16 md:ml-0`}>
                    <div
                      className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-l-4 ${
                        colorClasses[event.color as keyof typeof colorClasses].split(" ")[2]
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            colorClasses[event.color as keyof typeof colorClasses].split(" ")[0]
                          }/20 ${colorClasses[event.color as keyof typeof colorClasses].split(" ")[1]}`}
                        >
                          {event.period}
                        </span>
                        <span className="text-sm text-neutral-dark/50">{event.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-neutral-dark mb-2">
                        {event.title}
                      </h3>
                      <p className="text-neutral-dark/70">{event.description}</p>
                    </div>
                  </div>

                  {/* Icon in center */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2">
                    <div
                      className={`w-16 h-16 rounded-full ${
                        colorClasses[event.color as keyof typeof colorClasses].split(" ")[0]
                      } flex items-center justify-center shadow-lg border-4 border-white`}
                    >
                      <event.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Empty space for other side */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Audio recording demo */}
        <motion.div
          className="mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-cerrado-light to-wisdom-light rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-neutral-dark mb-4">
                  Grave suas histórias com um toque
                </h3>
                <p className="text-lg text-neutral-dark/80 mb-6">
                  Basta apertar o botão e falar. A IA organiza tudo para você,
                  criando capítulos automáticos e até ilustrações baseadas em suas descrições.
                </p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-ipe rounded-full" />
                    <span className="text-sm">Voz natural</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-wisdom rounded-full" />
                    <span className="text-sm">IA organiza</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-cerrado rounded-full" />
                    <span className="text-sm">Livro digital</span>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0">
                <button className="w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center group hover:scale-110 transition-transform">
                  <div className="w-20 h-20 bg-gradient-to-br from-ipe to-ipe-dark rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full animate-pulse" />
                  </div>
                </button>
                <p className="text-center mt-4 font-medium text-neutral-dark">
                  Toque para gravar
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
