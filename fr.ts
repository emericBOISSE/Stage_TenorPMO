import frenchMessages from 'ra-language-french';

export const fr = {
    ...frenchMessages,
    ra: {
        ...frenchMessages.ra,
        page: {
            ...frenchMessages.ra.page,
            empty: 'Aucune donnée disponible.',
            invite: "Il n'y a pas encore d'éléments à afficher ici.", 
        }
    },
    custom: {
        menu: {
            clients: 'Clients',
            articles: 'Articles',
            regards: 'Regards',
            affaires: 'Affaires',
        },
        login: {
            title: 'Connexion',
            username: "Nom d'utilisateur",
            password: 'Mot de passe',
            submit: 'Se connecter',
        },
        user: {
            welcome: 'Connecté en tant que',
            profile: 'Modifier mot de passe',
        },
        errors: {
            not_found_title: 'Page introuvable',
            not_found_msg: 'L\'URL que vous avez saisie ne correspond à aucune page.',
            crash_title: 'Oups ! Une erreur est survenue',
            crash_msg: 'L\'application a rencontré un problème inattendu.',
            back: 'Retour',
            retry: 'Réessayer',
        },
        messages: {
            not_implemented: "Cette fonctionnalité n'est pas encore disponible.",
        }
    },
};