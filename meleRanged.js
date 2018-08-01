function meleeRangedGrouping (str) {
  //your code here
  var heroBase = str.split(',')
  var heroDetail = []

  if (str.length === 0) {
      return  '[]'
  }
  
  for (var i = 0; i < heroBase.length; i++) {
      heroDetail.push(heroBase[i].split('-'))
    }
    
    var heroCategory = [[],[]]
    for (var j = 0; j < heroDetail.length; j++) {
        if (heroDetail[j][1] === "Ranged") {
            heroCategory[0].push(heroDetail[j][0])
      } else {
            heroCategory[1].push(heroDetail[j][0])
        }
  }

  return heroCategory
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []