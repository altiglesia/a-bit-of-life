# a bit of life

<p align="center">
  <img src="https://user-images.githubusercontent.com/111707308/224375136-8adb35b3-be08-45cd-aae4-fdb966adaaa3.gif" alt="landing page" />
</p>

<p>
Started in December 2022, <i> a bit of life </i> is an 8-bit, 2D role-playing game designed and programmed by Alexandra Iglesia. The player controls a "Bit": the state of being an average person begins life as during a post-apocalyptic future. The player must travel along the global, fiber optic submarine cable systems and landing stations along the ocean floor in order to meet other Bits. The game was made in three weeks as a final capstone project for Flatiron School's Software Engineering program, and currently consists of an introduction sequence, personality quiz, and keyboard movement.
</p>

# description
<p>
technologies:
<ol>
  <li>React Redux for the frontend to centralize application state and logic, enabling state persistence.</li>
  <li>Ruby on Rails for the backend database that includes full user auth with JSON Web Tokens.</li>
  <li>Adobe Photoshop to design 8-Bit graphics, including the main character sprite.</li>
  <li>Adobe Audition for the introductory soundtrack.</li>
  <li>Tiled for the 2D game map.</li>
  <li>TeleGeography’s API to seed data of over 500 real international submarine cables.</li>
  <li>Libraries such as NES.css and NodeJS modules to style in nostalgic, retro game fashion.</li>
  <li>Render to deploy game to web.</li>
</ol>

challenges I faced and how I resolved them:
<ol>
  <li>TeleGeography recently privatized the GitHub page where they publicly shared the API and code to their <a href="https://www.submarinecablemap.com/">Submarine Cable Map</a>. In the end, I found a project that still fetches from the API <a href="https://github.com/vasturiano/globe.gl/blob/master/example/submarine-cables/index.html">here</a>. </li>
  <li>For MacBook Pro M1 users, the Tiled application doesn’t respond after a couple of edits to a map. At times, I had to wait an hour before the application started to work again; other times, it didn't respond for a whole night. This kept me from creating more 2D tiled maps efficiently and I ultimately needed to pivot towards other features in order to reach my deadlines. See bug issue <a href="https://discourse.mapeditor.org/t/it-cant-wrok-well-on-apple-m1-pro-monterry/5814">here</a>.</li>

</ol>

features I am looking to implement in the future:
<ol>
  <li>scaling database for application optimization.</li>
  <li>adding a range of different kinds of Bits. I am currently designing other colors and plan to add the choice option at the beginning (think early Pokemon games).</li>
  <li>more maps</li>
  <li>a longer plotline, which is also in the works</li>
  <li>live chat feature with web sockets</li>
  <li>graphics using Three.js</li>
</ol>
</p>

# how to play

### visit [bitoflife.onrender.com](https://abitoflife.onrender.com/)

<p align="center">
<img alt="A Bit of Life Keyboard" src="https://user-images.githubusercontent.com/111707308/223498691-4861e17d-58df-42e0-be75-f3cb5b144405.gif" width="45%">
</p>

# credits and thanks

- my instructor at Flatiron School in NYC, Chris K. Erlendson, for guidance
- my tech coach Charlie Kozey, for help and inspiration
- Raquel Román-Rodriguez for the awesome blog post on keyboard custom hooks in ReactJS and CSS tricks to make the sprite move: https://dev.to/raquii/using-two-dimensional-arrays-to-build-a-walkable-game-map-in-react-22e7 
