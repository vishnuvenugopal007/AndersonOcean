var user = {
    username: "Vishnu",
    twitterHandle: "Vish2thenu",
    profilePicture: "https://pbs.twimg.com/profile_images/785502482478735360/WyoqOzXi.jpg",
    about: 'I act. I tell jokes. I try to sing and dance. Spread love. Spread light. Go Blue.',
    updates: [newUpdate('12:30', 'Got me working through lunch!'),
              newUpdate('12:27', 'Man this coding thing is tough'),
              newUpdate('9:25', 'Taco Bell for breakfast, but I am at class now'),
              newUpdate('8:55', 'On the way to drop of these glasses.'),
              newUpdate('8:45', 'Mom left her glasses, gotta get those to her.')
             ]
}
var coverPhoto = {
  cover: 'https://pbs.twimg.com/media/Cq2E4VfUkAEuJ6i.jpg'
}

function newUpdate(timestamp, post) {
  return {timestamp: timestamp, post: post};
}

function newElement(tagName, className, text) {
  var newElement = document.createElement(tagName);
  newElement.className = className;
  if(text !== null)
    newElement.appendChild(docuent.createTextNode(text));
    return newElement;
}

function displayProfile() {
  var point = document.getElementByID('photo');
  point.style.backgroundImage = 'url(' + user.profilePicture + ')';
  point = document.getElementById('twitterhandle');
  point.appendChild(document.createTextNode('@' + user.twitterHandle));
  point = document.getElementById('about');
  point.appendChild(document.createTextNode(user.aboutMe));
}

function displayUpdates() {
  var i;
  var containerPoint = document.getElementByID('updates');
  for (i=0; i < user.updates.length; i++) {
    containerPoint.appendChild(newElement('div', 'update', null));
    childPoint = contaierPoint.lastChild;
    childPoint.appendChild(newElement('h4', 'username', '@' + user.twitterHandle))
    childPoint.appendChild(newElement('p', 'timestamp', user.updates[i].timestamp))
    childPoint.appendChild(newElement('p', 'post', user.updates[i].post))
  }
}

var miniProfile = {
  miniPic: 'https://pbs.twimg.com/profile_images/785502482478735360/WyoqOzXi.jpg',
  Name: "Vishnu Venugopal",
  twitterhandle: "Vish2thenu",
}
