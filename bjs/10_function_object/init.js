
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('middleNameOutput').innerText = initPerson.middleName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.birth;
    document.getElementById('professionOutput').innerText = initPerson.profession;
};

document.querySelector('#btnCreate').addEventListener('click', window.onload);
document.querySelector('#btnClear').addEventListener('click', 
    (event) => {
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('middleNameOutput').innerText = '';
    document.getElementById('genderOutput').innerText = '';
    document.getElementById('birthYearOutput').innerText = '';
    document.getElementById('professionOutput').innerText = '';
    })
