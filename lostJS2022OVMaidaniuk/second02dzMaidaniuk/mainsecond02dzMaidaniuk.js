// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let mass = [];
mass = [1, 2, 3, 4, 'ua', 55, false, 777, 888, true]
console.log(1);
console.log(2);
console.log([2]);
console.log([0]);
console.log(false);
console.log(mass);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
  title: 'scratch',
  pageCount: 285,
  genre: 'informatic'
}
let book2 = {
  title: 'histori',
  pageCount: 125,
  genre: 'historical_science'
}
let book3 = {
  title: 'mathematics',
  pageCount: 77,
  genre: 'math'
}
console.log(book3, book2, book1);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - масив. Кожен автор має поля name,age
let book11 = {
  title: 'scratch',
  pageCount: 285,
  genre: 'informatic',
  authors: [
    {
      name: 'Majed_Marji',
      age: 88
    },
    {
      name: 'Agadjanian_Nazar',
      age: 42
    }
  ]
}
let book21 = {
  title: 'histori',
  pageCount: 125,
  genre: 'historical_science',
  authors: [
    {
      name: 'Shchupak_Ihor',
      age: 85
    },
    {
      name: 'Burlaka_Olena',
      age: 42
    }
  ]
}
let book31 = {
  title: 'mathematics',
  pageCount: 77,
  genre: 'math',
  authors: [
    {
      name: 'Bochko_Oksana',
      age: 55
    },
    {
      name: 'Serdiuk_Zoya',
      age: 41
    },
    {
      name: 'Tarasenkova_Nina',
      age: 40
    }
  ]
}
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача
//
let user = [
  {
    name: 'Oleh',
    username: 'omaydanuk',
    password: '777777'
  },
  {
    name: 'Taras',
    username: 'tututu',
    password: '42godika'
  },
  {
    name: 'Miroslav',
    username: 'myrik',
    password: 'ghh345'
  },
  {
    name: 'Inna',
    username: 'imaydanuk',
    password: 777777
  },
  {
    name: 'Petrov',
    username: 'sapetrov',
    password: 'uih88'
  },
  {
    name: 'Fedorov',
    username: 'fedor',
    password: 'jhjhf000'
  },
  {
    name: 'Mirami',
    username: 'mira',
    password: '64488'
  },
  {
    name: 'Vasya',
    username: 'vasyli',
    password: 'fgggfgg'
  },
  {
    name: 'Petro',
    username: 'poroh',
    password: 'bah bah'
  },
  {
    name: 'nanna',
    username: 'nan',
    password: 'op'
  },
]
console.log(user);
console.log(user[0], [2]);
console.log(user[8], ['name']);
console.log(user[8].name);
console.log(user[6].password, ['name']);
console.log(user[0].password);
console.log(user[0].password,
  user[1].password, user[2].password,
  user[3].password, user[4].password,
  user[5].password, user[6].password,
  user[7].password, user[8].password,
  user[9].password,);
