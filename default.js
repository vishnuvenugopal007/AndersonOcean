//Constructor for waves
class Wave {
  constructor(displayName, handle, timestamp, content) {
    this.id = id;
    this.displayName = displayName;
    this.handle = handle;
    this.profilePic = profilePic;
    this.timestamp = timestamp;
    this.content = content;
  }
}

const waves = [
  new Wave(1, 'Vishnu', '@Vish2thenu', 'images/Vish2thenu', 'timestamp', 'Wave 1: Congrats to @future on grabbing the #1 & #2 albums in the country. #successandnothingless'),
  new Wave(2, 'Vishnu', '@Vish2thenu', 'images/Vish2thenu', 'timestamp', 'Wave 2: Am I the only one who thinks the "More Chune for your headtops so watch how you speak on my name" tag is wack?'),
  new Wave(3, 'Vishnu', '@Vish2thenu', 'images/Vish2thenu', 'timestamp', 'Wave 3: There are a lot of summer bangers on this Drake "playlist" though.')
]


//Constructor for Users

class User {
  constructor(displayName, handle, profilePic, bio) {
    this.displayName = displayName
    this.handle = handle;
    this.profilePic = profilePic;
    this.about = about;
  }
}

const users = [
  new User('Vishnu','@Vish2thenu', 'images/Vish2thenu', 'The newest incarnation of the avatar of artistry.' )
  new User('just call me Andy','@AndersonPaak', 'images/AndersonPaak', 'Grammy nominated cheerleader prom dated... https://itun.es/us/GrfZeb  international booking beckie@xraytouring.com domestic: cyim@icmpartners.com')
  new User('Frank Ocean', '@FrankOcean', 'frank.ocean', 'images/FrankOcean', 'Life outside the internet')
  new User('childishgambino','Childish Gambino','donaldglover','images/DonaldGlover', 'Learn to Code')
]

const currentUser = users[0];
const currentUserName = users[0].displayName;
const currentHandle = users[0].handle;
const newID = waves.length + 1

// creating the generic elements of a wave
function renderWaves(waves) {
  /**
   * <div class="wave">
   *   <img id="thumbnail" src = "wave.thumbnail">
   *   <h4>{ name }</h4>
   *   <span>{ handle }</span>
   *   <p>{ content }</p>
   *   <p>{ timestamp }</p>
   * </div>
   */
   var $wave = document.createElement('div')
   $wave.setAttribute('id', 'wave')

   var $thumbnail = document.createElement('img')
   $thumbnail.classname = 'thumbnail'
   $thumbnail.setAttribute('thumbnailPhoto', waves[i].img)

   var $name = document.createElement('h4')
   $name.classname = 'name'
   $name.textContent = wave.name

   var $handle = document.createElement('span')
   $handle.classname = 'handle'
   $handle.textContent = wave.handle

   var $content = document.createElement('p')
   $content.classname = 'waves'
   $content.textContent = wave.content

   var $timestamp = document.createElement('span')
   $timestamp.classname = 'time'
   $timestamp.textContent = wave.timestamp

   $wave.appendChild($name)
   $wave.appendChild($handle)
   $wave.appendChild($content)
   $wave.setAttribute('class', 'wave')

   return $wave
}

var $river = renderWaves(waves)
document.body.appendChild($river)


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
  $cover.setAttribute('id', 'canopy')
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

//Create Wave

const makeWave = document.createElement('textarea');
makeWave.className = 'make-a-wave';
makeWave.setAttribute('id', 'make-a-wave');
makeWave.setAttribute('type', 'text');
makeWave.setAttribute('placeholder', 'What\'s in the water?');
makeWave.setAttribute('maxlength', '280');

const wavePost = document.createElement('button');
waveSend.className = 'wave-post';
waveSend.setAttribute('type', 'button');
waveSend.setAttribute('id', 'wave-send');
waveSend.textContent = 'Make a Wave';
