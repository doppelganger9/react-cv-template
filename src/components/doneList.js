import React from 'react';
import Section from './shared/section';

const list= [
    'donner des présentations techniques en interne et parfois en international: CORS, Historique JavaScript, CI/CD Mobile, Web Assembly, Chatbot, Randoris',
    'mettre en place la partie OAuth2 pour le middle/API RESTful de nos sites et applis mobiles',
    'mettre en place et évangéliser sur les revues de code avec une checklist Definition of Done',
    `rentrer dans le code d'un projet inconnu et m'approprierun codebase`,
    `apprendre une nouvelle commande Git chaque jour, depuis 2007: plus de 10 000 commits sur 60 repositories internes et externes`,
    `mettre en place Intégration et Déploiement Continue, permettant la recette continue, et pousser à tout automatiser!`,
    `démarrer un projet Java ou Mobile de zéro`,
    `animer une équipe technique, des cérémonies agiles, des séances d'idéation (jusqu'à 25 personnes)`,
    `résoudre des problèmes de build (XCode Error 65 forever)`,
    `passer des heures à re-expliquer et affiner des architectures sur tableau blanc avec la terre entière`,
    `employé et client: "Eat Your Own Dog Food"`,
    `déployer en production des Applications Java ou Mobiles`,
];

export default function(props) {
    return (
        <Section id="done-this" title="Exemples de réalisations" icon="list-ul">
        <ul className="list-unstyled">
        {list.map(x=> (<li>- {x}</li>))}
        </ul>
        </Section>
    );
}