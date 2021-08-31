//loading users
const loadUsers = async ()=>{

    const res = await fetch('https://randomuser.me/api/');
    const data = await res.json();
    const user = data.results[0];
    return user;
}
// selection for user details info
const userImage= document.querySelector('#user-img') 
const tittle = document.querySelector('#user-name');
const userDetails = document.querySelector('#user-detail');

const pName = document.querySelector('#p-name');
const pEmail = document.querySelector('#p-email');
const pAddress = document.querySelector('#p-address');
const pContact = document.querySelector('#p-contact');

// func for loading details
const displayUser = ()=>{
    loadUsers()
    .then(data =>{
        userImage.setAttribute('src', `${data.picture.large}` );
        userDetails.textContent = `${data.name.first} ${data.name.last}`;
        // adding even listener
            pName.addEventListener('mouseover', ()=>{
                tittle.innerText = 'My name is:'
                userDetails.textContent = `${data.name.first} ${data.name.last}`;  
            })
            pEmail.addEventListener('mouseover', ()=>{
                tittle.innerText = 'My email is:'
                userDetails.textContent = `${data.email}`;
            })
            pAddress.addEventListener('mouseover', ()=>{
                tittle.innerText = 'My address is:'
                userDetails.textContent = `${data.location.street.number} ${data.location.street.name}`;
            })
            pContact.addEventListener('mouseover', ()=>{
                tittle.innerText = 'My contact is:'
                userDetails.textContent = `${data.phone}`;
            })
    })
};
displayUser();
// display api data
const generate = document.querySelector('#load-user')
generate.addEventListener('click', ()=>{
    displayUser();
})