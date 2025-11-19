"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Bot, Map, Mic, Heart, ArrowRight, Sparkles } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Memória Viva",
    description: "Grave suas histórias por voz e crie seu Livro da Vida digital com IA",
    color: "cerrado",
    size: "large", // 2x2
    highlight: true,
  },
  {
    icon: Bot,
    title: "Pequi",
    description: "Companheiro digital que aprende com você e oferece suporte emocional",
    color: "wisdom",
    size: "medium", // 2x2
    highlight: true,
  },
  {
    icon: Users,
    title: "Círculos de Sabedoria",
    description: "Conecte-se com pessoas que compartilham seus interesses",
    color: "ipe",
    size: "medium", // 2x1
  },
  {
    icon: Map,
    title: "Mapa de Eventos",
    description: "Descubra atividades perto de você em Goiás",
    color: "ipe",
    size: "small", // 1x1
  },
  {
    icon: Mic,
    title: "Controle por Voz",
    description: "Navegue inteiramente por comandos de voz, sem complexidade",
    color: "cerrado",
    size: "small", // 1x1
  },
  {
    icon: Heart,
    title: "Bem-Estar Mental",
    description: "Check-ins emocionais e acompanhamento do seu humor",
    color: "wisdom",
    size: "medium", // 1x1
  },
];

export default function Features() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-neutral-light via-white to-cerrado-light/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-ipe-light/10 to-transparent opacity-50" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-wisdom-light/10 to-transparent opacity-50" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-dark mb-4 leading-tight">
            Funcionalidades <span className="text-ipe-dark">Principais</span>
          </h2>
          <p className="text-base md:text-lg text-neutral-dark/80 max-w-2xl mx-auto leading-relaxed">
            Um ecossistema completo de tecnologia afetiva para o bem-estar de pessoas 60+
          </p>
        </motion.div>

        {/* Bento Grid - Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 auto-rows-[minmax(220px,auto)]">
          {features.map((feature, index) => {
            const colorClasses = {
              cerrado: {
                icon: "from-cerrado-light to-cerrado",
                bg: "from-cerrado-light/20 to-cerrado/10",
                text: "text-cerrado-dark",
                hover: "hover:text-cerrado",
                border: "border-cerrado/20",
              },
              ipe: {
                icon: "from-ipe-light to-ipe",
                bg: "from-ipe-light/20 to-ipe/10",
                text: "text-ipe-dark",
                hover: "hover:text-ipe",
                border: "border-ipe/20",
              },
              wisdom: {
                icon: "from-wisdom-light to-wisdom",
                bg: "from-wisdom-light/20 to-wisdom/10",
                text: "text-wisdom-dark",
                hover: "hover:text-wisdom",
                border: "border-wisdom/20",
              },
            };

            const colors = colorClasses[feature.color as keyof typeof colorClasses];

            // Define grid spans for bento layout
            const sizeClasses = {
              large: "md:col-span-2 md:row-span-2",
              medium: "md:col-span-2 md:row-span-1",
              small: "md:col-span-1 md:row-span-1",
            };

            const gridClass = sizeClasses[feature.size as keyof typeof sizeClasses] || "";

            return (
              <motion.div
                key={index}
                className={`group ${gridClass}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                <div className={`bg-white rounded-3xl ${feature.size === 'large' ? 'p-6 md:p-8' : 'p-5 md:p-6'} shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col border-2 ${colors.border} hover:border-opacity-50 ${feature.highlight ? `bg-gradient-to-br ${colors.bg}` : ''} group-hover:scale-[1.02]`}>
                  <div className="mb-auto">
                    <div
                      className={`${feature.size === 'large' ? 'w-16 h-16' : 'w-12 h-12'} rounded-2xl bg-gradient-to-br ${colors.icon} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                    >
                      <feature.icon className={`${feature.size === 'large' ? 'w-8 h-8' : 'w-6 h-6'} text-white`} />
                    </div>

                    <h3 className={`${feature.size === 'large' ? 'text-2xl md:text-3xl' : feature.size === 'medium' ? 'text-lg md:text-xl' : 'text-base md:text-lg'} font-bold text-neutral-dark mb-2 leading-tight`}>
                      {feature.title}
                    </h3>

                    <p className={`${feature.size === 'large' ? 'text-base md:text-lg' : 'text-sm md:text-base'} text-neutral-dark/75 leading-relaxed`}>
                      {feature.description}
                    </p>
                  </div>

                  {feature.highlight && (
                    <div className="mt-6 pt-5 border-t border-neutral-200">
                      <button
                        className={`${colors.text} ${colors.hover} font-bold flex items-center gap-2 text-base group/btn transition-all`}
                      >
                        Explorar
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-16 md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gradient-to-br from-ipe via-ipe-dark to-wisdom rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cerrado/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-wisdom-light/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 text-center text-white">
              <motion.div
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full mb-6"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <Sparkles className="w-5 h-5" />
                <span className="font-medium">Campus GO - Challenge 1</span>
              </motion.div>

              <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Tecnologia que <span className="text-cerrado-light">transforma vidas</span>
              </h3>

              <p className="text-lg md:text-xl mb-8 opacity-95 max-w-3xl mx-auto leading-relaxed">
                Ampliando autonomia, bem-estar mental e inclusão social para pessoas 60+ em todo Goiás
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  className="bg-white text-ipe-dark px-8 py-4 rounded-full text-lg font-bold hover:bg-cerrado hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Conhecer Mais
                </motion.button>

                <motion.button
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-ipe-dark transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver Demonstração
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
