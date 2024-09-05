let angka = [12, 5, 8, 130, 44, 15, 7, 19, 23]

//mencari angka genap
let genap = angka.filter(el =>
    el % 2 === 0
)
console.log("Genap:", genap)

// mencari angka ganjil
let ganjil = angka.filter(el =>
    el % 2 !== 0
)
console.log("Ganjil:", ganjil)

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

//cari bilangan prima
let bilPrima = angka.filter(function (el) {
    for (let i = 2; i <= el / 2; i++) {
        if (el % i == 0) {
            return false
        }
    }
    return true
})
console.log(bilPrima)