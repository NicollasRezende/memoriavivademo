"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mic,
  BookOpen,
  Heart,
  Bell,
  User,
  Users,
  MapPin,
  Play,
  Pause,
  Volume2,
  Settings,
} from "lucide-react";
import Link from "next/link";

const demoSteps = [
  { 
    id: 1, 
    title: "Boas-vindas com Pequi", 
    description: "Ao abrir o app, o Pequi te dá boas-vindas personalizadas e pergunta como você está.",
    screen: "welcome", 
    icon: Heart, 
    duration: 3000 
  },
  { 
    id: 2, 
    title: "Check-in Emocional", 
    description: "A IA acompanha seu humor diariamente. Escolha como está se sentindo e receba sugestões personalizadas.",
    screen: "mood", 
    icon: Heart, 
    duration: 3000 
  },
  { 
    id: 3, 
    title: "Gravação de Memórias", 
    description: "Aperte o botão e conte suas histórias. A IA organiza tudo automaticamente por temas e períodos.",
    screen: "record", 
    icon: Mic, 
    duration: 4000 
  },
  { 
    id: 4, 
    title: "Linha do Tempo", 
    description: "Veja suas memórias organizadas em capítulos: Infância, Juventude, Família, Trabalho...",
    screen: "timeline", 
    icon: BookOpen, 
    duration: 3000 
  },
  { 
    id: 5, 
    title: "Visualizar Memória", 
    description: "Leia e ouça suas histórias gravadas. Adicione fotos e compartilhe com familiares.",
    screen: "memory-detail", 
    icon: BookOpen, 
    duration: 3000 
  },
  { 
    id: 6, 
    title: "Círculos de Sabedoria", 
    description: "Entre em grupos com pessoas que compartilham seus interesses. Comente por voz ou texto.",
    screen: "circles", 
    icon: Users, 
    duration: 3000 
  },
  { 
    id: 7, 
    title: "Dentro do Círculo", 
    description: "Veja publicações dos membros, curta e comente. Tudo com interface simples e acessível.",
    screen: "circle-feed", 
    icon: Users, 
    duration: 3000 
  },
  { 
    id: 8, 
    title: "Eventos Próximos", 
    description: "Descubra atividades perto de você. Integrado com Goiás Social, CRAS e Centros de Convivência.",
    screen: "events", 
    icon: MapPin, 
    duration: 3000 
  },
  { 
    id: 9, 
    title: "Notificações", 
    description: "Receba lembretes de eventos, mensagens de amigos e sugestões do Pequi.",
    screen: "notifications", 
    icon: Bell, 
    duration: 3000 
  },
  { 
    id: 10, 
    title: "Perfil Pessoal", 
    description: "Veja suas conquistas, estatísticas de bem-estar e personalize suas preferências.",
    screen: "profile", 
    icon: User, 
    duration: 3000 
  },
];

// Telas completas copiadas da página de demo
function WelcomeScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-4"
    >
      <div className="text-center pt-8">
        <div className="flex justify-center pt-8 mb-4">
          <img src="/pequi.png" alt="Pequi" width={64} height={64} className="object-contain" />
        </div>
        <h2 className="text-2xl font-bold text-neutral-dark mb-2">
          Olá, Maria!
        </h2>
        <p className="text-neutral-dark/70">Que bom te ver por aqui 😊</p>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex items-start gap-3">
          <img src="/pequi.png" alt="Pequi" width={32} height={32} className="object-contain" />
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

function RecordScreen() {
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
        <button className="w-32 h-32 rounded-full flex items-center justify-center mx-auto bg-gradient-to-br from-ipe to-ipe-dark shadow-2xl">
          <Mic className="w-16 h-16 text-white" />
        </button>
        <p className="mt-6 font-medium text-neutral-dark">
          Toque para gravar
        </p>
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
            <h4 className="font-bold text-lg text-neutral-dark">Infância</h4>
            <p className="text-sm text-neutral-dark/60">Gravado em 15/11/2025</p>
          </div>
        </div>

        <h3 className="font-bold text-2xl text-neutral-dark mb-2">
          Festas Juninas em Pirenópolis
        </h3>

        <p className="text-lg text-neutral-dark/80 leading-relaxed mb-4">
          "Eu lembro quando era criança em Pirenópolis. As festas juninas eram
          tão bonitas! A gente dançava quadrilha na praça, comia pipoca e
          pé-de-moleque..."
        </p>

        <div className="flex gap-2">
          <button className="flex-1 bg-ipe/10 text-ipe py-2 rounded-lg text-base font-medium flex items-center justify-center gap-2">
            <Volume2 className="w-4 h-4" />
            Ouvir
          </button>
          <button className="flex-1 bg-neutral-dark/10 text-neutral-dark py-2 rounded-lg text-base font-medium">
            Compartilhar
          </button>
        </div>
      </div>

      <div className="bg-cerrado-light/30 rounded-xl p-4 text-base">
        <p className="font-medium text-lg text-neutral-dark mb-2">💡 Sugestão da IA:</p>
        <p className="text-base text-neutral-dark/80">
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
        <h3 className="font-bold text-xl flex items-center gap-2">
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
            <h4 className="font-bold text-neutral-dark text-lg">Dona Ana</h4>
            <p className="text-base text-neutral-dark/60">Há 2 horas</p>
          </div>
        </div>
        <p className="text-lg text-neutral-dark/80 mb-3 leading-relaxed">
          Meu empadão goiano ficou uma delícia! Vou compartilhar a receita da
          minha avó com vocês 😊
        </p>
        <div className="flex gap-2">
          <button className="flex items-center gap-1 text-ipe text-base font-medium">
            ❤️ 24
          </button>
          <button className="flex items-center gap-1 text-neutral-dark/60 text-base font-medium">
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
            <h4 className="font-bold text-neutral-dark text-lg">Seu João</h4>
            <p className="text-base text-neutral-dark/60">Ontem</p>
          </div>
        </div>
        <p className="text-lg text-neutral-dark/80 mb-3 leading-relaxed">
          Quem lembra da pamonha da feira? Hoje fiz igual antigamente!
        </p>
        <div className="flex gap-2">
          <button className="flex items-center gap-1 text-ipe text-base font-medium">
            ❤️ 31
          </button>
          <button className="flex items-center gap-1 text-neutral-dark/60 text-base font-medium">
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
      <h3 className="text-2xl font-bold text-neutral-dark">Eventos Próximos</h3>

      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h4 className="font-bold text-lg text-neutral-dark">Oficina de Violão</h4>
            <p className="text-base text-neutral-dark/60">
              Centro de Convivência
            </p>
          </div>
          <span className="bg-cerrado text-cerrado-dark text-sm px-2 py-1 rounded-full font-medium">
            800m
          </span>
        </div>
        <div className="flex gap-3 text-sm text-neutral-dark/60 mb-3">
          <span>📅 Amanhã</span>
          <span>🕐 14:00</span>
          <span>👥 12 pessoas</span>
        </div>
        <button className="w-full bg-ipe text-white py-3 rounded-lg font-medium text-lg hover:bg-ipe-dark transition-colors">
          Confirmar Presença
        </button>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h4 className="font-bold text-lg text-neutral-dark">Dança de Salão</h4>
            <p className="text-base text-neutral-dark/60">Parque Vaca Brava</p>
          </div>
          <span className="bg-ipe-light text-ipe-dark text-sm px-2 py-1 rounded-full font-medium">
            1.2km
          </span>
        </div>
        <div className="flex gap-3 text-sm text-neutral-dark/60 mb-3">
          <span>📅 Sábado</span>
          <span>🕐 16:00</span>
          <span>👥 28 pessoas</span>
        </div>
        <button className="w-full bg-white border-2 border-ipe text-ipe py-3 rounded-lg font-medium text-lg hover:bg-ipe/10 transition-colors">
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
      className="space-y-4"
    >
      <h3 className="text-2xl font-bold text-neutral-dark">Notificações</h3>

      {[
        {
          icon: <img src="/pequi.png" alt="Pequi" width={24} height={24} className="object-contain" />,
          title: "Pequi tem uma sugestão",
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
              <h4 className="font-bold text-neutral-dark text-lg mb-2">
                {notif.title}
              </h4>
              <p className="text-base text-neutral-dark/70 mb-3">
                {notif.message}
              </p>
              <p className="text-sm text-neutral-dark/50">{notif.time}</p>
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
        <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center text-5xl">
          👵
        </div>
        <h3 className="font-bold text-2xl mb-2">Maria Silva</h3>
        <p className="text-base opacity-90">Membro desde Nov 2025</p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white rounded-xl p-4 text-center shadow-sm">
          <div className="text-3xl font-bold text-cerrado">35</div>
          <p className="text-sm text-neutral-dark/70">Memórias</p>
        </div>
        <div className="bg-white rounded-xl p-4 text-center shadow-sm">
          <div className="text-3xl font-bold text-ipe">12</div>
          <p className="text-sm text-neutral-dark/70">Amigos</p>
        </div>
        <div className="bg-white rounded-xl p-4 text-center shadow-sm">
          <div className="text-3xl font-bold text-wisdom">3</div>
          <p className="text-sm text-neutral-dark/70">Círculos</p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm">
        <h4 className="font-bold text-neutral-dark mb-4 text-base">
          Conquistas
        </h4>
        <div className="flex gap-4">
          {["🎤", "📖", "👥", "🏆"].map((emoji, idx) => (
            <div
              key={idx}
              className="w-16 h-16 bg-cerrado-light rounded-lg flex items-center justify-center text-3xl"
            >
              {emoji}
            </div>
          ))}
        </div>
      </div>

      <button className="w-full bg-neutral-dark/10 hover:bg-neutral-dark/20 text-neutral-dark py-4 rounded-xl font-medium text-base transition-colors flex items-center justify-center gap-3">
        <Settings className="w-6 h-6" />
        Configurações
      </button>
    </motion.div>
  );
}

export default function VideoDemoPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPlaying || isPaused) return;

    const step = demoSteps[currentStep];
    const timer = setTimeout(() => {
      if (currentStep < demoSteps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setIsPlaying(false);
        setCurrentStep(0);
      }
    }, step.duration);

    return () => clearTimeout(timer);
  }, [currentStep, isPlaying, isPaused]);

  const togglePlay = () => {
    if (isPlaying) {
      setIsPaused(!isPaused);
    } else {
      setIsPlaying(true);
      setIsPaused(false);
    }
  };

  const reset = () => {
    setCurrentStep(0);
    setIsPlaying(false);
    setIsPaused(false);
  };

  const step = demoSteps[currentStep];

  const renderScreen = () => {
    switch (step.screen) {
      case "welcome":
        return <WelcomeScreen key="welcome" />;
      case "mood":
        return <MoodScreen key="mood" />;
      case "record":
        return <RecordScreen key="record" />;
      case "timeline":
        return <TimelineScreen key="timeline" />;
      case "memory-detail":
        return <MemoryDetailScreen key="memory-detail" />;
      case "circles":
        return <CirclesScreen key="circles" />;
      case "circle-feed":
        return <CircleFeedScreen key="circle-feed" />;
      case "events":
        return <EventsScreen key="events" />;
      case "notifications":
        return <NotificationsScreen key="notifications" />;
      case "profile":
        return <ProfileScreen key="profile" />;
      default:
        return <WelcomeScreen key="default" />;
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-light via-white to-cerrado-light/30 pt-20 pb-12 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 px-2 sm:px-4 overflow-visible mt-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-dark mb-4 break-words overflow-visible whitespace-normal">
            Video <span className="text-ipe-dark">Demo</span>
          </h1>
          <p className="text-lg sm:text-xl text-neutral-dark/70 max-w-2xl mx-auto px-2">
            Assista a demonstração automática de todas as funcionalidades
          </p>
        </motion.div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <button
            onClick={togglePlay}
            className="bg-gradient-to-r from-ipe to-ipe-dark text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg flex items-center gap-2"
          >
            {isPaused ? (
              <>
                <Play className="w-5 h-5" />
                Continuar
              </>
            ) : isPlaying ? (
              <>
                <Pause className="w-5 h-5" />
                Pausar
              </>
            ) : (
              <>
                <Play className="w-5 h-5" />
                Iniciar Demo
              </>
            )}
          </button>
          <button
            onClick={reset}
            className="bg-white border-2 border-neutral-dark/20 text-neutral-dark px-6 py-3 rounded-full font-medium hover:border-ipe hover:text-ipe transition-colors"
          >
            Reiniciar
          </button>
        </div>

        {/* Progress */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-sm text-neutral-dark/60">
              Passo {currentStep + 1} de {demoSteps.length}
            </span>
            <span className="text-sm text-neutral-dark/60">• {step.title}</span>
          </div>
          <div className="w-full bg-neutral-dark/10 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-ipe to-ipe-dark h-full"
              initial={{ width: "0%" }}
              animate={{
                width: isPlaying && !isPaused
                  ? `${((currentStep + 1) / demoSteps.length) * 100}%`
                  : `${(currentStep / demoSteps.length) * 100}%`,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Mockup com telas */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative mx-auto max-w-sm">
            {/* Phone frame */}
            <div className="bg-neutral-dark rounded-[3rem] p-4 shadow-2xl">
              <div className="bg-white rounded-[2.5rem] overflow-hidden relative">
                {/* Status bar */}
                <div className="bg-gradient-to-r from-ipe to-ipe-dark px-6 py-4 text-white flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src="/pequi.png" alt="Pequi" width={24} height={24} className="object-contain" />
                    <span className="font-bold">Memória Viva+</span>
                  </div>
                  <div className="text-xs opacity-80">9:41</div>
                </div>

                {/* Screen content */}
                <div className="min-h-[600px] bg-neutral-light/30 p-6">
                  <AnimatePresence mode="wait">
                    {renderScreen()}
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
        </div>

        {/* Step Info */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
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
            <p className="text-xl text-neutral-dark/80 leading-relaxed mb-6">
              {step.description}
            </p>
            <Link
              href={`/demo`}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-ipe to-ipe-dark text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg"
            >
              Ver Demo Interativa Completa
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
