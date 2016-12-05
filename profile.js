function renderProfile(profile) {

  var $profile = document.createElement('div')
  var $cover = document.createElement('img')
  $cover.src = profile.cover
  var $thumbnail = document.createElement('img')
  $thumbnail.src = profile.thumbnail
  var $userInfo = document.createElement('div')
  var $name = document.createElement('h1')
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
    thumbnail: 'https://pbs.twimg.com/profile_images/785502482478735360/WyoqOzXi_200x200.jpg',
    name: 'Vishnu',
    handle: 'Vish2thenu',
    about: 'University of Michigan Alum. I act. I tell jokes. I try to sing and dance. Spread Love. Spread Light. Go Blue.'
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
