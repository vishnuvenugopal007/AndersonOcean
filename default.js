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
   var $thumbnail = document.createElement('img')
   $thumbnail.src = tweet.img
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

/** Loop through 'tweets'
for each tweet, bring the name, handle and content to screen
**/
for (var i = 0; i < tweets.length; i++) {
  var tweet = tweets[i]
  var $tweet = renderTweet(tweet)
  var $feed = document.getElementById('feed')
  $feed.appendChild($tweet)
}

var $tweets = renderTweet(tweets[i]);

var $list = document.getElementByClass('list')
$list.appendChild($tweets)
