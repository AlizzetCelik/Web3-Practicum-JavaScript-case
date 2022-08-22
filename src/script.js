/*
Ali İzzet Çelik 22.08.2022 

Bir sayının Tek mi Çift mi olduğunu belirleyen bir işlev oluşturun.
Bir sayı, tüm basamaklarının toplamı tek ise tek, tüm basamaklarının toplamı çift ise bir sayıdır.
Bir sayı tek ise, "Odd" döndürün.Aksi takdirde, "Even" değerini döndürün.Örnek olarak:

oddishOrEvenish(43) ➞ "Odd"
// 4 + 3 = 7
// 7 % 2 = 1

oddishOrEvenish(373) ➞ "Odd"
// 3 + 7 + 3 = 13
// 13 % 2 = 1

oddishOrEvenish(4433) ➞ "Even"
// 4 + 4 + 3 + 3 = 14
// 14 % 2 = 0

*/
const oddOrEven = (n) => {
    let a = n.toString();
    let b = 0;
    for (let i = 0; i < a.length; i++) {
        b += parseInt(a[i]);
    }
    if (b % 2 === 1) {
        return "Odd"
    } else return "Even"
};

console.log(oddOrEven(43));
console.log(oddOrEven(373));
console.log(oddOrEven(4433));