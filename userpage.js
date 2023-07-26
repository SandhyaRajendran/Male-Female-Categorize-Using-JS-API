const center = document.querySelector('.immage')
const next = document.querySelector('.next')
const newMainDiv = document.querySelector('.newMainDiv')
// console.log(center)

// console.log(window.location.search.slice(4));
let pushedValues = []
const idd = document.querySelector('i')

fetch( 'https://randomuser.me/api?results=window.location.search.slice(4)')
.then(userValues => userValues.json())
.then(valus=>{
    pushedValues.push(valus)
    idd.style.display = 'none';

    let  imag = document.createElement('img')
    let nameVal = document.createElement('li')
    nameVal.setAttribute('class','nameVal')
    let email = document.createElement('li')
    email.setAttribute('class','email')    
    let dob = document.createElement('li')
    dob.setAttribute('class','dob')
    let age = document.createElement('li')
    dob.setAttribute('class','age')
    let address = document.createElement('li')
    address.setAttribute('class','address')
    let pincode = document.createElement('li')
    pincode.setAttribute('class','pincode')
    let country = document.createElement('li')
    dob.setAttribute('class','country')
    let cellnumber = document.createElement('li')
    cellnumber.setAttribute('class','cellnumber')
    let mobilenumber = document.createElement('li')
    mobilenumber.setAttribute('class','mobilenumber')
    for(let i=0; i<pushedValues.length; i++){
        // console.log(pushedValues[i])
        let userdetails  = pushedValues[i].results
        for(let k=0; k<userdetails.length; k++){
            // console.log(userdetails[k])
            //here i implement all the values to 
            imag.src = userdetails[k].picture.large
            nameVal.innerText = 'Name: '+userdetails[k].name.title+'.'+' '+userdetails[k].name.first+' '+userdetails[k].name.last
            email.innerText = 'Email: '+userdetails[k].email
            dob.innerText = 'DOB: '+userdetails[k].dob.date.slice(0,10)
            age.innerText = 'Age: '+userdetails[k].dob.age
            address.innerText ='Address: '+userdetails[k].location.street.number+', '+userdetails[k].location.street.name+', '+userdetails[k].location.city+', '+userdetails[k].location.state+', ';
            pincode.innerText = 'Post code: '+userdetails[k].location.postcode
            country.innerText ='Country: '+userdetails[k].location.country
            cellnumber.innerText ='Cell Number: ' +userdetails[k].cell
            mobilenumber.innerText ='Mobile Number: '+ userdetails[k].phone
            // console.log(address)
            //here i append the all element 
            center.append(imag)
            next.appendChild(nameVal)
            next.appendChild(email)
            next.appendChild(dob)
            next.appendChild(age)
            next.appendChild(address)
            next.appendChild(pincode)
            next.appendChild(country)
            next.appendChild(cellnumber)
            next.appendChild(mobilenumber)
        }
    }
})