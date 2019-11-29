// let city = "Bandung";
// let province = "Jawa Barat";
// let no = 131;
// let status = true;

// let address = city + ", " + province;
// console.log(address);


// let umur = 20;
// let hasilUmur = 20-1;

// let objectUmur = [
//     umur,
//     hasilUmur
// ];

// console.log(objectUmur);


// let status = "jomblo";

// if(status === "jomblo"){
//     console.log("Banyak Uang");
// }else if(status === "nikah"){
//     console.log("senang");
// }else{
//     console.log("Seret");
// }


// let isMale = true;
// let isFemale = true;

// if(isMale && isFemale){
//     console.log("Love");
// }else if(isMale || isFemale){
//     console.log("Realy??");
// }else{
//     console.log("Single");
// }


// let name1 = "Jhon";
// name1 = "Azka"; //variabel ini nimpa yang atas
// console.log(name1);

// const name2 = "Jhon";
// name2 = "Jhon"; //Gak bisa di timpa karena harus constant
// console.log(name2);


// let name = "jhon"; //global
// let getName = function(){
//     console.log(name);

//     let age = 25; //local
// }
// getName();
// console.log(age);


// let add = function(x,y,z){
//     return x + y + z;
// }

// let result = add(10,2,3);
// console.log(result);


// let getScore = function(
//     name = 'Azka', //Default
//     score = 80 //Default
// ){
//     return `${name} Score: ${score}`; //Menyambungkan String Lebih Clear tanpa + +
// }

// let text = getScore('Lukman', 50);
// console.log(text)


// let firstName = "Mohamad";
// let midleName = "Azka Julda";
// let lastName = "Suparman";

// let umur = function(){
//     return 20;
// }

// // let merge = "Nama Saya" + firstName + midleName + lastName;
// let merge = `Nama Saya ${firstName} ${midleName} ${lastName}  //String Literal
// Umur Saya : ${umur()-1}`;

// console.log(merge);


// let myBook = {
//     tittle: "You Are The Heroes",
//     author: "Azka",
//     page: "200"
// }

// myBook.author = "MOhamad Azka Julda Suparman";

// let getBook = function(book){
//     console.log(`Judul Buku : ${book.tittle}`);
// }

// getBook(myBook);

// console.log(
//     `Judul Buku : ${myBook.tittle}
//     Penulis : ${myBook.author}
//     Page : ${myBook.page}`);


// let myAccount = {
//     name: "You Are The Heroes",
//     expense: 0,
//     income: 0
// }

// let addExpense = function(account, amount){
//     account.expense += amount;
//     console.log(account)
// }

// addExpense(myAccount, 500)
// console.log(myAccount)


// let name = "Mohamad Azka Julda Suparman";

// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.toLowerCase());

// let password = "qwerty123";
// console.log(password.includes('asddas')); //check apakah sama dengan password atas

// let num = 123.321
// console.log(num.toFixed(2)); // ngatur angka dibelakang koma
// console.log(Math.round(num)); // membulatkan angka
// console.log(Math.ceil(num)); // membulatkan angka
// console.log(Math.floor(num)); // membulatkan angka


// let arrayEmpty = [];
// let age = [10, 11, 12];
// let mixed = [10, "Azka", true];

// let nameList = [
//     "Mohamad", 
//     "Azka Julda", 
//     "Suparman"];

// console.log(nameList[nameList.length-1])


// let numList = [1];
// numList.push(10);
// numList.unshift(2);
// numList.splice(1, 0, 100); //Add

// console.log(numList);

// // numList.pop(); //Menghapus array dari belakang
// // console.log(numList);
// // numList.shift(); //Menghapus array dari depan

// // numList.splice(1, 2); // delete
// // numList.splice(1, 2, 10); // mod
// console.log(numList);


let activities = ['Tidur', "Makan", "Gaming"];
// activities.forEach(function(value, index){
//     console.log(`
//         value: ${value}
//         index: ${index}
//     `)
// })

for(let count = 0; count < activities.lenght; count++){
    console.log(count);
}
