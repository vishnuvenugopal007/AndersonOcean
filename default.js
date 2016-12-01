//an attempt to create a list of tweets, viewable by a user
//along with a cover photo

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
  $coverPhoto.setAttribute('id', 'coverphoto')

  return $coverPhoto
}


/** This was a former feed model for future use

var feed = [
  {username:"Haytham",twittername: "OFTemplar", content: "Why can't Natives see this isn't important?"}
  {username:"Connor" twittername:"NativeAvenger" content: "Standing Rock is Our Movement #NoDAPL"}
  {username:"Vic" twittername:"StillAlive" content: "@NativeAvenger your dad is wack"}
  {username:"Edward" twittername:"CaptKenway" content:"This is complicated. Much more complicated than I would like."}
  {username:"Mary" twittername: "CaptainKidd" content: "Never thought your family would be so split @CaptKenway"}
]
**/

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


// creating the generic elements of a tweet
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

/** Loop through 'tweets'
for each tweet, bring the name, handle and content to screen
**/
for (var i = 0; i < tweets.length; i++) {
  var tweet = tweets[i]
  var $tweet = renderTweet(tweet)
  var $feed = document.getElementById('feed')
  $feed.appendChild($tweet)
}

renderCover();
renderTweet(tweets[]);
