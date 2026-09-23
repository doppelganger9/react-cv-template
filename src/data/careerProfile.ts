import { type ISection } from '.'

export interface ICareerProfile extends ISection<void> {
}

export const careerProfile: ICareerProfile = {
  sectionTitle: 'parcours professionnel',
  icon: undefined,
  list: undefined,
  description: `
    <p><b>Senior Software Engineer / Tech Lead hands-on</b>, je fabrique du logiciel depuis 24 ans. J'aime prendre un sujet de bout en bout : comprendre le besoin, entrer dans un système existant, choisir une solution pragmatique et la construire avec l'équipe. <b>Codeur depuis l'âge de 10 ans</b>, j'ai suivi un cursus scientifique puis une <a href="https://www.esiee.fr/">école d'ingénieur</a>. À la sortie, j'ai commencé dans une startup ; la bulle Internet a éclaté, et une SSII m'a envoyé chez Swiss Life. Depuis 2002, j'ai surtout travaillé dans l'assurance et les mutuelles — des métiers que je connais maintenant de l'intérieur.</p>

    <p>Je suis passé de Java/JEE au mobile natif, puis à JavaScript et au mobile hybride. En 2015, mon équipe m'a élu <b>Tech Lead</b> ; j'ai alors tout fait pour être à la hauteur du titre : code review, pratiques partagées, tests, CI/CD et accompagnement des développeurs.</p>

    <p>Après 11 ans chez Generali, j'ai quitté mon poste interne en 2019 pour me lancer en freelance. Chez Harmonie Mutuelle, j'ai rapproché le Web et le mobile avant d'y revenir pour travailler sur le SI adhérent et ses parcours d'identité. Entre-temps, je suis retourné chez Generali — dans mon ancienne équipe, avec une nouvelle casquette d'expert technique.</p>

    <p>Je veux rester dans la <b>fabrication du logiciel</b>. L'Agile, le rôle de Scrum Master et la facilitation m'aident à faire avancer le travail de l'équipe sans m'éloigner du code. Plus récemment, j'ai commencé à intégrer Copilot puis des agents IA à ma pratique, en gardant la responsabilité des choix techniques et du résultat.</p>
    `
}

export default careerProfile


/* Récit original conservé lors de sa mise à jour.
  description: `
    <p>Codeur depuis l'âge de 10 ans, j'ai suivi un cursus scolaire scientifique, 
        puis une <a href="https://www.esiee.fr/">école d'ingénieur</a> qui m'a donné de solides bases générales et m'a appris à apprendre.</p>

    <p>J'ai ensuite commencé dans une Startup mais en plein éclatement de la 
        <a href="https://fr.wikipedia.org/wiki/Bulle_sp%C3%A9culative_(Internet)#Krach_boursier_de_2001-2002">bulle internet</a>, 
        pour être repêché par une SSII et placé en mission dans le domaine des assurances : 
        <a href="https://fr.wikipedia.org/wiki/Swiss_Life">Swiss Life France</a> en 2002, 
        <a href="https://fr.wikipedia.org/wiki/CNP_Assurances">CNP Assurances</a> de 2004 à 2005, 
        <a href="https://fr.wikipedia.org/wiki/Groupama">Gan Italia/Groupama</a> expatrié à Rome un an en 2006, 
        puis <a href="https://fr.wikipedia.org/wiki/Generali">Generali</a> à mon retour d'Italie depuis 2007.
    
        J'ai été embauché en tant qu'interne en 2009.
    
        J'ai découvert et approfondi Java, JEE, plus généralement les technologies du Web sur de l'informatique de gestion et des espaces clients.</p>

    <p>En 2011, j'ai sauté sur l'occasion d'accomplir ce qui était au départ mon idée en fin d'école d'ingénieur : 
        développement mobile en changeant complètement de langage.</p>

    <p>Depuis 2013, j'ai re-découvert et suis tombé amoureux de JavaScript avec Node.JS, 
        puis le développement d'application mobile hybrides depuis 2014 et les frameworks web modernes, 
        ce qui m'a permis de concilier mon expertise web et mon expertise mobile.</p>

    <p>En 2015, l'équipe m'a élu Tech Lead, et j'ai alors tout fait pour être à la hauteur du titre : 
        code review, animation de réunions techniques, règles de code partagées, collective code ownership, 
        tests unitaires, intégration et end-to-end, intégration et déploiement continue...</p>
    
    <p>En 2019, après 11 ans chez Generali, j'ai quitté mon poste interne pour me lancer en freelance.
        J'apporte à mes clients (bientôt vous, peut-être ?) mon savoir faire et mes multiples expertises.</p>
    `
*/
