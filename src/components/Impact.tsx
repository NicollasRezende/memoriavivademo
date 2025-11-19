"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Heart, Award, MapPin, Sparkles } from "lucide-react";

const impactStats = [
  {
    number: "10.000",
    label: "Idosos Incluídos",
    sublabel: "Meta para o 1º ano",
    icon: Users,
    color: "ipe",
  },
  {
    number: "40%",
    label: "Redução na Solidão",
    sublabel: "Índices de bem-estar",
    icon: Heart,
    color: "cerrado",
  },
  {
    number: "60%",
    label: "Mais Participação",
    sublabel: "Em atividades comunitárias",
    icon: TrendingUp,
    color: "wisdom",
  },
  {
    number: "550mil",
    label: "Idosos em Goiânia",
    sublabel: "Público potencial",
    icon: MapPin,
    color: "ipe",
  },
];

const highlights = [
  {
    title: "Integração Territorial",
    description: "Conectado aos serviços públicos de Goiás: Goiás Social, CRAS, Centros de Convivência",
    icon: MapPin,
  },
  {
    title: "Tecnologia Afetiva",
    description: "IA que aprende e respeita o ritmo de cada pessoa, sem infantilização",
    icon: Heart,
  },
  {
    title: "100% Acessível",
    description: "Controle por voz, letras grandes, interface simplificada para 60+",
    icon: Users,
  },
];

export default function Impact() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-white via-neutral-light to-wisdom-light/30 relative overflow-hidden">
      {/* Asymmetric Background Shapes */}
      <div className="absolute top-0 left-0 w-2/3 h-1/2 bg-gradient-to-br from-ipe/10 to-transparent rounded-br-[300px] -z-10" />
      <div className="absolute bottom-0 right-0 w-1/2 h-2/3 bg-gradient-to-tl from-cerrado/10 to-transparent rounded-tl-[250px] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-wisdom/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header - Asymmetric placement */}
        <motion.div
          className="mb-16 max-w-4xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-ipe to-ipe-dark rounded-2xl flex items-center justify-center shadow-lg">
              <Award className="w-9 h-9 text-white" />
            </div>
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-neutral-dark leading-tight">
                Impacto Real,
                <br />
                <span className="text-ipe-dark">Transformação Social</span>
              </h2>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-neutral-dark/70 leading-relaxed">
            Mais que tecnologia: um movimento de inclusão digital e bem-estar para Goiás
          </p>
        </motion.div>

        {/* Stats Grid - Asymmetric Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {impactStats.map((stat, index) => {
            const colorClasses = {
              cerrado: {
                bg: "from-cerrado-light to-cerrado",
                icon: "bg-cerrado-dark",
                text: "text-cerrado-dark",
              },
              ipe: {
                bg: "from-ipe-light to-ipe",
                icon: "bg-ipe-dark",
                text: "text-ipe-dark",
              },
              wisdom: {
                bg: "from-wisdom-light to-wisdom",
                icon: "bg-wisdom-dark",
                text: "text-wisdom-dark",
              },
            };

            const colors = colorClasses[stat.color as keyof typeof colorClasses];
            const isLarge = index === 0;

            return (
              <motion.div
                key={index}
                className={`${isLarge ? "md:col-span-2" : ""}`}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
              >
                <div
                  className={`bg-gradient-to-br ${colors.bg} rounded-3xl p-8 md:p-10 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 h-full flex flex-col justify-between min-h-[220px] relative overflow-hidden group`}
                >
                  {/* Decorative elements */}
                  <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
                  <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full group-hover:scale-125 transition-transform duration-700" />

                  <div className="relative z-10">
                    <motion.div
                      className={`w-14 h-14 ${colors.icon} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <stat.icon className="w-7 h-7 text-white" />
                    </motion.div>

                    <div className="mb-2">
                      <motion.p
                        className={`${isLarge ? "text-6xl md:text-7xl" : "text-5xl md:text-6xl"} font-bold mb-2`}
                        initial={{ scale: 0.5 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                      >
                        {stat.number}
                      </motion.p>
                      <p className="text-xl md:text-2xl font-semibold opacity-95">{stat.label}</p>
                    </div>

                    <p className="text-sm md:text-base opacity-80">{stat.sublabel}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Highlights - Asymmetric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, rotate: index % 2 === 0 ? -3 : 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 80 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-neutral-100 hover:border-ipe-light group h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-ipe-light to-ipe rounded-2xl flex items-center justify-center mb-5 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <highlight.icon className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-dark mb-4 leading-tight">
                  {highlight.title}
                </h3>
                <p className="text-base text-neutral-dark/70 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section - Asymmetric */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative bg-gradient-to-r from-ipe via-ipe-dark to-wisdom rounded-[3rem] p-12 md:p-16 overflow-hidden shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cerrado/20 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <motion.div
                className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <Sparkles className="w-6 h-6 text-cerrado-light" />
                <span className="text-white font-medium text-lg">Campus GO - Challenge 1</span>
              </motion.div>

              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Transformando o envelhecimento em Goiás
              </h3>

              <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                Uma solução que une tecnologia afetiva, conexões sociais e serviços públicos
                para ampliar o bem-estar e a autonomia de pessoas 60+
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  className="bg-white text-ipe-dark px-10 py-5 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl hover:bg-cerrado hover:text-white transition-all"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Conhecer o Projeto Completo
                </motion.button>

                <motion.button
                  className="bg-transparent border-3 border-white text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white hover:text-ipe-dark transition-all"
                  whileHover={{ scale: 1.05, y: -5 }}
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
