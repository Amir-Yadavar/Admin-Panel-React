let dataChart = [
    { "name": 'Jan', "sale": 20_000 },
    { "name": 'Feb', "sale": 18_000 },
    { "name": 'Mar', "sale": 8_000 },
    { "name": 'Apr', "sale": 16_000 },
    { "name": 'May', "sale": 17_000 },
    { "name": 'Jun', "sale": 4_000 },
    { "name": 'Jul', "sale": 10_000 },
    { "name": 'Aug', "sale": 17_000 },
    { "name": 'Sep', "sale": 7_000 },
    { "name": 'Oct', "sale": 13_000 },
    { "name": 'Nov', "sale": 15_000 },
    { "name": 'Dec', "sale": 19_000 },
]

const newUser = [
    { id: 1, usename: 'Ali Bamded', title: 'webdev', img: 'img/newUser/1.png' },
    { id: 2, usename: 'Nazi Pory', title: 'frontend', img: 'img/newUser/2.png' },
    { id: 3, usename: 'Kotlin Dara', title: 'Ios', img: 'img/newUser/2.png' },
    { id: 4, usename: 'Barbod Roshan', title: 'android', img: 'img/newUser/1.png' },
    { id: 5, usename: 'Naghi Mamoli', title: 'Maneger', img: 'img/newUser/1.png' },
    { id: 6, usename: 'Firoz Moshtagh', title: 'hoc', img: 'img/newUser/1.png' },
]

const transaction = [
    { id: 1, customer: 'Amir Arsalan', date: '1 Feb 2022', status: 'Approved', img: 'img/newUser/1.png' },
    { id: 2, customer: 'Fateme Ghanbari', date: '4 Mar 2022', status: 'Declined', img: 'img/newUser/2.png' },
    { id: 3, customer: 'Mojtaba Sarv', date: '15 Jul 2022', status: 'Pending', img: 'img/newUser/1.png' },
    { id: 4, customer: 'Sosan parvar', date: '18 Aug 2022', status: 'Approved', img: 'img/newUser/2.png' },
    { id: 5, customer: 'Omid Teimory', date: '30 Dec 2022', status: 'Declined', img: 'img/newUser/1.png' },
]

let userRows = [
    { id: 1, username: 'Osman Dembele', avatar: 'img/newUser/1.png', status: 'active', transaction: '$ 123', email: 'osman@gmail.com' },
    { id: 2, username: 'Barak Obama', avatar: 'img/newUser/1.png', status: 'active', transaction: '$ 24', email: 'barak@gmail.com' },
    { id: 3, username: 'Jennife Aniston', avatar: 'img/newUser/2.png', status: 'non-active', transaction: '$ 2', email: 'jennifer@gmail.com' },
    { id: 4, username: 'Zelatan Ebra', avatar: 'img/newUser/1.png', status: 'active', transaction: '$ 450', email: 'zelatan@gmail.com' },
    { id: 5, username: 'Lady Gaga', avatar: 'img/newUser/2.png', status: 'active', transaction: '$ 12', email: 'lady@gmail.com' },
    { id: 6, username: 'Javad Ezati', avatar: 'img/newUser/1.png', status: 'non-active', transaction: '$ 1', email: 'javad@gmail.com' },
    { id: 7, username: 'Parvin etesami', avatar: 'img/newUser/2.png', status: 'active', transaction: '$ 73', email: 'parvin@gmail.com' },
    { id: 8, username: 'Maryam Kian', avatar: 'img/newUser/2.png', status: 'active', transaction: '$ 38', email: 'mayam@gmail.com' },
    { id: 9, username: 'Mohamad Sadeghi', avatar: 'img/newUser/1.png', status: 'non-active', transaction: '$ 123', email: 'mohamad@gmail.com' },
    { id: 10, username: 'Abas remezani', avatar: 'img/newUser/1.png', status: 'active', transaction: '$ 2123', email: 'mohamad@gmail.com' },
    { id: 11, username: 'Mosle beihagh', avatar: 'img/newUser/1.png', status: 'non-active', transaction: '$ 3', email: 'mosle@gmail.com' },
    { id: 12, username: 'sara samimi', avatar: 'img/newUser/2.png', status: 'active', transaction: '$ 97', email: 'sara@gmail.com' },
    { id: 13, username: 'lorem ipsum', avatar: 'img/newUser/1.png', status: 'active', transaction: '$ 45', email: 'lorem@gmail.com' },
    { id: 14, username: 'taj ever', avatar: 'img/newUser/1.png', status: 'active', transaction: '$ 89', email: 'tajever@gmail.com' },
    { id: 15, username: 'bahar taheri', avatar: 'img/newUser/2.png', status: 'non-active', transaction: '$ 12', email: 'taherybah@gmail.com' },
    { id: 16, username: 'mohadese tartar', avatar: 'img/newUser/2.png', status: 'active', transaction: '$ 412', email: 'mohadesh@gmail.com' },
]

let productData = [
    { id: 1, title: 'Asus', price: 890, avatar: 'img/newUser/3.jpg',vga:6 ,cpu:'cor i3',ssd:'1 TR' },
    { id: 2, title: 'Hp', price: 700, avatar: 'img/newUser/3.jpg',vga:2 ,cpu:'cor i3',ssd:'256 GB' },
    { id: 3, title: 'Msi', price: 800, avatar: 'img/newUser/3.jpg',vga:4 ,cpu:'cor i5',ssd:'512 GB' },
    { id: 4, title: 'Lenovo', price: 900, avatar: 'img/newUser/3.jpg',vga:6 ,cpu:'cor i7',ssd:'512 GB' },
    { id: 5, title: 'Dell', price: 600, avatar: 'img/newUser/3.jpg',vga:2 ,cpu:'cor i5',ssd:'256 GB' },
    { id: 6, title: 'Apple', price: 1890, avatar: 'img/newUser/3.jpg',vga:4 ,cpu:'cor i9',ssd:'1 TR' },
    { id: 7, title: 'Microsoft', price: 990, avatar: 'img/newUser/3.jpg',vga:4 ,cpu:'cor i7',ssd:'512 GB' },
    { id: 8, title: 'Razer', price: 1990, avatar: 'img/newUser/3.jpg',vga:8 ,cpu:'cor i9',ssd:'1 TR' },
    { id: 9, title: 'Acer', price: 800, avatar: 'img/newUser/3.jpg',vga:4 ,cpu:'cor i5',ssd:'512 GB' },
    { id: 10, title: 'Gigabyte', price: 2890, avatar: 'img/newUser/3.jpg',vga:12 ,cpu:'cor i9',ssd:'1 TR' },
    { id: 11, title: 'Asus', price: 690, avatar: 'img/newUser/3.jpg',vga:2 ,cpu:'cor i3',ssd:'256 GB' },
    { id: 12, title: 'Dell', price: 890, avatar: 'img/newUser/3.jpg',vga:4 ,cpu:'cor i7',ssd:'512 GB' },
    { id: 13, title: 'Lenovo', price: 790, avatar: 'img/newUser/3.jpg',vga:2 ,cpu:'cor i5',ssd:'512 GB' },
    { id: 14, title: 'Hp', price: 900, avatar: 'img/newUser/3.jpg',vga:4 ,cpu:'cor i7',ssd:'512 GB' },
    { id: 15, title: 'Msi', price: 590, avatar: 'img/newUser/3.jpg',vga:2 ,cpu:'cor i3',ssd:'256 GB' },
    { id: 16, title: 'Razer', price: 1390, avatar: 'img/newUser/3.jpg',vga:8 ,cpu:'cor i9',ssd:'1 TR' },
    { id: 17, title: 'Asus', price: 1290, avatar: 'img/newUser/3.jpg',vga:6 ,cpu:'cor i9',ssd:'1 TR' },
]

let productChart = [
    {name:'Jan' , sale:5000},
    {name:'Feb' , sale:2000},
    {name:'Aug' , sale:6000},
]
let userMailData =[
    { id: 1, username: 'Osman Dembele', avatar: 'img/newUser/1.png', email: 'osman@gmail.com' },
    { id: 2, username: 'Barak Obama', avatar: 'img/newUser/1.png', email: 'barak@gmail.com' },
    { id: 3, username: 'Jennife Aniston', avatar: 'img/newUser/2.png', email: 'jennifer@gmail.com' },
    { id: 4, username: 'Zelatan Ebra', avatar: 'img/newUser/1.png', email: 'zelatan@gmail.com' },
    { id: 5, username: 'Lady Gaga', avatar: 'img/newUser/2.png', email: 'lady@gmail.com' },
    { id: 6, username: 'Javad Ezati', avatar: 'img/newUser/1.png', email: 'javad@gmail.com' },
    { id: 7, username: 'Parvin etesami', avatar: 'img/newUser/2.png', email: 'parvin@gmail.com' },
    { id: 8, username: 'Kian Abo Omre', avatar: 'img/newUser/2.png', email: 'mayam@gmail.com' },
]

let dataOfSales = [
    { "name": 'Jan', "sale": 20_000 ,fill:'#83a6ed'},
    { "name": 'Feb', "sale": 18_000 ,fill:'#8dd1e1'},
    { "name": 'Mar', "sale": 8_000 ,fill:'#82ca9d'},
    { "name": 'Apr', "sale": 16_000 ,fill:'#a4de6c'},
    { "name": 'May', "sale": 17_000 ,fill:'#d0ed57'},
    { "name": 'Jun', "sale": 4_000 ,fill:'#ffc658'},
]

let messagesData =[
    {id:1 , title:'Manager',name:'Osman Dembele'},
    {id:2 , title:'Hr',name:'Jennife Aniston'},
    {id:3 , title:'Programer',name:'Parvin etesami'},
    {id:4 , title:'It',name:'Mohamad Sadeghi'},
    {id:5 , title:'Resources',name:'Abas remezani'},
    {id:6 , title:'Saler',name:'Mosle beihagh'},
    {id:7 , title:'Security',name:'lorem ipsum'},
    {id:8 , title:'Admin 2',name:'Oskar mingeza'},
    {id:9 , title:'Maker',name:'sebastian olor'},
]

export { dataChart, newUser, transaction, userRows, productData , productChart,userMailData,dataOfSales,messagesData}