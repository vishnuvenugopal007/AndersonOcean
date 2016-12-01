//An attempt to create renderable profile content:

function renderProfile(profile) {
/*

<<div id="profile">
  <div id="profile-photo"> </div>
  <div id="user-info">
    <h2 class = "name"></h2>
    <h3 class = "handle"></h3>
    <p id = "about"></p>
  </div>
</div>

 */

var $profile = document.createElement('div')
var $cover = document.createElement('img')
$cover.src = profile.cover
var $thumbnail = document.createElement('img')
$thumbnail.src = profile.thumbnail
var $name = document.createElement('h1')
$name.textContent = profile.name
var $handle = document.createElement('h3')
$handle.textContent = profile.handle
var $about = document.createElement('p')


}

//profiles for access

var profiles [

  Vishnu : {
    cover-photo: 'https://pbs.twimg.com/media/Cq2E4VfUkAEuJ6i.jpg',
    thumbnail: 'https://pbs.twimg.com/profile_images/785502482478735360/WyoqOzXi.jpg',
    name: 'Vishnu',
    handle: 'Vish2thenu',
    about: 'University of Michigan Alum. I act. I tell jokes. I try to sing and dance. Spread Love. Spread Light. Go Blue.'
  }
]

renderProfile(profiles.Vishnu)

/*
<div id="profile">
  <div id="profile-photo"> </div>
  <div id="user-info">
    <h2 class = "username"></h2>
    <h3 class = "handle"></h3>
    <p id = "about"></p>
  </div>
*/

/*var profile = {
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

*/
