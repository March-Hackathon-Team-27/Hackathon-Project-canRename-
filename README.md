# What's The Craic?

[GitHub Pages Live Site](https://march-hackathon-team-27.github.io/Hackathon-Project-canRename-/index.html)

A compact collection of simple Irish themed games or trivia which can be enjoyed across a video call by multiple households - enabling celebration of St Patrick's Day together, but apart!

1. A landing page explaining the layout and purpose of the site. 
1. Selection of trivia flip cards to try out knowledge of Gaelige.
2. A quiz for households to compare their Irish general knowledge!
3. A card match traditional memory game, with St Patrick's Day themed images.

![Am I Responsive](assets/images/am-i-responsive.png)
[View the live site here](https://march-hackathon-team-27.github.io/Hackathon-Project-canRename-/index.html)

# Index
1. [UX Design](#ux-design)
1. [Features](#features)
1. [Technologies Used](#technologies-used)
1. [Testing](#testing)
1. [Deployment](#deployment)
1. [Credits](#credits)

## UX Design

This website is for friends and family who would normally celebrate together but are unable to do so because of the lockdown.  The website provides activities to undertake together, both competetive and just for interest and fun.  The users are likely to include families, so the activities are suitable for all ages.  The users are likely to need to share the screen on a video call, so the design is clear and simple.

The owners of this website want to bring together people for a multitude of reasons. St Patrick's Day is an enormous social celebration in Ireland and this website facilitates social activity to emulate that as far as possible.  It will also help those who might feel isolated in their celebration (or lack thereof) to feel included and part of the community they would normally engage with at this time of year.

### User Stories
* As a first time user, I want to find out what activities the site offers and how easy they are to use, so that I can decide whether it suits the needs of my party.
* As a first time user, I want to be able to easily navigate to each game and try them to see if I think my party will enjoy them.
* As a first time user, I want to easily learn what each game involves and how it works, so that I can share the idea with my party.
* As a returning user, I want to easily access the first game my party wish to play, so that I can share it with them.
* As a returning user, I want to easily share the game content on my screen without too much scrolling or manipulation of the page, so that I can focus on the experience of the game.
* As a regular user, I want to get straight to the content of the game I wish to play, so that I can get straight to enjoying my social experience.

### Wireframes
Home:
![Home Page](assets/images/wireframe_hackathon.png)

## Features
Each page features consistent design via use of colours to facilitate an intuitive and comfortable user experience.  There is a central home page with links directly to each game for quick and easy use.

The website has a number of games to choose from, meaning users do not have to switch through various sites to facilitate their celebration.
1. Trivia - Designed as a conversation feeder, an interesting and topical interactive experience to encourage dialog amongst participants.
2. Quiz - An interactive general Irish knowledge quiz.  Households can each open the page to complete the quiz and track their score, or all households can work together to try to beat the game and get top marks.  Set length to quiz to provide structure.
3. Match Cards - An open ended interactive game where cards are matched in a memory game.  The other households vote for their favourite, keeping score off-site.  There is no set length to this game.

### Existing Features
* Bright, on-theme design to help users feel part of a wider celebration.

#### Translation Trivia
* Large responsive cards which display well across a shared screen.
* Clear notation and colour response to indicate English/Gaelige display.
* Split into easy to digest sections.
* Cards wrap below one another as viewport scales.

#### Quiz
* Clean bright design which displays clearly across a shared screen.
* One question per page which prevents the need to scroll and improves the user experience when shared on a video call.
* Score counter so that households playing concurrently can all keep track of their score.
* Clearly displayed buttons to play again or return to the homepage.

#### Match Cards
* Bright design which ties in with the celebratory theme.
* Large clear tiles which display well across a shared screen.
* Page response upon finding a match pair.
* Score counter.
* Clearly displayed buttons to play again or return to the homepage.

### Features Left to Implement
* Video conferencing
* Accounts and login to manage scoring retention and management
* Leaderboard

## Technologies Used
* [HTML5](https://en.wikipedia.org/wiki/HTML5)
* [CSS3](https://www.w3.org/TR/2001/WD-css3-roadmap-20010523/)
* [Javascript](https://www.javascript.com/)
* [jQuery](https://jquery.com/)
* [Bootstrap](https://getbootstrap.com/)
* [Font Awesome](https://fontawesome.com/)

## Testing

### User Stories Testing
* As a first time user, I want to find out what activities the site offers and how easy they are to use, so that I can decide whether it suits the needs of my party.
    * The home page provides a brief description of each game, and a link directly to each relevany page.
* As a first time user, I want to be able to easily navigate to each game and try them to see if I think my party will enjoy them.
    * The website utilises the hub and spoke design, so the user can directly access each game from the first page they encounter.
* As a first time user, I want to easily learn what each game involves and how it works, so that I can share the idea with my party.
    * The games can all be played standalone, so the user will be able to fully experience each game.
* As a returning user, I want to easily access the first game my party wish to play, so that I can share it with them.
    * The links from the homepage facilitate this, linking directly to each game page.
* As a returning user, I want to easily share the game content on my screen without too much scrolling or manipulation of the page, so that I can focus on the experience of the game.
    * All games are suitable for screen sharing, the quiz and match card games appear in one section which does not require scrolling.  The trivia translation cards are arranged into sections, when shared from a computer each section appears in it's entirety.
* As a regular user, I want to get straight to the content of the game I wish to play, so that I can get straight to enjoying my social experience.
    * Users can utilise the bookmark feature within the browser, or make use of the home page and direct links.
    * Each page is named appropriately such that in=dentifying the desired game from history is easy.

### Manual testing

#### Home
* Check tab title is displaying correctly.
* Check all links open the correct content.
* Tested across various screen sizes and devices (Mobile, Desktop, Tablet & Laptop) to check responsiveness.

#### Trivia
* Check tab title is displaying correctly.
* Check all links open the correct content.
* Check that starter image and starter Gaelige text displays on all cards.
* Check that all cards flip.
* Check that all flipped cards have a green background, an image and English translation text.
* Tested across various screen sizes and devices (Mobile, Desktop, Tablet & Laptop) to check responsiveness.

#### Quiz
* Check tab title is displaying correctly.
* Check all links open the correct content.
* Check "New Game" button works.
* Check that each question feeds back an appropriate response for right/wrong answers and the counter counts accordingly.
* Tested across various screen sizes and devices (Mobile, Desktop, Tablet & Laptop) to check responsiveness.

#### Match Cards
* Check tab title is displaying correctly.
* Check all links open the correct content.
* Check "New Game" button works.
* Check that starter images all display correctly at the start of the game.
* Check that starter image returns if an incorrect match is made.
* Check that all tiles reveal an image, and that there are matches for each pair.
* Check score counter increases appropriately.
* Check that feedback message displays correctly.
* Tested across various screen sizes and devices (Mobile, Desktop, Tablet & Laptop) to check responsiveness.

## Deployment
The website was created using [GitPod](https://www.gitpod.io/). Version control was undertaken by committing to [Git](https://git-scm.com/) and pushing to [GitHub](https://github.com/) using the functions within GitPod.

### Deployment of the Page
1. In GitPod, ensure the tree is clean, and all required items have been committed and pushed to the repository in GitHub.
2. Sign in to GitHub.
3. A list of repositories should display on the left of the page. Choose the appropriate repository: lilblupig/curls-ms1
4. From the repository menu, choose Settings.
![GitHub menu snip](assets/images/deploy-1.png)
5. Scroll down the page to find the Pages section.
6. From the first dropdown box, choose the Master branch, then click save.
![GitHub Pages snip](assets/images/deploy-2.png)
7. The page will refresh, and the Pages section now shows a URL for the deployed site.
8. Click the URL to view the deployed website.

### How to Run the Code Locally
There are slightly different approaches should you choose to use GitPod to clone the project, or a local IDE.

#### Cloning a Project into GitPod
1. Use [Google Chrome](https://www.google.com/intl/en_uk/chrome/). *(This can also be undertaken in Firefox)*
2. If you do not already have one, [create a GitHub account](https://github.com/join).
3. Install the [GitPod browser extension for Chrome](https://chrome.google.com/webstore/detail/gitpod-dev-environments-i/dodmmooeoklaejobgleioelladacbeki).
4. Restart Chrome.
5. In GitHub, find the [project repository](https://github.com/March-Hackathon-Team-27/Hackathon-Project-canRename-).
6. From the repository menu, choose the green GitPod button.
![GitPod button snip](assets/images/deploy-3.png)
7. A new GitPod workspace will open containing the project code.

#### Cloning a Project into a Local IDE
1. Navigate to the [GitHub Repository](https://github.com/March-Hackathon-Team-27/Hackathon-Project-canRename-).
2. Choose the Code dropdown menu, and copy the URL.
![GitHub code download snip](assets/images/deploy-4.png)
3. Open your local IDE and then open a terminal.
4. Set the current working directory to your preferred location for the cloned project.
5. Type in "git clone " followed by the copied URL. Be sure to include a space between git clone and the url, then press enter.
6. The cloned project will be created.

You can find more information on cloning a repository from GitHub [here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository).

## Credits

### Website Credits

#### Content
* Content is inspired by traditional experiences and of laregly original design.

#### Media
* The photographs and images used in this site were obtained from:
  * [Background for Home Page - Moore Institute](https://mooreinstitute.ie/wp-content/uploads/2020/08/Shamrock.jpg)
  * [Large background for Quiz and cards - Pixabay](https://pixabay.com/illustrations/st-patricks-day-background-clover-2141384/)
  * [Thumbnails for games - various Pexels](https://www.pexels.com/)
  * [Thumbnails for games - various Pixabay](https://pixabay.com/)

#### Acknowledgements
* This project was created using the following resources:
  * [Code Institute Full Template](https://github.com/Code-Institute-Org/gitpod-full-template) - GitPod Template
  * [W3 Schools](https://www.w3schools.com/) - Various resources
  * [Make Thumbnails](http://www.makethumbnails.com/#dropzone) - Image resizing
  * [W3 Schools](https://www.w3schools.com/howto/howto_css_flip_card.asp) - Card flips
  * [Codepen: Arisusaktos](https://codepen.io/arisusaktos/pen/VyPJRv) - Quiz questions
  * [Code Institute JavaScript Walkthrough Project](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+CPJS_06_20+2020_T1/courseware/37b00154d62e4ae8a1ed1536d231b44d/99594bad5d4649ed893caaa959f22dae/) - Scrore Counter
  * [Free Code Camp](https://www.freecodecamp.org/news/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae/) - Memory Game

### README Credits

#### Content
* Structure and content based heavily on:
  * [Code Institute Solutions - README Template](https://github.com/Code-Institute-Solutions/readme-template)
  * [Anna Greaves - Portrait Artist README](https://github.com/AJGreaves/portrait-artist/blob/master/README.md)

#### Media
* The images for this README are from the following sources:
  * Deployment snips taken from GitHub.
  * [Am I Responsive](http://ami.responsivedesign.is/).
