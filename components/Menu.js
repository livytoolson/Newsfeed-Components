// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.*/

  function menuMaker(menuArr){
    const menu = document.createElement('div');
    const unorderedList = document.createElement('ul');
    // const students = document.createElement('li');
    // const faculty = document.createElement('li');
    // const whatNew = document.createElement('li');
    // const techTrends = document.createElement('li');
    // const music = document.createElement('li');
    // const logOut = document.createElement('li');

    menu.appendChild(unorderedList);
    // unorderedList.appendChild(students);
    // unorderedList.appendChild(faculty);
    // unorderedList.appendChild(whatNew);
    // unorderedList.appendChild(techTrends);
    // unorderedList.appendChild(music);
    // unorderedList.appendChild(logOut);

    menu.classList.add('menu');

  /*Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>*/
  // menuItems.forEach(item => {
    for (let i = 0; i < menuItems.length; i++){
      document.createElement('li')
    }
    li.appendChild(unorderedList)
  // })

  /*Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').*/
  const menuButton = document.querySelector('.menu-button');
  // console.log(menuButton)

  /*Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).*/
  menuButton.addEventListener('click', (event) => {
    menu.classList.toggle('menu--open');
  });

  /*Step 5: Don't forget to return your div.menu.*/
  return menu;
  }

  /*Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.*/
