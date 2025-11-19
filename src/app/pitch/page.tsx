"use client";

import { motion } from "framer-motion";
import {
  TrendingDown,
  Heart,
  Users,
  Smartphone,
  Target,
  Rocket,
  BarChart,
  CheckCircle,
  ArrowRight,
  Mic,
  Bot,
  Map,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function PitchPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-light via-white to-wisdom-light/30">
      {/* Slide 1 - Cover */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-cerrado/10 rounded-bl-[300px]" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-ipe/10 rounded-tr-[200px]" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-8">
              <img src="/pequi.png" alt="Pequi" width={96} height={96} className="object-contain" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="text-ipe-dark">Memória Viva</span>
              <span className="text-cerrado-dark">+</span>
            </h1>
            <p className="text-3xl md:text-4xl text-wisdom font-medium mb-8">
              Tecnologia que Abraça
            </p>
            <p className="text-xl md:text-2xl text-neutral-dark/70 mb-12 max-w-3xl mx-auto">
              Plataforma de bem-estar mental e inclusão social para pessoas 60+ em
              Goiás
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#problema"
                className="bg-gradient-to-r from-ipe to-ipe-dark text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.05 }}
              >
                Ver Apresentação
              </motion.a>
              <motion.a
                href="/demo"
                className="bg-white text-ipe border-2 border-ipe px-8 py-4 rounded-full text-lg font-medium hover:bg-ipe/10 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Ver Demo Interativa
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Slide 2 - Problema */}
      <section
        id="problema"
        className="min-h-screen flex items-center py-20 bg-gradient-to-br from-white to-neutral-light"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center">
                <TrendingDown className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-5xl font-bold text-neutral-dark">O Problema</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  stat: "31%",
                  label: "dos idosos brasileiros sofrem solidão crônica",
                  source: "IBGE, 2023",
                },
                {
                  stat: "45%",
                  label: "têm transtornos mentais não diagnosticados",
                  source: "Pesquisa Nacional",
                },
                {
                  stat: "68%",
                  label: "enfrentam exclusão digital",
                  source: "TIC Domicílios",
                },
                {
                  stat: "89%",
                  label: "preferem envelhecer em casa, mas carecem de suporte",
                  source: "OMS",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white rounded-3xl p-8 shadow-lg border-l-4 border-red-500"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="text-5xl font-bold text-red-500 mb-4">
                    {item.stat}
                  </div>
                  <p className="text-xl text-neutral-dark mb-2">{item.label}</p>
                  <p className="text-sm text-neutral-dark/50">{item.source}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-12 bg-gradient-to-r from-red-50 to-red-100 rounded-3xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-2xl text-neutral-dark text-center font-medium">
                <span className="font-bold text-red-600">524 mil idosos</span> em
                Goiás (14,6% da população) precisam de soluções urgentes
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Slide 3 - Solução */}
      <section className="min-h-screen flex items-center py-20 bg-gradient-to-br from-ipe-light/20 via-white to-cerrado-light/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 bg-gradient-to-br from-ipe to-ipe-dark rounded-2xl flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-5xl font-bold text-neutral-dark">Memória Viva+</h2>
            </div>

            <p className="text-2xl text-neutral-dark/80 mb-12 max-w-4xl leading-relaxed">
              Plataforma de{" "}
              <span className="font-bold text-wisdom-dark">
                tecnologia afetiva
              </span>{" "}
              que combina{" "}
              <span className="font-bold text-ipe-dark">
                IA conversacional, redes sociais seguras
              </span>{" "}
              e{" "}
              <span className="font-bold text-cerrado-dark">
                integração territorial com serviços públicos de Goiás
              </span>{" "}
              para ampliar autonomia, bem-estar mental e inclusão social de pessoas 60+.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: BookOpen,
                  title: "Memória Viva",
                  description: "Storytelling terapêutico com IA",
                  color: "cerrado",
                },
                {
                  icon: Users,
                  title: "Círculos de Sabedoria",
                  description: "Rede social segura para 60+",
                  color: "ipe",
                },
                {
                  icon: Bot,
                  title: "Pequi",
                  description: "Companheiro emocional 24/7",
                  color: "wisdom",
                },
                {
                  icon: Map,
                  title: "Mapa de Eventos",
                  description: "Integração territorial",
                  color: "ipe",
                },
                {
                  icon: Mic,
                  title: "Controle por Voz",
                  description: "Zero barreira tecnológica",
                  color: "cerrado",
                },
                {
                  icon: Heart,
                  title: "Bem-Estar Mental",
                  description: "Check-ins e acompanhamento",
                  color: "wisdom",
                },
              ].map((feature, idx) => {
                const colorClasses = {
                  cerrado: "from-cerrado-light to-cerrado",
                  ipe: "from-ipe-light to-ipe",
                  wisdom: "from-wisdom-light to-wisdom",
                };
                const IconComponent = feature.icon;

                return (
                  <motion.div
                    key={idx}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorClasses[feature.color as keyof typeof colorClasses]} flex items-center justify-center mb-4 shadow-md`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-dark mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-dark/70">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Slide 4 - Diferencial */}
      <section className="min-h-screen flex items-center py-20 bg-gradient-to-br from-wisdom-light/30 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 bg-gradient-to-br from-cerrado to-cerrado-dark rounded-2xl flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-5xl font-bold text-neutral-dark">
                Nosso Diferencial
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                {[
                  {
                    title: "Acessibilidade Total",
                    description:
                      "Botões grandes (80x80px), alto contraste, fontes ajustáveis, navegação por voz",
                  },
                  {
                    title: "IA Afetiva",
                    description:
                      "Não é chatbot genérico - desenvolve vínculo emocional real",
                  },
                  {
                    title: "Integração Goiás",
                    description:
                      "Primeira solução integrada com Goiás Social, CRAS e serviços públicos",
                  },
                  {
                    title: "Zero Infantilização",
                    description:
                      "Design respeitoso que promove autonomia, não dependência",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <CheckCircle className="w-6 h-6 text-ipe flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-neutral-dark mb-2">
                        {item.title}
                      </h3>
                      <p className="text-neutral-dark/70">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="bg-gradient-to-br from-cerrado-light to-cerrado/30 rounded-3xl p-8 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                      <img src="/pequi.png" alt="Pequi" width={96} height={96} className="object-contain" />
                    </div>
                  <h3 className="text-3xl font-bold text-neutral-dark mb-4">
                    Pequi
                  </h3>
                  <p className="text-xl text-neutral-dark/80">
                    Mascote que conecta tecnologia com a cultura goiana (pequi
                    humanizado)
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Slide 5 - Impacto */}
      <section className="min-h-screen flex items-center py-20 bg-gradient-to-br from-white to-ipe-light/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 bg-gradient-to-br from-wisdom to-wisdom-dark rounded-2xl flex items-center justify-center">
                <BarChart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-5xl font-bold text-neutral-dark">
                Impacto Esperado
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  metric: "40%",
                  label: "Redução nos índices de solidão",
                  period: "6 meses",
                  color: "ipe",
                },
                {
                  metric: "60%",
                  label: "Aumento na participação comunitária",
                  period: "1 ano",
                  color: "cerrado",
                },
                {
                  metric: "50%",
                  label: "Melhoria em bem-estar mental",
                  period: "6 meses",
                  color: "wisdom",
                },
                {
                  metric: "10 mil",
                  label: "Idosos incluídos digitalmente",
                  period: "1º ano em Goiás",
                  color: "ipe",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className={`bg-gradient-to-br from-${item.color}-light to-white rounded-3xl p-8 shadow-lg`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className={`text-6xl font-bold text-${item.color}-dark mb-4`}>
                    {item.metric}
                  </div>
                  <p className="text-xl text-neutral-dark font-medium mb-2">
                    {item.label}
                  </p>
                  <p className="text-sm text-neutral-dark/60">em {item.period}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="bg-gradient-to-r from-ipe to-ipe-dark text-white rounded-3xl p-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-3xl font-bold mb-4">
                Visão: Referência Nacional em Gerontecnologia
              </p>
              <p className="text-xl opacity-90">
                Escalável para todo o Brasil após validação em Goiás
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Slide 6 - Próximos Passos */}
      <section className="min-h-screen flex items-center py-20 bg-gradient-to-br from-cerrado-light/20 via-white to-wisdom-light/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 bg-gradient-to-br from-ipe to-ipe-dark rounded-2xl flex items-center justify-center">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-5xl font-bold text-neutral-dark">
                Próximos Passos
              </h2>
            </div>

            <div className="space-y-6 mb-12">
              {[
                {
                  phase: "Fase 1 - MVP (3 meses)",
                  items: [
                    "Desenvolvimento do MVP com funcionalidades core",
                    "Piloto com 100 idosos em Goiânia",
                    "Validação de usabilidade e impacto",
                  ],
                },
                {
                  phase: "Fase 2 - Escala (6 meses)",
                  items: [
                    "Expansão para 1.000 usuários",
                    "Integração oficial com Goiás Social",
                    "Implementação de IA conversacional",
                  ],
                },
                {
                  phase: "Fase 3 - Consolidação (1 ano)",
                  items: [
                    "10 mil usuários ativos em Goiás",
                    "Parcerias com municípios do interior",
                    "Preparação para expansão nacional",
                  ],
                },
              ].map((phase, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <h3 className="text-2xl font-bold text-neutral-dark mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-ipe text-white rounded-full flex items-center justify-center text-lg">
                      {idx + 1}
                    </span>
                    {phase.phase}
                  </h3>
                  <ul className="space-y-2">
                    {phase.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-neutral-dark/80"
                      >
                        <ArrowRight className="w-5 h-5 text-ipe flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="bg-gradient-to-br from-wisdom-light to-cerrado-light rounded-3xl p-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-neutral-dark mb-6">
                Junte-se a Nós
              </h3>
              <p className="text-xl text-neutral-dark/80 mb-8 max-w-3xl mx-auto">
                Este projeto pode transformar o envelhecimento em Goiás e ser
                referência nacional em tecnologia afetiva para idosos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/demo"
                  className="bg-gradient-to-r from-ipe to-ipe-dark text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
                >
                  Ver Demo Interativa
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/"
                  className="bg-white text-neutral-dark border-2 border-neutral-dark/20 px-8 py-4 rounded-full text-lg font-medium hover:border-ipe hover:text-ipe transition-colors"
                >
                  Voltar ao Início
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer Info */}
      <section className="bg-neutral-dark text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl mb-2">
            <span className="font-bold text-cerrado">Memória Viva+</span> - Campus
            GO Ideathon 2025
          </p>
          <p className="text-sm opacity-70">
            Desafio 1: Tecnologia para Bem-Estar Mental e Social 60+
          </p>
        </div>
      </section>
    </main>
  );
}
