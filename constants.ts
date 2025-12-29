import { Song, Theme } from './types';

export const TARGET_DATE = '2026-01-07T00:00:00-03:00'; // Brasilia Time

export const PLAYLIST: Song[] = [
  { id: 'b0J0p8y1nLc', title: 'Te Esperando', artist: 'Luan Santana' },
  { id: 'hLQl3WQQoQ0', title: 'Someone Like You', artist: 'Adele' },
  { id: '2B3Zg2k-gWc', title: 'Leal', artist: 'Djonga' },
  { id: 'PdwY9A2fVqo', title: 'Pra Você Acreditar', artist: 'Ferrugem' },
  { id: 'Ri7-vnrJD3k', title: 'Easy On Me', artist: 'Adele' },
  { id: 'Uo_H5t9UqVw', title: 'Escreve Aí', artist: 'Luan Santana' }
];

export const THEMES: Theme[] = [
  {
    name: "Paixão",
    bgClass: "bg-[#0f0204]", // Dark Red/Black
    accentText: "text-red-500",
    accentBg: "bg-red-600",
    textMain: "text-rose-50",
    textMuted: "text-rose-300/60",
    selection: "selection:bg-red-900/40 selection:text-red-100"
  },
  {
    name: "O Mundo Dela", // O TEMA EXCLUSIVO
    bgClass: "bg-[#0c0214]", // Deepest Purple
    accentText: "text-purple-400",
    accentBg: "bg-fuchsia-800", // Mais vibrante para o background
    textMain: "text-purple-50",
    textMuted: "text-purple-300/60",
    selection: "selection:bg-purple-900/60 selection:text-purple-100"
  },
  {
    name: "Profundidade",
    bgClass: "bg-[#020210]", // Deep Blue
    accentText: "text-blue-500",
    accentBg: "bg-blue-600",
    textMain: "text-blue-50",
    textMuted: "text-blue-300/60",
    selection: "selection:bg-blue-900/40 selection:text-blue-100"
  },
  {
    name: "Nostalgia",
    bgClass: "bg-[#0c0a08]", // Dark Sepia/Orange
    accentText: "text-orange-500",
    accentBg: "bg-orange-600",
    textMain: "text-stone-50",
    textMuted: "text-stone-400",
    selection: "selection:bg-orange-900/40 selection:text-orange-100"
  },
  {
    name: "Esperança",
    bgClass: "bg-[#010a05]", // Deep Emerald
    accentText: "text-emerald-500",
    accentBg: "bg-emerald-600",
    textMain: "text-emerald-50",
    textMuted: "text-emerald-300/60",
    selection: "selection:bg-emerald-900/40 selection:text-emerald-100"
  }
];

// Frases exclusivas para quando estiver no tema Roxo
export const PURPLE_QUOTES: string[] = [
  "No seu tom favorito, o meu mundo ganha cor.",
  "Você é a realeza que habita meus pensamentos.",
  "Tudo fica mais bonito na cor que você ama.",
  "Roxo é a cor da saudade que tenho de você.",
  "Minha ametista preciosa, conto os dias.",
  "O universo conspirou para te dar essa cor.",
  "Seu gosto define a beleza deste lugar.",
  "Na sua cor, encontro a paz que sua ausência tirou."
];

export const QUOTES: string[] = [
  "A distância impede o toque, mas não o sentimento.",
  "Cada segundo longe é uma eternidade esperando por você.",
  "Te desejo com a urgência de quem não sabe esperar, mas espera.",
  "O relógio anda devagar quando a saudade tem pressa.",
  "Há um lugar em mim onde você nunca vai embora.",
  "Sua ausência ocupa todos os cômodos da minha mente.",
  "Sonhar com você é minha fuga favorita da realidade.",
  "A espera só confirma o tamanho do que sinto.",
  "Não há quilômetros suficientes para apagar seu rastro em mim.",
  "A saudade é o preço que se paga por viver momentos inesquecíveis.",
  "Meu desejo atravessa fusos horários só para te encontrar.",
  "Guardo seu cheiro na memória para os dias cinzas.",
  "Você é a minha melancolia favorita e meu desejo mais profundo.",
  "A noite traz o silêncio e o eco da sua voz na minha cabeça.",
  "Esperar por você é a única certeza que tenho hoje.",
  "Nossos corpos se conhecem mesmo de longe.",
  "A cada dia que passa, falta um dia a menos para o nosso reencontro.",
  "Seu nome é o segredo que meus lábios sussurram antes de dormir.",
  "A distância é apenas um teste para ver quão longe o amor pode viajar.",
  "Te amar é sentir sua falta mesmo quando fecho os olhos.",
  "Você é o horizonte que eu nunca canso de admirar.",
  "Meus pensamentos são linhas traçadas em sua direção.",
  "O vazio da cama é preenchido pela lembrança do seu corpo.",
  "Somos dois, perdidos no tempo, tentando nos encontrar no espaço.",
  "A saudade dói, mas é a prova de que tudo valeu a pena.",
  "Desejo o toque da sua pele como a terra seca deseja a chuva.",
  "Nenhuma distância é capaz de diminuir o que queima por dentro.",
  "Você é a poesia que o tempo escreveu na minha vida.",
  "Espero o dia em que o 'tchau' será apenas um 'até logo'.",
  "Te esperar não é uma escolha, é uma necessidade da minha alma."
];

export const FOOTER_QUOTES: string[] = [
  "Algumas pessoas não se esquecem. Se esperam.",
  "O amor sabe contar as horas até o reencontro.",
  "Distância é apenas um detalhe quando a alma está perto.",
  "Onde quer que você esteja, estou com você.",
  "O tempo não apaga o que o coração gravou.",
  "Minha saudade tem nome e sobrenome.",
  "Em breve, o silêncio será preenchido por nós.",
  
  // Poemas Curtos
  "A noite passa, eu fico, você insiste.",
  "Não te escrevo pra não te ter só aqui.",
  "A distância não esfria. Ela concentra.",
  "O silêncio ficou grande desde que você saiu.",
  "Se te esquecer fosse fácil, eu já teria tentado.",

  // Provocativas
  "Pensar em você sempre passa do limite.",
  "A distância deixa a gente mais honesto.",
  "Tem saudade que não cabe em conversa.",
  "Eu me controlo… até lembrar de você.",
  "O problema não é a distância, é a imaginação.",
  "Te querer de longe é um risco diário.",
  "A ausência não é neutra.",
  "Algumas vontades pedem silêncio.",

  // Românticas Profundas
  "Você virou referência.",
  "Tem gente que muda o ritmo do tempo.",
  "Não te procuro, te reconheço.",
  "O que sinto não depende de proximidade.",
  "Você ficou mesmo indo.",
  "Nem todo amor precisa de presença constante.",
  "O tempo não diminuiu. Só confirmou.",
  "Você ainda é o lugar onde eu volto.",

  // Solidão Estética
  "A casa ficou grande demais.",
  "A madrugada me conhece.",
  "O silêncio aprendeu meu nome.",
  "Ficar sozinho também é sentir.",
  "A ausência tem peso.",
  "A noite sempre entrega.",
  "Algumas faltas não passam.",

  // Brincalhonas / Emocionais
  "Atualização: ainda pensando.",
  "Prometi não pensar. Falhei.",
  "Distância: 1 / Eu: 0",
  "Seguindo normalmente, sentindo intensamente.",
  "Status emocional: instável.",
  "Fingindo maturidade com sucesso duvidoso.",
  "Essa saudade já virou hábito.",

  // Alusões
  "Toda boa história tem um intervalo.",
  "A gente ainda está no ato dois.",
  "Tem coisas que só funcionam no tempo certo.",
  "Algumas cenas pedem espera.",
  "Nem todo silêncio é vazio.",
  "A distância também é narrativa.",
  "O final ainda não foi escrito.",
  "Tem histórias que precisam de pausa.",

  // Filosóficas
  "Esperar também é agir.",
  "Sentir não é perda de tempo.",
  "O que permanece não depende.",
  "Nem tudo que é intenso é imediato.",
  "Distância não apaga intenção.",
  "O tempo não ensina, revela.",
  "A ausência também comunica.",

  // Música
  "Essa música sabe demais.",
  "Difícil ouvir sem lembrar.",
  "Volume alto pra não pensar.",
  "Essa chega perto demais.",
  "Algumas músicas atravessam.",
  "Essa não respeita distância.",
  "Essa toca onde falta.",

  // Encerramento
  "Algumas pessoas valem a espera.",
  "O tempo não levou.",
  "Ainda aqui.",
  "Continuo.",
  "A história segue.",
  "Não acabou.",
  "Só não chegou ainda."
];

export const TIME_GREETINGS = {
  morning: "Que seu dia comece pensando em nós.",
  afternoon: "A tarde passa devagar sem você aqui.",
  night: "A noite é quando a saudade mais grita."
};

// Converted to array for randomization
export const HIDDEN_MESSAGES: string[] = [
  "Eu te amo em todos os tempos verbais, principalmente no futuro.",
  "Se você está lendo isso, então também ficou. Mesmo indo.",
  "Nem toda ausência é despedida.",
  "Eu esperei. Não em silêncio."
];