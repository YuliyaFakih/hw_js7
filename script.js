let users = function (name, surname, age, phoneNumber, email) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.ageCheck = function () {
    if(age < 18) {
        return ('Несовершеннолетним доступ запрещен');
    }   else if (Number.isInteger(age) === false) {
        return ('Число, указывающее возраст, должно быть целым');
    }   else {
        return ('Приветствуем вас на нашем сайте, ' + this.name);
    }
    
} 
    this.numberCheck = function () {
    let regexp = /\+[1-9]{1,3}[0-9]{0,3}[0-9]{1,13}/g;    
    if(regexp.test(phoneNumber) === true) {
        return 'Номер введён верно'
        
    } else {
        return 'Номер введён неверно'
        
    }
}
    
}

const usersInput = new users (prompt('Укажите имя'), prompt('Укажите фамилию'), +prompt('Укажите возраст'), prompt('Укажите телефон в международном формате'), prompt('Укажите электронный адрес'))
console.log(usersInput)
console.log(usersInput.ageCheck())
console.log(usersInput.numberCheck())

const usersNicole = new users ('Nicole', 'Noble', 20, '+33685654654', 'nicole.noble@gmail.com')
console.log(usersNicole)
console.log(usersNicole.ageCheck())
console.log(usersNicole.numberCheck())


const usersAmelie = new users ('Amelie', 'Susplugas', 17, '33685832753', 'amelie.susplugas@gmail.com')
console.log(usersAmelie)
console.log(usersAmelie.ageCheck())
console.log(usersAmelie.numberCheck())

const usersMartine = new users ('Martine', 'Dubois', 38.5, '685654654', 'martine.dubois@gmail.com')
console.log(usersMartine)
console.log(usersMartine.ageCheck())
console.log(usersMartine.numberCheck())

const usersChristian = new users ('Christian', 'Kouassi', 10, +2250155654654, 'christian.kouassi@gmail.com')
console.log(usersChristian)
console.log(usersChristian.ageCheck())
console.log(usersChristian.numberCheck())

