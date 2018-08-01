function graduates (students) {
  // Code disini
  var classObj = {}
    var classArr = []
    var dataArr = []
  
    for (var i = 0; i < students.length; i++) {
      if (classObj[students[i].class] === undefined) {
        classObj[students[i].class] = []
        classArr.push(students[i].class)
        dataArr.push([])
      }
  
      for (var j = 0; j < classArr.length; j++) {
        if (students[i].class === classArr[j]) {
          dataArr[j].push([students[i].name, students[i].score])
        }
      }
    }
    for (var k = 0; k < dataArr.length; k++) {
      for (var l = 0; l < dataArr[k].length; l++) {
        if (dataArr[k][l][1] > 75)
        classObj[classArr[k]].push({
          name : dataArr[k][l][0],
          score: dataArr[k][l][1]
        })
        // console.log(dataArr[k][l][0])
  
      }
    }
return classObj
}

console.log(graduates([
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
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
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
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}
