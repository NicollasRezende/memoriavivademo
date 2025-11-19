"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Download, UserPlus, Mic, Users, Calendar, Heart, ChevronRight } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: Download,
    title: "Baixe o App",
    description: "Disponível para Android e iOS. Instalação simples e guiada.",
    color: "cerrado",
    details: [
      "Interface adaptada para 60+",
      "Tutorial em vídeo",
      "Suporte por telefone",
    ],
  },
  {
    id: 2,
    icon: UserPlus,
    title: "Crie seu Perfil",
    description: "Configure suas preferências com ajuda do Pequi.",
    color: "ipe",
    details: [
      "Cadastro por voz opcional",
      "Foto de perfil",
      "Interesses e hobbies",
    ],
  },
  {
    id: 3,
    icon: Mic,
    title: "Grave Memórias",
    description: "Conte suas histórias. A IA organiza automaticamente.",
    color: "wisdom",
    details: [
      "Gravação ilimitada",
      "Organização por temas",
      "Livro da Vida digital",
    ],
  },
  {
    id: 4,
    icon: Users,
    title: "Entre nos Círculos",
    description: "Conecte-se com pessoas com interesses em comum.",
    color: "cerrado",
    details: [
      "Grupos temáticos",
      "Moderação segura",
      "Interação por voz",
    ],
  },
  {
    id: 5,
    icon: Calendar,
    title: "Participe de Eventos",
    description: "Descubra atividades perto de você em Goiás.",
    color: "ipe",
    details: [
      "Eventos próximos",
      "Confirmação fácil",
      "Carona solidária",
    ],
  },
  {
    id: 6,
    icon: Heart,
    title: "Acompanhamento",
    description: "O Pequi monitora seu bem-estar diariamente.",
    color: "wisdom",
    details: [
      "Check-ins emocionais",
      "Sugestões personalizadas",
      "Relatórios de progresso",
    ],
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const colorClasses = {
    cerrado: {
      bg: "from-cerrado-light to-cerrado",
      text: "text-cerrado-dark",
      border: "border-cerrado",
      hover: "hover:bg-cerrado-light",
    },
    ipe: {
      bg: "from-ipe-light to-ipe",
      text: "text-ipe-dark",
      border: "border-ipe",
      hover: "hover:bg-ipe-light",
    },
    wisdom: {
      bg: "from-wisdom-light to-wisdom",
      text: "text-wisdom-dark",
      border: "border-wisdom",
      hover: "hover:bg-wisdom-light",
    },
  };

  const activeStepData = steps[activeStep];
  const colors = colorClasses[activeStepData.color as keyof typeof colorClasses];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-neutral-light/50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-ipe/5 rounded-bl-[200px]" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-cerrado/5 rounded-tr-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-4 leading-tight">
            Como Funciona?
          </h2>
          <p className="text-lg md:text-xl text-neutral-dark/80 max-w-2xl mx-auto leading-relaxed">
            Em 6 passos simples, você está conectado e compartilhando memórias
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          {/* Left - Interactive Timeline */}
          <div className="space-y-4">
            {steps.map((step, index) => {
              const stepColors = colorClasses[step.color as keyof typeof colorClasses];
              const isActive = activeStep === index;
              const isCompleted = activeStep > index;

              return (
                <motion.button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`w-full text-left bg-white rounded-2xl p-6 md:p-7 shadow-sm transition-all relative overflow-hidden ${
                    isActive ? "shadow-xl scale-105 border-2 " + stepColors.border : "hover:shadow-md"
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Progress indicator */}
                  {isActive && (
                    <motion.div
                      className={`absolute top-0 left-0 h-full bg-gradient-to-r ${stepColors.bg} opacity-10`}
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                  )}

                  <div className="flex items-center gap-5 relative z-10">
                    {/* Number/Icon */}
                    <div
                      className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center transition-all ${
                        isCompleted
                          ? `bg-gradient-to-br ${stepColors.bg} text-white`
                          : isActive
                          ? `bg-gradient-to-br ${stepColors.bg} text-white`
                          : "bg-neutral-dark/5 text-neutral-dark/60"
                      }`}
                    >
                      {isCompleted ? (
                        <span className="text-2xl">✓</span>
                      ) : (
                        <step.icon className="w-8 h-8" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-sm font-semibold ${isActive ? stepColors.text : "text-neutral-dark/60"}`}>
                          Passo {step.id}
                        </span>
                      </div>
                      <h3 className={`text-xl md:text-2xl font-bold mb-2 leading-tight ${isActive ? "text-neutral-dark" : "text-neutral-dark/90"}`}>
                        {step.title}
                      </h3>
                      <p className={`text-base leading-relaxed ${isActive ? "text-neutral-dark/80" : "text-neutral-dark/60"}`}>
                        {step.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <ChevronRight
                      className={`w-6 h-6 flex-shrink-0 transition-all ${
                        isActive ? stepColors.text + " translate-x-1" : "text-neutral-dark/30"
                      }`}
                    />
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right - Active Step Details */}
          <motion.div
            className="lg:sticky lg:top-24"
            key={activeStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`bg-gradient-to-br ${colors.bg} rounded-3xl p-8 md:p-10 text-neutral-dark shadow-2xl`}>
              {/* Icon */}
              <div className="w-24 h-24 bg-white/90 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-6 shadow-lg">
                <activeStepData.icon className="w-12 h-12 text-neutral-dark" />
              </div>

              {/* Title */}
              <div className="mb-3">
                <span className="text-base text-neutral-dark/80 font-medium">Passo {activeStepData.id} de {steps.length}</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-5 leading-tight text-neutral-dark">
                {activeStepData.title}
              </h3>
              <p className="text-lg md:text-xl text-neutral-dark/80 mb-8 leading-relaxed">
                {activeStepData.description}
              </p>

              {/* Details */}
              <div className="space-y-3 mb-8">
                {activeStepData.details.map((detail, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 md:p-5 shadow-sm"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="w-2.5 h-2.5 bg-neutral-dark rounded-full flex-shrink-0" />
                    <span className="text-base md:text-lg leading-relaxed text-neutral-dark">{detail}</span>
                  </motion.div>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex gap-3">
                {activeStep > 0 && (
                  <button
                    onClick={() => setActiveStep(activeStep - 1)}
                    className="flex-1 bg-white/90 hover:bg-white backdrop-blur-sm py-3 md:py-4 rounded-xl font-semibold text-base transition-colors text-neutral-dark shadow-sm"
                  >
                    ← Anterior
                  </button>
                )}
                {activeStep < steps.length - 1 && (
                  <button
                    onClick={() => setActiveStep(activeStep + 1)}
                    className="flex-1 bg-white hover:bg-white/90 text-neutral-dark py-3 md:py-4 rounded-xl font-semibold text-base transition-colors shadow-sm"
                  >
                    Próximo →
                  </button>
                )}
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-6 bg-neutral-dark/10 rounded-full h-2.5 overflow-hidden">
              <motion.div
                className={`h-full bg-gradient-to-r ${colors.bg}`}
                initial={{ width: 0 }}
                animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <p className="text-center text-base text-neutral-dark/70 mt-3 font-medium">
              {activeStep + 1} de {steps.length} passos concluídos
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-lg md:text-xl text-neutral-dark/80 mb-6 leading-relaxed">
            Pronto para começar sua jornada?
          </p>
          <a
            href="/demo"
            className="inline-block bg-gradient-to-r from-ipe to-ipe-dark text-white px-8 py-4 rounded-full font-semibold text-base shadow-lg hover:opacity-90 transition-opacity"
          >
            Ver Demo Interativa
          </a>
        </motion.div>
      </div>
    </section>
  );
}
