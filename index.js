//  https://randomuser.me/api/?results=24
let userData;


const fetchUSer = async () => {
await fetch('https://randomuser.me/api/?results=24')
    .then((res) => res.json())
    .then((data) => userData = data.results);

    console.log(userData);
}

const userDisplay = async () => {
    await fetchUSer();
    
    const dateParser = (date) => {
        let newDate = new Date(date).toLocaleDateString('fr-FR', {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
        return newDate;
    }
    
    const dayCalc = (date) => {
        let today = new Date();
        let todayTimestamp = Date.parse(today)
        let timestamp = Date.parse(date)
        return Math.ceil((todayTimestamp - timestamp) / (24 * 3600 * 1000))

    }
    
    document.body.innerHTML = userData.map((user) =>
    `<div class="card">
    <h3>${user.name.first} ${user.name.last}</h3>
    <img src= ${user.picture.large} alt="photo de ${user.name.last}">
    <p>${user.location.city}, ${dateParser(user.dob.date)}</p>
    <em>Membre depuis : ${dayCalc(user.registered.date)} jours </em>
    </div>`
    )
    .join("")
}

userDisplay();

