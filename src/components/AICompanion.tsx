"use client";

import { motion } from "framer-motion";
import { MessageCircle, Sun, Moon, Music, Calendar as CalendarIcon, Heart } from "lucide-react";
import { useState } from "react";

const conversationExamples = [
  {
    time: "08:00",
    message: "Bom dia, Dona Maria! Dormiu bem? Hoje é quarta-feira, dia da sua caminhada no Parque Vaca Brava com as amigas.",
    type: "morning",
  },
  {
    time: "14:30",
    message: "Percebi que você está quietinha hoje. Quer conversar? Ou prefere ouvir aquela história linda da sua infância em Pirenópolis?",
    type: "check-in",
  },
  {
    time: "20:00",
    message: "Que tal relaxar com aquela música sertaneja que você adora? Depois podemos fazer uma reflexão positiva do dia.",
    type: "evening",
  },
];

export default function AICompanion() {
  const [currentMessage, setCurrentMessage] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-br from-wisdom-light/30 via-white to-cerrado-light/30 relative overflow-hidden">
      {/* Asymmetric decoration */}
      <div className="absolute bottom-0 right-0 w-2/3 h-1/2 bg-gradient-to-tl from-ipe-light/20 to-transparent rounded-tl-[200px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left side - Content (asymmetric positioning) */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-wisdom to-wisdom-dark rounded-2xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark">
                Conheça o <span className="text-wisdom">Acolhe</span>
              </h2>
            </div>

            <p className="text-xl text-neutral-dark/80 mb-8 leading-relaxed">
              Seu companheiro digital com inteligência artificial que aprende
              seus hábitos, oferece suporte emocional e está sempre ao seu lado.
            </p>

            {/* Features list */}
            <div className="space-y-4 mb-8">
              {[
                {
                  icon: Sun,
                  title: "Rotina Matinal Personalizada",
                  description: "Saudações afetivas e sugestões de atividades",
                },
                {
                  icon: Heart,
                  title: "Check-ins Emocionais",
                  description: "Acompanhamento do seu humor e bem-estar",
                },
                {
                  icon: Music,
                  title: "Biblioteca de Bem-Estar",
                  description: "Músicas, meditações e conteúdos relaxantes",
                },
                {
                  icon: Moon,
                  title: "Rituais Noturnos",
                  description: "Sons do Cerrado e histórias para relaxar",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-wisdom-light to-wisdom/30 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-wisdom-dark" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-dark mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-neutral-dark/70">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-wisdom text-white px-6 py-3 rounded-full font-medium hover:bg-wisdom-dark transition-colors shadow-lg">
                Conversar com Acolhe
              </button>
              <button className="bg-white text-wisdom border-2 border-wisdom px-6 py-3 rounded-full font-medium hover:bg-wisdom/10 transition-colors">
                Ver mais recursos
              </button>
            </div>
          </motion.div>

          {/* Right side - Interactive Demo (larger, asymmetric) */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Phone mockup */}
              <div className="bg-neutral-dark rounded-[3rem] p-4 shadow-2xl mx-auto max-w-sm">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-wisdom to-wisdom-dark p-6 text-white">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                        🥭
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Sabichão</h3>
                        <div className="flex items-center gap-1 text-sm opacity-90">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                          Online
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="p-6 space-y-4 bg-neutral-light/30 min-h-[400px]">
                    {conversationExamples.map((msg, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: currentMessage >= index ? 1 : 0.3,
                          y: 0,
                        }}
                        transition={{ delay: index * 0.5 }}
                        className="flex gap-3"
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-wisdom rounded-full flex items-center justify-center text-lg">
                          🥭
                        </div>
                        <div className="flex-1">
                          <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm">
                            <p className="text-sm text-neutral-dark leading-relaxed">
                              {msg.message}
                            </p>
                          </div>
                          <span className="text-xs text-neutral-dark/50 mt-1 block">
                            {msg.time}
                          </span>
                        </div>
                      </motion.div>
                    ))}

                    {/* Typing indicator */}
                    <motion.div
                      className="flex gap-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: currentMessage === conversationExamples.length ? 1 : 0 }}
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-wisdom rounded-full flex items-center justify-center text-lg">
                        🥭
                      </div>
                      <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-wisdom rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-wisdom rounded-full animate-bounce delay-100" />
                          <div className="w-2 h-2 bg-wisdom rounded-full animate-bounce delay-200" />
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Input area */}
                  <div className="p-4 bg-white border-t">
                    <div className="flex items-center gap-2 bg-neutral-light rounded-full px-4 py-3">
                      <MessageCircle className="w-5 h-5 text-neutral-dark/40" />
                      <input
                        type="text"
                        placeholder="Digite ou use voz..."
                        className="flex-1 bg-transparent outline-none text-sm"
                        disabled
                      />
                      <button className="w-10 h-10 bg-wisdom rounded-full flex items-center justify-center">
                        <span className="text-white text-lg">🎤</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating info cards */}
              <motion.div
                className="absolute -left-4 top-1/4 bg-white p-3 rounded-xl shadow-lg hidden lg:block"
                animate={{ x: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 4 }}
              >
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-cerrado" />
                  <div>
                    <p className="text-xs font-medium">3 eventos hoje</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-4 bottom-1/4 bg-white p-3 rounded-xl shadow-lg hidden lg:block"
                animate={{ x: [5, -5, 5] }}
                transition={{ repeat: Infinity, duration: 4, delay: 1 }}
              >
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-ipe" />
                  <div>
                    <p className="text-xs font-medium">Humor: Feliz</p>
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
