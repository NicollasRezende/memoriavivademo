"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Bot, Map, Mic, Heart } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Memória Viva",
    description: "Grave suas histórias por voz e crie seu Livro da Vida digital com IA",
    color: "cerrado",
    size: "large",
  },
  {
    icon: Users,
    title: "Círculos de Sabedoria",
    description: "Conecte-se com pessoas que compartilham seus interesses",
    color: "ipe",
    size: "medium",
  },
  {
    icon: Bot,
    title: "IA Acolhe",
    description: "Companheiro digital que aprende com você e oferece suporte emocional",
    color: "wisdom",
    size: "large",
  },
  {
    icon: Map,
    title: "Mapa de Eventos",
    description: "Descubra atividades e eventos perto de você em Goiás",
    color: "ipe",
    size: "medium",
  },
  {
    icon: Mic,
    title: "Controle por Voz",
    description: "Navegue inteiramente por comandos de voz, sem complexidade",
    color: "cerrado",
    size: "small",
  },
  {
    icon: Heart,
    title: "Bem-Estar Mental",
    description: "Check-ins emocionais e acompanhamento do seu humor",
    color: "wisdom",
    size: "small",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-neutral-light relative overflow-hidden">
      {/* Asymmetric background decoration */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-ipe-light/10 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-4">
            Funcionalidades Principais
          </h2>
          <p className="text-xl text-neutral-dark/70 max-w-2xl mx-auto">
            Um ecossistema completo de tecnologia afetiva para o bem-estar de pessoas 60+
          </p>
        </motion.div>

        {/* Asymmetric Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const colorClasses = {
              cerrado: "from-cerrado-light to-cerrado bg-cerrado-dark",
              ipe: "from-ipe-light to-ipe bg-ipe-dark",
              wisdom: "from-wisdom-light to-wisdom bg-wisdom-dark",
            };

            const sizeClasses = {
              large: "md:col-span-2 md:row-span-2",
              medium: "md:col-span-1 md:row-span-2",
              small: "md:col-span-1 md:row-span-1",
            };

            return (
              <motion.div
                key={index}
                className={`${sizeClasses[feature.size as keyof typeof sizeClasses]} group`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between group-hover:scale-105">
                  <div>
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClasses[feature.color as keyof typeof colorClasses].split(" ")[0]} ${colorClasses[feature.color as keyof typeof colorClasses].split(" ")[1]} flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-neutral-dark mb-3">
                      {feature.title}
                    </h3>

                    <p className="text-neutral-dark/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {feature.size === "large" && (
                    <div className="mt-6">
                      <button
                        className={`text-${feature.color}-dark font-medium flex items-center gap-2 group-hover:gap-3 transition-all`}
                      >
                        Saiba mais
                        <span>→</span>
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-ipe to-ipe-dark text-white rounded-3xl p-12 shadow-xl">
            <h3 className="text-3xl font-bold mb-4">
              Pronto para transformar o envelhecimento em Goiás?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              10.000 idosos incluídos digitalmente no primeiro ano
            </p>
            <button className="bg-white text-ipe px-8 py-4 rounded-full text-lg font-medium hover:bg-cerrado hover:text-white transition-colors shadow-lg">
              Participar do Projeto
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
