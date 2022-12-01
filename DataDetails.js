console.log("testing")

const cards = document.getElementById("cards")
console.log("cards",cards)

const API_URL = "https://jsonplaceholder.typicode.com/users";

const getUser = async() => {
    try{
        const getDataAPI = await axios.get(API_URL)
        const getData = getDataAPI.data
        console.log(getData)
        addCards(getData)
    }catch (error){
        console.log("error: ", error)
    }
}
getUser()

const cardDetail = new URLSearchParams(window.location.search)
    const params = cardDetail.get('name')
    console.log(params)

    const addCards = getData => {
        const filterData = getData.filter(item => item.name.replace(/\s/g,'') === params)
        console.log("filterData",filterData)

        const template = document.querySelector("#template-cards").content;
        const fragment = document.createDocumentFragment();
    
        filterData.forEach((data) => {
            template.querySelector('.card-header').textContent = data.name;
            template.querySelector('.card-user').textContent = "User: "+data.username;
            template.querySelector('.card-email').textContent = "Email: "+data.email;
            template.querySelector('.card-telefon-number').textContent = "Telefon Number: "+data.phone;
            template.querySelector('.card-website').textContent = "Website: "+data.website;
            template.querySelector('.card-city').textContent = "City: "+data.address.city;
            template.querySelector('.card-street').textContent = "Street: "+data.address.street;
            template.querySelector('.card-suite').textContent = "Suite: "+data.address.suite;
            template.querySelector('.card-zipcode').textContent = "Zipcode: "+data.address.zipcode;
            template.querySelector('.card-nameCompany').textContent = "Company: "+data.company.name;
            template.querySelector('.card-catchPhrase').textContent = data.company.catchPhrase;
            template.querySelector('a').setAttribute("href", "./index.html");
                
                const clone = template.cloneNode(true);
                fragment.appendChild(clone);
        });
        cards.appendChild(fragment);
    }
    addCards(getData)
