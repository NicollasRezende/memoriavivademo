"use client";

import { motion } from "framer-motion";
import { Heart, Users, Sparkles, MapPin, Mic, Brain } from "lucide-react";
import PequiIcon from "./PequiIcon";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-cerrado-light via-white to-wisdom-light">
      {/* Asymmetric Background Elements - More Dynamic */}
      <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-bl from-ipe-light/30 via-ipe/10 to-transparent rounded-bl-[300px] -z-10" />
      <div className="absolute bottom-0 left-0 w-3/4 h-1/2 bg-gradient-to-tr from-cerrado/20 via-wisdom-light/10 to-transparent rounded-tr-[250px] -z-10" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-wisdom/5 rounded-full blur-3xl -z-10" />

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
              <motion.a
                href="/sobre"
                className="bg-ipe text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:bg-ipe-dark transition-colors text-center inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Conhecer a Plataforma
              </motion.a>

              <motion.a
                href="/demo"
                className="bg-white text-ipe border-2 border-ipe px-8 py-4 rounded-full text-lg font-medium hover:bg-ipe/10 transition-colors text-center inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Demonstração
              </motion.a>
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
              {/* Mascot Card - Pequi - Larger and More Dynamic */}
              <div className="aspect-square bg-gradient-to-br from-cerrado via-cerrado-dark to-cerrado rounded-[2.5rem] shadow-2xl p-6 md:p-10 flex items-center justify-center transform rotate-2 hover:rotate-0 transition-all duration-500 hover:shadow-3xl hover:scale-105 border-4 border-white/20">
                <div className="text-center text-white space-y-5 w-full">
                  {/* Imagem do Pequi - maior e sem fundo */}
                  <div className="flex justify-center mb-2">
                    <motion.div
                      style={{
                        backgroundColor: 'transparent',
                        background: 'transparent'
                      }}
                      animate={{
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 4,
                        ease: "easeInOut"
                      }}
                    >
                      <PequiIcon
                        size={140}
                        className="drop-shadow-2xl"
                      />
                    </motion.div>
                  </div>

                  {/* Nome */}
                  <div>
                    <p className="text-4xl md:text-5xl font-bold tracking-tight">Pequi</p>
                  </div>

                  {/* Tagline */}
                  <div>
                    <p className="text-base md:text-lg opacity-90 font-medium">Seu companheiro digital</p>
                  </div>
                </div>
              </div>

              {/* Floating Cards - More Dynamic and Varied */}
              <motion.div
                className="absolute -top-8 -left-8 bg-white p-5 rounded-2xl shadow-xl border-2 border-ipe-light/30 backdrop-blur-sm"
                animate={{
                  y: [0, -15, 0],
                  rotate: [-2, 2, -2]
                }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-ipe-light to-ipe rounded-2xl flex items-center justify-center shadow-md">
                    <Mic className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-neutral-dark">Comando de Voz</p>
                    <p className="text-xs text-neutral-dark/60">100% acessível</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -right-8 bg-white p-5 rounded-2xl shadow-xl border-2 border-wisdom-light/30 backdrop-blur-sm"
                animate={{
                  y: [0, 15, 0],
                  rotate: [2, -2, 2]
                }}
                transition={{ repeat: Infinity, duration: 4.5, delay: 1, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-wisdom-light to-wisdom rounded-2xl flex items-center justify-center shadow-md">
                    <Brain className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-neutral-dark">IA Afetiva</p>
                    <p className="text-xs text-neutral-dark/60">Aprende com você</p>
                  </div>
                </div>
              </motion.div>

              {/* Additional small floating element */}
              <motion.div
                className="absolute top-1/2 -left-6 bg-gradient-to-r from-cerrado to-cerrado-dark p-3 rounded-xl shadow-lg"
                animate={{
                  x: [0, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ repeat: Infinity, duration: 3.5, delay: 0.5 }}
              >
                <Heart className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
