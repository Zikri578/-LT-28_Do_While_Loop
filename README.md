# -LT-28_Do_While_Loop

Do-while loop dalam JavaScript adalah perulangan yang mirip dengan while loop, namun perbedaannya adalah do-while loop akan dijalankan setidaknya sekali sebelum kondisi dievaluasi. Struktur dasar dari do-while loop adalah sebagai berikut:

    do {
      // kode yang akan diulang
    } while (kondisi);

Pada saat pertama kali do-while loop dijalankan, blok kode di dalam do-while loop akan dijalankan setidaknya sekali. Kemudian, kondisi akan dievaluasi. Selama kondisi yang ditentukan bernilai true, blok kode di dalam do-while loop akan dijalankan lagi. Setelah setiap iterasi, kondisi akan dievaluasi kembali. Proses ini akan terus berlangsung sampai kondisi bernilai false.

Perbedaan utama antara while loop dan do-while loop adalah bahwa kondisi dievaluasi sebelum atau setelah blok kode dijalankan. Pada while loop, kondisi dievaluasi sebelum blok kode dijalankan, sedangkan pada do-while loop, kondisi dievaluasi setelah blok kode dijalankan.

Do-while loop sangat berguna dalam kondisi yang memerlukan pengulangan yang harus dijalankan setidaknya sekali, namun penting untuk menentukan kondisi yang benar agar tidak menyebabkan infinite loop atau kesalahan lain dalam aplikasi.

Selain itu, do-while loop juga dapat digunakan dalam situasi di mana kondisi yang digunakan untuk mengontrol perulangan tidak diketahui sebelum perulangan dimulai. Dalam kasus seperti ini, Anda dapat menggunakan do-while loop untuk menjalankan perulangan sekali, dan kemudian mengevaluasi kondisi setelah perulangan pertama.

Do-while loop juga dapat digunakan bersama dengan perintah break dan continue untuk mengontrol aliran perulangan. Perintah break digunakan untuk menghentikan perulangan sepenuhnya sedangkan continue digunakan untuk melewati iterasi saat ini dan melanjutkan ke iterasi berikutnya. Contoh :

    let i = 0;
    do {
        i++;
        if (i === 2) {
            continue;
        }
        console.log(i);
    } while (i < 5);

Dalam contoh di atas, do-while loop akan dijalankan sebanyak 5 kali dan menampilkan nilai dari variabel i di console setiap iterasinya kecuali saat i = 2.

Itulah penjelasan mengenai do-while loop dalam JavaScript. Do-while loop sangat berguna dalam pengembangan aplikasi JavaScript karena memungkinkan untuk mengeksekusi kode secara berulang dan membuat kode yang lebih efisien serta memiliki kondisi yang tidak diketahui sebelum perulangan dimulai. Namun, penting untuk memahami cara kerjanya dan bagaimana digunakan dalam konteks yang sesuai agar dapat digunakan dengan efektif. Selain itu, penting untuk diingat untuk menentukan kondisi yang benar agar tidak menyebabkan infinite loop atau kesalahan lain dalam aplikasi.

Do-while loop juga dapat digabungkan dengan perintah lain seperti break dan continue untuk mengontrol aliran perulangan. Selain itu, do-while loop dapat digunakan bersama dengan Array dan Object, seperti for-in loop dan for-of loop. Namun, penting untuk memilih jenis perulangan yang sesuai dengan kondisi dan tujuan dari aplikasi yang dikembangkan.
