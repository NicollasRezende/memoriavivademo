"use client";

import { Heart, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-3">
              <span className="text-ipe-light">Memória Viva</span>
              <span className="text-cerrado">+</span>
            </h3>
            <p className="text-white/70 leading-relaxed">
              Tecnologia afetiva para ampliar o bem-estar mental e social do público 60+
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-3">Projeto</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#funcionalidades" className="hover:text-ipe-light transition-colors">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#memorias" className="hover:text-ipe-light transition-colors">
                  Memória Viva
                </a>
              </li>
              <li>
                <a href="#circulos" className="hover:text-ipe-light transition-colors">
                  Círculos de Sabedoria
                </a>
              </li>
              <li>
                <a href="#eventos" className="hover:text-ipe-light transition-colors">
                  Eventos
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-3">Contato</h4>
            <p className="text-white/70 mb-4">
              Projeto desenvolvido para o Ideathon Campus GO 2025 - Desafio 1
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-ipe rounded-full flex items-center justify-center transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-ipe rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-ipe rounded-full flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            © 2025 Memória Viva+. Desenvolvido para Campus Party Goiás 2025.
          </p>
          <div className="flex items-center gap-2 text-sm text-white/60">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-ipe-light fill-ipe-light" />
            <span>para Goiás</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
