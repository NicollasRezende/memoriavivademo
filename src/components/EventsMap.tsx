"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, Users as UsersIcon, Navigation } from "lucide-react";

const events = [
  {
    title: "Oficina de Violão",
    location: "Centro de Convivência - Setor Bueno",
    distance: "800m",
    date: "Amanhã",
    time: "14:00",
    attendees: 12,
    category: "Música",
    color: "cerrado",
  },
  {
    title: "Caminhada no Parque",
    location: "Parque Vaca Brava",
    distance: "1.2km",
    date: "Quarta-feira",
    time: "08:00",
    attendees: 8,
    category: "Saúde",
    color: "ipe",
  },
  {
    title: "Roda de Conversa",
    location: "CRAS - Setor Oeste",
    distance: "600m",
    date: "Sexta-feira",
    time: "15:00",
    attendees: 15,
    category: "Social",
    color: "wisdom",
  },
  {
    title: "Feira de Artesanato",
    location: "Praça Cívica",
    distance: "2.5km",
    date: "Sábado",
    time: "09:00",
    attendees: 45,
    category: "Cultura",
    color: "cerrado",
  },
];

export default function EventsMap() {
  return (
    <section className="py-20 bg-gradient-to-br from-neutral-light to-white relative overflow-hidden">
      {/* Asymmetric decoration */}
      <div className="absolute bottom-0 left-0 w-1/2 h-2/3 bg-gradient-to-tr from-ipe-light/10 to-transparent rounded-tr-[200px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Left side - Map mockup (larger, asymmetric - 3 columns) */}
          <motion.div
            className="lg:col-span-3 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
              {/* Map header */}
              <div className="bg-gradient-to-r from-ipe to-ipe-dark p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6" />
                    <h3 className="text-2xl font-bold">Eventos Próximos</h3>
                  </div>
                  <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full text-sm font-medium transition-colors">
                    <Navigation className="w-4 h-4 inline mr-2" />
                    Filtrar
                  </button>
                </div>
                <p className="text-sm opacity-90">
                  📍 Setor Oeste, Goiânia • Raio de 3km
                </p>
              </div>

              {/* Map visual */}
              <div className="relative bg-gradient-to-br from-ipe-light/20 to-cerrado-light/20 h-96">
                {/* Simplified map representation */}
                <div className="absolute inset-0 p-8">
                  {/* Center marker (user location) */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <div className="w-16 h-16 bg-wisdom rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-white px-3 py-1 rounded-full text-xs font-medium shadow-md">
                      Você está aqui
                    </div>
                  </motion.div>

                  {/* Event markers */}
                  {[
                    { top: "25%", left: "60%", color: "cerrado" },
                    { top: "40%", left: "30%", color: "ipe" },
                    { top: "65%", left: "55%", color: "wisdom" },
                    { top: "30%", left: "75%", color: "cerrado" },
                  ].map((marker, index) => (
                    <motion.div
                      key={index}
                      className="absolute"
                      style={{ top: marker.top, left: marker.left }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.2 }}
                    >
                      <div
                        className={`w-12 h-12 bg-${marker.color} rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform`}
                      >
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                    </motion.div>
                  ))}

                  {/* Distance circles */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-wisdom/30 rounded-full" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-wisdom/20 rounded-full" />
                </div>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-r from-neutral-light/50 to-white">
                {[
                  { value: "24", label: "Eventos esta semana" },
                  { value: "8", label: "A menos de 1km" },
                  { value: "156", label: "Pessoas participando" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-2xl font-bold text-ipe">{stat.value}</p>
                    <p className="text-xs text-neutral-dark/70">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side - Events list (smaller, 2 columns) */}
          <motion.div
            className="lg:col-span-2 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-10 h-10 text-cerrado" />
                <h2 className="text-4xl font-bold text-neutral-dark">
                  Agenda Local
                </h2>
              </div>
              <p className="text-lg text-neutral-dark/70">
                Integrado com Goiás Social, Centros de Convivência e CRAS
              </p>
            </div>

            <div className="space-y-4">
              {events.map((event, index) => {
                const colorClasses = {
                  cerrado: "bg-cerrado border-cerrado",
                  ipe: "bg-ipe border-ipe",
                  wisdom: "bg-wisdom border-wisdom",
                };

                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all border-l-4 border-transparent hover:border-ipe"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-bold text-neutral-dark mb-1">
                          {event.title}
                        </h4>
                        <div className="flex items-center gap-2 text-sm text-neutral-dark/60 mb-2">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                          colorClasses[event.color as keyof typeof colorClasses].split(" ")[0]
                        }`}
                      >
                        {event.distance}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-neutral-dark/70 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <UsersIcon className="w-4 h-4" />
                        {event.attendees}
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-ipe to-ipe-dark text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">
                      Confirmar Presença
                    </button>
                  </motion.div>
                );
              })}
            </div>

            {/* Carpool feature */}
            <motion.div
              className="mt-6 bg-gradient-to-br from-cerrado-light to-cerrado p-6 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="text-3xl">🚗</div>
                <div>
                  <h4 className="font-bold text-neutral-dark">Carona Solidária</h4>
                  <p className="text-sm text-neutral-dark/80">
                    3 vizinhos vão para a oficina de violão
                  </p>
                </div>
              </div>
              <button className="bg-white text-cerrado-dark px-4 py-2 rounded-full text-sm font-medium hover:bg-neutral-light transition-colors">
                Pedir carona →
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
