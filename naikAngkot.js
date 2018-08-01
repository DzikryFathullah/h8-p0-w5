function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  
  var hasil = [];
    for (var i = 0; i < arrPenumpang.length; i++) {
        var awalNaik = 0;
        var turunDi = 0;
        hasil.push({});
        hasil[i].penumpang = arrPenumpang[i][0];
        hasil[i].naikDari = arrPenumpang[i][1];
        hasil[i].tujuan = arrPenumpang[i][2];
        for (var j = 0; j < rute.length; j++) {
            if (rute[j] === arrPenumpang[i][1]) {
                awalNaik = j;
            } else if (rute[j] === arrPenumpang[i][2]) {
                turunDi = j;
            }
        }
        hasil[i].bayar = (Math.abs(turunDi - awalNaik)) * 2000;
    }
return hasil;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]