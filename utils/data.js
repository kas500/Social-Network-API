const emails = [
'bdthomas@outlook.com',
'citizenl@verizon.net',
'josephw@optonline.net',
'donev@outlook.com',
'teverett@optonline.net',
'psichel@mac.com',
'vlefevre@icloud.com',
'lpalmer@hotmail.com',
'heckerman@att.net',
'ideguy@optonline.net'];

const usernames = [
  'Aaran',
  'Aaren',
  'Aarez',
  'Aarman',
  'Aaron',
  'Aaron-James',
  'Aarron',
  'Aaryan',
  'Aaryn',
  'Aayan',
  'Aazaan',
  'Abaan',
  'Abbas',
  'Abdallah',
  'Abdalroof',
  'Abdihakim',
  'Abdirahman',
  'Abdisalam',
  'Abdul',
  'Abdul-Aziz',
  'Abdulbasir',
  'Abdulkadir',
  'Abdulkarem',
  'Smith',
  'Jones',
  'Coollastname',
  'enter_name_here',
  'Ze',
  'Zechariah',
  'Zeek',
  'Zeeshan',
  'Zeid',
  'Zein',
  'Zen',
  'Zendel',
  'Zenith',
  'Zennon',
  'Zeph',
  'Zerah',
  'Zhen',
  'Zhi',
  'Zhong',
  'Zhuo',
  'Zi',
  'Zidane',
  'Zijie',
  'Zinedine',
  'Zion',
  'Zishan',
  'Ziya',
  'Ziyaan',
  'Zohaib',
  'Zohair',
  'Zoubaeir',
  'Zubair',
  'Zubayr',
  'Zuriel',
  'Xander',
  'Jared',
  'Courtney',
  'Gillian',
  'Clark',
  'Jared',
  'Grace',
  'Kelsey',
  'Tamar',
  'Alex',
  'Mark',
  'Tamar',
  'Farish',
  'Sarah',
  'Nathaniel',
  'Parker',
];
const thoughts = [
  'Lorem ipsum dolor sit amet. Et voluptatum eligendi ad alias consequuntur sed voluptas laborum ea blanditiis magni.',
  'Aut sint impedit aut possimus laboriosam sed reprehenderit quibusdam ut sint magni.',
  'Ut sint dolorum eum libero esse ea atque veritatis et excepturi distinctio. ',
  'Hic corporis quos ea quia animi eum officiis similique sed repellat consectetur nam consectetur dicta id cumque ipsum.',
  'Et architecto ullam sit velit cupiditate sed libero voluptatum quo omnis voluptas eum repellendus labore.',
  'Sit fuga quam vel nobis saepe qui blanditiis quibusdam et harum neque!',
  'Id pariatur nostrum qui velit quia 33 internos voluptatum et Quis ipsum ut beatae vero ut blanditiis mollitia.',
  'Sit sunt laboriosam et officiis odit non totam alias qui voluptatibus maxime ut sint animi qui mollitia voluptas. ',
  'At rerum consequatur ut tenetur velit sed deleniti velit quo placeat rerum est facilis assumenda qui iusto magni ex iusto iusto?'
]

const reactions =[
  'Wow!',
  'Great!',
  'Oh no..',
  'Perfect!',
  'LOL',
  'Bad!',
]

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomEmail = () =>
  `${getRandomArrItem(emails)}`;

const getRandomUserName = () =>
  `${getRandomArrItem(usernames)}${Math.floor(Math.random() * 10 + 1)}`;

const getRandomThought = () =>
  `${getRandomArrItem(thoughts)}`;

const getRandomReaction = () =>
  `${getRandomArrItem(reactions)}`;

  module.exports = {
    getRandomEmail,
    getRandomUserName,
    getRandomThought,
    getRandomReaction
  };  