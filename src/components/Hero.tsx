"use client";

import { motion } from "framer-motion";
import { Heart, Users, Sparkles, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-cerrado-light via-white to-wisdom-light">
      {/* Asymmetric Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-ipe-light/20 rounded-bl-[200px] -z-10" />
      <div className="absolute bottom-0 left-0 w-2/3 h-1/3 bg-cerrado/10 rounded-tr-[150px] -z-10" />

      <div className="container mx-auto px-4 py-20">
        {/* Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[80vh]">

          {/* Left Column - Main Content (Larger, Asymmetric) */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <motion.div
                className="inline-block mb-4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="bg-wisdom-light/30 text-wisdom-dark px-6 py-2 rounded-full text-sm font-medium">
                  Tecnologia Afetiva para 60+
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold text-neutral-dark leading-tight">
                <span className="text-ipe-dark">Memória Viva</span>
                <span className="text-cerrado-dark">+</span>
              </h1>

              <p className="text-2xl md:text-3xl text-wisdom mt-4 font-medium">
                Sua história merece ser contada.
                <br />
                Sua voz merece ser ouvida.
              </p>
            </div>

            <p className="text-lg md:text-xl text-neutral-dark/80 max-w-2xl leading-relaxed">
              Uma plataforma digital que combina inteligência artificial,
              conexões sociais e serviços públicos de Goiás para ampliar
              o bem-estar mental e a inclusão social de pessoas 60+.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="bg-ipe text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:bg-ipe-dark transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Conhecer a Plataforma
              </motion.button>

              <motion.button
                className="bg-white text-ipe border-2 border-ipe px-8 py-4 rounded-full text-lg font-medium hover:bg-ipe/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Demonstração
              </motion.button>
            </div>

            {/* Stats - Asymmetric placement */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {[
                { icon: Heart, value: "40%", label: "Redução solidão" },
                { icon: Users, value: "60%", label: "Participação social" },
                { icon: Sparkles, value: "50%", label: "Bem-estar mental" },
                { icon: MapPin, value: "10mil", label: "Idosos incluídos" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-wisdom" />
                  <div className="text-2xl font-bold text-ipe-dark">{stat.value}</div>
                  <div className="text-sm text-neutral-dark/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Visual Element (Smaller, Offset) */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Mascot Placeholder - Sabichão */}
              <div className="aspect-square bg-gradient-to-br from-cerrado to-cerrado-dark rounded-3xl shadow-2xl p-8 flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="text-center text-white space-y-4">
                  <div className="text-8xl">🥭</div>
                  <p className="text-2xl font-bold">Sabichão</p>
                  <p className="text-sm opacity-90">Seu companheiro digital</p>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-ipe-light rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-ipe-dark" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-dark">Acolhe IA</p>
                    <p className="text-xs text-neutral-dark/60">Sempre ao seu lado</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-wisdom-light rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-wisdom-dark" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-dark">Círculos</p>
                    <p className="text-xs text-neutral-dark/60">Conecte-se</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
