import { Dictionary, DeepPartial } from './types';

// French (Français). Deep-merged over English; anything omitted here falls
// back to English. Structural fields (slug, icon, date, num, initials) are
// kept identical to English so routing and layout stay consistent. Every
// string is wrapped in double quotes so French apostrophes need no escaping.
const fr: DeepPartial<Dictionary> = {
  meta: {
    name: "K&K Auditors & Consultants",
    legalName: "K&K Auditors & Consultants Civil Co.",
    tagline: "Cabinet d'audit, de fiscalité et de conseil à Beyrouth, Liban",
    description:
      "K&K Auditors & Consultants est un cabinet d'audit, de comptabilité, de fiscalité et de conseil à service complet situé à Badaro, Beyrouth. Experts-comptables assermentés, membres de la LACPA et représentant exclusif au Liban de GMN International.",
  },

  nav: {
    home: "Accueil",
    about: "À propos",
    services: "Services",
    resources: "Ressources",
    clients: "Clients",
    insights: "Actualités",
    contact: "Contact",
    careers: "Carrières",
  },

  common: {
    requestProposal: "Demander une proposition",
    bookConsultation: "Réserver une consultation",
    talkToUs: "Parlons-en",
    readMore: "Lire la suite",
    learnMore: "En savoir plus",
    exploreService: "Découvrir ce service",
    viewAllServices: "Voir tous les services",
    viewAllResources: "Parcourir toutes les ressources",
    viewAllInsights: "Toutes les actualités",
    readGuide: "Lire le guide",
    contactUs: "Nous contacter",
    getDirections: "Itinéraire",
    callUs: "Appelez-nous",
    emailUs: "Écrivez-nous",
    whatsapp: "WhatsApp",
    chatOnWhatsapp: "Discuter sur WhatsApp",
    memberOf: "Membre de",
    since: "depuis",
    lastUpdated: "Dernière mise à jour",
    home: "Accueil",
    skipToContent: "Aller au contenu",
    menu: "Menu",
    language: "Langue",
    inThisSection: "Dans ce guide",
    keyFacts: "Faits essentiels",
    faqTitle: "Questions fréquentes",
    sourcesTitle: "Sources principales",
    relatedServices: "Comment nous aidons",
    needHelp: "Besoin d'aide à ce sujet ?",
    needHelpBody:
      "Nos associés conseillent chaque jour des entreprises libanaises et internationales sur exactement ces sujets. Réservez une consultation et nous vous guiderons pas à pas.",
  },

  hero: {
    eyebrow: "Audit · Fiscalité · Conseil — Beyrouth, Liban",
    title: "Le cabinet d'audit et de conseil au service des entreprises libanaises ambitieuses",
    subtitle:
      "K&K Auditors & Consultants est un cabinet à service complet d'experts-comptables assermentés à Badaro, Beyrouth — alliant une connaissance approfondie du terrain aux normes internationales grâce à notre adhésion à GMN International.",
    badges: [
      "Experts-comptables assermentés · Membres de la LACPA",
      "GMN International — membre exclusif au Liban",
      "Plus de 25 ans d'expérience",
    ],
    cardTitle: "Pourquoi les entreprises choisissent K&K",
    cardPoints: [
      "États financiers audités selon les normes IFRS et ISA",
      "Expertise en fiscalité libanaise, VAT, NSSF et paie",
      "Un interlocuteur unique et expérimenté — piloté par un associé",
      "Confidentialité, indépendance et éthique avant tout",
    ],
  },

  home: {
    statsTitle: "Un cabinet doté d'une réelle substance",
    stats: [
      { num: "25+", label: "Années d'expérience cumulée" },
      { num: "14", label: "Professionnels dans l'équipe" },
      { num: "20+", label: "Secteurs desservis" },
      { num: "2012", label: "Membre de GMN International depuis" },
    ],
    aboutEyebrow: "Qui nous sommes",
    aboutTitle: "Un cabinet comptable à service complet au service du Liban et au-delà",
    aboutBody: [
      "K&K est un cabinet de comptabilité et d'audit à service complet au service de clients dans tout le Liban et à l'étranger. Nous offrons un accompagnement professionnel et personnalisé sur un large éventail de besoins financiers et commerciaux.",
      "Dirigé par deux experts-comptables assermentés et une équipe de 14 personnes, nous associons une vaste expertise technique à une connaissance approfondie du marché local en audit, fiscalité, gestion des risques et conseil — pour une qualité constante auprès de clients grands et petits, internationaux et locaux.",
    ],
    aboutPoints: [
      "L'associé gérant est expert-comptable assermenté et membre de la LACPA",
      "Représentant exclusif de GMN International au Liban",
      "L'éthique avant le profit — fidèles à nos clients et à notre profession",
    ],
    servicesEyebrow: "Ce que nous faisons",
    servicesTitle: "Des services conçus autour de votre entreprise",
    servicesSubtitle:
      "De l'audit légal à la planification fiscale et au conseil, nous couvrons l'ensemble du cycle de vie financier d'une entreprise libanaise.",
    whyEyebrow: "Pourquoi K&K",
    whyTitle: "La crédibilité qu'un cabinet de premier plan se doit d'offrir",
    whySubtitle:
      "Nous affirmons moins et prouvons davantage — avec des professionnels diplômés, une affiliation internationale et un corpus véritablement utile de connaissances en fiscalité libanaise.",
    why: [
      {
        title: "Des associés diplômés",
        body: "Experts-comptables assermentés et membres de la LACPA, titulaires des diplômes CMA, ACCA CertIFR, d'audit judiciaire et d'évaluation d'entreprise — une expertise réelle, pas une brochure.",
      },
      {
        title: "Normes internationales, connaissance locale",
        body: "En tant que membre exclusif de GMN International au Liban, nous fournissons des services d'audit et de conseil aux normes mondiales, avec une connaissance concrète du terrain libanais.",
      },
      {
        title: "L'éthique et l'indépendance d'abord",
        body: "Notre éthique passe avant le profit. Indépendance, confidentialité et intégrité sous-tendent chaque mission que nous acceptons.",
      },
      {
        title: "Une expertise pointue en fiscalité libanaise",
        body: "Impôt sur le revenu, VAT, NSSF, paie et taxe municipale — nous suivons chaque circulaire et chaque décret pour que votre entreprise reste en conformité.",
      },
    ],
    gmnEyebrow: "Portée internationale",
    gmnTitle: "Représentant exclusif de GMN International au Liban",
    gmnBody:
      "Depuis juin 2012, K&K a été choisi pour représenter GMN International exclusivement au Liban — une association de cabinets comptables juridiquement indépendants et soigneusement sélectionnés, dont le siège est à Londres et qui a été fondée dans les années 1970. Cette adhésion offre à nos clients un soutien en comptabilité, audit, fiscalité et conseil dans le monde entier, avec le même soin et le même savoir-faire qu'au niveau local.",
    industriesEyebrow: "Secteurs",
    industriesTitle: "Une expérience approfondie dans plus de 20 secteurs",
    industriesSubtitle:
      "Une vaste expertise technique et une connaissance approfondie du marché local, au service d'une clientèle diversifiée.",
    insightsEyebrow: "Actualités",
    insightsTitle: "Actualités fiscales et réglementaires libanaises",
    insightsSubtitle:
      "Des points d'information réguliers sur la NSSF, les circulaires du ministère des Finances, la VAT et le budget annuel — rédigés par nos associés.",
    ctaTitle: "Parlons de votre entreprise",
    ctaBody:
      "Que vous ayez besoin d'un audit légal, d'une planification fiscale ou de conseils pour vous implanter au Liban, nos associés sont prêts à vous aider.",
  },

  about: {
    eyebrow: "À propos du cabinet",
    title: "Une substance sur laquelle vous pouvez compter",
    subtitle:
      "K&K Auditors & Consultants Civil Co. est un cabinet beyrouthin d'experts-comptables assermentés, bâti sur les compétences, l'indépendance et l'affiliation internationale.",
    storyTitle: "Qui nous sommes",
    story: [
      "K&K est un cabinet de comptabilité et d'audit à service complet au service de clients dans tout le Liban et à l'étranger, dédié à fournir des services et un accompagnement professionnels et personnalisés sur un large éventail de besoins financiers et commerciaux.",
      "Notre cabinet offre une vaste expertise technique et une connaissance approfondie du marché local en audit, fiscalité, gestion des risques et conseil — assurant une qualité constante et un service irréprochable à une clientèle diversifiée, dans des secteurs grands et petits, internationaux et locaux.",
      "Nous sommes dirigés par deux experts-comptables assermentés et une équipe de 14 professionnels, et nous sommes le représentant exclusif de GMN International au Liban.",
    ],
    valuesTitle: "Ce que nous défendons",
    valuesSubtitle: "Trois principes guident chacune de nos missions.",
    values: [
      {
        title: "Professionnalisme",
        body: "Un travail rigoureux, conforme aux normes internationales reconnues, réalisé par des professionnels diplômés qui prennent en charge votre dossier.",
      },
      {
        title: "Réactivité",
        body: "Un interlocuteur expérimenté, piloté par un associé, qui répond rapidement et comprend les réalités du monde des affaires au Liban.",
      },
      {
        title: "Qualité et indépendance",
        body: "Un service irréprochable, une véritable indépendance et une stricte confidentialité sur chaque mandat que nous acceptons.",
      },
    ],
    ethicsQuote:
      "Notre éthique passe avant notre profit ; nous sommes fidèles à nos clients et à notre profession.",
    ethicsBy: "Le point de vue de K&K",
    leadershipTitle: "Direction",
    leadershipSubtitle:
      "Deux associés gérants comptant chacun plus de 25 ans d'expérience.",
    partners: [
      {
        name: "Elia Michel Krayem",
        initials: "EK",
        role: "Associé gérant",
        designation: "Expert-comptable assermenté",
        bio: "Elia dirige l'activité d'audit et de conseil du cabinet, fort de plus de 25 ans d'expérience. Expert-comptable assermenté, il est titulaire d'un Master en Management et Organisation de Jean Moulin Lyon 3 University (France) et de qualifications spécialisées en comptabilité de gestion, information financière internationale, audit judiciaire et évaluation d'entreprise.",
        credentials: [
          "CMA (Australie)",
          "ACCA — CertIFR",
          "Diplôme d'audit judiciaire",
          "Diplôme d'évaluation d'entreprise",
          "MSc Management et Organisation, Lyon 3",
        ],
        memberships: [
          "Association libanaise des experts-comptables (LACPA)",
          "Institute of Certified Management Accountants (ICMA)",
          "Arab Organization of CPAs (AOCPA)",
        ],
        education: "Jean Moulin Lyon 3 University, France",
      },
      {
        name: "Jihad Antoun Khalifeh",
        initials: "JK",
        role: "Directeur général",
        designation: "Expert-comptable",
        bio: "Jihad apporte plus de 25 ans d'expérience en comptabilité, audit et gestion d'entreprise. Expert-comptable et membre de la LACPA, il est titulaire d'une licence en gestion d'entreprise de Sagesse University (Liban) et supervise la relation client et les opérations du cabinet.",
        credentials: ["Licence en gestion d'entreprise, Sagesse University"],
        memberships: ["Association libanaise des experts-comptables (LACPA)"],
        education: "Sagesse University, Liban",
      },
    ],
    teamTitle: "Une équipe de 14 professionnels",
    teamBody:
      "Au-delà de nos associés, K&K est une équipe de 14 comptables, auditeurs et fiscalistes — une profondeur suffisante pour servir des mandats exigeants, et une taille assez réduite pour que chaque client conserve une relation personnelle avec un interlocuteur expérimenté.",
    credentialsTitle: "Qualifications et normes",
    credentialsBody:
      "Nous travaillons selon les normes internationales reconnues et détenons les inscriptions professionnelles qu'un cabinet financier de premier plan se doit de démontrer.",
    credentialsList: [
      "Expert-comptable assermenté — inscrit à l'Association libanaise des experts-comptables (LACPA)",
      "Audits menés selon les Normes internationales d'audit (ISA)",
      "États financiers établis selon les normes IFRS",
      "Indépendance et confidentialité sur chaque mission",
      "Membre de l'ICMA et de l'AOCPA",
    ],
    gmnTitle: "GMN International — notre réseau mondial",
    gmnBody: [
      "K&K Auditors and Consultants a été choisi pour représenter GMN International exclusivement au Liban, à compter de juin 2012.",
      "GMNI est une association de cabinets comptables professionnels de qualité fondée dans les années 1970 — des cabinets soigneusement sélectionnés, établis et respectés dans leur propre pays. Son siège social est à Londres, au Royaume-Uni, et elle fonctionne comme une association de cabinets comptables juridiquement indépendants.",
      "Sa mission est d'être une association de premier plan regroupant des cabinets comptables de qualité dans le monde entier, offrant des prestations enrichies au niveau local au bénéfice des cabinets, de leurs clients et de leur personnel — sans compromettre la souveraineté et l'indépendance professionnelle de chaque cabinet.",
    ],
    gmnPoints: [
      "Soutien en comptabilité, audit, fiscalité et conseil dans le monde entier",
      "Connaissance, savoir-faire et expérience locaux, déployés à l'international",
      "Membre exclusif au Liban depuis 2012",
    ],
  },

  services: {
    eyebrow: "Nos services",
    title: "Audit, fiscalité et conseil à service complet",
    subtitle:
      "Quatre pôles d'expertise couvrant l'ensemble du cycle de vie financier d'une entreprise libanaise — chacun piloté par un associé et livré selon les normes internationales.",
    includesTitle: "Ce qui est inclus",
    processTitle: "Notre méthode",
    forWhoTitle: "À qui cela s'adresse",
    deliverablesTitle: "Ce que vous recevez",
    items: [
      {
        slug: "audit-assurance",
        icon: "audit",
        title: "Audit et Assurance",
        tagline: "Des états financiers audités auxquels vous et vos parties prenantes pouvez vous fier",
        summary:
          "Audits légaux et volontaires, examens limités et compilations, et audits de régimes d'avantages sociaux — menés selon les Normes internationales d'audit.",
        intro: [
          "Un audit est bien plus qu'une obligation légale — c'est la crédibilité qui permet aux banques, investisseurs, partenaires et autorités de faire confiance à vos chiffres. K&K fournit une assurance indépendante et rigoureuse selon les Normes internationales d'audit (ISA), avec des états financiers établis selon les normes IFRS.",
          "En tant qu'experts-comptables assermentés et membres de la LACPA, notre signature a du poids auprès des banques libanaises, de l'administration fiscale et des contreparties internationales. Les sociétés anonymes libanaises (SAL) doivent faire auditer leurs états financiers chaque année par un commissaire aux comptes, et les sociétés holding et offshore doivent également désigner un commissaire aux comptes — nous intervenons à chacun de ces titres.",
        ],
        includes: [
          "Audit légal des états financiers annuels",
          "Missions d'examen limité et de compilation",
          "Audits de régimes d'avantages sociaux",
          "Projections et prévisions financières",
          "Procédures convenues et rapports à usage particulier",
          "Observations sur le contrôle interne et les risques",
        ],
        process: [
          { title: "Planification et évaluation des risques", body: "Nous comprenons votre entreprise, vos systèmes et vos zones de risque, et convenons du périmètre et du calendrier." },
          { title: "Travaux sur le terrain et tests", body: "Nous testons les soldes, les transactions et les contrôles avec scepticisme professionnel et une confidentialité totale." },
          { title: "Rapport", body: "Nous émettons un rapport d'auditeur indépendant et une lettre de recommandations à la direction, assortie de conseils pratiques." },
        ],
        forWho: [
          "Sociétés soumises à une obligation d'audit légal (SAL et autres)",
          "Entreprises recherchant un financement bancaire ou un investissement",
          "Groupes ayant besoin d'états consolidés conformes aux IFRS",
          "ONG et projets financés par des bailleurs nécessitant une assurance",
        ],
        deliverables: [
          "Rapport de l'auditeur indépendant",
          "États financiers IFRS",
          "Lettre de recommandations à la direction",
        ],
        faq: [
          { q: "Quelles normes d'audit appliquez-vous ?", a: "Nous réalisons nos audits conformément aux Normes internationales d'audit (ISA) et rendons compte d'états financiers établis selon les normes IFRS." },
          { q: "Un audit légal est-il obligatoire au Liban ?", a: "Les sociétés anonymes (SAL) et certaines autres entités sont tenues de désigner un commissaire aux comptes. Nous pouvons confirmer votre obligation précise et agir en qualité de commissaire aux comptes." },
        ],
      },
      {
        slug: "tax-planning",
        icon: "tax",
        title: "Planification et conformité fiscales",
        tagline: "Restez en conformité et ne payez pas plus que nécessaire",
        summary:
          "Impôt sur le revenu, VAT, paie et taxe foncière sur les propriétés bâties — ainsi que la représentation et les négociations avec l'administration fiscale libanaise.",
        intro: [
          "La réglementation fiscale libanaise évolue en permanence, à travers des circulaires, des décrets et les lois de finances annuelles. K&K maintient votre entreprise en conformité et optimisée pour chaque impôt auquel vous êtes soumis — et vous représente directement devant l'administration fiscale.",
          "Nous vous conseillons sur la structure adaptée à votre activité, préparons et déposons vos déclarations, et défendons votre position lors des redressements et des négociations.",
        ],
        includes: [
          "Conseil sur les types de sociétés et leurs implications fiscales respectives",
          "Impôt sur les sociétés et impôt sur le revenu des personnes physiques",
          "Immatriculation, déclarations et remboursements de VAT (taxe sur la valeur ajoutée)",
          "Impôt sur les salaires et planification de l'indemnité de fin de service",
          "Taxe foncière sur les propriétés bâties",
          "Assistance et négociations avec le bureau des impôts",
        ],
        process: [
          { title: "Évaluer", body: "Nous cartographions vos obligations fiscales en matière d'impôt sur le revenu, de VAT, de paie et de taxe foncière." },
          { title: "Planifier", body: "Nous structurons vos affaires de manière efficace et légale, et établissons un calendrier de conformité." },
          { title: "Déclarer et défendre", body: "Nous préparons et déposons vos déclarations, et vous représentons lors de tout contrôle ou redressement." },
        ],
        forWho: [
          "Entreprises souhaitant une conformité fiscale fiable et dans les délais",
          "Entreprises confrontées à un redressement ou à un litige fiscal",
          "Fondateurs choisissant une structure (SAL / SARL / offshore / holding)",
          "Employeurs gérant la paie et les obligations NSSF",
        ],
        deliverables: [
          "Déclarations fiscales et de VAT déposées",
          "Un calendrier de conformité clair",
          "Représentation devant l'administration fiscale",
        ],
        faq: [
          { q: "Pouvez-vous nous représenter devant l'administration fiscale libanaise ?", a: "Oui. Nous vous assistons pour la correspondance, les contrôles, les redressements et les négociations avec le bureau des impôts, en votre nom." },
          { q: "Traitez-vous à la fois la fiscalité des entreprises et des particuliers ?", a: "Nous couvrons l'impôt sur les sociétés, l'impôt sur le revenu des personnes physiques (salaires et bénéfices), la VAT, la paie et la taxe foncière sur les propriétés bâties." },
        ],
      },
      {
        slug: "accounting",
        icon: "accounting",
        title: "Comptabilité et tenue de livres",
        tagline: "Une information financière fiable, de la start-up à la grande entreprise",
        summary:
          "Tenue de comptabilité externalisée, comptabilité de gestion et reporting financier qui vous fournissent des chiffres précis et éclairants pour piloter votre entreprise.",
        intro: [
          "Les bonnes décisions commencent par des chiffres fiables. K&K assure la comptabilité et la tenue de livres d'entreprises allant de la start-up à l'entreprise bien établie, en produisant une information financière précise et éclairante, dans les délais.",
          "Nous adaptons la mission à votre taille — de la tenue de comptabilité entièrement externalisée au reporting de gestion périodique et au soutien de votre équipe financière interne.",
        ],
        includes: [
          "Tenue de comptabilité externalisée et tenue du grand livre",
          "Situations de gestion mensuelles et trimestrielles",
          "Établissement des états financiers",
          "Assistance aux comptes fournisseurs et clients",
          "Conception et remise à niveau du plan comptable",
          "Comptabilité tenue en arabe, français ou anglais, en comptabilité d'exercice et selon les normes IFRS",
          "Télédéclaration de la VAT, de la paie, de l'impôt sur le revenu et de la taxe foncière",
          "Mise en place et conseil sur les systèmes comptables",
        ],
        process: [
          { title: "Mettre en place", body: "Nous concevons ou remettons à niveau votre plan comptable et votre structure de reporting." },
          { title: "Tenir", body: "Nous tenons vos comptes à jour et rapprochés, mois après mois." },
          { title: "Rendre compte", body: "Nous livrons des situations de gestion et des analyses réellement exploitables." },
        ],
        forWho: [
          "Start-ups ayant besoin d'une fonction financière sans embaucher",
          "PME souhaitant un reporting mensuel fiable",
          "Entreprises se préparant à un audit ou à un investissement",
          "Bureaux de représentation et bureaux offshore au Liban",
        ],
        deliverables: [
          "Des comptes à jour et rapprochés",
          "Des situations de gestion et des rapports",
          "Des états financiers prêts pour l'audit",
        ],
        faq: [
          { q: "Pouvez-vous travailler aux côtés de notre équipe interne ?", a: "Oui. Nous pouvons assurer l'intégralité de votre fonction comptable ou soutenir votre équipe existante par des revues, du reporting et de la comptabilité technique." },
          { q: "Quels logiciels de comptabilité prenez-vous en charge ?", a: "Nous travaillons avec les principales plateformes comptables utilisées au Liban et pouvons vous conseiller sur le choix et la mise en place." },
        ],
      },
      {
        slug: "business-advisory",
        icon: "advisory",
        title: "Conseil d'entreprise et financier",
        tagline: "Un accompagnement pour atteindre vos objectifs personnels et professionnels",
        summary:
          "Conseil financier, évaluation d'entreprise et conseil stratégique pour vous aider à croître, lever des fonds, réaliser des transactions et gérer les risques.",
        intro: [
          "Au-delà de la conformité, K&K agit comme un conseiller de confiance sur les décisions qui façonnent votre entreprise. Nous fournissons une large gamme de services de conseil financier et d'évaluation d'entreprise, ancrés dans des chiffres réels et une connaissance approfondie du terrain.",
          "Que vous leviez des fonds, évaluiez une entreprise, procédiez à une restructuration ou planifiiez une transaction, nous apportons un jugement de niveau associé.",
        ],
        includes: [
          "Évaluation d'entreprise et de titres",
          "Conseil financier et modélisation",
          "Études de faisabilité et plans d'affaires",
          "Conseil en gestion des risques",
          "Assistance aux transactions et à la due diligence",
          "Restructuration et amélioration de la performance",
        ],
        process: [
          { title: "Comprendre", body: "Nous allons au cœur de votre objectif — croissance, financement, transaction ou décision." },
          { title: "Analyser", body: "Nous construisons les chiffres, l'évaluation ou le modèle qui éclairent le choix." },
          { title: "Conseiller", body: "Nous vous donnons une recommandation claire et défendable, et vous aidons à l'exécuter." },
        ],
        forWho: [
          "Dirigeants planifiant une croissance, une cession ou une succession",
          "Entreprises levant des fonds bancaires ou auprès d'investisseurs",
          "Parties ayant besoin d'une évaluation indépendante",
          "Entreprises gérant un risque financier ou opérationnel",
        ],
        deliverables: [
          "Rapports d'évaluation indépendants",
          "Modèles financiers et études de faisabilité",
          "Des recommandations claires et actionnables",
        ],
        faq: [
          { q: "Réalisez-vous des évaluations d'entreprise indépendantes ?", a: "Oui. Notre associé gérant est titulaire d'un Diplôme d'évaluation d'entreprise et nous produisons des évaluations indépendantes pour les transactions, les litiges et la planification." },
          { q: "Pouvez-vous accompagner une levée de fonds ou une transaction ?", a: "Nous fournissons de la modélisation financière, des études de faisabilité et une assistance à la due diligence pour les tours de financement et les transactions." },
        ],
      },
    ],
  },

  resources: {
    eyebrow: "Faire des affaires au Liban",
    title: "Ressources fiscales et commerciales libanaises",
    subtitle:
      "Des guides clairs et pratiques sur la création d'une société, l'impôt sur le revenu, la VAT, la NSSF, les retenues à la source et bien plus — l'essentiel pour faire des affaires au Liban, rédigé par nos associés.",
    intro:
      "Ces guides transposent l'intégralité de notre manuel « Doing Business in Lebanon » sur des pages web claires et à jour. Chacun répond d'abord à la question, puis approfondit — avec les taux, seuils et règles libanais réels sur lesquels nos clients nous interrogent.",
    answerLabel: "En bref",
    items: [
      {
        slug: "doing-business-in-lebanon",
        title: "Faire des affaires au Liban",
        category: "Aperçu",
        summary:
          "L'essentiel : l'économie, l'environnement juridique, la propriété étrangère et le fonctionnement des affaires au Liban.",
        answer:
          "Le Liban est une économie de marché orientée services, sans restriction sur la circulation des capitaux et des marchandises pour les résidents comme les non-résidents. Son droit commercial s'inspire du modèle français et offre une gamme complète d'entités aux investisseurs locaux et étrangers ; l'arabe est la langue officielle, le français et l'anglais étant largement utilisés dans les affaires.",
        sections: [
          {
            h: "L'économie",
            body: [
              "Le Liban est une république démocratique parlementaire sur la Méditerranée orientale, avec Beyrouth pour capitale et la livre libanaise (LBP) pour monnaie. L'économie est orientée services — les services représentent environ 60% du PIB — avec le commerce, le tourisme, les services financiers, la santé et l'éducation comme principaux sous-secteurs.",
              "Depuis fin 2019, le Liban traverse une grave crise financière et une transition vers de nouvelles références de taux de change, ce qui rend un conseil actuel et ancré sur le terrain plus important que jamais. C'est précisément là qu'un cabinet local aux normes internationales apporte de la valeur.",
            ],
          },
          {
            h: "Une économie de libre change",
            body: [
              "Le Liban applique une tarification de marché libre pour la plupart des biens et services, sans restriction sur la circulation des capitaux et des marchandises par les résidents et les non-résidents. Le gouvernement a historiquement maintenu une position non interventionniste pour encourager l'investissement étranger, et les investisseurs étrangers peuvent importer et exporter des capitaux librement.",
            ],
          },
          {
            h: "Propriété étrangère de biens immobiliers",
            body: ["La propriété étrangère de biens immobiliers est autorisée, dans certaines limites :"],
            list: [
              "Jusqu'à 3,000 m², aucune approbation du Conseil des ministres n'est requise.",
              "Les biens immobiliers détenus par des étrangers ne peuvent excéder 3% de la superficie totale du Liban, 3% d'une province, ou 10% de Beyrouth.",
              "L'approbation devient caduque si elle n'est pas utilisée dans un délai d'un an ; une fois accordée, la construction doit être achevée dans les cinq ans (renouvelable une fois).",
            ],
          },
          {
            h: "Bases de la comptabilité et de la conformité",
            body: [
              "Toutes les entreprises doivent tenir des registres financiers adéquats — en arabe, français ou anglais — selon la comptabilité d'exercice et les Normes internationales d'information financière (IFRS). Les déclarations d'impôt sur les salaires, de VAT, d'impôt sur les sociétés et de taxe foncière sur les propriétés bâties se font toutes par voie électronique via le ministère des Finances (finance.gov.lb).",
            ],
            note: "L'environnement du taux de change et budgétaire du Liban évolue rapidement depuis 2019. Confirmez toujours les chiffres actuels auprès de K&K ou de l'autorité compétente avant d'agir.",
          },
        ],
        faq: [
          { q: "Les étrangers peuvent-ils détenir une entreprise au Liban ?", a: "Oui. La plupart des entités peuvent être détenues à 100% par des étrangers (à quelques exceptions près, comme l'immobilier et la représentation commerciale exclusive). Les sociétés à actionnaire unique ne sont pas autorisées, sauf la SARL/LLC et la société offshore." },
          { q: "Dans quelle langue la comptabilité doit-elle être tenue ?", a: "Les registres financiers peuvent être tenus en arabe, français ou anglais, selon la comptabilité d'exercice et les normes IFRS." },
        ],
        sources: ["K&K — Doing Business in Lebanon (mise à jour avril 2024)", "Code de commerce libanais", "Administration centrale de la statistique (CAS)"],
      },
      {
        slug: "company-formation-lebanon",
        title: "Création d'entreprise au Liban",
        category: "Structuration",
        summary:
          "SAL, SARL, holding, offshore, succursales et bureaux de représentation — quelle entité choisir et comment la constituer.",
        answer:
          "Le droit libanais offre plusieurs entités : la société anonyme (SAL, capital minimum LBP 30 millions), la société à responsabilité limitée (SARL/LLC, capital minimum LBP 5 millions), les sociétés holding et offshore, les succursales et bureaux de représentation de sociétés étrangères, les sociétés de personnes et les entreprises individuelles. L'immatriculation se fait auprès du tribunal de commerce dans les deux mois suivant le début de l'activité, et la plupart des entités peuvent être détenues à 100% par des étrangers.",
        sections: [
          {
            h: "Choisir une entité",
            table: {
              head: ["Entité", "Capital minimum", "Caractéristiques clés"],
              rows: [
                ["Société anonyme (SAL)", "LBP 30 millions", "Conseil de 3 à 12 membres (majorité libanaise) ; audit annuel obligatoire ; requise pour les banques et assureurs"],
                ["Responsabilité limitée (SARL/LLC)", "LBP 5 millions", "1 à 20 associés ; peut être détenue à 100% par des étrangers ; capital en « parts »"],
                ["Société holding", "LBP 30 millions", "Immatriculée comme SAL ; détient et gère des participations ; régime fiscal spécial"],
                ["Société offshore", "—", "Activité hors du Liban ; actionnaire unique autorisé ; régime fiscal spécial"],
                ["Succursale d'une société étrangère", "—", "Aucune exigence de capital ; bénéfices imposés à 17%"],
                ["Bureau de représentation", "—", "Aucune activité génératrice de bénéfices ; non soumis à l'impôt sur le revenu"],
              ],
            },
          },
          {
            h: "SAL — société anonyme",
            body: [
              "La SAL peut exercer toutes sortes d'activités et les actionnaires ne sont responsables qu'à hauteur de leurs souscriptions. Le capital minimum est de LBP 30 millions, la gestion est confiée à un conseil d'administration de 3 à 12 membres (en majorité libanais, bien que le président puisse être étranger avec les autorisations requises), et les états financiers doivent être audités chaque année par un commissaire aux comptes. Cette forme est légalement obligatoire pour les banques, les assureurs et les autres établissements financiers.",
            ],
          },
          {
            h: "SARL / LLC — société à responsabilité limitée",
            body: [
              "La SARL offre la même protection en matière de responsabilité que la SAL, avec un capital minimum plus faible de LBP 5 millions. Le capital est divisé en « parts » plutôt qu'en actions, elle peut compter d'un à vingt associés et peut être entièrement détenue par des étrangers. La cession de parts requiert le consentement des associés représentant au moins les trois quarts du capital. Les activités d'assurance, de banque, de gestion de fonds et de transport aérien ne peuvent pas utiliser cette forme.",
            ],
          },
          {
            h: "Sociétés de personnes et entreprises individuelles",
            body: [
              "Le droit libanais reconnaît les sociétés en nom collectif (les associés sont personnellement et solidairement responsables) et les sociétés en commandite (les commandités gèrent avec une responsabilité illimitée ; les commanditaires n'apportent que du capital). Un particulier peut également exercer en tant qu'entrepreneur individuel selon le Code de commerce. Notez que les sociétés à actionnaire unique ne sont en général pas autorisées (sauf la SARL et l'offshore).",
            ],
          },
          {
            h: "Processus de constitution",
            body: [
              "Tous les particuliers et sociétés ayant l'intention de faire des affaires au Liban doivent s'immatriculer auprès d'un tribunal de commerce dans les deux mois suivant le début de l'activité. Avec des documents dûment authentifiés, l'immatriculation prend généralement de 10 à 15 jours ; une SAL peut être immatriculée en une semaine environ. Les étrangers exploitant une entreprise individuelle ou une société de personnes doivent d'abord obtenir un permis de travail et de séjour.",
            ],
            note: "Les seuils de capital sont exprimés en LBP et, en pratique, s'apprécient au regard de l'environnement du taux de change en vigueur. Confirmez les exigences actuelles auprès de K&K avant toute constitution.",
          },
        ],
        faq: [
          { q: "Quel est le capital minimum d'une SAL et d'une SARL ?", a: "Une SAL exige un capital minimum de LBP 30 millions ; une SARL (LLC) exige LBP 5 millions." },
          { q: "Une société peut-elle avoir un propriétaire unique ?", a: "Les sociétés à actionnaire unique ne sont en général pas autorisées, mais une SARL (LLC) peut être fondée par un associé unique, et une société offshore par un actionnaire unique." },
          { q: "Combien de temps prend l'immatriculation ?", a: "De 10 à 15 jours environ une fois les documents dûment authentifiés ; une SAL peut prendre environ une semaine." },
        ],
        sources: ["K&K — Doing Business in Lebanon (mise à jour avril 2024)", "Code de commerce libanais (art. 26 et 29)", "Décrets législatifs 45/1983 et 46/1983"],
      },
      {
        slug: "income-tax-lebanon",
        title: "L'impôt sur le revenu au Liban",
        category: "Fiscalité",
        summary:
          "Les trois catégories d'impôt sur le revenu — bénéfices, salaires et capitaux mobiliers — et qui paie quoi.",
        answer:
          "Le Liban n'impose pas le revenu selon un traitement unique. La loi sur l'impôt sur le revenu répartit le revenu en trois chapitres — les bénéfices des professions industrielles, commerciales et non commerciales ; les salaires, traitements et pensions ; et les revenus de capitaux mobiliers — chacun imposé séparément selon ses propres règles. Les bénéfices des sociétés selon la méthode du bénéfice réel sont imposés à 17%, tandis que les entreprises individuelles et les sociétés de personnes sont imposées à des taux progressifs de 4%–25%.",
        sections: [
          {
            h: "Les trois chapitres de l'impôt sur le revenu",
            body: [
              "Lorsqu'un contribuable perçoit des revenus de différentes sources, chaque type est imposé selon le chapitre dont il relève — il n'existe pas d'impôt sur le revenu unique et agrégé :",
            ],
            list: [
              "Chapitre I — bénéfices des activités industrielles, commerciales et non commerciales (libérales).",
              "Chapitre II — salaires, traitements et pensions (retenus par l'employeur).",
              "Chapitre III — revenus de capitaux mobiliers (dividendes, tantièmes, intérêts d'obligations et de bons du Trésor).",
            ],
          },
          {
            h: "Impôt sur les bénéfices — réel ou forfaitaire",
            body: [
              "Les bénéfices des sociétés sont établis selon la méthode du bénéfice réel ou du bénéfice forfaitaire, selon la taille et la structure de l'entreprise :",
            ],
            table: {
              head: ["Méthode / contribuable", "Taux", "S'applique à"],
              rows: [
                ["Bénéfice réel (sociétés)", "17%", "SARL, SAL et succursales sur le bénéfice net imposable"],
                ["Bénéfice forfaitaire (entreprise individuelle)", "4% – 25% (progressif)", "Entreprises individuelles et sociétés de personnes"],
                ["Bénéfice forfaitaire (assurance)", "5% – 10%", "Sociétés d'assurance et d'épargne"],
                ["Sociétés offshore et holding", "Exonéré", "Remplacé par un impôt annuel forfaitaire"],
              ],
            },
          },
          {
            h: "Qui est résident fiscal ?",
            body: [
              "Une personne est considérée comme résidente fiscale au Liban si elle y dispose d'un lieu d'activité, si elle y a un foyer en permanence à la disposition de sa famille, ou si elle est présente au Liban plus de 183 jours sur toute période de 12 mois (les jours passés en transit aéroportuaire, ou uniquement pour un traitement médical, sont exclus).",
            ],
            note: "Les taux et les tranches sont fixés par la loi de finances annuelle et changent fréquemment. Confirmez les chiffres actuels auprès du ministère des Finances ou de K&K avant toute déclaration.",
          },
        ],
        faq: [
          { q: "Quel est le taux de l'impôt sur les bénéfices des sociétés ?", a: "Selon la méthode du bénéfice réel, les bénéfices des sociétés sont imposés à un taux forfaitaire de 17%. Les entreprises individuelles et les sociétés de personnes sont imposées sur des bénéfices forfaitaires à des taux progressifs de 4%–25%." },
          { q: "Quand suis-je résident fiscal du Liban ?", a: "Si vous y disposez d'un lieu d'activité ou d'un foyer familial permanent, ou si vous êtes présent plus de 183 jours sur toute période de 12 mois." },
        ],
        sources: ["K&K — Doing Business in Lebanon (mise à jour avril 2024)", "Loi libanaise sur l'impôt sur le revenu", "Ministère des Finances libanais"],
      },
      {
        slug: "corporate-income-tax-lebanon",
        title: "L'impôt sur les sociétés au Liban",
        category: "Fiscalité",
        summary: "Comment les sociétés et les succursales sont imposées sur leurs bénéfices — et qui est exonéré.",
        answer:
          "Les sociétés libanaises (SARL, SAL) et les succursales de sociétés étrangères sont imposées sur les bénéfices nets à 17% selon la méthode du bénéfice réel. Les dividendes distribués supportent une retenue à la source de 10%. Les sociétés holding et offshore sont exonérées d'impôt sur les sociétés et acquittent à la place un impôt annuel forfaitaire, tandis que certains organismes (éducatifs, à but non lucratif, certains transports) sont exonérés de façon permanente.",
        sections: [
          {
            h: "Le taux de 17% sur les sociétés",
            body: [
              "Selon la méthode du bénéfice réel, l'impôt est calculé sur le bénéfice net de la société à un taux fixe de 17%. Les succursales de sociétés étrangères sont imposées au même taux de 17%, et leurs bénéfices sont réputés distribués sous forme de dividendes soumis à une taxe de distribution de dividendes de 10%.",
            ],
            table: {
              head: ["Élément", "Traitement"],
              rows: [
                ["Bénéfices de la société (bénéfice réel)", "17% sur le bénéfice net imposable"],
                ["Bénéfices de succursale", "17%, plus distribution réputée de dividendes imposée à 10%"],
                ["Distributions de dividendes", "Retenue de 10% (réductible à 5% sous conditions)"],
                ["Sociétés holding et offshore", "Exonérées — impôt annuel forfaitaire de LBP 50 millions"],
                ["Entreprises individuelles / sociétés de personnes", "Bénéfice forfaitaire, progressif 4%–25%"],
              ],
            },
          },
          {
            h: "Exonérations permanentes",
            body: ["Certains organismes bénéficient d'une exonération illimitée d'impôt sur les sociétés, notamment :"],
            list: [
              "Les établissements d'enseignement et les hôpitaux gratuits, orphelinats et foyers d'accueil",
              "Les associations de transport maritime, en mer et aérien (avec restrictions)",
              "Les agriculteurs (sous conditions), les syndicats et les associations professionnelles",
              "Les organisations à but non lucratif et les coopératives",
              "Les sociétés holding et offshore, et les organismes publics non concurrentiels",
            ],
          },
          {
            h: "Exercice fiscal et déclaration",
            body: [
              "L'exercice fiscal correspond à l'année civile, même si une autre date de clôture peut être utilisée avec l'autorisation préalable de l'administration fiscale. Les déclarations d'impôt sur les sociétés, de VAT, d'impôt sur les salaires et de taxe foncière sur les propriétés bâties sont déposées par voie électronique via le ministère des Finances.",
            ],
            note: "Le taux sur les sociétés et la taxe sur les dividendes sont fixés par la loi de finances et peuvent changer. Confirmez les chiffres actuels avant de vous y fier.",
          },
        ],
        faq: [
          { q: "Quel est le taux de l'impôt sur les sociétés au Liban ?", a: "Les sociétés et les succursales sont imposées à 17% sur les bénéfices nets selon la méthode du bénéfice réel." },
          { q: "Comment les succursales de sociétés étrangères sont-elles imposées ?", a: "À 17%, et leurs bénéfices sont réputés distribués sous forme de dividendes soumis à une taxe supplémentaire de distribution de dividendes de 10%." },
          { q: "Les sociétés holding et offshore sont-elles imposées sur les bénéfices ?", a: "Non. Elles sont exonérées d'impôt sur les sociétés et acquittent à la place un impôt annuel forfaitaire de LBP 50 millions." },
        ],
        sources: ["K&K — Doing Business in Lebanon (mise à jour avril 2024)", "Loi libanaise sur l'impôt sur le revenu", "Loi de finances 2022"],
      },
      {
        slug: "withholding-tax-lebanon",
        title: "Les retenues à la source au Liban",
        category: "Fiscalité",
        summary:
          "Retenues sur les non-résidents, les intérêts, les dividendes et les capitaux mobiliers — taux, formulaires et échéances.",
        answer:
          "Le Liban applique plusieurs retenues à la source : les non-résidents sont soumis à un taux effectif de 3.4% sur les ventes de matériels et d'équipements et de 8.5% sur les services ; les intérêts sur comptes bancaires et bons du Trésor sont imposés à 10% ; les dividendes à 10% (réductible à 5%) ; et les revenus de capitaux mobiliers à 10%. La retenue sur les non-résidents est déclarée trimestriellement (formulaire G10) et annuellement (formulaire G5).",
        sections: [
          {
            h: "Retenue à la source sur les non-résidents",
            body: [
              "Les revenus perçus par des non-résidents au Liban sont soumis à une retenue à la source effective de 3.4% sur la vente de matériels et d'équipements, et de 8.5% sur la vente de services. En vertu de la loi de finances 2022, la déclaration est due trimestriellement dans les 15 jours suivant la fin de chaque trimestre (formulaire G10), puis annuellement avec la déclaration d'impôt sur le revenu (formulaire G5).",
            ],
            table: {
              head: ["Retenue", "Taux"],
              rows: [
                ["Non-résident — vente de matériels et équipements", "3.4%"],
                ["Non-résident — services", "8.5%"],
                ["Intérêts (comptes bancaires et bons du Trésor)", "10% (non remboursable)"],
                ["Dividendes", "10% (réductible à 5%)"],
                ["Revenus de capitaux mobiliers", "10%"],
              ],
            },
          },
          {
            h: "Intérêts, dividendes et capitaux mobiliers",
            body: [
              "Les intérêts perçus sur les comptes auprès de banques libanaises et sur les bons du Trésor sont soumis à une retenue à la source de 10%, non remboursable et non reportable. Les dividendes versés aux actionnaires résidents et non-résidents font l'objet d'une retenue de 10% (réductible à 5% sous conditions spécifiques). Une taxe de 10% s'applique aussi plus largement aux revenus de capitaux mobiliers — dividendes et intérêts distribués, tantièmes des administrateurs et des actionnaires, distributions de réserves ou de bénéfices, et intérêts sur les prêts consentis aux sociétés.",
            ],
          },
          {
            h: "Plus-values sur cessions d'actions",
            body: [
              "La loi de finances 2022 a introduit une taxe de cession de 3% pour les personnes physiques résidentes et de 5% pour les personnes physiques non-résidentes sur les gains de cession d'actions de sociétés anonymes à forte composante immobilière. La Décision 323 (mai 2023) a précisé : taxe de 10% sur les capitaux mobiliers pour les cessions de parts de LLC (non commerciales), impôt sur les sociétés de 17% lorsque la cession constitue une opération commerciale, et exonération pour les cessions d'actions ordinaires de sociétés anonymes.",
            ],
            note: "Les formulaires, taux et conditions de retenue changent au gré des lois de finances et des décisions ministérielles. Confirmez la situation actuelle auprès de K&K avant toute déclaration.",
          },
        ],
        faq: [
          { q: "Quelle est la retenue à la source sur les non-résidents ?", a: "Un taux effectif de 3.4% sur les ventes de matériels et d'équipements et de 8.5% sur les services, déclaré trimestriellement (G10) et annuellement (G5)." },
          { q: "Comment les intérêts et les dividendes sont-ils imposés ?", a: "Les intérêts sur comptes bancaires et bons du Trésor sont imposés à 10% (non remboursable) ; les dividendes à 10%, réductible à 5% sous conditions spécifiques." },
        ],
        sources: ["K&K — Doing Business in Lebanon (mise à jour avril 2024)", "Loi de finances 2022", "Décisions MoF 322 et 323 (2023)"],
      },
      {
        slug: "vat-in-lebanon",
        title: "La VAT au Liban",
        category: "Fiscalité",
        summary: "Le taux normal de 11%, les exonérations, le taux zéro, les déclarations et la facturation en devises.",
        answer:
          "Le Liban applique la VAT (taxe sur la valeur ajoutée) à un taux normal de 11% sur les transactions commerciales. Les exportations de biens et de services et le transport international sont détaxés (taux zéro), tandis que la banque, les services financiers et l'assurance sont exonérés. Depuis le Décret 11230 (avril 2023), la VAT sur les prix en devises est calculée au taux Sayrafa/de marché plutôt qu'à l'ancien taux officiel.",
        sections: [
          {
            h: "Le taux normal de 11%",
            body: [
              "Sauf exonération spécifique, la VAT est prélevée à 11% sur toutes les transactions commerciales réalisées par les entreprises. Les exportations de biens et de services, les services liés à l'exportation, le transport international et certaines opérations intermédiaires sont détaxés (taux zéro), de sorte que le fournisseur peut néanmoins récupérer la VAT en amont. Les opérations de banque, de services financiers et d'assurance sont exonérées (pas de VAT en aval, et la VAT en amont n'est en général pas récupérable).",
            ],
            table: {
              head: ["Prestation", "Traitement VAT"],
              rows: [
                ["Livraisons commerciales standard", "11%"],
                ["Exportations et transport international", "Détaxé (0%)"],
                ["Banque, finance et assurance", "Exonéré"],
                ["Refacturation de dépenses à l'étranger (depuis le 17 mai 2013)", "11% (non traitée comme une exportation)"],
              ],
            },
          },
          {
            h: "Immatriculation et déclarations",
            body: [
              "Les entreprises dont le chiffre d'affaires imposable dépasse le seuil d'immatriculation doivent s'immatriculer, facturer la VAT sur les livraisons imposables, émettre des factures conformes et déposer des déclarations périodiques (généralement trimestrielles) — en acquittant la VAT nette due ou en réclamant un remboursement. Les déclarations de VAT sont déposées par voie électronique.",
            ],
          },
          {
            h: "Factures en devises",
            body: [
              "Le 27 avril 2023, le ministère des Finances a publié le Décret 11230, modifiant l'article 18 de la loi VAT 7308. Lorsqu'un prix est libellé en devise, et jusqu'à l'établissement d'un taux de change unifié, la contre-valeur servant au calcul de la VAT est déterminée au taux Sayrafa, puis au taux de marché — et non à l'ancien taux officiel.",
            ],
            note: "Le seuil d'immatriculation et les règles de taux de change évoluent dans le temps. Confirmez les seuils et taux actuels auprès du ministère des Finances ou de K&K.",
          },
        ],
        faq: [
          { q: "Quel est le taux de VAT au Liban ?", a: "Le taux normal de VAT est de 11%." },
          { q: "Qu'est-ce qui est exonéré ou détaxé ?", a: "Les exportations et le transport international sont détaxés ; la banque, les services financiers et l'assurance sont exonérés." },
          { q: "Comment la VAT est-elle calculée sur les factures en devises ?", a: "Depuis le Décret 11230 (avril 2023), au taux Sayrafa puis au taux de marché, et non à l'ancien taux officiel." },
        ],
        sources: ["K&K — Doing Business in Lebanon (mise à jour avril 2024)", "Loi VAT n° 7308 (art. 18)", "Décret MoF 11230 (2023)"],
      },
      {
        slug: "nssf-end-of-service-lebanon",
        title: "NSSF et sécurité sociale au Liban",
        category: "Paie",
        summary:
          "Taux de cotisation employeur et salarié, plafonds et indemnité de fin de service.",
        answer:
          "Les employeurs cotisent à hauteur de 8% pour la maladie et la maternité (sur un maximum de LBP 90 millions/mois), 6% pour les prestations familiales (sur un maximum de LBP 12 millions/mois) et 8.5% du total des revenus annuels pour l'indemnité de fin de service (sans plafond). Les salariés cotisent à hauteur de 3% pour la maladie et la maternité (sur un maximum de LBP 90 millions/mois).",
        sections: [
          {
            h: "Taux de cotisation",
            table: {
              head: ["Branche", "À la charge de", "Taux", "Plafond"],
              rows: [
                ["Maladie et maternité", "Employeur", "8%", "LBP 90 millions / mois"],
                ["Prestations familiales", "Employeur", "6%", "LBP 12 millions / mois"],
                ["Indemnité de fin de service", "Employeur", "8.5% des revenus annuels", "Sans plafond"],
                ["Maladie et maternité", "Salarié", "3%", "LBP 90 millions / mois"],
              ],
            },
          },
          {
            h: "Indemnité de fin de service",
            body: [
              "La branche fin de service finance l'indemnité à laquelle les salariés ont droit à leur départ, en fonction de l'ancienneté et du dernier salaire. Comme elle est calculée sur le total des revenus annuels sans plafond, les employeurs doivent la provisionner tout au long de la relation de travail.",
            ],
          },
          {
            h: "Salariés étrangers et totalisation",
            body: [
              "Un ressortissant étranger travaillant au Liban ne bénéficie du fonds de sécurité sociale que lorsqu'il existe un accord réciproque (de totalisation) entre les deux pays et que le salarié détient un permis de travail et de séjour valide. Le Liban a conclu de tels accords avec la France, la Belgique, l'Italie et le Royaume-Uni.",
            ],
            note: "Les taux, plafonds et le traitement des salaires en devises de la NSSF changent fréquemment par décision et décret. Confirmez les chiffres actuels auprès de la NSSF ou de K&K avant d'établir la paie.",
          },
        ],
        faq: [
          { q: "Quels sont les taux de cotisation à la NSSF ?", a: "Employeur : 8% maladie et maternité (max LBP 90 millions/mois), 6% prestations familiales (max LBP 12 millions/mois), 8.5% des revenus annuels pour la fin de service (sans plafond). Salarié : 3% maladie et maternité (max LBP 90 millions/mois)." },
          { q: "Quels pays ont un accord de totalisation avec le Liban ?", a: "La France, la Belgique, l'Italie et le Royaume-Uni." },
        ],
        sources: ["K&K — Doing Business in Lebanon (mise à jour avril 2024)", "Caisse nationale de sécurité sociale (NSSF)", "Loi libanaise sur la sécurité sociale"],
      },
      {
        slug: "payroll-tax-lebanon",
        title: "Impôt sur les salaires au Liban",
        category: "Paie",
        summary: "Impôt progressif sur les salaires, règle de territorialité, permis de travail et bases du droit du travail.",
        answer:
          "Les employeurs retiennent et déclarent l'impôt sur les salaires à des taux progressifs de 2% à 25%. L'impôt sur les salaires suit le principe de territorialité — les salaires sont imposés au Liban lorsque le bénéficiaire y est résident, que le service y est exécuté, ou que le salaire est mis à la charge d'une entité libanaise. Les cotisations NSSF sont déclarées parallèlement.",
        sections: [
          {
            h: "Impôt progressif sur les salaires (2%–25%)",
            body: [
              "Les employeurs sont chargés de retenir et de déclarer l'impôt sur les salaires pour le compte de leurs salariés, à des taux progressifs de 2% à 25%. L'impôt sur les salaires est soumis au principe de territorialité : les salaires et traitements sont imposables au Liban lorsque le bénéficiaire y est résident, lorsque le service y est exécuté, ou lorsque le salaire est mis à la charge d'une entité au Liban.",
            ],
          },
          {
            h: "Permis de travail et de séjour",
            body: [
              "Un étranger souhaitant travailler au Liban doit obtenir l'accord préalable du ministère du Travail, puis un permis de travail (à demander dans les 10 jours suivant l'entrée ; accordé et renouvelable jusqu'à deux ans), et un permis de séjour auprès de la Sûreté Générale. Les contrats de travail sont généralement écrits et, lorsqu'une partie est un étranger non arabophone, peuvent être traduits.",
            ],
          },
          {
            h: "Bases du droit du travail",
            body: [
              "La durée normale de travail est de huit heures par jour, ou 48 heures par semaine, et le congé payé annuel minimum est de 15 jours. À la rupture, les parties peuvent convenir d'un commun accord de mettre fin à un contrat écrit ; lorsqu'une partie le rompt, la partie lésée peut demander une indemnisation, et un licenciement sans préavis ouvre droit, pour le salarié, à une indemnité compensatrice.",
            ],
            note: "Les tranches, déductions et plafonds de la NSSF sont révisés par les lois de finances et les décisions de la NSSF. Confirmez les chiffres actuels avant d'établir la paie.",
          },
        ],
        faq: [
          { q: "Quels sont les taux de l'impôt sur les salaires au Liban ?", a: "L'impôt sur les salaires est prélevé à des taux progressifs de 2% à 25%, retenu et déclaré par l'employeur." },
          { q: "Quand un salaire est-il imposable au Liban ?", a: "Selon le principe de territorialité : lorsque le salarié est résident au Liban, que le service y est exécuté, ou que le salaire est mis à la charge d'une entité libanaise." },
        ],
        sources: ["K&K — Doing Business in Lebanon (mise à jour avril 2024)", "Loi libanaise sur l'impôt sur le revenu", "Code du travail libanais"],
      },
      {
        slug: "property-municipal-other-taxes-lebanon",
        title: "Taxe foncière, municipale et autres impôts",
        category: "Fiscalité",
        summary:
          "Taxe foncière sur les propriétés bâties, taxe municipale sur les loyers, droit de timbre, douanes et accises.",
        answer:
          "La taxe foncière sur les propriétés bâties est un impôt annuel progressif de 4%–14% sur les produits locatifs nets. La taxe municipale est prélevée sur les loyers à 7% pour les bureaux et 6% pour les habitations. Le droit de timbre est en général de 0.4% sur les contrats mentionnant des sommes d'argent, et les droits de douane et accises s'appliquent aux importations et à certains biens spécifiques.",
        sections: [
          {
            h: "Taxe foncière sur les propriétés bâties (BPT)",
            body: [
              "La BPT est un impôt annuel progressif compris entre 4% et 14% des produits locatifs nets — les produits locatifs bruts diminués des déductions admises telles que l'amortissement et les frais de gestion. Elle est déclarée par voie électronique.",
            ],
          },
          {
            h: "Taxe municipale et droit de timbre",
            table: {
              head: ["Impôt", "Taux"],
              rows: [
                ["Taxe foncière sur les propriétés bâties", "4% – 14% des produits locatifs nets"],
                ["Taxe municipale sur les loyers de bureaux", "7% du loyer dû"],
                ["Taxe municipale sur les loyers d'habitation", "6% du loyer dû"],
                ["Droit de timbre proportionnel", "0.4% sur les contrats mentionnant des sommes d'argent"],
                ["Droit de timbre fixe", "LBP 250 – LBP 2 millions par document"],
              ],
            },
          },
          {
            h: "Douanes et accises",
            body: [
              "Les taux de douane vont de 0% à 39% sur les marchandises (avec des taux préférentiels lorsque des accords commerciaux s'appliquent), et des taux plus élevés sur les boissons alcoolisées (55%–100%) et certains produits de luxe (100%). Les accises s'appliquent principalement aux boissons et spiritueux, au tabac, à l'essence et aux véhicules. La loi de finances 2022 a ajouté un droit de douane temporaire de 3% et un droit de 10% sur les importations disposant de substituts locaux suffisants.",
            ],
            note: "Les taux de douane et d'accise sont ajustés fréquemment par les autorités douanières et les lois de finances. Confirmez les taux actuels avant d'importer.",
          },
        ],
        faq: [
          { q: "Quel est le taux de la taxe foncière sur les propriétés bâties ?", a: "Un impôt annuel progressif de 4% à 14% sur les produits locatifs nets." },
          { q: "À combien s'élève la taxe municipale sur les loyers ?", a: "7% du loyer dû pour les bureaux et 6% pour les habitations." },
        ],
        sources: ["K&K — Doing Business in Lebanon (mise à jour avril 2024)", "Ministère des Finances libanais", "Douanes libanaises"],
      },
      {
        slug: "offshore-holding-companies-lebanon",
        title: "Sociétés offshore et holding au Liban",
        category: "Structuration",
        summary: "Les régimes spéciaux des sociétés holding et offshore — et l'impôt forfaitaire annuel de LBP 50 millions.",
        answer:
          "Les sociétés holding et offshore libanaises sont immatriculées comme sociétés anonymes (SAL) mais sont exonérées d'impôt sur les sociétés et de taxe sur les dividendes. À la place, chacune acquitte un impôt annuel forfaitaire de LBP 50 millions (depuis 2022). Toutes deux n'ont besoin que d'un seul commissaire aux comptes, et les contrats offshore relatifs à une activité à l'étranger sont exonérés du droit de timbre libanais.",
        sections: [
          {
            h: "Sociétés holding",
            body: [
              "Une société holding doit être immatriculée comme SAL et son objet est limité à la détention d'actions ou de parts dans des sociétés libanaises ou étrangères, à la gestion de ces sociétés, au prêt aux sociétés dont elle détient au moins 20%, et à la détention de brevets, licences et marques destinés à être donnés en location. Le capital (minimum LBP 30 millions) et les livres comptables peuvent être tenus en devise, et un seul commissaire aux comptes est requis.",
            ],
            list: [
              "Exonérée d'impôt sur les sociétés et de taxe sur les dividendes",
              "Soumise à la place à un impôt annuel forfaitaire de LBP 50 millions (depuis 2022 ; auparavant plafonné à LBP 5 millions sur le capital libéré et les réserves)",
              "Un seul commissaire aux comptes requis",
            ],
          },
          {
            h: "Sociétés offshore",
            body: [
              "Régie par le Décret législatif 46, une société offshore libanaise est une société anonyme qui exerce exclusivement des activités hors du Liban — négociation et signature de contrats exécutés à l'étranger, et préparation d'études et de consultations utilisées à l'étranger. Elle peut être fondée par un actionnaire unique, n'a besoin que d'un seul commissaire aux comptes, et ses contrats offshore sont exonérés du droit de timbre libanais.",
            ],
            table: {
              head: ["Véhicule", "Impôt sur les sociétés", "Impôt annuel", "Commissaire aux comptes"],
              rows: [
                ["Société holding", "Exonéré", "Forfait de LBP 50 millions", "Un"],
                ["Société offshore", "Exonéré", "Forfait de LBP 50 millions", "Un"],
              ],
            },
            note: "Ces régimes comportent des conditions et les chiffres évoluent dans le temps. Prenez conseil avant toute constitution — K&K structure régulièrement des véhicules holding et offshore.",
          },
        ],
        faq: [
          { q: "Comment les sociétés holding et offshore sont-elles imposées ?", a: "Toutes deux sont exonérées d'impôt sur les sociétés et de taxe sur les dividendes, et acquittent à la place un impôt annuel forfaitaire de LBP 50 millions." },
          { q: "Une société offshore peut-elle avoir un actionnaire unique ?", a: "Oui. Les sociétés offshore peuvent être fondées par un actionnaire unique et ne requièrent qu'un seul commissaire aux comptes." },
        ],
        sources: ["K&K — Doing Business in Lebanon (mise à jour avril 2024)", "Décret législatif 46/1983 (Offshore)", "Loi de finances 2022"],
      },
    ],
  },

  clients: {
    eyebrow: "Nos clients",
    title: "La confiance de plus de 20 secteurs",
    subtitle:
      "Des entreprises gérées par leur propriétaire aux groupes établis, ONG et sociétés offshore — nous apportons le même soin et les mêmes normes à chaque client.",
    approachTitle: "Notre approche",
    approach: [
      "Notre cabinet offre une vaste expertise technique et une connaissance approfondie du marché local en audit, fiscalité, gestion des risques et conseil, assurant une qualité constante et un service irréprochable à une clientèle diversifiée, dans des secteurs grands et petits, internationaux et locaux.",
      "Chaque client conserve une relation avec un interlocuteur expérimenté, piloté par un associé — nous sommes assez grands pour gérer des mandats exigeants et assez petits pour rester proches.",
    ],
    industriesTitle: "Les secteurs que nous servons",
    industriesSubtitle:
      "Une expérience sectorielle dans toute l'économie libanaise et au-delà.",
    industries: [
      "Industrie manufacturière",
      "Immobilier",
      "Santé",
      "Organismes à but non lucratif / ONG",
      "Services professionnels",
      "Divertissement",
      "Courtiers / Négociants",
      "Distributeurs",
      "Ingénierie et conception",
      "Services financiers",
      "Franchisés",
      "Sociétés holding",
      "Sociétés offshore",
      "Hôtels et complexes touristiques",
      "Entrepreneurs de construction",
      "Commerce de détail",
      "Stations-service",
      "Produits pharmaceutiques",
      "Bureaux de représentation",
      "Entreprises animalières",
    ],
    proofTitle: "Bâtir sur la confiance",
    proofBody:
      "Nous sommes fiers des relations de longue date qui sous-tendent notre travail. Les noms et logos de clients ne sont affichés qu'avec le consentement de ces derniers, conformément à la confidentialité au cœur de notre profession.",
  },

  insights: {
    eyebrow: "Actualités",
    title: "Actualités fiscales et réglementaires libanaises",
    subtitle:
      "Des points d'information réguliers et factuels sur la NSSF, les circulaires du ministère des Finances, la VAT et le budget annuel — rédigés par nos associés.",
    author: "Elia Krayem",
    authorRole: "Associé gérant, expert-comptable assermenté",
    byLabel: "Par",
    posts: [
      {
        slug: "brief-of-budget-2026",
        title: "Synthèse du budget 2026",
        date: "2026-03-27",
        category: "Budget",
        excerpt:
          "Un aperçu des principales dispositions du budget 2026 du Liban et de ce qu'elles signifient pour les entreprises et les particuliers.",
        body: [
          "Le budget 2026 du Liban introduit une série de mesures touchant l'impôt sur le revenu, la VAT et les procédures administratives. Cette synthèse résume les articles les plus pertinents pour les entreprises et met en évidence les changements à anticiper pour l'année à venir.",
          "Comme toujours, les dispositions budgétaires peuvent être modifiées lors de leur mise en œuvre. Contactez K&K pour comprendre l'incidence du budget 2026 sur votre situation fiscale particulière.",
        ],
      },
      {
        slug: "general-budget-2024-brief",
        title: "Synthèse du budget général 2024",
        date: "2024-02-15",
        category: "Budget",
        excerpt:
          "Les points saillants des articles importants du cadre budgétaire 2024.",
        body: [
          "Notre synthèse du budget 2024 met en lumière les articles importants et leur incidence pratique sur les contribuables libanais.",
        ],
      },
      {
        slug: "nssf-contributions-foreign-currency-salaries",
        title: "NSSF — Explication des cotisations sur les traitements et salaires",
        date: "2023-09-19",
        category: "NSSF",
        excerpt:
          "Comment les cotisations à la NSSF sont calculées sur les traitements et salaires versés en devises.",
        body: [
          "Cette note explique le mécanisme de calcul des cotisations à la NSSF sur les traitements et salaires versés en devises, source récurrente d'erreurs de paie pendant la transition monétaire.",
        ],
      },
      {
        slug: "nssf-decision-29",
        title: "Décision NSSF n° 29",
        date: "2023-09-07",
        category: "NSSF",
        excerpt:
          "La NSSF a prolongé de trois mois supplémentaires la période de quitus de la sécurité sociale.",
        body: [
          "La Décision NSSF n° 29 a prolongé de trois mois supplémentaires la période de quitus (mainlevée) de la sécurité sociale. Les employeurs doivent noter les délais révisés pour l'obtention des quitus.",
        ],
      },
      {
        slug: "nssf-decree-11928",
        title: "Décret NSSF n° 11928",
        date: "2023-08-18",
        category: "NSSF",
        excerpt:
          "Le plafond de couverture de l'assurance maladie a été relevé, à compter de septembre 2023.",
        body: [
          "Le Décret n° 11928 a relevé le plafond de couverture de l'assurance maladie de la NSSF de LBP 5.6 millions à LBP 18 millions par mois, à compter de septembre 2023 — un changement important de l'assiette de cotisation.",
        ],
      },
      {
        slug: "nssf-memo-32",
        title: "Note NSSF n° 32",
        date: "2023-07-06",
        category: "NSSF",
        excerpt: "Procédures de traitement des permis nominatifs annuels.",
        body: [
          "La Note NSSF n° 32 porte sur les procédures de traitement des permis nominatifs annuels. Cette note résume les étapes pratiques pour les employeurs.",
        ],
      },
      {
        slug: "withholding-tax-g10-g5",
        title: "Nouveaux formulaires : G10 et G5 de la retenue à la source (7.5% + 2.25%)",
        date: "2023-04-28",
        category: "Fiscalité",
        excerpt:
          "De nouveaux formulaires de déclaration de la retenue à la source introduits par le code fiscal.",
        body: [
          "De nouveaux formulaires de déclaration G10 et G5 ont été introduits pour la retenue à la source aux taux de 7.5% et 2.25%. Cette note explique qui doit déclarer, et quand.",
        ],
      },
      {
        slug: "mof-decree-11230-vat-sayrafa",
        title: "Décret MoF n° 11230 — VAT au taux Sayrafa",
        date: "2023-04-27",
        category: "VAT",
        excerpt:
          "Les factures émises en devises doivent appliquer la VAT à 11% au taux Sayrafa.",
        body: [
          "Le Décret n° 11230 du ministère des Finances a exigé que toutes les factures émises en devises appliquent la VAT à 11% au taux Sayrafa, à compter du 28 avril 2023.",
        ],
      },
      {
        slug: "nssf-decree-11228-school-allowances",
        title: "Décret NSSF n° 11228 — Allocations scolaires",
        date: "2023-04-26",
        category: "NSSF",
        excerpt:
          "Allocations scolaires 2022–2023 reconduites, avec des montants pour les établissements publics et privés.",
        body: [
          "Le Décret n° 11228 a reconduit les allocations scolaires pour l'année 2022–2023, prévoyant des montants variables pour les établissements d'enseignement publics et privés.",
        ],
      },
      {
        slug: "decree-11226-minimum-salary",
        title: "Décret n° 11226 — Augmentation du salaire minimum",
        date: "2023-04-18",
        category: "Paie",
        excerpt:
          "Salaire minimum porté à LBP 9 millions avec ajustement des indemnités de transport.",
        body: [
          "Le Décret n° 11226 a porté le salaire minimum à LBP 9 millions et ajusté les indemnités de transport, à compter du 26 avril 2023. Les employeurs doivent mettre à jour la paie en conséquence.",
        ],
      },
    ],
  },

  contact: {
    eyebrow: "Contact",
    title: "Parlons-en",
    subtitle:
      "Parlez-nous de votre entreprise et de vos besoins. Un associé vous répondra — généralement dans un délai d'un jour ouvrable.",
    formTitle: "Envoyez-nous un message",
    formSubtitle: "Vous préférez échanger de vive voix ? Appelez-nous ou écrivez-nous par e-mail.",
    labels: {
      name: "Nom complet",
      email: "E-mail",
      phone: "Téléphone",
      company: "Société",
      service: "Comment pouvons-nous vous aider ?",
      selectService: "Sélectionnez un service",
      message: "Message",
      send: "Envoyer le message",
      sending: "Envoi en cours…",
      required: "obligatoire",
    },
    successTitle: "Merci — votre message a été envoyé.",
    successBody: "Un associé de K&K vous contactera sous peu.",
    errorMsg: "Une erreur s'est produite. Veuillez réessayer, ou nous écrire directement.",
    privacyNote:
      "En envoyant ce message, vous acceptez d'être contacté au sujet de votre demande. Nous traitons vos informations de manière confidentielle.",
    infoTitle: "Coordonnées",
    hoursLabel: "Horaires d'ouverture",
    addressLabel: "Bureau",
    phoneLabel: "Téléphone",
    emailLabel: "E-mail",
    mapTitle: "Trouver notre bureau à Badaro, Beyrouth",
  },

  careers: {
    eyebrow: "Carrières",
    title: "Construisez votre carrière chez K&K",
    subtitle:
      "Nous nous battons pour attirer les talents. Si vous êtes comptable, auditeur ou fiscaliste et souhaitez de vraies responsabilités et le mentorat d'experts-comptables assermentés, nous aimerions vous rencontrer.",
    body: [
      "K&K est une équipe de 14 professionnels où vous ne serez pas un numéro. Vous travaillerez directement avec les associés sur de vrais mandats en audit, fiscalité et conseil, pour des clients de plus de vingt secteurs.",
      "Nous investissons dans les qualifications professionnelles et l'ouverture internationale grâce à notre adhésion à GMN International.",
    ],
    perksTitle: "Pourquoi nous rejoindre",
    perks: [
      "Un mentorat piloté par des associés experts-comptables assermentés",
      "De vraies responsabilités, dès le début",
      "Un soutien pour les qualifications LACPA, ACCA, CMA et autres",
      "Une ouverture internationale via GMN International",
      "Un large éventail de secteurs et de missions",
    ],
    openTitle: "Postes ouverts",
    openBody:
      "Nous sommes toujours intéressés par des auditeurs, comptables et fiscalistes talentueux. Envoyez-nous votre CV et dites-nous ce que vous recherchez.",
    ctaTitle: "Postulez dès aujourd'hui",
    ctaBody: "Envoyez votre CV et un court mot de présentation.",
  },

  privacy: {
    title: "Politique de confidentialité et de cookies",
    subtitle:
      "Comment K&K Auditors & Consultants collecte, utilise et protège vos informations.",
    updated: "juillet 2026",
    sections: [
      {
        h: "Qui nous sommes",
        body: [
          "K&K Auditors & Consultants Civil Co. (« K&K », « nous ») est un cabinet d'audit, de fiscalité et de conseil situé à Badaro, Beyrouth, Liban. Nous nous engageons à protéger la confidentialité des informations qui nous sont confiées — un principe au cœur de notre profession.",
        ],
      },
      {
        h: "Informations que nous collectons",
        body: [
          "Lorsque vous nous contactez via ce site web, nous collectons les informations que vous fournissez — telles que votre nom, votre e-mail, votre numéro de téléphone, votre société et votre message — afin de pouvoir répondre à votre demande. Nous pouvons également collecter des données analytiques anonymes de base sur la façon dont les visiteurs utilisent le site.",
        ],
      },
      {
        h: "Comment nous utilisons vos informations",
        body: [
          "Nous utilisons vos informations uniquement pour répondre à votre demande, fournir nos services et respecter nos obligations légales et professionnelles. Nous ne vendons pas vos informations personnelles.",
        ],
      },
      {
        h: "Confidentialité",
        body: [
          "En tant qu'experts-comptables, nous sommes tenus à une stricte confidentialité. Les informations des clients et des clients potentiels sont traitées avec le soin et l'indépendance requis par nos normes professionnelles.",
        ],
      },
      {
        h: "Cookies",
        body: [
          "Ce site web peut utiliser des cookies essentiels à son fonctionnement et, le cas échéant, des cookies analytiques respectueux de la vie privée pour nous aider à améliorer le site. Vous pouvez contrôler les cookies via les paramètres de votre navigateur.",
        ],
      },
      {
        h: "Contact",
        body: [
          "Pour toute question concernant cette politique ou vos informations, contactez-nous à info@kandkauditors.com.",
        ],
      },
    ],
  },

  footer: {
    desc:
      "Un cabinet à service complet d'experts-comptables assermentés à Badaro, Beyrouth — audit, fiscalité et conseil aux normes internationales, et membre exclusif de GMN International au Liban.",
    companyTitle: "Cabinet",
    servicesTitle: "Services",
    resourcesTitle: "Ressources",
    contactTitle: "Contact",
    rights: "Tous droits réservés.",
    disclaimer:
      "Les informations de ce site constituent une information générale, et non un conseil fiscal ou juridique. Les taux et les règles évoluent — confirmez votre situation auprès de K&K ou de l'autorité compétente.",
    privacy: "Confidentialité et cookies",
    followUs: "Suivez-nous",
  },
};

export default fr;
