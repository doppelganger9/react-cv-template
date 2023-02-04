import { type ISection } from '.'

export interface IExperiences extends ISection<IExperience> {
}
export interface IExperience {
  title: string
  company: string
  description: string
  companyLink: string
  companyShortDetail: string
  date: string
}

export const experiences: IExperiences = {
  sectionTitle: 'Expériences',
  icon: 'briefcase',
  description: undefined,
  list: [
    {
      title: 'Lead Dev API, Web et Mobile pour fronts clients digitaux',
      company: 'Harmonie Mutuelle - Groupe Vyv (freelance)',
      description: `Pendant 3 ans, j'ai pu accompagner mon client <b>Harmonie Mutuelle</b> 
        au sein du Stream Agile "Front Digitaux" constitué de 9 à 12 personnes, 
        sur le périmètre comprenant les produits "Parcours d'Affiliation", Extranet Adhérents, Extranet Courtier et Collaborateurs des entreprise affiliées 
        et les applications mobiles "Harmonie et Moi", "MESE et moi" et "Ma Complémentaire Santé TotalEnergie",
        pour <ul>
      <li>développer des <b>APIs RESTful Java Springboot</b>,
      <li>les consommer dans plusieurs frontaux <b>Angular</b> dont une <b>app mobile hybride Ionic</b>,
      <li>participer aux <b>migrations techniques de versions</b> (Angular 6 -> 8 -> 10 -> 12, mais aussi en Java sur des versions mineures de Springboot 2.x), 
      <li>partager mes 14 années d'expérience agile (sans être "Coach Agile") / pris le rôle de <b>Scrum master</b> ou animateur du daily meeting et de quelques retrospectives (car rôle tournant dans l'équipe) sur une <b>cinquantaine de sprints de 3 semaines</b>,
      <li>mener des <b>refactorings en profondeur</b> sur les différentes bases de code (mobile, web ou java),
      <li>apporter mon expertise, par exemple, sur <b>git</b> ou les stratégies et l'écriture de <b>tests unitaires</b> en <b>Java</b> et <b>Typescript</b> sur Angular,
      <li>assister le Lead Tech en place sur le <b>recrutement de nouveaux membres</b> de l'équipe, l'<b>accompagnement de juniors/alternant/nouveaux arrivés</b>,
      <li>effectuer quelques <b>présentations techniques</b> lors de sessions de vulgarisation (jusqu'à 60 participant en ligne),
      <li><b>résolu des anomalies</b> de production (dont je n'étais pas forcément l'auteur 😇)
      </ul>
      <p>le tout en <b>respectant l'architecture pragmatique en place</b> (CI/CD Jenkins, plusieurs applis Springboot, 
        plusieurs front Angular6-12, REST, OpenAPI, PostgreSQL, Oracle); 
      <p>Expert sur la partie mobile (iOS, Android) et après avoir évangélisé sur PWA, 
      notre équipe a simplifié son process et le time to market en fusionnant le code source de l'app mobile Ionic 
        et du frontal web Angular en une seule base de code Angular+Capacitor 
        qui peut maintenant être déployée sur le Web, ou dans les Store.
        J'ai aussi mis en place une stratégie de déclinaison en marque blanche de l'application Harmonie et Moi, ce qui a donné naissance à 2 autres applications et bien d'autres à venir !`,
      companyLink: 'https://www.harmonie-mutuelle.fr',
      companyShortDetail: '',
      date: '2019.10 - 2022.10'
    },
    {
      title: 'Tech Lead Full Stack Pizza Team Signature Electronique et Espace Conversationnel',
      company: 'Generali',
      description: `Au sein d'une "pizza team" de 9 personnes, j'ai continué dans mon rôle de Tech Lead sur deux solutions majeures de notre département:
      un socle de signature électronique en MicroServices (CI/CD GitLab, Docker EE, Kubernetes, Angular7, SpringBoot, REST, Swagger, PostgreSQL),
      mais aussi la fonctionnalité de discussion instantannée Client-Agent et l'UI des chatbots de Generali LEO, LETIZIA (Azure WebApp, Gitlab CI/CD, Java 8, Spring, Hibernate, REST, Swagger, MySQL, Azure Functions, Serverless).`,
      companyLink: 'https://www.generali.fr',
      companyShortDetail: '',
      date: '2018.12 - 2019.10'
    },
    {
      title: 'Tech Lead Full Stack équipe Applications Mobile',
      company: 'Generali',
      description: `En tant que Tech Lead, j'anime et m'appuie sur l'expertise de l'équipe de développement, en méthodologie Agile (Scrum + Kanban).
      Notre équipe fait partie d'une communauté internationale pour la refonte de l'application Mon Generali, et j'ai pu représenter Generali France à cette occasion.
      J'ai aussi élargi mon périmètre pour faire des présentation et animer des ateliers auprès de la communauté des développeurs Web et Java de Generali France.
      Mon objectif étant de faire en sorte que chaque développeur puisse, s'il le souhaite, devenir un futur Tech Lead.
      Et 4 anciens collègues de mon équipe sont déjà partis sur cette route.`,
      companyLink: 'https://www.generali.fr',
      companyShortDetail: '',
      date: '2015.4 - 2018.12'
    },
    {
      title: 'Développeur Mobile Natif & Hybride',
      company: 'Generali',
      description: `J'ai eu l'occasion de monter rapidement en compétence sur de nouvelles technologies (dev. iOS et Android natif) et langages (Objective C) pour maintenir, faire évoluer et démarrer de nouveaux projets d'applications mobiles pour Generali et ses partenaires.
      De l'idée métier au déploiement sur les Stores.
      Tout en gardant mon expérience sur les API pour avoir une vision technique verticale complète.`,
      companyLink: 'https://www.generali.fr',
      companyShortDetail: '',
      date: '2011.11 - 2015.4'
    },
    {
      title: 'Développeur Senior/Architecte Java/JEE',
      company: 'Generali (prestation puis interne en 2009)',
      description: `J'ai commencé en tant que prestataire chez Generali, sur des projets web d'outils de gestion internes : un tarificateur pour assurances collectives, un outil de pilotage commercial, et de la maintenance.
      Devenu interne en avril 2009, je suis intervenu sur des outils d'informatique de gestion interne, mais aussi des sites grands public comme l'espace client Generali.`,
      companyLink: 'https://www.generali.fr',
      companyShortDetail: '',
      date: '2007.2 - 2011.11'
    },
    {
      title: 'Développeur Java/JEE',
      company: 'GAN Italia/Groupama Italia, CNP Assurances, Swiss Life (prestations ID Factory/Axones)',
      description: 'Diverses missions Java/JEE. Ces expériences ayant plus de 10 ans, je ne m\'étendrais pas dessus.',
      companyLink: 'http://???',
      companyShortDetail: '',
      date: '2002 - 2007.1'
    }
    /*
    {
      title: 'Consultant Prima Platform & Développeur Senior Java/JEE',
      company: 'GAN Italia/Groupama Italia',
      description: `A Rome, en italie, expatrié 1 an pour aider à la mise en place d'une solution web complète de tarification, souscription et consultation web pour les client de Groupama/GAN Italia.`,
      companyLink: 'http://???',
      companyShortDetail: '',
      date: '2006.1 - 2007.1'
    },
    {
      title: 'Développeur Java/JEE',
      company: 'CNP Assurances',
      description: `Sur un extranet de produits d'assurance emprunteur en marque blanche.`,
      companyLink: 'http://???',
      companyShortDetail: '',
      date: '2004 - 2005.12'
    },
    {
      title: 'Développeur Junior Java/JEE',
      company: 'ID Factory/Axones',
      description: `En tant que prestataire de service, j'ai accomplis diverses missions en début de carrière pour des clients du monde de l'assurance.`,
      companyLink: 'http://???',
      companyShortDetail: '',
      date: '2002 - 2004'
    } */
  ]
}

export default experiences
