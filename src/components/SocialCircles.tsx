"use client";

import { motion } from "framer-motion";
import { Users, Music, ChefHat, Scissors, Building, Heart, Sparkles } from "lucide-react";

const circles = [
  {
    icon: Music,
    name: "Sertanejo Raiz e Histórias",
    description: "Compartilhe memórias e músicas que marcaram sua vida",
    color: "cerrado",
    active: true,
  },
  {
    icon: ChefHat,
    name: "Receitas da Vovó Goiana",
    description: "Empadão, pamonha e todos os sabores de Goiás",
    color: "ipe",
    active: true,
  },
  {
    icon: Scissors,
    name: "Artesanato e Bordados",
    description: "Técnicas tradicionais e criações únicas",
    color: "wisdom",
    active: false,
  },
  {
    icon: Building,
    name: "Memórias de Goiânia Antiga",
    description: "A história da nossa cidade contada por quem viveu",
    color: "cerrado",
    active: true,
  },
  {
    icon: Heart,
    name: "Dança de Salão 60+",
    description: "Valsa, bolero e muito mais",
    color: "ipe",
    active: false,
  },
  {
    icon: Sparkles,
    name: "Fé e Espiritualidade",
    description: "Reflexões, orações e fortalecimento espiritual",
    color: "wisdom",
    active: true,
  },
];

export default function SocialCircles() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Asymmetric decoration */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/3 bg-gradient-to-b from-cerrado-light/20 to-transparent rounded-b-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header - Asymmetric */}
        <motion.div
          className="mb-16 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-12 h-12 text-ipe" />
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark">
              Círculos de Sabedoria
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-neutral-dark/70 leading-relaxed">
            Conecte-se com pessoas que compartilham seus interesses.
            Grupos seguros, moderados e feitos especialmente para você.
          </p>
        </motion.div>

        {/* Circles Grid - Asymmetric Masonry-like Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {circles.map((circle, index) => {
            const colorClasses = {
              cerrado: "from-cerrado-light to-cerrado bg-cerrado-dark border-cerrado",
              ipe: "from-ipe-light to-ipe bg-ipe-dark border-ipe",
              wisdom: "from-wisdom-light to-wisdom bg-wisdom-dark border-wisdom",
            };

            // Create asymmetric heights for visual interest
            const isLarge = index === 0 || index === 3;
            const heightClass = isLarge ? "md:row-span-2" : "";

            return (
              <motion.div
                key={index}
                className={`group ${heightClass}`}
                initial={{ opacity: 0, y: 30, rotate: index % 2 === 0 ? -2 : 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              >
                <div
                  className={`bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-b-4 ${
                    colorClasses[circle.color as keyof typeof colorClasses].split(" ")[3]
                  } group-hover:scale-[1.03] group-hover:-rotate-1 h-full flex flex-col`}
                >
                  {/* Header */}
                  <div
                    className={`bg-gradient-to-r ${
                      colorClasses[circle.color as keyof typeof colorClasses].split(" ")[0]
                    } ${colorClasses[circle.color as keyof typeof colorClasses].split(" ")[1]} p-6 relative overflow-hidden`}
                  >
                    {/* Decorative circle in background */}
                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full" />

                    <div className="flex items-start justify-between relative z-10">
                      <motion.div
                        className={`w-16 h-16 rounded-2xl ${
                          colorClasses[circle.color as keyof typeof colorClasses].split(" ")[2]
                        } flex items-center justify-center shadow-lg`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <circle.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      {circle.active && (
                        <motion.span
                          className="bg-green-500 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                        >
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                          Ativo agora
                        </motion.span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl md:text-2xl font-bold text-neutral-dark mb-3 leading-tight">
                      {circle.name}
                    </h3>
                    <p className="text-base text-neutral-dark/70 mb-4 leading-relaxed flex-1">
                      {circle.description}
                    </p>

                    <div className="pt-4 border-t border-neutral-100">
                      <motion.button
                        className={`w-full text-${circle.color}-dark font-bold text-base hover:underline flex items-center justify-center gap-2 px-6 py-3 rounded-full hover:bg-neutral-50 transition-colors border-2 border-${circle.color}/20 hover:border-${circle.color}/40`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Participar do Círculo →
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
