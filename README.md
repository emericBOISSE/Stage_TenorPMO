# 🏗️ Portfolio de Pilotage de Projet : Application "Calepinage"

⚠️ **Note de confidentialité :** *Pour des raisons de confidentialité et de respect du secret professionnel envers l'entreprise Tenor PMO et son client Durand Béton, ce dépôt ne contient pas l'intégralité du code source de l'application. Il présente uniquement des extraits d'architecture et des composants clés illustrant le travail de structuration et de supervision technique.*

## 📖 Contexte du projet
Ce projet a été réalisé lors de mon stage de fin d'année de BUT Réseaux et Télécommunications (Parcours : Pilotage de Projet) au sein de **Tenor PMO**. 

L'objectif était la refonte complète d'un outil métier critique pour **Durand Béton**, visant à automatiser le "calepinage" (calcul complexe d'empilement de pièces en béton préfabriquées) et à faciliter la gestion commerciale des chantiers.

## 🎯 Mon Rôle : Chef de Projet Technique & Scrum Master
Plutôt que d'intervenir uniquement sur le développement pur, ma mission principale a été de **piloter la réalisation de l'application de bout en bout** et de coordonner une équipe de 3 développeurs (Nagarjuna, Geetha, Olivier).

### 📊 Pilotage Agile et Management
* **Mise en place de la méthodologie Scrum :** Organisation du travail en sprints pour éviter l'effet tunnel.
* **Gestion du Backlog sur Jira :** Traduction des besoins du client, création, documentation détaillée et suivi de **124 tickets de développement**.
* **Animation d'équipe :** Conduite des rituels agiles (Daily Stand-ups de 15 min), suivi de la charge de travail et levée des points de blocage.
* **Stratégie de Recette :** Planification des tests, gestion des environnements et organisation des "code freezes" pour garantir des mises en production sans bug.

### 📐 Supervision de l'Architecture Technique
J'ai également été chargé de valider et standardiser les choix technologiques de l'équipe pour garantir un code propre, sécurisé et maintenable :

* **Frontend (React-Admin / Material-UI) :** Supervision de la création d'un `CustomLayout` (Thème global clair/sombre) et imposition d'une gestion stricte de l'internationalisation via Polyglot (dictionnaires `i18n`).
* **Backend (Next.js / PostgreSQL / Sequelize) :** Contrôle des routes d'API, mise en place de la pagination dynamique et vérification des migrations SQL.
* **Sécurité & RBAC :** Implémentation supervisée d'une protection des routes par profil utilisateur, sécurisation des sessions par **jetons JWT**, et chiffrement des mots de passe en base de données via **Bcrypt**.

## 📂 Contenu de ce dépôt
Dans ce dépôt, vous trouverez des extraits illustrant la standardisation imposée à l'équipe :
* La configuration des routes et de la sécurité (ex: `HomeDispatcher`).
* La structure du menu et des permissions dynamiques (`App.tsx`).
* L'arborescence des dossiers reflétant la séparation stricte Frontend / Backend.

---
*Ce projet démontre ma capacité à faire le pont entre les besoins stratégiques d'un client, l'ingénierie logicielle, et la coordination humaine d'une équipe de développement.*
