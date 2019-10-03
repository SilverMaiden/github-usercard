/* Step 1: using axios, send a GET request to the following URL
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get("https://api.github.com/users/SilverMaiden")
           .then(response => {
               let myComponent = createComponent(response);
               let cards = document.querySelector('.cards');
               cards.appendChild(myComponent);


           });


/* Step 2: Inspect and study the data coming back, this is YOUR
   github info! You will need to understand the structure of this
   data in order to use it to build your component function

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function,
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either
          follow this link in your browser https://api.github.com/users/<Your github name>/followers
          , manually find some other users' github handles, or use the list found
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.

          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];

followersArray.forEach(element => {
    axios.get(`https://api.github.com/users/${element}`)
               .then(response => {
                   let myComponent = createComponent(response);
                   let cards = document.querySelector('.cards');
                   cards.appendChild(myComponent);
               });


})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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

function createComponent(object) {
    //Creating containing div with class Card
    const outerDiv = document.createElement('div');
    outerDiv.classList.add('card');

    //Creating image inside div to pull github user avatar image from input object
    let myImg = document.createElement('img');
    myImg.setAttribute('src', object.data.avatar_url);

    //Creating inner div with class of card-info
    const innerDiv = document.createElement('div');
    innerDiv.classList.add('card-info');

    //Creating H3 with class of Name and giving the text value the username of the github user from the object.
    let myH3 = document.createElement('h3');
    myH3.classList.add('name');
    myH3.textContent = object.data.name;

    //Creating 6 different paragraphs
    let paragraph1 = document.createElement('p')
    let paragraph2 = document.createElement('p')
    let paragraph3 = document.createElement('p')
    let paragraph4 = document.createElement('p')
    let paragraph5 = document.createElement('p')
    let paragraph6 = document.createElement('p')

    paragraph1.classList.add('username');
    paragraph1.textContent = object.data.login;


    paragraph2.textContent= `Location: ${object.data.location}`;

    let myLink = document.createElement('a');
    myLink.setAttribute('href', object.data.html_url);
    myLink.textContent = object.data.html_url;
    paragraph3.textContent = `Profile: `;
    paragraph3.appendChild(myLink);


    paragraph4.textContent = `Followers: ${object.data.followers}`;

    paragraph5.textContent = `Following: ${object.data.following}`;

    paragraph6.textContent = `Bio: ${object.data.bio}`;


    //Step 1: Appending all paragraphs to innerDiv

    innerDiv.appendChild(myH3);
    innerDiv.appendChild(paragraph1);
    innerDiv.appendChild(paragraph2);
    innerDiv.appendChild(paragraph3);
    innerDiv.appendChild(paragraph4);
    innerDiv.appendChild(paragraph5);
    innerDiv.appendChild(paragraph6);

    //Step 2: Appending img and innerDiv to outerDiv

    outerDiv.appendChild(myImg);
    outerDiv.appendChild(innerDiv);

    return outerDiv;
}

/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
