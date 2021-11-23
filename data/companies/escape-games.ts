import { Company, RoomDifficulty, RoomTheme, SurpriseFactor } from "../../lib/model/Company";

const escapeGames: Company = {
  name: "Escape Games",
  website: "https://www.escapegames.com.ar/",
  logo: "/imgs/logos/escape-games.png",
  socialMedia: {
    instagram: "https://www.instagram.com/escapegamesok/",
    twitter: "https://twitter.com/escapegamesok",
    facebook: "https://www.facebook.com/escapegamesok/",
    youtube: "https://www.youtube.com/channel/UCLtHcaRj85njIgpuayir1-A",
    tripadvisor:
      "https://www.tripadvisor.com.ar/Attraction_Review-g312741-d10252041-Reviews-Escape_Games_Suc_Nunez-Buenos_Aires_Capital_Federal_District.html",
  },
  franchises: {
    nunez: {
      name: "Escape Games - Nuñez",
      contact: {
        website: 'https://www.escapegames.com.ar/#sucnu',
        address: "Av. Comodoro Martín Rivadavia 1420",
        location: "Nuñez",
        province: "Buenos Aires",
        country: "Argentina",
        email: "info@escapegames.com.ar",
        whatsapp: "+54 9 11 2884 2589",
        phone: "+54 9 11 2884 2589",
      },
      rooms: {
        "que-paso-ayer": {
          name: "¿Qué pasó ayer?",
          description: [
            "Ni siquiera la resaca de una noche más que intensa apaga la sorpresa de un grupo de amigos que tras festejar la despedida de soltero de Alan, amanecen encerrados en una suite de un lujoso hotel casino.",
            "Nadie recuerda nada, pero algunos indicios sugieren que un cartel narco secuestró a Alan, y esperan recuperar algo para liberarlo con vida.",
          ],
          minPlayers: 2,
          maxPlayers: 5,
          level: RoomDifficulty.INTERMEDIATE,
          link: "https://www.escapegames.com.ar/sala-escape-pecados-capitales/",
          surprise: SurpriseFactor.LOW,
          theme: [RoomTheme.ADVENTURE],
        },
        "la-herencia-del-tio-luis": {
          name: "La Herencia del Tío Luis",
          description: [
            "Al Tío Luis ya casi nadie lo visitaba. Quizás su avanzada edad, su eterna soltería, una depresión, o quien sabe que rara enfermedad, lo había transformado en un personaje disperso, ermitaño y malhumorado.",
            "Juan Manuel, su sobrino predilecto y único heredero, lo hacía solo esporádicamente, las pocas veces que viajaba a la ciudad, y en los últimos años, sus visitas eran tan escuetas como sufridas. No soportaba ver a su querido Tío Luis así, con su nerviosismo hiperactivo, sus ojos perdidos, su obsesión compulsiva, sus infinitos tics, y sus delirantes e incoherentes relatos sobre robos y estafas.",
            "Pero finalmente, la muerte llamó al Tío Luis y la policía llamó a Juan Manuel, para informarle su fallecimiento y dejarle las llaves de su morada, entregadas por el vecino que denunció su deceso.",
            "Juan Manuel viajo a la ciudad de inmediato, acompañado por sus amigos más cercanos, que lo ayudaron con los trámites funerarios, con el sepelio y con el entierro. Y con todo esto terminado, volvieron a la casa del Tío Luis, para inventariar sus pocas pertenencias.",
            "Pero el sucio y oscuro PH de un ambiente contenía dos sorpresas que podían cambian sus vidas, una extraña alarma oculta que les impedía salir de la casa a pesar de tener las llaves, y algo más extraño aún: el resultado de un plan maquiavélico, una pesada herencia...",
          ],
          minPlayers: 2,
          maxPlayers: 5,
          level: RoomDifficulty.INTERMEDIATE,
          link: "https://www.escapegames.com.ar/sala-de-escape-herencia-del-tio-luis/",
          surprise: SurpriseFactor.LOW,
          theme: [RoomTheme.ADVENTURE],
        },
      },
    },
  },
};

export default escapeGames;
