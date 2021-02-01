const person = { name: 'Jack William', age: 17, job: 'facebooker', gfName: 'Ema Watson', address: 'Kochu Khet', phone: '01717112211', friends: ['Tom hancks', 'tom crusise', 'Tom yarn'] };

const complexObject = {
    name: 'abc',
    info: {
        address: 'kola bagan',
        leader: 'Tiger Leader'
    }
}

// const { leader } = {address: 'kola bagan', leader: 'Tiger Leader'};
const { leader } = complexObject.info;
console.log(leader);


// const gfName = person.gfName;
// const phone = person.phone;
// const { phone } = person;
// const { phone } = { name: 'Jack William', age: 17, job: 'facebooker', gfName: 'Ema Watson', address: 'Kochu Khet', phone: '01717112211', friends: ['Tom hancks', 'tom crusise', 'Tom yarn'] };
// const { phone, gfName, address } = person;

/*const { phone, gfName, address ,salary} = person;
console.log(person.gfName);
console.log(gfName, phone ,address ,salary);
console.log(gfName, phone ,address);*/

// console.log(gfName, phone);
// console.log(gfName, phone);

const friends = ['Sakib Khan', 'Arman Khan', 'Aamir Khan', 'Salman Khan', 'Sharukh Khan'];
// const [chotoFriend, nextFriend] = friends;
// const [chotoFriend, nextFriend, ...restFriends] = friends;
const [chotoFriend, ...restFriends] = friends;
// console.log(chotoFriend, nextFriend);
console.log(restFriends);