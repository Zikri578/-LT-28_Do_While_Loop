let x = 10;

// penjelasan : untuk penggunaan do while ini, yang dieksekusi terlebih dahulu yaitu bagian do tanpa melakukan pengecekkan telebih dahulu, setelah melewati tahap do baru dilakukan while untuk melakukan pengondisian
do {
    console.log(x); // 10
    x++;    // 10 + 1 = 11
}
while (x <= 15);    // karena kondisi tersebut memenuhi maka akan menampilkan output sebanyak 15 kali


let hasil = confirm('Apakah anda yakin ingin sukses?');
let result = 0;

do {
    result++;
    hasil = confirm('Apakah anda yakin ingin kaya?');
} while (hasil);

document.writeln('Anda akan sukses setelah melewati kegagalan sebanyak : ' + result + 'Kali')