"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mic,
  MessageCircle,
  Users,
  MapPin,
  BookOpen,
  Heart,
  ArrowRight,
  ArrowLeft,
  Play,
  Volume2,
  Settings,
  Bell,
  User,
  Calendar,
} from "lucide-react";
import { CardSkeleton, TimelineSkeleton, CircleSkeleton } from "@/components/Skeleton";

const demoSteps = [
  {
    id: 1,
    title: "Boas-vindas com Acolhe",
    description:
      "Ao abrir o app, o Sabichão (IA Acolhe) te dá boas-vindas personalizadas e pergunta como você está.",
    screen: "welcome",
    icon: Heart,
  },
  {
    id: 2,
    title: "Check-in Emocional",
    description:
      "A IA acompanha seu humor diariamente. Escolha como está se sentindo e receba sugestões personalizadas.",
    screen: "mood",
    icon: Heart,
  },
  {
    id: 3,
    title: "Gravação de Memórias",
    description:
      "Aperte o botão e conte suas histórias. A IA organiza tudo automaticamente por temas e períodos.",
    screen: "record",
    icon: Mic,
  },
  {
    id: 4,
    title: "Linha do Tempo",
    description:
      "Veja suas memórias organizadas em capítulos: Infância, Juventude, Família, Trabalho...",
    screen: "timeline",
    icon: BookOpen,
  },
  {
    id: 5,
    title: "Visualizar Memória",
    description:
      "Leia e ouça suas histórias gravadas. Adicione fotos e compartilhe com familiares.",
    screen: "memory-detail",
    icon: BookOpen,
  },
  {
    id: 6,
    title: "Círculos de Sabedoria",
    description:
      "Entre em grupos com pessoas que compartilham seus interesses. Comente por voz ou texto.",
    screen: "circles",
    icon: Users,
  },
  {
    id: 7,
    title: "Dentro do Círculo",
    description:
      "Veja publicações dos membros, curta e comente. Tudo com interface simples e acessível.",
    screen: "circle-feed",
    icon: Users,
  },
  {
    id: 8,
    title: "Eventos Próximos",
    description:
      "Descubra atividades perto de você. Integrado com Goiás Social, CRAS e Centros de Convivência.",
    screen: "events",
    icon: MapPin,
  },
  {
    id: 9,
    title: "Notificações",
    description:
      "Receba lembretes de eventos, mensagens de amigos e sugestões da IA Acolhe.",
    screen: "notifications",
    icon: Bell,
  },
  {
    id: 10,
    title: "Perfil Pessoal",
    description:
      "Veja suas conquistas, estatísticas de bem-estar e personalize suas preferências.",
    screen: "profile",
    icon: User,
  },
];

export default function DemoPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Simulate loading when changing screens
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600); // 600ms loading delay

    return () => clearTimeout(timer);
  }, [currentStep]);

  const nextStep = () => {
    if (currentStep < demoSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const step = demoSteps[currentStep];

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-light via-white to-cerrado-light/30 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-dark mb-4">
            Demonstração <span className="text-ipe-dark">Interativa</span>
          </h1>
          <p className="text-xl text-neutral-dark/70 max-w-2xl mx-auto">
            Navegue pelas funcionalidades principais da plataforma Memória Viva+
          </p>
        </motion.div>

        {/* Main Demo Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          {/* Left - Phone Mockup */}
          <motion.div
            className="relative order-2 lg:order-1 lg:sticky lg:top-24"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Floating hint - REPOSICIONADO PARA CANTO SUPERIOR ESQUERDO */}
            <motion.div
              className="absolute -left-4 top-8 bg-wisdom text-white px-4 py-2 rounded-lg shadow-lg z-20 hidden lg:block"
              animate={{ x: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <div className="flex items-center gap-2">
                <Play className="w-4 h-4" />
                <span className="text-sm font-medium">Interaja!</span>
              </div>
              <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-wisdom" />
            </motion.div>

            <div className="relative mx-auto max-w-sm">
              {/* Phone frame */}
              <div className="bg-neutral-dark rounded-[3rem] p-4 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Status bar */}
                  <div className="bg-gradient-to-r from-ipe to-ipe-dark px-6 py-4 text-white flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="text-2xl">🥭</div>
                      <span className="font-bold">Memória Viva+</span>
                    </div>
                    <div className="text-xs opacity-80">9:41</div>
                  </div>

                  {/* Screen content */}
                  <div className="min-h-[600px] bg-neutral-light/30 p-6">
                    <AnimatePresence mode="wait">
                      {isLoading ? (
                        <LoadingScreen key="loading" screenType={step.screen} />
                      ) : (
                        <>
                          {step.screen === "welcome" && (
                            <WelcomeScreen key="welcome" />
                          )}
                          {step.screen === "mood" && <MoodScreen key="mood" />}
                          {step.screen === "record" && (
                            <RecordScreen
                              key="record"
                              isRecording={isRecording}
                              setIsRecording={setIsRecording}
                            />
                          )}
                          {step.screen === "timeline" && (
                            <TimelineScreen key="timeline" />
                          )}
                          {step.screen === "memory-detail" && (
                            <MemoryDetailScreen key="memory-detail" />
                          )}
                          {step.screen === "circles" && (
                            <CirclesScreen key="circles" />
                          )}
                          {step.screen === "circle-feed" && (
                            <CircleFeedScreen key="circle-feed" />
                          )}
                          {step.screen === "events" && <EventsScreen key="events" />}
                          {step.screen === "notifications" && (
                            <NotificationsScreen key="notifications" />
                          )}
                          {step.screen === "profile" && (
                            <ProfileScreen key="profile" />
                          )}
                        </>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Bottom navigation */}
                  <div className="bg-white border-t p-4 flex justify-around">
                    {[
                      { icon: Heart, label: "Início" },
                      { icon: BookOpen, label: "Memórias" },
                      { icon: Users, label: "Círculos" },
                      { icon: MapPin, label: "Eventos" },
                    ].map((item, idx) => (
                      <button
                        key={idx}
                        className="flex flex-col items-center gap-1 text-neutral-dark/60 hover:text-ipe transition-colors"
                      >
                        <item.icon className="w-6 h-6" />
                        <span className="text-xs">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Step Description */}
          <motion.div
            className="order-1 lg:order-2 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {/* Step indicator */}
            <div className="flex items-center gap-2 flex-wrap">
              {demoSteps.map((s, idx) => (
                <div
                  key={s.id}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentStep
                      ? "bg-ipe w-12"
                      : idx < currentStep
                      ? "bg-ipe/50 w-8"
                      : "bg-neutral-dark/20 w-8"
                  }`}
                />
              ))}
            </div>

            {/* Step content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cerrado to-cerrado-dark rounded-2xl flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-dark/60 font-medium">
                      Passo {step.id} de {demoSteps.length}
                    </p>
                    <h2 className="text-3xl font-bold text-neutral-dark">
                      {step.title}
                    </h2>
                  </div>
                </div>

                <p className="text-xl text-neutral-dark/80 leading-relaxed">
                  {step.description}
                </p>

                {/* Features highlight */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="font-bold text-neutral-dark mb-4 flex items-center gap-2">
                    <Volume2 className="w-5 h-5 text-ipe" />
                    Recursos de Acessibilidade
                  </h3>
                  <ul className="space-y-2 text-sm text-neutral-dark/70">
                    <li className="flex items-start gap-2">
                      <span className="text-ipe">✓</span>
                      <span>Navegação 100% por voz</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ipe">✓</span>
                      <span>Botões grandes (mínimo 80x80px)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ipe">✓</span>
                      <span>Alto contraste e fontes ajustáveis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ipe">✓</span>
                      <span>Interface simples - máximo 3 opções por tela</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className="flex-1 bg-white border-2 border-neutral-dark/20 text-neutral-dark px-6 py-4 rounded-xl font-medium hover:border-ipe hover:text-ipe transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Anterior
              </button>
              <button
                onClick={nextStep}
                disabled={currentStep === demoSteps.length - 1}
                className="flex-1 bg-gradient-to-r from-ipe to-ipe-dark text-white px-6 py-4 rounded-xl font-medium hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
              >
                Próximo
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-wisdom-light to-cerrado-light rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-neutral-dark mb-4">
              Pronto para transformar vidas?
            </h3>
            <p className="text-xl text-neutral-dark/80 mb-8">
              Este é apenas um protótipo. A plataforma completa está em
              desenvolvimento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="bg-ipe text-white px-8 py-4 rounded-full font-medium hover:bg-ipe-dark transition-colors shadow-lg"
              >
                Voltar ao Início
              </a>
              <a
                href="/pitch"
                className="bg-white text-ipe border-2 border-ipe px-8 py-4 rounded-full font-medium hover:bg-ipe/10 transition-colors"
              >
                Ver Apresentação Completa
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

// Screen Components
function LoadingScreen({ screenType }: { screenType: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6"
    >
      {/* Show different skeletons based on screen type */}
      {screenType === "timeline" || screenType === "memory-detail" ? (
        <TimelineSkeleton />
      ) : screenType === "circles" || screenType === "circle-feed" ? (
        <CircleSkeleton />
      ) : screenType === "notifications" || screenType === "events" ? (
        <>
          <CardSkeleton />
          <CardSkeleton />
        </>
      ) : (
        // Default skeleton for welcome, mood, record, profile screens
        <>
          <div className="animate-pulse space-y-4">
            <div className="h-20 bg-neutral-dark/10 rounded-2xl" />
            <div className="h-32 bg-neutral-dark/10 rounded-2xl" />
            <div className="grid grid-cols-2 gap-3">
              <div className="h-20 bg-neutral-dark/10 rounded-xl" />
              <div className="h-20 bg-neutral-dark/10 rounded-xl" />
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
}

function WelcomeScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6"
    >
      <div className="text-center pt-8">
        <div className="text-6xl mb-4">🥭</div>
        <h2 className="text-2xl font-bold text-neutral-dark mb-2">
          Olá, Maria!
        </h2>
        <p className="text-neutral-dark/70">Que bom te ver por aqui 😊</p>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="text-3xl">🥭</div>
          <div className="flex-1">
            <p className="text-neutral-dark leading-relaxed">
              Bom dia! Como você está se sentindo hoje?
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {["😊 Feliz", "😌 Bem", "😐 Normal", "😔 Triste"].map((mood) => (
          <button
            key={mood}
            className="bg-white border-2 border-ipe/20 hover:border-ipe hover:bg-ipe/5 py-4 rounded-xl font-medium transition-colors"
          >
            {mood}
          </button>
        ))}
      </div>
    </motion.div>
  );
}

function MoodScreen() {
  const [selectedMood, setSelectedMood] = useState("feliz");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6"
    >
      <div className="text-center">
        <h3 className="text-xl font-bold text-neutral-dark mb-2">
          Check-in Emocional
        </h3>
        <p className="text-sm text-neutral-dark/70">
          Como está seu dia hoje?
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {[
          { emoji: "😊", label: "Feliz", value: "feliz" },
          { emoji: "😌", label: "Tranquilo", value: "tranquilo" },
          { emoji: "😐", label: "Normal", value: "normal" },
          { emoji: "😔", label: "Triste", value: "triste" },
        ].map((mood) => (
          <button
            key={mood.value}
            onClick={() => setSelectedMood(mood.value)}
            className={`py-6 rounded-2xl font-medium transition-all ${
              selectedMood === mood.value
                ? "bg-ipe text-white scale-105"
                : "bg-white border-2 border-neutral-dark/10 hover:border-ipe"
            }`}
          >
            <div className="text-4xl mb-2">{mood.emoji}</div>
            <div className="text-lg">{mood.label}</div>
          </button>
        ))}
      </div>

      {selectedMood === "feliz" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-cerrado-light rounded-xl p-4"
        >
          <p className="text-sm text-neutral-dark/80">
            🌟 Que maravilha! Que tal aproveitar esse dia especial para gravar
            uma história feliz?
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}

function RecordScreen({
  isRecording,
  setIsRecording,
}: {
  isRecording: boolean;
  setIsRecording: (val: boolean) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6"
    >
      <div className="text-center">
        <h3 className="text-xl font-bold text-neutral-dark mb-2">
          Conte sua História
        </h3>
        <p className="text-sm text-neutral-dark/70">
          Aperte o botão e comece a falar
        </p>
      </div>

      <div className="bg-white rounded-2xl p-8 text-center">
        <button
          onClick={() => setIsRecording(!isRecording)}
          className={`w-32 h-32 rounded-full flex items-center justify-center mx-auto transition-all shadow-2xl ${
            isRecording
              ? "bg-red-500 scale-110"
              : "bg-gradient-to-br from-ipe to-ipe-dark hover:scale-105"
          }`}
        >
          <Mic className="w-16 h-16 text-white" />
        </button>
        <p className="mt-6 font-medium text-neutral-dark">
          {isRecording ? (
            <span className="text-red-500 flex items-center justify-center gap-2">
              <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              Gravando...
            </span>
          ) : (
            "Toque para gravar"
          )}
        </p>
      </div>

      {isRecording && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-cerrado-light rounded-xl p-4 text-sm text-neutral-dark/80 italic"
        >
          "Eu lembro quando era criança em Pirenópolis. As festas juninas eram
          tão bonitas..."
        </motion.div>
      )}

      <div className="flex gap-2 justify-center">
        <button className="bg-neutral-dark/10 hover:bg-neutral-dark/20 px-4 py-2 rounded-full text-sm transition-colors">
          Pausar
        </button>
        <button className="bg-ipe hover:bg-ipe-dark text-white px-6 py-2 rounded-full text-sm transition-colors">
          Finalizar
        </button>
      </div>
    </motion.div>
  );
}

function TimelineScreen() {
  const memories = [
    { period: "Infância", count: 12, color: "cerrado" },
    { period: "Juventude", count: 8, color: "ipe" },
    { period: "Família", count: 15, color: "wisdom" },
    { period: "Trabalho", count: 6, color: "cerrado" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-4"
    >
      <h3 className="text-xl font-bold text-neutral-dark">Suas Memórias</h3>

      {memories.map((mem) => (
        <div
          key={mem.period}
          className={`bg-white rounded-xl p-4 border-l-4 border-${mem.color} shadow-sm hover:shadow-md transition-shadow cursor-pointer`}
        >
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-bold text-neutral-dark">{mem.period}</h4>
              <p className="text-sm text-neutral-dark/60">
                {mem.count} histórias gravadas
              </p>
            </div>
            <BookOpen className={`w-6 h-6 text-${mem.color}`} />
          </div>
        </div>
      ))}

      <button className="w-full bg-gradient-to-r from-ipe to-ipe-dark text-white py-3 rounded-xl font-medium shadow-lg hover:opacity-90 transition-opacity">
        Ver Livro da Minha Vida
      </button>
    </motion.div>
  );
}

function MemoryDetailScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-4"
    >
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 bg-cerrado rounded-full flex items-center justify-center text-sm">
            👶
          </div>
          <div>
            <h4 className="font-bold text-neutral-dark">Infância</h4>
            <p className="text-xs text-neutral-dark/60">Gravado em 15/11/2025</p>
          </div>
        </div>

        <h3 className="font-bold text-neutral-dark mb-2">
          Festas Juninas em Pirenópolis
        </h3>

        <p className="text-sm text-neutral-dark/80 leading-relaxed mb-4">
          "Eu lembro quando era criança em Pirenópolis. As festas juninas eram
          tão bonitas! A gente dançava quadrilha na praça, comia pipoca e
          pé-de-moleque..."
        </p>

        <div className="flex gap-2">
          <button className="flex-1 bg-ipe/10 text-ipe py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2">
            <Volume2 className="w-4 h-4" />
            Ouvir
          </button>
          <button className="flex-1 bg-neutral-dark/10 text-neutral-dark py-2 rounded-lg text-sm font-medium">
            Compartilhar
          </button>
        </div>
      </div>

      <div className="bg-cerrado-light/30 rounded-xl p-4 text-sm">
        <p className="font-medium text-neutral-dark mb-2">💡 Sugestão da IA:</p>
        <p className="text-neutral-dark/80">
          Que tal adicionar fotos antigas de Pirenópolis a esta memória?
        </p>
      </div>
    </motion.div>
  );
}

function CirclesScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-4"
    >
      <h3 className="text-xl font-bold text-neutral-dark">Meus Círculos</h3>

      {[
        { name: "Receitas Goianas", members: 189, active: true, emoji: "🍲" },
        { name: "Memórias de Goiânia", members: 312, active: false, emoji: "🏛️" },
        { name: "Artesanato", members: 156, active: true, emoji: "🎨" },
      ].map((circle) => (
        <div key={circle.name} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center gap-3 mb-2">
            <div className="text-3xl">{circle.emoji}</div>
            <div className="flex-1">
              <h4 className="font-bold text-neutral-dark">{circle.name}</h4>
              <p className="text-sm text-neutral-dark/60 flex items-center gap-1">
                <Users className="w-4 h-4" />
                {circle.members} membros
              </p>
            </div>
            {circle.active && (
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                Ativo
              </span>
            )}
          </div>
        </div>
      ))}

      <button className="w-full bg-white border-2 border-ipe text-ipe py-3 rounded-xl font-medium hover:bg-ipe/10 transition-colors">
        Descobrir Mais Círculos
      </button>
    </motion.div>
  );
}

function CircleFeedScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-4"
    >
      <div className="bg-ipe text-white rounded-xl p-4">
        <h3 className="font-bold flex items-center gap-2">
          <span className="text-2xl">🍲</span>
          Receitas Goianas
        </h3>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-10 h-10 bg-cerrado rounded-full flex items-center justify-center text-lg">
            👵
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-neutral-dark text-sm">Dona Ana</h4>
            <p className="text-xs text-neutral-dark/60">Há 2 horas</p>
          </div>
        </div>
        <p className="text-sm text-neutral-dark/80 mb-3">
          Meu empadão goiano ficou uma delícia! Vou compartilhar a receita da
          minha avó com vocês 😊
        </p>
        <div className="flex gap-2">
          <button className="flex items-center gap-1 text-ipe text-sm">
            ❤️ 24
          </button>
          <button className="flex items-center gap-1 text-neutral-dark/60 text-sm">
            💬 8
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-10 h-10 bg-wisdom rounded-full flex items-center justify-center text-lg">
            👨
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-neutral-dark text-sm">Seu João</h4>
            <p className="text-xs text-neutral-dark/60">Ontem</p>
          </div>
        </div>
        <p className="text-sm text-neutral-dark/80 mb-3">
          Quem lembra da pamonha da feira? Hoje fiz igual antigamente!
        </p>
        <div className="flex gap-2">
          <button className="flex items-center gap-1 text-ipe text-sm">
            ❤️ 31
          </button>
          <button className="flex items-center gap-1 text-neutral-dark/60 text-sm">
            💬 12
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function EventsScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-4"
    >
      <h3 className="text-xl font-bold text-neutral-dark">Eventos Próximos</h3>

      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h4 className="font-bold text-neutral-dark">Oficina de Violão</h4>
            <p className="text-sm text-neutral-dark/60">
              Centro de Convivência
            </p>
          </div>
          <span className="bg-cerrado text-cerrado-dark text-xs px-2 py-1 rounded-full font-medium">
            800m
          </span>
        </div>
        <div className="flex gap-3 text-xs text-neutral-dark/60 mb-3">
          <span>📅 Amanhã</span>
          <span>🕐 14:00</span>
          <span>👥 12 pessoas</span>
        </div>
        <button className="w-full bg-ipe text-white py-2 rounded-lg font-medium hover:bg-ipe-dark transition-colors">
          Confirmar Presença
        </button>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h4 className="font-bold text-neutral-dark">Dança de Salão</h4>
            <p className="text-sm text-neutral-dark/60">Parque Vaca Brava</p>
          </div>
          <span className="bg-ipe-light text-ipe-dark text-xs px-2 py-1 rounded-full font-medium">
            1.2km
          </span>
        </div>
        <div className="flex gap-3 text-xs text-neutral-dark/60 mb-3">
          <span>📅 Sábado</span>
          <span>🕐 16:00</span>
          <span>👥 28 pessoas</span>
        </div>
        <button className="w-full bg-white border-2 border-ipe text-ipe py-2 rounded-lg font-medium hover:bg-ipe/10 transition-colors">
          Ver Detalhes
        </button>
      </div>
    </motion.div>
  );
}

function NotificationsScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-3"
    >
      <h3 className="text-xl font-bold text-neutral-dark">Notificações</h3>

      {[
        {
          icon: "🥭",
          title: "Acolhe tem uma sugestão",
          message: "Que tal fazer uma caminhada hoje? O tempo está lindo!",
          time: "Há 10 min",
          unread: true,
        },
        {
          icon: "❤️",
          title: "Dona Ana curtiu sua história",
          message: "Curtiu: 'Festas Juninas em Pirenópolis'",
          time: "Há 1 hora",
          unread: true,
        },
        {
          icon: "📅",
          title: "Lembrete de Evento",
          message: "Oficina de Violão começa amanhã às 14:00",
          time: "Há 3 horas",
          unread: false,
        },
        {
          icon: "💬",
          title: "Nova mensagem no círculo",
          message: "Receitas Goianas: 3 novas publicações",
          time: "Ontem",
          unread: false,
        },
      ].map((notif, idx) => (
        <div
          key={idx}
          className={`bg-white rounded-xl p-4 shadow-sm ${
            notif.unread ? "border-l-4 border-ipe" : ""
          }`}
        >
          <div className="flex gap-3">
            <div className="text-2xl">{notif.icon}</div>
            <div className="flex-1">
              <h4 className="font-bold text-neutral-dark text-sm mb-1">
                {notif.title}
              </h4>
              <p className="text-xs text-neutral-dark/70 mb-2">
                {notif.message}
              </p>
              <p className="text-xs text-neutral-dark/50">{notif.time}</p>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

function ProfileScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-4"
    >
      <div className="bg-gradient-to-br from-ipe to-ipe-dark text-white rounded-xl p-6 text-center">
        <div className="w-20 h-20 bg-white rounded-full mx-auto mb-3 flex items-center justify-center text-4xl">
          👵
        </div>
        <h3 className="font-bold text-xl mb-1">Maria Silva</h3>
        <p className="text-sm opacity-90">Membro desde Nov 2025</p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white rounded-xl p-3 text-center shadow-sm">
          <div className="text-2xl font-bold text-cerrado">35</div>
          <p className="text-xs text-neutral-dark/70">Memórias</p>
        </div>
        <div className="bg-white rounded-xl p-3 text-center shadow-sm">
          <div className="text-2xl font-bold text-ipe">12</div>
          <p className="text-xs text-neutral-dark/70">Amigos</p>
        </div>
        <div className="bg-white rounded-xl p-3 text-center shadow-sm">
          <div className="text-2xl font-bold text-wisdom">3</div>
          <p className="text-xs text-neutral-dark/70">Círculos</p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm">
        <h4 className="font-bold text-neutral-dark mb-3 text-sm">
          Conquistas
        </h4>
        <div className="flex gap-3">
          {["🎤", "📖", "👥", "🏆"].map((emoji, idx) => (
            <div
              key={idx}
              className="w-12 h-12 bg-cerrado-light rounded-lg flex items-center justify-center text-2xl"
            >
              {emoji}
            </div>
          ))}
        </div>
      </div>

      <button className="w-full bg-neutral-dark/10 hover:bg-neutral-dark/20 text-neutral-dark py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2">
        <Settings className="w-5 h-5" />
        Configurações
      </button>
    </motion.div>
  );
}
