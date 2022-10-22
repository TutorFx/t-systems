Create a Vue.js appplication according to the requirements below. The result should be placed to the GitHub repository.

API:
List of users - https://api.github.com/users?per_page=<USERS_AMOUNT>
User details page - https://api.github.com/users/<USER_LOGIN>
User’s repositories -  https://api.github.com/users/<USER_LOGIN>/repos

Stack:
Vue, Vue Router, Vuex
Avoid using component libraries and CSS frameworks.
Will be a plus: Typescript, CSS preprocessors, usage of ESLint/Prettier with any standard preset

Routing:
Application should contain 2 pages:
“/” - Users List Page
“/:username” - User Details Page

Layout:
Test task should match design (For taking items and measures from design you need to login into Figma).
Logo with sign in header redirects to the root of the app
Icon in the footer redirects to the main Github page

Users List Page:
Page contains list of users. Username is a link to details page.
Tile contains user’s avatar or placeholder with a duck if it’s missing, username and link to user’s github page.
Search field filters users by username on client side.
“Users not found” sign is shown if nothing has been found.

User Details Page:
Contains user’s avatar or placeholder with a duck if it’s missing, username and a list of repositories
Each item in the list contains name of repository, amount of stars and watchers
Name of repository is a link to github
Back button redirects to the users list page