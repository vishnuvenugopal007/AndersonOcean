/* <div id= "cover-photo"></div>
*/
var coverPhoto = {
  image.src = ''

}
function renderCover(photo) {
  /*
  <div class="coverPhoto">
  </div>
  */
  var $coverPhoto = document.createElement('div')
  $coverPhoto.content = photo.cover
  $coverPhoto.appendChild(cover)
  $coverPhoto.setAttribute('class', 'cover-photo')

  return $coverPhoto
}

/*
<div id="profile">
  <div id="profile-photo"> </div>
  <div id="user-info">
    <h2 class = "username"></h2>
    <h3 class = "twittername"></h3>
    <p id = "about"></p>
  </div>
*/

var profile = {
  profilePicture: '',
  name:" ",
  handle: " ",
  about: " "
}

var miniProfile = {
 miniPic: url('https://pbs.twimg.com/profile_images/785502482478735360/WyoqOzXi.jpg'),
 name: "Vishnu Venugopal",
 handle: "Vish2thenu",
 about: "I act. I tell jokes. I try to sing and dance."
}

document.header.appendChild(miniProfile)

/*
var feed = [
  {username:"Haytham",twittername: "OFTemplar", content: "Why can't Natives see this isn't important?"}
  {username:"Connor" twittername:"NativeAvenger" content: "Standing Rock is Our Movement #NoDAPL"}
  {username:"Vic" twittername:"StillAlive" content: "@NativeAvenger your dad is wack"}
  {username:"Edward" twittername:"CaptKenway" content:"This is complicated. Much more complicated than I would like."}
  {username:"Mary" twittername: "CaptainKidd" content: "Never thought your family would be so split @CaptKenway"}
]
*/

var tweets = [
  {
    name: 'Vishnu',
    handle: 'Vish2thenu',
    content: 'Hello',
    timestamp: Date.now()
  },
  {
    name: 'Tim',
    handle: 'thebearingedge',
    content: 'Suuuup?'
    timestamp:Date.now()
  },
  {
    name: 'Ron',
    handle: 'ronperris',
    content: 'Code!!!!!'
    timestamp: Date.now()
  }
]

function renderTweet(tweet) {
  /**
   * <div class="tweet">
   *   <h4>{ name }</h4>
   *   <span>{ handle }</span>
   *   <p>{ content }</p>
   *   <p>{ timestamp }</p>
   * </div>
   */
   var $tweet = document.createElement('div')
   var $name = document.createElement('h4')
   $name.textContent = tweet.name
   var $handle = document.createElement('span')
   $handle.textContent = tweet.handle
   var $content = document.createElement('p')
   $content.textContent = tweet.content
   var $timestamp = document.createElement('p')
   $timestamp.textContent = tweet.timestamp
   $tweet.appendChild($name)
   $tweet.appendChild($handle)
   $tweet.appendChild($content)
   $tweet.setAttribute('class', 'tweet')

   return $tweet
}

for (var i = 0; i < tweets.length; i++) {
  var tweet = tweets[i]
  var $tweet = renderTweet(tweet)
  var $feed = document.getElementById('feed')
  $feed.appendChild($tweet)
}
