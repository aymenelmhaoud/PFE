# Projet React - Microlocalisation des Monuments Historiques avec Beacons

Ce projet est une application web développée en React permettant la visualisation et la gestion des informations liées à la microlocalisation de monuments historiques à l'aide de capteurs Beacon. Il comprend une interface utilisateur grand public et une interface d'administration.

## Objectif

Permettre à des visiteurs d'accéder à des informations historiques géolocalisées sur les monuments à proximité, grâce à l'intégration de balises Beacon et d'une carte interactive.

## Fonctionnalités principales

- Affichage d'une carte Mapbox avec les monuments proches
- Popups sur la carte contenant les détails historiques de chaque lieu
- Interface utilisateur simple pour la consultation
- Interface administrateur avec :
  - Tableau de bord des visites par monument
  - Statistiques et graphiques d'activité
  - Gestion des lieux et des contenus historiques

## Stack technique

- React (Vite ou CRA)
- Mapbox GL JS
- Recharts ou Chart.js pour les graphiques
- React Router
- Axios pour les appels API
- Styled-components ou Tailwind CSS
- Beacon API ou intégration BLE via un back mobile (si applicable)
- API backend REST (non inclus ici)

## Structure du projet

- pages/
  - AdminDashboard.jsx
  - UserMapView.jsx
  - Login.jsx
- components/
  - Map.jsx (carte Mapbox)
  - MonumentPopup.jsx
  - Graphs.jsx
- services/
  - api.js
- assets/
  - images, icônes, etc.

## Lancement du projet

1. Cloner le dépôt
   git clone https://github.com/aymenelmhaoud/microlocalisation-monuments.git
   cd microlocalisation-monuments

2. Installer les dépendances
   npm install

3. Configurer les variables d'environnement dans un fichier .env
   Exemple :
   VITE_MAPBOX_TOKEN=ton_token_mapbox
   VITE_API_URL=https://ton-api.com

4. Lancer l'application
   npm run dev

## Carte Mapbox

La carte affiche tous les monuments à proximité de l'utilisateur. Chaque point sur la carte peut être cliqué pour afficher un popup avec :

- Le nom du lieu
- Une photo (si disponible)
- Un résumé historique
- Une éventuelle vidéo ou lien externe

## Interface admin

Accessible via un login (page /admin ou /login). Elle permet :

- De visualiser les statistiques d'utilisation
- D’ajouter, modifier ou supprimer des monuments
- De voir les données récoltées depuis les beacons

## Données et sécurité

Les données proviennent du backend via API REST. L'authentification se fait par token (JWT ou autre).

## Déploiement

Le projet peut être déployé sur Vercel, Netlify ou via un serveur Nginx.

## Licence

Projet libre d’usage à des fins pédagogiques, culturelles ou expérimentales.

