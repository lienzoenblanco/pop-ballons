const container = document.querySelector('.container');
let balloons = [
    'pink', 'black', 'red', 'green',
    'yellow', 'purple', 'blue', 'orange',
    'gray', 'brown', 'violet', 'silver',
    'pink', 'black', 'red', 'green',
    'yellow', 'purple', 'blue', 'orange'
];

function popBalloons(pos) {
    balloons[pos] = null;
    drawBalloons();
};

function drawBalloons() {
    let content = "";
    balloons.forEach(function(color, position){
        let balloonVisibility = "visibled"
        if (color === null) {
            balloonVisibility = "popped"
        }
    
        content = content + `<div
         class="balloon ${balloonVisibility}" 
         style="background: ${color}"
         onClick="popBalloons(${position})"
         ></div>`;
    });
    container.innerHTML = content;
    updateBalloonCount(balloons);
}

function updateBalloonCount(balloons) {
    let count = document.querySelector("#balloon-count")
    let total = balloons.length
    balloons.forEach(function(color){
        if (color === null) {
            total = total - 1;
        }
    });
    
    if (total == 0) {
        window.location.reload();
    }
    count.innerHTML = total;
}

window.onload = drawBalloons();
