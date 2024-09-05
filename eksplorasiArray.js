let angka = [12, 5, 8, 130, 44, 15, 7, 19, 23]

//mencari angka genap
let genap = angka.filter(el =>
    el % 2 === 0
)
console.log("Genap:", genap)

let genap2 = angka.filter(function (el) {
    return el % 2 === 0
})
console.log("Genap2:", genap)

// mencari angka ganjil
let ganjil1 = angka.filter(el =>
    el % 2 !== 0
)
console.log("Ganjil1:", ganjil1)
let ganjil2 = angka.filter(function (el) {
    el % 2 !== 0
})
console.log("Ganjil2:", ganjil2)

// mencari angka pertama yang lebih besar dari 10
let diatas10 = angka.find(el => el > 10)
console.log("Angka pertama > 10:", diatas10)

// coba map semua angka dikali 2
let kaliDua = angka.map(el => el * 2)
console.log("Hasil Kali 2:", kaliDua)

//coba sort desc
let angkaDesc = [...angka].sort((a, b) => b - a)
console.log("Urutan besar ke kecil:", angkaDesc)

//coba reverse
let reverseAngka = [...angka].reverse()
console.log("Urutan terbalik:", reverseAngka)

//coba sum semua
let sum = 0
angka.forEach(function (el) {
    sum += el
})
console.log("Jumlah angka:", sum)