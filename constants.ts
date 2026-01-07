import { Song, Theme, CardData } from './types';

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
    name: "O Mundo Dela", // O ÚNICO TEMA ROXO
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
  },
  {
    name: "Elegância",
    bgClass: "bg-[#020617]", // Deep Slate/Gray
    accentText: "text-slate-400",
    accentBg: "bg-slate-500",
    textMain: "text-slate-50",
    textMuted: "text-slate-400/60",
    selection: "selection:bg-slate-800 selection:text-slate-100"
  },
  {
    name: "Intimidade",
    bgClass: "bg-[#1f0208]", // Dark Pink/Rose
    accentText: "text-pink-500",
    accentBg: "bg-pink-600",
    textMain: "text-pink-50",
    textMuted: "text-pink-300/60",
    selection: "selection:bg-pink-900/40 selection:text-pink-100"
  },
  {
    name: "Luxúria",
    bgClass: "bg-[#160800]", // Dark Amber/Brown
    accentText: "text-amber-500",
    accentBg: "bg-amber-600",
    textMain: "text-amber-50",
    textMuted: "text-amber-300/60",
    selection: "selection:bg-amber-900/40 selection:text-amber-100"
  },
  {
    name: "Obsessão",
    bgClass: "bg-[#011210]", // Deep Teal
    accentText: "text-teal-500",
    accentBg: "bg-teal-600",
    textMain: "text-teal-50",
    textMuted: "text-teal-300/60",
    selection: "selection:bg-teal-900/40 selection:text-teal-100"
  },
  {
    name: "Eclipse",
    bgClass: "bg-[#050505]", // Pure Dark/Zinc
    accentText: "text-zinc-400",
    accentBg: "bg-zinc-600",
    textMain: "text-zinc-100",
    textMuted: "text-zinc-500",
    selection: "selection:bg-zinc-800 selection:text-white"
  },
  {
    name: "Instinto",
    bgClass: "bg-[#0a1201]", // Dark Lime
    accentText: "text-lime-500",
    accentBg: "bg-lime-600",
    textMain: "text-lime-50",
    textMuted: "text-lime-300/60",
    selection: "selection:bg-lime-900/40 selection:text-lime-100"
  },
  {
    name: "Paraíso",
    bgClass: "bg-[#020e14]", // Deep Sky/Cyan
    accentText: "text-cyan-500",
    accentBg: "bg-cyan-600",
    textMain: "text-cyan-50",
    textMuted: "text-cyan-300/60",
    selection: "selection:bg-cyan-900/40 selection:text-cyan-100"
  }
];

// Cards exibidos após o fim do contador (EXATAMENTE 16 CARDS)
export const FINAL_CARDS: CardData[] = [
  {
    id: 1,
    title: "Silêncio",
    text: "16 dias de um silêncio estranho por aqui. Faltou a trilha sonora dos seus pensamentos aleatórios."
  },
  {
    id: 2,
    title: "Geografia",
    text: "Poços aproveitou a visita, mas já deu. BH ficou meio sem graça sem você."
  },
  {
    id: 3,
    title: "Sintonia",
    text: "Foi muito bom conversar com você esses dias. Mesmo de longe, parece que a sintonia aumentou."
  },
  {
    id: 4,
    title: "Personagem",
    text: "É divertido demais acompanhar essa 'personagem' caótica e interessante chamada Anna Beatriz."
  },
  {
    id: 5,
    title: "Playlist",
    text: "Tocou Sarah Beatriz aqui e eu ri sozinho. Impossível não lembrar de você na hora."
  },
  {
    id: 6,
    title: "Detalhes",
    text: "Senti falta de ver esse nariz empinado reclamando de alguma coisa."
  },
  {
    id: 7,
    title: "Crime",
    text: "Ficar 16 dias sem o seu nível de deboche deveria ser crime."
  },
  {
    id: 8,
    title: "O Game",
    text: "Agora começa o 'game' de verdade. Boa sorte nas batalhas que vêm por aí."
  },
  {
    id: 9,
    title: "Viagem",
    text: "Torcendo pra viagem não ter sido ruim, já que eu sei o quanto você odeia ônibus."
  },
  {
    id: 10,
    title: "Histórias",
    text: "Meus ouvidos sentiram falta de serem o depósito oficial das suas histórias."
  },
  {
    id: 11,
    title: "Uber",
    text: "Os motoristas de Uber de BH devem ter achado o trânsito quieto demais sem sua conversa."
  },
  {
    id: 12,
    title: "Semana",
    text: "Passei esses 16 dias 'seguramente esperançoso' de que a semana passasse rápido."
  },
  {
    id: 13,
    title: "Melancolia",
    text: "A gente ainda tá se conhecendo, mas se a melancolia bater, sabe onde me encontrar."
  },
  {
    id: 14,
    title: "Carreira",
    text: "Ainda bem que você vai ser uma ótima advogada, porque vivendo de arte... a fome era certa."
  },
  {
    id: 15,
    title: "Dinâmica",
    text: "No fim das contas, dá até uma saudadezinha dessa nossa dinâmica à distância."
  },
  {
    id: 16,
    title: "O Caos",
    text: "16 dias foi tempo demais. Que bom que o caos da vida te trouxe de volta pra perto."
  }
];

// Frases exclusivas para o momento FINAL (Pós-Contador)
export const FINALE_QUOTES: string[] = [
  "Aproveitando o clima fofo, seu panetone ficou na casa da minha tia, e eu so busco no sabado (preguiça mesmo)"
];

// Frases exclusivas para quando estiver no tema Roxo (Durante a espera)
export const PURPLE_QUOTES: string[] = [
  "Roxo é quando o mistério resolve aparecer.",
  "Tem coisa que só o roxo explica.",
  "Roxo não grita — envolve.",
  "Elegância também pode ser intensa.",
  "O roxo não pede atenção. Ele toma.",
  "Tem clima que é claramente roxo.",
  "Nem escuro, nem claro. Profundo.",
  "Roxo é a cor de quem sabe demais.",
  "Algumas intenções combinam com luz baixa.",
  "Roxo não é fase. É identidade.",
  "Entre o desejo e o controle, escolhi o roxo.",
  "Roxo é quando o silêncio fica interessante.",
  "Tem noites que pedem essa cor.",
  "O roxo não é óbvio. É escolha.",
  "Mistério também pode ser confortável.",
  "Roxo combina com quem não se explica.",
  "Tem beleza que não quer ser entendida.",
  "Roxo é charme com segundas intenções.",
  "Não é drama. É profundidade.",
  "O roxo chega antes da decisão.",
  "Algumas vontades têm essa cor.",
  "Roxo é quando a calma esconde fogo.",
  "Elegância com um toque de perigo.",
  "Roxo não passa despercebido — permanece.",
  "Se fosse um sentimento, seria roxo.",
  
  // Originais mantidas para consistência
  "No seu tom favorito, o meu mundo ganha cor.",
  "Você é a realeza que habita meus pensamentos.",
  "Tudo fica mais bonito na cor que você ama.",
  "Roxo é a cor da saudade que tenho de você."
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

// NOVAS FRASES (60% de chance)
export const FRESH_QUOTES: string[] = [
  // Novas Frases Adicionadas Recentemente
  "Agora que você chegou, o resto é detalhe.",
  "Tem coisa que só faz sentido quando acontece perto.",
  "A distância acabou. O efeito colateral começa agora.",
  "Algumas presenças não cabem na tela.",
  "O tempo parou de contar. Agora sente.",
  "O que era ideia virou intenção.",
  "Não atualiza a página. Se aproxima.",
  "Tem silêncio que pede menos texto e mais você.",
  "Ao vivo, tudo ganha outra camada.",
  "A espera foi longa. O momento não vai ser.",
  "Algumas promessas não precisam ser ditas.",
  "O que vem depois é melhor sem roteiro.",
  "A parte interessante começa fora do site.",
  "Menos palavras. Mais proximidade.",
  "O contador zerou, mas a vontade não.",
  "Agora é presença sem legenda.",
  "O tempo fez a parte dele. Agora é com a gente.",
  "Nem tudo precisa ser explicado quando é sentido.",
  "A tela cumpriu seu papel. Agora é você.",

  // Indiretas & Provocativas
  "Tem gente que chega devagar. Você chega bagunçando tudo.",
  "Não é saudade, é só o corpo lembrando do que é bom.",
  "Tem silêncio que provoca mais do que palavra.",
  "Se intenção fosse visível, você já teria sido presa.",
  "Não prometo juízo quando você sorri desse jeito.",
  "Às vezes não é carência. É lembrança bem localizada.",
  "Tem gente que beija com a boca. Outras com a presença.",
  "Se você soubesse o efeito colateral que causa…",
  "Não era convite. Mas você sempre entendeu assim.",
  "Alguns pensamentos não são impróprios — só mal comportados.",
  "A cidade fica pequena quando você passa perto.",
  "Tem coisa que não se diz. Se aproxima.",
  "Eu até tento ser educado, mas você não colabora.",
  "Não é provocação. É talento natural.",
  "Cuidado: proximidade excessiva pode gerar consequências.",
  "Tem olhar que não pede permissão.",
  "Você não é distração. É interrupção.",
  "Nem tudo que esquenta precisa ser explicado.",
  "Se isso fosse coincidência, seria insistente demais.",
  "Tem conversa que começa inocente e termina interessante.",
  "Anna, você tem um jeito perigoso de parecer tranquila.",
  "Anna, sua calma não combina com o efeito que causa.",
  "Anna, você não chega — você acontece.",
  "Tem gente que tira o sono. Outras tiram a calma.",
  "Não era pra ser intenso, mas você estava envolvida.",
  "Tem sorriso que convida sem dizer nada.",
  "Não confunda paciência com falta de vontade.",
  "Tem ideia que nasce errada… e deliciosa.",
  "Você não testa limites. Você redefine.",
  "Às vezes o problema é pensar demais em você.",
  "Não é charme. É estratégia inconsciente.",
  "Se fosse só curiosidade, já tinha passado.",
  "Tem clima que não pede legenda.",
  "Anna, você devia vir com aviso.",
  "Não cheguei perto por educação. Me afastei por autocontrole.",
  "Tem presença que pesa mais que toque.",
  "Não era flerte. Mas se foi, funcionou.",
  "Você não provoca. Você sugere.",
  "Certas intenções gostam de companhia.",
  "Não sou direto. Mas você entende rápido.",
  "Anna, você complica minha versão comportada.",
  "Tem desejo que sabe esperar.",
  "Você não desarruma. Você organiza o caos.",
  "Algumas ideias ficam melhores à noite.",
  "Não é tensão. É sintonia mal resolvida.",
  "Anna, seu nome combina com segundas intenções.",
  "Não me olha assim se não quiser resposta.",
  "Tem atração que dispensa explicação.",
  "Se eu chegar mais perto, não foi por acaso.",
  "Algumas vontades não pedem permissão — só tempo.",

  // Panetone de Tortuguita
  "Não é suborno. É um panetone de Tortuguita entregue com intenção.",
  "Se eu aparecer com um panetone de Tortuguita, finja surpresa.",
  "Alguns presentes não pedem ocasião. Só coragem.",
  "Tem coisa que não se explica. Se entrega.",
  "Não é Natal. É só vontade de te ver sorrir.",
  "Panetone de Tortuguita não resolve tudo… mas ajuda bastante.",

  // Tinder -> Nós
  "Talvez seja o caso de largar o Tinder e investir em algo com mais potencial.",
  "Tem match que cansa. Tem gente que vale o investimento.",
  "Entre deslizar pra direita e te encontrar, a escolha é óbvia.",
  "Alguns algoritmos não competem com presença.",
  "Não é exclusividade. É prioridade.",
  "Tem conexão que não precisa de aplicativo.",

  // Locais & Vibes
  "Cafeteria, mesa pequena e conversa longa. Combina com você.",
  "Tem encontro que começa com café e termina com planos.",
  "Café forte, papo melhor ainda.",
  "Algumas conversas pedem xícara na mão.",
  "Você olhando uma obra no museu e explicando algo que ninguém perguntou.",
  "Museu é só desculpa pra andar devagar e conversar.",
  "Tem arte que fica na parede. Outras sentam do seu lado.",
  "Um dia na Pampulha, sol leve e você reclamando do calor.",
  "Caminhar sem pressa, rir sem motivo na orla.",
  "A Pampulha fica melhor quando você aparece.",
  "CCBB, exposição estranha e você fingindo entender tudo.",
  "Não é sobre a arte. É sobre o comentário depois.",
  "Alguns passeios rendem mais conversa do que foto."
];

// FRASES CLÁSSICAS (40% de chance)
export const CLASSIC_QUOTES: string[] = [
  "Algumas pessoas não se esquecem. Se esperam.",
  "O amor sabe contar as horas até o reencontro.",
  "Distância é apenas um detalhe quando a alma está perto.",
  "Onde quer que você esteja, estou com você.",
  "O tempo não apaga o que o coração gravou.",
  "Minha saudade tem nome e sobrenome.",
  "Em breve, o silêncio será preenchido por nós.",
  "A noite passa, eu fico, você insiste.",
  "Não te escrevo pra não te ter só aqui.",
  "A distância não esfria. Ela concentra.",
  "O silêncio ficou grande desde que você saiu.",
  "Se te esquecer fosse fácil, eu já teria tentado.",
  "Eu me controlo… até lembrar de você.",
  "O problema não é a distância, é a imaginação.",
  "Te querer de longe é um risco diário.",
  "A ausência não é neutra.",
  "Algumas vontades pedem silêncio.",
  "Você virou referência.",
  "Tem gente que muda o ritmo do tempo.",
  "Não te procuro, te reconheço.",
  "O que sinto não depende de proximidade.",
  "Você ficou mesmo indo.",
  "Nem todo amor precisa de presença constante.",
  "O tempo não diminuiu. Só confirmou.",
  "Você ainda é o lugar onde eu volto.",
  "A casa ficou grande demais.",
  "A madrugada me conhece.",
  "O silêncio aprendeu meu nome.",
  "Ficar sozinho também é sentir.",
  "A ausência tem peso.",
  "A noite sempre entrega.",
  "Algumas faltas não passam.",
  "Atualização: ainda pensando.",
  "Prometi não pensar. Falhei.",
  "Distância: 1 / Eu: 0",
  "Seguindo normalmente, sentindo intensamente.",
  "Status emocional: instável.",
  "Fingindo maturidade com sucesso duvidoso.",
  "Essa saudade já virou hábito.",
  "Toda boa história tem um intervalo.",
  "A gente ainda está no ato dois.",
  "Tem coisas que só funcionam no tempo certo.",
  "Algumas cenas pedem espera.",
  "Nem todo silêncio é vazio.",
  "A distância também é narrativa.",
  "O final ainda não foi escrito.",
  "Tem histórias que precisam de pausa.",
  "Esperar também é agir.",
  "Sentir não é perda de tempo.",
  "O que permanece não depende.",
  "Nem tudo que é intenso é imediato.",
  "Distância não apaga intenção.",
  "O tempo não ensina, revela.",
  "A ausência também comunica.",
  "Essa música sabe demais.",
  "Difícil ouvir sem lembrar.",
  "Volume alto pra não pensar.",
  "Essa chega perto demais.",
  "Algumas músicas atravessam.",
  "Essa não respeita distância.",
  "Essa toca onde falta.",
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