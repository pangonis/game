let squares: NodeListOf<HTMLDivElement>;
export function runApp() {
    // Find all the squares
    squares = document.querySelectorAll('.square') as NodeListOf<HTMLDivElement>;
    const secret = getSecretNumber();
    squares.forEach((sq, index) => {
        if (index === secret) {
            sq.dataset.secret = 'true';
        }
        sq.addEventListener('click', handleClick);
    })
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
export function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getSecretNumber() {
    return getRandomInt(0, 5);
}

function handleClick() {
    const clickedSquare = this as HTMLDivElement;
    const message = document.getElementById("message");

    if (clickedSquare.dataset.secret !== "true") {
        clickedSquare.classList.add("loser");
    }

    var count = document.getElementsByClassName("loser");
    if (count.length === 5) {
        message.innerText = "YOU ARE A LOSER!";
    }

    if (clickedSquare.dataset.secret === "true") {
        message.innerText = "YOU WON!";
        clickedSquare.classList.add("winner");
        squares.forEach(s => {
            if (s !== clickedSquare) {
                s.classList.add("loser");
            }
        })
    }
}