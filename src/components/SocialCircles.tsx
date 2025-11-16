"use client";

import { motion } from "framer-motion";
import { Users, Music, ChefHat, Scissors, Building, Heart, Sparkles } from "lucide-react";

const circles = [
  {
    icon: Music,
    name: "Sertanejo Raiz e Histórias",
    members: 247,
    description: "Compartilhe memórias e músicas que marcaram sua vida",
    color: "cerrado",
    active: true,
  },
  {
    icon: ChefHat,
    name: "Receitas da Vovó Goiana",
    members: 189,
    description: "Empadão, pamonha e todos os sabores de Goiás",
    color: "ipe",
    active: true,
  },
  {
    icon: Scissors,
    name: "Artesanato e Bordados",
    members: 156,
    description: "Técnicas tradicionais e criações únicas",
    color: "wisdom",
    active: false,
  },
  {
    icon: Building,
    name: "Memórias de Goiânia Antiga",
    members: 312,
    description: "A história da nossa cidade contada por quem viveu",
    color: "cerrado",
    active: true,
  },
  {
    icon: Heart,
    name: "Dança de Salão 60+",
    members: 98,
    description: "Valsa, bolero e muito mais",
    color: "ipe",
    active: false,
  },
  {
    icon: Sparkles,
    name: "Fé e Espiritualidade",
    members: 234,
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-10 h-10 text-ipe" />
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark">
                Círculos de Sabedoria
              </h2>
            </div>
            <p className="text-xl text-neutral-dark/70 leading-relaxed">
              Conecte-se com pessoas que compartilham seus interesses.
              Grupos seguros, moderados e feitos especialmente para você.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-ipe-light to-ipe rounded-3xl p-8 text-white"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-5xl font-bold mb-2">1.236</p>
                <p className="text-lg opacity-90">Membros ativos</p>
              </div>
              <div className="text-6xl">👥</div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-white/20 rounded-lg p-3">
                <p className="font-bold text-2xl">87%</p>
                <p className="opacity-90">Fizeram amigos</p>
              </div>
              <div className="bg-white/20 rounded-lg p-3">
                <p className="font-bold text-2xl">6+</p>
                <p className="opacity-90">Círculos temáticos</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Circles Grid - Asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {circles.map((circle, index) => {
            const colorClasses = {
              cerrado: "from-cerrado-light to-cerrado bg-cerrado-dark border-cerrado",
              ipe: "from-ipe-light to-ipe bg-ipe-dark border-ipe",
              wisdom: "from-wisdom-light to-wisdom bg-wisdom-dark border-wisdom",
            };

            return (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border-b-4 ${
                    colorClasses[circle.color as keyof typeof colorClasses].split(" ")[3]
                  } group-hover:scale-105`}
                >
                  {/* Header */}
                  <div
                    className={`bg-gradient-to-r ${
                      colorClasses[circle.color as keyof typeof colorClasses].split(" ")[0]
                    } ${colorClasses[circle.color as keyof typeof colorClasses].split(" ")[1]} p-6`}
                  >
                    <div className="flex items-start justify-between">
                      <div
                        className={`w-14 h-14 rounded-2xl ${
                          colorClasses[circle.color as keyof typeof colorClasses].split(" ")[2]
                        } flex items-center justify-center`}
                      >
                        <circle.icon className="w-7 h-7 text-white" />
                      </div>
                      {circle.active && (
                        <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                          Ativo agora
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-neutral-dark mb-2">
                      {circle.name}
                    </h3>
                    <p className="text-neutral-dark/70 mb-4 leading-relaxed">
                      {circle.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-neutral-dark/60">
                        <Users className="w-4 h-4" />
                        <span className="text-sm font-medium">{circle.members} membros</span>
                      </div>
                      <button
                        className={`text-${circle.color}-dark font-medium text-sm hover:underline`}
                      >
                        Participar →
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Safety features */}
        <motion.div
          className="mt-16 bg-neutral-light rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-neutral-dark mb-6 text-center">
            Ambiente Seguro e Acolhedor
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                emoji: "🤖",
                title: "Moderação por IA",
                description: "Filtragem automática de conteúdo inadequado",
              },
              {
                emoji: "👮",
                title: "Moderadores Voluntários",
                description: "Certificados e treinados pelo governo",
              },
              {
                emoji: "🎤",
                title: "Comentários por Voz",
                description: "Transcritos automaticamente para facilitar",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-3">{feature.emoji}</div>
                <h4 className="font-bold text-neutral-dark mb-2">{feature.title}</h4>
                <p className="text-sm text-neutral-dark/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
