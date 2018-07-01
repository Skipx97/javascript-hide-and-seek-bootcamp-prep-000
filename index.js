function getFirstSelector(selector) {
  return document.querySelector(selector);
}



function nestedTarget() {
 return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')
<<<<<<< HEAD

  for (let i = 0; i < rankedLists.length; i++) {
    let x = rankedLists[i].children

    for (let y = 0; y < x.length; y++) {
      x[y].innerHTML = parseInt(x[y].innerHTML) + n
    }

=======
  
  for (let i = 0; i < rankedLists.length; i++) {
    let x = rankedLists[i].children
    
    for (let y = 0; y < x.length; y++) {
      x[y].innerHTML = parseInt(x[y].innerHTML) + n
    }
    
>>>>>>> 300c9a4445541dcaf93ac3927f7b8ac104edfd43
  }
}

function deepestChild() {
  var x = document.getElementById('grand-node');
  let y = x.children[0];
<<<<<<< HEAD

 while (y) {
    x = y
   y = x.children[0]

 }
return x
}
=======
  
 while (y) {
    x = y
   y = x.children[0]
   
 }
return x
}
>>>>>>> 300c9a4445541dcaf93ac3927f7b8ac104edfd43
