export type editarMusica = {
  musica: string;
  artista: string;
};

export type Musicas = {
  musica: string;
  artista: string;
  ano: number;
};

export type Playlist = {
  nome: string;
  musicas: Musicas[];
};

export const playlist: Playlist[] = [
  {
    nome: "Anos 80",
    musicas: [
      {
        musica: "is this love",
        artista: "WhiteSnake",
        ano: 1980,
      },
      {
        musica: "welcome to the jungle",
        artista: "Guns and Rose",
        ano: 1980,
      },
    ],
  },
  {
    nome: "Sertanejo",
    musicas: [
      {
        musica: "borbulhas de amor",
        artista: "fagner",
        ano: 1990,
      },
      {
        musica: "Evidencias",
        artista: "xitão",
        ano: 1990,
      },
    ],
  },
  {
    nome: "Anos 2000",
    musicas: [
      {
        musica: "iris",
        artista: "GoGoDools",
        ano: 1990,
      },
      {
        musica: "save me",
        artista: "smallvillage",
        ano: 2000,
      },
    ],
  },
];
