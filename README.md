# keskonfait

Keskonfait a pour but de faciliter la recherche d’activités, de stages pour les enfants pendant les vacances
scolaires, les week-end, les mercredis...
Il propose également à des organisateurs d’activités, à destination de jeune public, d’être visibles.
L’application a sa propre API Rest, alimentée par les contributions d’un administrateur et d’organisateurs
proposant des activités.
Les organisateurs peuvent renseigner leurs activités après inscription validée par l’administrateur.
L’utilisateur peut consulter les offres proposées sans inscription. S’il le souhaite, après inscription, il peut
sélectionner les offres qui l’intéressent et les enregistrer dans ses favoris. Il peut également les partager
sur les réseaux sociaux et par email.
La réalisation du projet étant soumise à des contraintes de temps et d’énergie, je me suis concentrée ici sur
le développement de la partie organisateur d’activités.

## Spécifications techniques

### Frontend

J’ai utilisé les bibliothèques javascript __React JS__ et celles associées __React-Redux__ et __React-Toolkit__ pour la
gestion des états et la construction d’un store.
J’ai choisi la technologie React JS car elle permet d’obtenir un code facile à maintenir et à faire évoluer.


### Backend

Pour construire une __API Rest__, j’ai utilisé le runtime __NodeJs__ et l’infrastructure __Express JS__ pour exécuter le code
côté serveur et pour créer l’application. 
La base de données mise en place est une base de données relationnelle SQL et le système de gestion de la
base de données est __mariaDB__.
Pour faciliter la gestion des données et des requêtes sur NodeJS/Express, j’ai utilisé l’__ORM Sequelize__.La
migration de la base de données a été faite via __Sequelize CLI__.
Les tests unitaires et fonctionnels sont effectués via la librairie __Jest__.

##Installation

