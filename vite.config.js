import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

/**
 * @fileoverview Configuração Global do Vite.
 * Compila o React previamente, removendo a necessidade do Babel Standalone
 * no navegador. Isso reduz o tamanho da página e aumenta a velocidade.
 */
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // CENTRAL DE PÁGINAS (Build):
      // Para criar uma NOVA PÁGINA que use React, declare-a aqui.
      input: {
        main: resolve(__dirname, 'index.html'),
        quemSomos: resolve(__dirname, 'pages/quem-somos.html'),
        paracirurgia: resolve(__dirname, 'pages/paracirurgia.html'),
        cursos: resolve(__dirname, 'pages/cursos.html'),
        cursoEppi: resolve(__dirname, 'pages/curso-eppi.html'),
        cursoCampo: resolve(__dirname, 'pages/curso-campo.html'),
        cursoImersao: resolve(__dirname, 'pages/curso-imersao.html'),
        cursoProep: resolve(__dirname, 'pages/curso-proep.html'),
        orientacao: resolve(__dirname, 'pages/orientacao-gratuita.html'),
        dinamica: resolve(__dirname, 'pages/dinamica.html'),
        cursoEctoplasmiaInterassistencial: resolve(__dirname, 'pages/curso-ectoplasmia-interassistencial.html'),
        cursoEctoplasmiaProtetiva: resolve(__dirname, 'pages/curso-ectoplasmia-protetiva.html'),
        curso: resolve(__dirname, 'pages/curso.html'),
        rede: resolve(__dirname, 'pages/rede.html'),
        materiais: resolve(__dirname, 'pages/materiais.html')
      }
    }
  }
});