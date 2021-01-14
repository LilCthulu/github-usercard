import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
  https://api.github.com/users/LilCthulu
*/
const followersArray = [
    'tetondan',
    'dustinmyers',
    'justsml',
    'luishrd',
    'bigknell'
];


function friends(person) {
    person.forEach((user) => {
        axios
            .get(`https://api.github.com/users/${user}`)
            .then(response => {
                document.querySelector('.cards').appendChild(userCardMaker(response))
            })
            .catch(err => console.log(err))
    })
}

friends(followersArray)
    /*
      STEP 2: Inspect and study the data coming back, this is YOUR
        github info! You will need to understand the structure of this
        data in order to use it to build your component function

        Skip to STEP 3.
    */

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/



function userCardMaker(raw) {

    const card = document.createElement('div')
    const userImg = document.createElement('img')
    const cardInfo = document.createElement('div')
    const name = document.createElement('h3')
    const userName = document.createElement('p')
    const profile = document.createElement('p')
    const locale = document.createElement('p')
    const pageLink = document.createElement('a')
    const followersCnt = document.createElement('p')
    const followingCnt = document.createElement('p')
    const userBio = document.createElement('p')


    card.appendChild(userImg)
    card.appendChild(cardInfo)
    cardInfo.appendChild(name)
    cardInfo.appendChild(userName)
    cardInfo.appendChild(locale)
    cardInfo.appendChild(followersCnt)
    cardInfo.appendChild(followingCnt)
    cardInfo.appendChild(userBio)
    cardInfo.appendChild(profile)
    cardInfo.appendChild(pageLink)


    card.classList.add('card')
    cardInfo.classList.add('card-info')
    name.classList.add('name')
    userName.classList.add('username')

    userImg.src = raw.data.avatar_url
    name.textContent = raw.data.name
    userName.textContent = raw.data.login
    locale.textContent = `Location: ${raw.data.location}`
    pageLink.href = `Link: ${raw.data.url}`
    followersCnt.textContent = `Followers: ${raw.data.followers}`
    followingCnt.textContent = `Following: ${raw.data.following}`
    userBio.textContent = `Bio: ${raw.data.bio}`
    profile.textContent = "Profile: "

    return card
}


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:
  

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    
*/