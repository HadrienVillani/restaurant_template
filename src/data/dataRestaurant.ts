export const dataRestaurant = {
  restaurant: {
    nom: "Tantō",
    adresse: "8 Rue des Lanternes, 75002 Paris",
    telephone: "01 23 45 67 89",
    horaires: {
      lundi: { firstOpen: ["12:00", "14:30"], secondOpen: ["19:00", "22:30"] },
      mardi: { firstOpen: ["12:00", "14:30"], secondOpen: ["19:00", "22:30"] },
      mercredi: {
        firstOpen: ["12:00", "14:30"],
        secondOpen: ["19:00", "22:30"],
      },
      jeudi: { firstOpen: ["12:00", "14:30"], secondOpen: ["19:00", "22:30"] },
      vendredi: {
        firstOpen: ["12:00", "14:30"],
        secondOpen: ["19:00", "22:30"],
      },
      samedi: { firstOpen: ["12:00", "14:30"], secondOpen: ["19:00", "23:00"] },
      dimanche: {
        firstOpen: ["12:00", "15:00"],
        secondOpen: ["19:00", "22:30"],
      },
    },
    menu: {
      entrees: [
        {
          nom: "Nems au poulet",
          description: "4 pièces croustillantes accompagnées de sauce nuoc-mâm",
          prix: 5.5,
        },
        {
          nom: "Raviolis vapeur",
          description: "6 pièces farcies au porc et aux crevettes",
          prix: 6.0,
        },
        {
          nom: "Gyozas au poulet",
          description: "5 raviolis grillés garnis de poulet et légumes",
          prix: 6.5,
        },
        {
          nom: "Soupe miso",
          description: "Bouillon de miso avec tofu, algues et ciboule",
          prix: 4.0,
        },
        {
          nom: "Salade wakamé",
          description: "Salade d'algues assaisonnée au sésame",
          prix: 4.5,
        },
        {
          nom: "Tempura de crevettes",
          description:
            "Beignets de crevettes croustillants avec sauce soja sucrée",
          prix: 7.0,
        },
      ],
      plats_principaux: [
        {
          nom: "Bœuf sauté aux oignons",
          description:
            "Tranches de bœuf fondantes sautées avec oignons et sauce soja",
          prix: 12.0,
        },
        {
          nom: "Canard laqué pékinois",
          description: "Canard rôti accompagné de galettes et de sauce hoisin",
          prix: 18.0,
        },
        {
          nom: "Poulet général Tao",
          description:
            "Morceaux de poulet frits enrobés d'une sauce sucrée-épicée",
          prix: 13.5,
        },
        {
          nom: "Pad Thaï aux crevettes",
          description:
            "Nouilles de riz sautées avec crevettes, œuf, cacahuètes et citron vert",
          prix: 13.5,
        },
        {
          nom: "Ramen au porc chashu",
          description:
            "Nouilles dans un bouillon miso avec porc braisé, œuf mariné et algues",
          prix: 14.0,
        },
        {
          nom: "Katsu curry",
          description:
            "Escalope de poulet panée servie avec un curry japonais et du riz",
          prix: 12.5,
        },
        {
          nom: "Bibimbap",
          description:
            "Riz chaud garni de légumes, bœuf et œuf, servi avec sauce piquante",
          prix: 13.0,
        },
      ],
      sushis_sashimis: [
        {
          nom: "Assortiment de sushis",
          description: "8 pièces : saumon, thon, crevette et dorade",
          prix: 14.0,
        },
        {
          nom: "Assortiment de sashimis",
          description: "12 tranches de poisson frais (saumon, thon, dorade)",
          prix: 16.5,
        },
        {
          nom: "California Rolls",
          description: "8 pièces de makis à l'avocat, surimi et sésame",
          prix: 10.0,
        },
        {
          nom: "Dragon Roll",
          description: "8 makis au saumon, avocat et sauce teriyaki",
          prix: 12.0,
        },
      ],
      accompagnements: [
        {
          nom: "Riz cantonais",
          description: "Riz sauté aux œufs, jambon et petits pois",
          prix: 5.0,
        },
        {
          nom: "Nouilles sautées",
          description: "Nouilles au wok avec légumes croquants",
          prix: 5.5,
        },
        {
          nom: "Légumes sautés",
          description: "Mélange de légumes sautés à la sauce soja",
          prix: 4.5,
        },
      ],
      desserts: [
        {
          nom: "Perles de coco",
          description: "Boulettes de riz gluant fourrées à la crème de coco",
          prix: 5.0,
        },
        {
          nom: "Mochi glacé",
          description:
            "Bouchées de riz gluant fourrées à la glace (vanille, thé vert, mangue)",
          prix: 6.0,
        },
        {
          nom: "Dorayaki",
          description: "Pancakes japonais fourrés à la pâte de haricot rouge",
          prix: 5.5,
        },
        {
          nom: "Banane flambée",
          description: "Banane caramélisée au saké et flambée",
          prix: 6.0,
        },
      ],
      boissons: [
        {
          nom: "Thé au jasmin",
          description: "Thé chaud délicatement parfumé au jasmin",
          prix: 3.0,
        },
        {
          nom: "Bubble Tea",
          description: "Thé au lait avec perles de tapioca (saveurs au choix)",
          prix: 5.5,
        },
        {
          nom: "Saké",
          description: "Alcool de riz traditionnel servi chaud ou froid",
          prix: 7.0,
        },
        {
          nom: "Bière japonaise Asahi",
          description: "Bière légère et rafraîchissante",
          prix: 5.0,
        },
        {
          nom: "Soda Ramune",
          description: "Soda japonais à la bouteille iconique",
          prix: 4.5,
        },
      ],
    },
  },
};
