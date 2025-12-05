const maze =[
 ['+','>', '+', '-', '-', '-','+'],
 ['|',' ', '|', ' ', ' ', ' ','|'],
 ['|',' ', '|', ' ', '|', ' ','|'],
 ['|',' ', ' ', ' ', '|', ' ','|'],
 ['+','-', '-', '-', '+', ' ','|'],
 ['<',' ', ' ', ' ', ' ', ' ','|'],
 ['+','-', '-', '-', '-', '-','+']
];

let robotPosition = {x: 1, y: 0}

function printMaze(maze,robotPosition) {
    let newMaze = ""
    for (let i = 0; i < maze.length; i++) {
        for (let j = 0; j < maze[i].length; j++) {
            if (j === robotPosition.x && i === robotPosition.y) {
                newMaze += "@"
            }
            else newMaze += maze[i][j]
            }
            newMaze += "\n"
        }
        console.log(newMaze)
    }

function moverobot(direction) {
    if (direction === "w") {
        robotPosition.y--
    } 
    if (direction === "a") {
        robotPosition.x--
    }
    if (direction === "d") {
        robotPosition.x++
    }
    if (direction === "s") {
        robotPosition.y++
    }
    if (direction === "x") {
        robotPosition
    }
    if (maze[robotPosition.y][robotPosition.x] === " " || maze[robotPosition.y][robotPosition.x] === "<") {
        robotPosition = robotPosition
    } else if (direction === "w") {
        robotPosition.y++
    } else if (direction === "a") {
        robotPosition.x++
    } else if (direction === "d") {
        robotPosition.x--
    } else if (direction === "s") {
        robotPosition.y--
    }
    }

function iMaze() {
    while (maze[robotPosition.y][robotPosition.x] !== "<") {
    let svar = prompt("Indtast retning (w: op, s: ned, a: venstre, d: højre) eller x for at afslutte")
    if (svar === "w" || svar === "a" || svar === "s" || svar === "d" ) {
                moverobot(svar)
                printMaze(maze,robotPosition)
                if (maze[robotPosition.y][robotPosition.x] === "<") {
                    console.log("Ude!")
                    break
                }
                } else if (svar === "x") {
                    printMaze(maze,robotPosition)
                    break
                } else {
                    svar = prompt("prøv igen")
                    moverobot(svar)
                    printMaze(maze,robotPosition)
                }
    }
    }

iMaze()