const collectionNumber = [1, 2, 3, 4, 5, 6]
/**
 * Manipulasi array sederhana
 * Buat array baru berisi angka2 yg merupakan hasil perkalian 3 dari setiap element array collectionNumber
 */
let kali3 = collectionNumber.map(el => el * 3)
console.log(kali3);



const colors = ["blue", "black", "purple", "white", "pink"]
/**
 * buat array baru yang isinya element yang hurufnya lebih dari 4 berdasarkan array colors
 */
let warnaLebihDari4 = colors.filter(function (el) {
    return el.length > 4
})

let warnaLebihDari4lain = colors.filter(el => el.length > 4)
console.log(warnaLebihDari4lain)