var player1 = document.querySelector('#player1')
var player2 = document.querySelector('#player2')
var form = document.getElementById('form')
var mainDiv = document.querySelector('#main')
function formEnter(e) {
    e.preventDefault();
    document.getElementById('form').style.display = 'none'
    mainDiv.style.display = 'flex'
}

// console.log(playerOne());
var text = document.getElementsByTagName("span");

console.log(text)
var x = 'X'
var o = 'O'
for (var i of text) {
    // console.log(i)
    i.setAttribute('onclick', 'playerOne(this)')
}

var one = document.querySelector('#one')

var two = document.querySelector('#two')
var three = document.querySelector('#three')
var four = document.querySelector('#four')
var five = document.querySelector('#five')
var six = document.querySelector('#six')
var seven = document.querySelector('#seven')
var eight = document.querySelector('#eight')
var nine = document.querySelector('#nine')


var h1 = document.querySelector('#h1')

var player = document.querySelector('#player')

function playerOne(ele) {
    player.innerHTML = `${player1.value} Select (X)`
    ele.innerHTML = x
    ele.classList.add('disable')
    var text = document.getElementsByTagName("span");
    for (var i of text) {
        // console.log(i)
        i.setAttribute('onclick', 'playerTwo(this)')


    }
    h1.style.display = 'flex'

    if (one.innerHTML === x && two.innerHTML === x && three.innerHTML === x) {

        for (var i of text) {
            i.classList.add ("disable")
           
        }
        one.classList.add('col')
        two.classList.add('col')
        three.classList.add('col')
        

        h1.innerHTML = `${player2.value} Won The Game`
    } else if (four.innerHTML === x && five.innerHTML === x && six.innerHTML === x) {
        for (var i of text) {
            i.classList.add("disable")
        }
        four.classList.add('col')
        five.classList.add('col')
        six.classList.add('col')
        h1.innerHTML = `${player1.value} Won The Game`
    } else if (seven.innerHTML === x && eight.innerHTML === x && nine.innerHTML === x) {
        for (var i of text) {
            i.classList.add('disable')
        }
        seven.classList.add('col')
        eight.classList.add('col')
        nine.classList.add('col')
        h1.innerHTML = `${player1.value} Won The Game`
    } else if (one.innerHTML === x && four.innerHTML === x && seven.innerHTML === x) {
        for (var i of text) {
            i.classList.add('disable')
        }
        one.classList.add('col')
        four.classList.add('col')
        seven.classList.add('col')
        h1.innerHTML = `${player1.value} Won The Game`
    } else if (two.innerHTML === x && five.innerHTML === x && eight.innerHTML === x) {
        for (var i of text) {
            i.classList.add('disable')
        }
        two.classList.add('col')
        five.classList.add('col')
        eight.classList.add('col')
        h1.innerHTML = `${player1.value} Won The Game`
    } else if (three.innerHTML === x && six.innerHTML === x && nine.innerHTML === x) {
        for (var i of text) {
            i.classList.add('disable')
        }
        three.classList.add('col')
        six.classList.add('col')
        nine.classList.add('col')
        h1.innerHTML = `${player1.value} Won The Game`
    } else if (one.innerHTML === x && five.innerHTML === x && nine.innerHTML === x) {
        for (var i of text) {
            i.classList.add('disable')
        }
        one.classList.add('col')
        five.classList.add('col')
        nine.classList.add('col')
        h1.innerHTML = `${player1.value} Won The Game`
    } else if (seven.innerHTML === x && five.innerHTML === x && three.innerHTML === x) {
        for (var i of text) {
            i.classList.add('disable')
        }
        seven.classList.add('col')
        five.classList.add('col')
        three.classList.add('col')
        h1.innerHTML = `${player1.value} Won The Game`
    } else {
        
            // h1.innerHTML = 'draw the game'
      
        
    }
}
function playerTwo(e) {
    player.innerHTML = `${player2.value} Select (O)`
    e.classList.add('disable')
    e.innerHTML = o

    for (var i of text) {
        // console.log(i)
        i.setAttribute('onclick', 'playerOne(this)')
    }
    if (one.innerHTML === o && two.innerHTML === o && three.innerHTML === o) {
        for (var i of text) {
            i.classList.add('disable')
        }
        one.classList.add('col2')
        two.classList.add('col2')
        three.classList.add('col2')
        h1.innerHTML = `${player2.value} Won The Game`
    } else if (four.innerHTML === o && five.innerHTML === o && six.innerHTML === o) {
        for (var i of text) {
            i.classList.add('disable')
        }
        four.classList.add('col2')
        five.classList.add('col2')
        six.classList.add('col2')
        h1.innerHTML = `${player2.value} Won The Game`
    } else if (seven.innerHTML === o && eight.innerHTML === o && nine.innerHTML === o) {
        for (var i of text) {
            i.classList.add('disable')
        }
        seven.classList.add('col2')
        eight.classList.add('col2')
        nine.classList.add('col2')
        h1.innerHTML = `${player2.value} Won The Game`
    } else if (one.innerHTML === o && four.innerHTML === o && seven.innerHTML === o) {
        for (var i of text) {
            i.classList.add('disable')
        }
        one.classList.add('col2')
        four.classList.add('col2')
        seven.classList.add('col2')
        h1.innerHTML = `${player2.value} Won The Game`
    } else if (two.innerHTML === o && five.innerHTML === o && eight.innerHTML === o) {
        for (var i of text) {
            i.classList.add('disable')
        }
        two.classList.add('col2')
        five.classList.add('col2')
        eight.classList.add('col2')
        h1.innerHTML = `${player2.value} Won The Game`
    } else if (three.innerHTML === o && six.innerHTML === o && nine.innerHTML === o) {
        for (var i of text) {
            i.classList.add('disable')
        }
        three.classList.add('col2')
        sio.classList.add('col2')
        nine.classList.add('col2')
        h1.innerHTML = `${player2.value} Won The Game`
    } else if (one.innerHTML === o && five.innerHTML === o && nine.innerHTML === o) {
        for (var i of text) {
            i.classList.add('disable')
        }
        one.classList.add('col2')
        five.classList.add('col2')
        nine.classList.add('col2')
        h1.innerHTML = `${player2.value} Won The Game`
    } else if (seven.innerHTML === o && five.innerHTML === o && three.innerHTML === o) {
        for (var i of text) {
            i.classList.add('disable')
        }
        seven.classList.add('col2')
        five.classList.add('col2')
        three.classList.add('col2')
        h1.innerHTML = `${player2.value} Won The Game`
    } else {
        // h1.innerHTML = 'draw the game'
    }
}
function reload(){
    window.location.reload(false)
}