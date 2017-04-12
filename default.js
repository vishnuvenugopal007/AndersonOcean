//Constructor for waves
class Wave {
  constructor(id, username, displayName, handle, image, timestamp, content) {
    this.id = id;
    this.username = username;
    this.displayName = displayName;
    this.handle = handle;
    this.image = image;
    this.timestamp = timestamp;
    this.content = content;
  }
}

const waves = [
  new Wave(1, 'Vish2thenu', 'Vishnu', '@Vish2thenu', 'images/Vish2thenu.jpg', 'timestamp', 'Wave 1: Congrats to @future on grabbing the #1 & #2 albums in the country. #successandnothingless'),
  new Wave(2, 'Vish2thenu', 'Vishnu', '@Vish2thenu', 'images/Vish2thenu.jpg', 'timestamp', 'Wave 2: Am I the only one who thinks the "More Chune for your headtops so watch how you speak on my name" tag is wack?'),
  new Wave(3, 'Vish2thenu', 'Vishnu', '@Vish2thenu', 'images/Vish2thenu.jpg', 'timestamp', 'Wave 3: There are a lot of summer bangers on this Drake "playlist" though.')
]

//For Testing...without use of Constructor

const plainWaves = [
  {
    id: 1,
    username: 'Vish2thenu',
    displayName: 'Vishnu',
    handle: 'Vish2thenu',
    image: 'images/Vish2thenu.jpg',
    timestamp: 'Tuesday, April 4, 10:07 AM',
    content: 'Hello, this is my first wave!'
  },
  {
    id: 2,
    username: 'Vish2thenu',
    displayName: 'Vishnu',
    handle: 'Vish2thenu',
    image: 'images/Vish2thenu.jpg',
    timestamp: 'Monday April 3, 11:17 PM',
    content: 'How are you? This is my second wave.'

  },
  {
    id: 3,
    username: 'Vish2thenu',
    displayName: 'Vishnu',
    handle: 'Vish2thenu',
    image: 'images/Vish2thenu.jpg',
    timestamp:'Monday April 3, 3:27 PM',
    content: 'Good to meet you, this is my third wave!'

  },

]
//Constructor for Users

class User {
  constructor(id, username, displayName, handle, profilePic, about, location, faves, followers, following) {
    this.id = id;
    this.username = username;
    this.displayName = displayName;
    this.handle = handle;
    this.profilePic = profilePic;
    this.about = about;
    this.location = location;
    this.faves =  [];
    this.following = [];
    this.followers = [];
  }
}

const users = [
  new User( 1,
            'Vishnu',
            'Vishnu',
            '@Vish2thenu',
            'images/Vish2thenu',
            'The newest incarnation of the avatar of artistry.',
            'Los Angeles, CA',
            [],
            [],
            []
          ),
  new User( 2,
            'just call me Andy',
            '@AndersonPaak',
            'images/AndersonPaak',
            'Grammy nominated cheerleader prom dated... https://itun.es/us/GrfZeb  international booking beckie@xraytouring.com domestic: cyim@icmpartners.com',
            'Los Angeles, CA',
            [],
            [],
            []
          ),
  new User( 3,
            'Frank Ocean',
            '@FrankOcean',
            'frank.ocean',
            'images/FrankOcean',
            'Chanel',
            'London, UK',
            [],
            [],
            []
          ),
  new User( 4,
            'childishgambino',
            'Childish Gambino',
            'donaldglover',
            'images/DonaldGlover',
            'Learn to Code',
            'Los Angeles, CA',
            [],
            [],
            []
          )
]

//For Testing...without Use of Constructor

const plainUsers = [
  {
    id: 1,
    username: 'Vishnu',
    displayName: 'Vishnu',
    handle: '@Vish2thenu',
    profilePic: 'images/Vish2thenu',
    about: 'About V',
    location: 'California',
    faves: [],
    following: [],
    followers: []
  },
  {
    id: 2,
    username: 'AndersonPaak' ,
    displayName: 'just call me Andy',
    handle: '@anderson.paak',
    profilePic: 'images/AndersonPaak',
    about: 'Grammy nominated, cheerleader prom dated',
    location: 'Los Angeles',
    faves: [],
    following: [],
    followers: []
  },
  {
    id: 3,
    username: 'FrankOcean' ,
    displayName: 'Nikes',
    handle: '@christopher.francis.ocean',
    profilePic: 'images/FrankOcean',
    about: 'Freee...',
    location: 'London, UK',
    faves: [],
    following: [],
    followers: []
  },
  {
    id: 4,
    username: 'childishgambino' ,
    displayName:  'Donald Glover',
    handle: '@donaldglover',
    profilePic: 'images/Awaken',
    about: 'Make magic. Learn to code. Live your life.',
    location: 'Los Angeles, CA/Atlanta, GA',
    faves: [],
    following: [],
    followers: []
  }

]

const currentUser = users[0];
const currentUserName = users[0].displayName;
const currentHandle = users[0].handle;
const newID = waves.length + 1;

function idGenerator(waves){
  return waves.length + 1;
}

/*function makeWave(waves, id, displayName, handle, profilePic, timestamp, content){
  waves.push(new Wave(id:id, displayName:displayName, handle:handle, profilePic:profilePic, timestamp:timestamp, content:content))
}*/

const waveButton = document.createElement('button');
waveButton.className = 'wave-button';
waveButton.setAttribute('type', 'button');
waveButton.setAttribute('id', 'wave-button');
waveButton.textContent = 'Start a Wave';

const newWaveButton = document.getElementById('new-wave-button');
newWaveButton.appendChild(waveButton);

//Create Wave

const makeWave = document.createElement('textarea');
makeWave.className = 'make-a-wave';
makeWave.setAttribute('id', 'wave-creator');
makeWave.setAttribute('type', 'text');
makeWave.setAttribute('placeholder', 'What\'s in the water?');
makeWave.setAttribute('maxlength', '280');

const waveSend = document.createElement('button');
waveSend.className = 'wave-send';
waveSend.setAttribute('type', 'button');
waveSend.setAttribute('id', 'wave-send');
waveSend.textContent = 'Make a Wave';

const newWaveDiv = document.getElementById('new-wave-div');
newWaveDiv.appendChild(makeWave);
newWaveDiv.appendChild(wavePost);

const river = document.querySelector('#river')

function timeStamp() {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getUTCDate()
  const hour = date.getHours()
  const minutes = date.getMinutes()
  minutes = minutes > 9 ? minutes : '0' + minutes
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  return months[month] + ' ' + day + ' ' + hour + ':' + minutes
}

// creating the generic elements of a wave
function renderWaves() {

   for (var i = waves.length -1; i>= 0; i--) {

   var $waves = document.createElement('div');
   $wave.className = 'waves';

   var $thumbnail = document.createElement('img');
   $thumbnail.classname = 'thumbnail';
   $thumbnail.setAtrtibute = ('src', waves[i].image);
   $thumbnail.setAttribute('meta-data-username', waves[i].username);

   var $name = document.createElement('div');
   $name.classname = 'name';
   $name.textContent = waves[i].name;

   var $handle = document.createElement('span');
   $handle.classname = 'handle';
   $handle.textContent = waves[i].handle;

   var $favorite = document.createElement('button');
   $favorite.classname = 'fa-heart-o'
   $favorite.setAttribute('type', 'button');
   $favorite.setAttribute('id', waves[i].id);

   var $content = document.createElement('div');
   $content.classname = 'wave';
   $content.textContent = waves[i].content;

   var $timestamp = document.createElement('span');
   $timestamp.classname = 'time';
   $timestamp.textContent = waves[i].timestamp;

   $waves.appendChild($thumbnail)
   $waves.appendChild($name);
   $waves.appendChild($handle);
   $waves.appendChild($favorite);
   $waves.appendChild($content);
   $waves.appendChild($timestamp);
   river.appendChild($waves)
   $waves.setAttribute('class', 'wave');

   return $waves
 }
}
renderWaves();

var $river = renderWaves(waves)
document.body.appendChild($river)

//linking favorited waves to fave collection

function favoriteUpdate() {
  const total = document.getElementById('favorited');
  const faves = currentUser.favorited.length;
  total.textContent = ' ' + faves;
}
favoriteUpdate();

function toggleFavorite(user, toFavorite) {
  if(user.favorited.indexOf(toFavorite) === -1) {
    user.favorited.push(toFavorite);
  } else {
    let position = user.favorited.indexOf(toFavorite);
    user.favorited.splice(position,1)
  }
  favoriteUpdate();
  renderWaves();
}
// Follow toggle / Follower check.

function followUpdate() {
  const total = document.getElementById('following')
  const followers = currentUser.following.length;
  total.textContent = ' ' + followers
}
followUpdate();

function toggleFollow(user, toFollow) {
  if(user.following.indexOf(toFollow) === -1) {
    user.following.push(toFollow);
  } else {
    const position = usr.following.indexOf(toFollow);
    user.following.splice(position, 1);
  }
  followUpdate();
  renderWaves();
}

document.addEventListener('click', function(Event) {
  if(Event.target.className.indexOf('star') !== -1) {
    let id = theEvent.target.getAttribute('id')
    for (i = 0; i < waves.length; i++) {
      if(waves[i].id === id) {
        let name = waves[i].username;
      }
    }
    toggleFollow(currentUser, name);
  }
  if (Event.target.className.indexOf('waveSend') !== -1) {
    const newWaveEntry = document.getElementById('wave-creator').value
    const timestamp = timestamp();
    const newWaveID = idGenerator(waves)
    makeWave(waves, newWaveId, newWaveEntry, currentUserName, timestamp, currentUserImage);
    renderWaves();
    const clearWave = document.getElementById('wave-creator')
    function clearContent(element) {
      element.value = '';
    }
    clearContent(clearWave)
  }
})

const text = document.getElementById('new-wave-div')
const lake = document.getElementById('lake')
const downStream = document.getElementById('wave-button')
const upStream = document.getElementById('waveSend')


downStream.addEventListener('click', function(event) {
  text.classList.remove('up')
  lake.classList.remove('up')
  downStream.classList.remove('down')
  upStream.classList.add('up')
})

upStream.addEventListener('click', function(event) {
  text.classList.add('up')
  lake.classList.add('up')
  downStream.classList.remove('down')
  upStream.classList.add('up')
})

const profileDetails = document.querySelector('.profile-details')
const name = document.querySelector('.name')
const image = document.querySelector('.profile-pic')
const handle = document.querySelector('.handle')
const about = document.querySelector('.about')
const location = document.querySelector('.location')

function renderProile(user, url, name, location, about){
  name.textContent = user;
  image.setAttribute('src', 'user[i].image')
  displayName.textContent = name
  location.textContent = location
  about.textContent = about
  profile.classList.add('right')
  river.classList.add('right')
}

document.addEventListener('click', function(){
  profile.classList.remove('right')
  river.classList.remove('right')
})

document.addEventListener('click', function(event){
  if(event.target.className.indexOf('thumbnail') !== -1){
    const userPic = event.target.getAttribute('meta-data-username')
    for ( i = 0; i < users.length; i++) {
      if ( users[i].username == userPic) {
        const $user = users[i].username;
        const $image = users[i].image;
        const $name = users[i].name;
        const $about = users[i].about;
        const $location = users[i].location;
      }
    }
    profileView(user, image, name, about, location)
    text.classList.add('up')
    lake.classList.add('up')
    downStream.classList.remove('down')
    upStream.classList.add('up')
  }
})



/** Loop through 'waves'
for each wave, bring the name, handle and content to screen
**/
for (var i = 0; i < waves.length; i++) {
  var wave = waves[i]
  var $wave = renderWave(wave)
  var $river = document.querySelector('river')
  $river.appendChild($wave)
}

/** Profile elements (name, handle, about & cover photo) */
function renderProfile(profile) {

  var $profile = document.createElement('div')
  $profile.setAttribute('id', 'miniProfile')


  var $cover = document.createElement('img')
  $cover.setAttribute('id', 'cover')
  $cover.setAttribute('coverPhoto', profiles.coverPhoto)
  $cover.src = profile.coverPhoto

  var $thumbnail = document.createElement('img')
  $thumbnail.setAttribute('profilePic', profiles.thumbnail)
  $thumbnail.src = profile.thumbnail

  var $userInfo = document.createElement('div')
  $userInfo.setAttribute('id', 'about')

  var $name = document.createElement('h1')
  $name.setAttribute('id', 'name')
  $name.textContent = profile.name

  var $handle = document.createElement('h3')
  $handle.textContent = profile.handle

  var $about = document.createElement('p')
  $about.textContent = profile.about

/*

<div id="profile">
  <img id ="cover" src="{profile.cover"}>
  <img id="thumbnail" src="{profile.thumbnail}">
  <div id="user-info">
    <h1 class = "name">{profile.name}</h1>
    <h3 class = "handle">{profile.handle}</h3>
    <p id = "about">{profile.about}</p>
  </div>
</div>

*/

  $profile.appendChild($cover)
  $profile.appendChild($thumbnail)
  $profile.appendChild($userInfo)
  $userInfo.appendChild($name)
  $userInfo.appendChild($handle)
  $userInfo.appendChild($about)

  document.body.appendChild($profile)
  document.body.appendChild($userInfo)

  return $profile
}
var $profile = renderProfile(user)
document.body.appendChild($profile)
