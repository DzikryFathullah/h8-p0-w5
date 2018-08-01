function highestScore (students) {
  // Code disini
  var hasil = {}
    for (var i = 0; i < students.length; i++) {
        var kelas = ""
        var maxIndex = -1
        if (students[i].class !== undefined) {
            kelas = students[i].class;
            for (var j = i + 1; j < students.length; j++) {
                if (students[i].class === students[j].class) {
                    if (students[i].score > students[j].score) {
                        maxIndex = i;
                    } else if (students[i].score < students[j].score) {
                        maxIndex = j;
                    }
                    students[j].class = undefined;
                }
            }
            if (maxIndex === -1) {
                maxIndex = i;
            }
            students[i].class = undefined;
        }
        if (maxIndex !== -1) {
            hasil[kelas] = {};
            hasil[kelas].name = students[maxIndex].name;
            hasil[kelas].score = students[maxIndex].score;
        }
    }
return hasil;
}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}
