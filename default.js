//an attempt to create a list of tweets, viewable by a user
//along with a cover photo

/* <div id= "cover-photo"></div>

var coverPhoto = {
  image.src = ''

}
function renderCover(photo) {

  <div class="coverPhoto">
  </div>

  var $coverPhoto = document.createElement('div')
  $coverPhoto.content = photo.cover
  $coverPhoto.appendChild(cover)
  $coverPhoto.setAttribute('id', 'coverphoto')

  return $coverPhoto
}*/

var tweets = [
  {
    img: 'https://pbs.twimg.com/profile_images/785502482478735360/WyoqOzXi_bigger.jpg',
    name: 'Vishnu',
    handle: 'Vish2thenu',
    content: 'Hello',
    timestamp: Date.now()
  },
  {
    img: 'https://avatars3.githubusercontent.com/u/7432943?v=3&s=460',
    name: 'Tim',
    handle: 'thebearingedge',
    content: 'Suuuup?',
    timestamp:Date.now()
  },
  {
    img: 'https://avatars1.githubusercontent.com/u/963451?v=3&s=460',
    name: 'Ron',
    handle: 'ronperris',
    content: 'Code!!!!!',
    timestamp: Date.now()
  }
]


// creating the generic elements of a tweet
function renderTweet(tweet) {
  /**
   * <div class="tweet">
   *   <img id="thumbnail" src = "tweet.thumbnail">
   *   <h4>{ name }</h4>
   *   <span>{ handle }</span>
   *   <p>{ content }</p>
   *   <p>{ timestamp }</p>
   * </div>
   */
   var $tweet = document.createElement('div')
   $tweet.setAttribute('id', 'update')

   var $thumbnail = document.createElement('img')
   $thumbnail.classname = 'thumbnail'
   $thumbnail.setAttribute('thumbnailPhoto', tweet.img)

   var $name = document.createElement('h4')
   $name.classname = 'name'
   $name.textContent = tweet.name

   var $handle = document.createElement('span')
   $handle.classname = 'handle'
   $handle.textContent = tweet.handle

   var $content = document.createElement('p')
   $content.classname = 'tweets'
   $content.textContent = tweet.content

   var $timestamp = document.createElement('p')
   $timestamp.classname = 'time'
   $timestamp.textContent = tweet.timestamp

   $tweet.appendChild($name)
   $tweet.appendChild($handle)
   $tweet.appendChild($content)
   $tweet.setAttribute('class', 'tweet')

   return $tweet
}

/** Loop through 'tweets'
for each tweet, bring the name, handle and content to screen
**/
for (var i = 0; i < tweets.length; i++) {
  var tweet = tweets[i]
  var $tweet = renderTweet(tweet)
  var $feed = document.getElementById('feed')
  $feed.appendChild($tweet)
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

  return $profile
}

var profiles = [
  {
    coverPhoto: 'https://pbs.twimg.com/media/Cq2E4VfUkAEuJ6i.jpg',
    coverPosition: 'center top',
    thumbnail: 'https://pbs.twimg.com/profile_images/785502482478735360/WyoqOzXi_200x200.jpg',
    name: 'Vishnu',
    handle: 'Vish2thenu',
    about: 'First Generation. University of Michigan Alum. I act. I tell jokes. I try to sing and dance. Spread Love. Spread Light. Go Blue.'
  }
]

var $profile = renderProfile(profiles[0])

var $profileView = document.getElementById("profile-view")
$profileView.appendChild($profile)

/*

var miniProfile = {
 miniPic: url('https://pbs.twimg.com/profile_images/785502482478735360/WyoqOzXi.jpg'),
 name: "Vishnu Venugopal",
 handle: "Vish2thenu",
 about: "I act. I tell jokes. I try to sing and dance."
}

document.header.appendChild(miniProfile)

*/
