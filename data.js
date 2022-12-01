console.log("testing")

const cards = document.getElementById("cards")
console.log("cards",cards)

const API_URL = "https://jsonplaceholder.typicode.com/users";

/* const getUser = async() => {
    const getFetch = await fetch(API_URL)
    const getData = await getFetch.json()
    //console.log("getData",getData)
    addCards(getData)
    
}
getUser()

console.log("hasta aca funciona") */
const getUser = async() => {
    try{
        const getDataAPI = await axios.get(API_URL)
        const getData = getDataAPI.data
        console.log(getData)
        addCards(getData)
    }catch (error){
        console.log("error", error)
    }
}
getUser()

/**
 * @returns crea las cards
 */
const addCards = getData => {
    const template = document.querySelector("#template-cards").content;
    const fragment = document.createDocumentFragment();

    getData.forEach((data) => {
        template.querySelector('.card-header').textContent = data.name;
        template.querySelector('.card-user').textContent = "User: "+data.username;
        template.querySelector('.card-email').textContent = "Email: "+data.email;
        template.querySelector('.card-telefon-number').textContent = "Telefon Number: "+data.phone;
        template.querySelector('a').setAttribute("href", `./details.html?name=${data.name.replace(/\s/g,'')}`);
            
            const clone = template.cloneNode(true);
            fragment.appendChild(clone);
    });
    cards.appendChild(fragment);
}
addCards(getData)


