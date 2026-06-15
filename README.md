# 🏗️ Application de Calepinage - Durand Béton

## 📖 Présentation du projet
Cette application web Full-Stack a été développée dans le cadre d'un projet de refonte pour l'entreprise **Durand Béton**, sous la direction de **Tenor PMO**. 

Il s'agit d'un outil métier sur mesure destiné à optimiser le suivi des chantiers et à automatiser le "calepinage" (calcul d'empilement complexe de pièces en béton préfabriquées telles que les cunettes et rehausses) en fonction des contraintes topographiques du terrain.

Ce projet a été réalisé lors d'un stage de fin d'année de BUT Réseaux et Télécommunications (Parcours : Pilotage de Projet).

## 🛠️ Stack Technique
L'architecture du projet est séparée entre une interface utilisateur réactive (Frontend) et une API robuste (Backend).

**Frontend :**
* [React-Admin](https://marmelab.com/react-admin/) - Framework B2B
* [Material-UI (MUI)](https://mui.com/) - Composants et design system
* [Polyglot](https://airbnb.io/polyglot.js/) - Gestion de l'internationalisation (i18n)

**Backend & Base de données :**
* [Next.js](https://nextjs.org/) - API Routes
* [PostgreSQL](https://www.postgresql.org/) - Base de données relationnelle
* [Sequelize](https://sequelize.org/) - ORM
* **Sécurité :** JSON Web Tokens (JWT) et Bcrypt (chiffrement des mots de passe)

## ✨ Fonctionnalités Principales
* **Moteur de calcul automatisé :** Sélection automatique des pièces de fond et empilement des rehausses selon la profondeur du chantier.
* **Gestion commerciale :** Création, édition et suivi des affaires, sous-affaires et clients.
* **Gestion des devis et remises :** Interface dédiée pour la tarification et la génération de données financières.
* **Authentification et RBAC :** Gestion sécurisée des sessions et des droits d'accès (Administrateur, Utilisateur, Lecteur).
* **Mode Sombre / Clair :** Thème personnalisé pour le confort visuel sur le terrain ou en bureau.
