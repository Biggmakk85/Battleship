
document.addEventListener("DOMContentLoaded", () => {
    const playerBoard = document.getElementById("player-board");
    const computerBoard = document.getElementById("computer-board");

    const playerGrid = createGrid();
    const computerGrid = createGrid();

    populateBoard(playerBoard, playerGrid);
    populateBoard(computerBoard, computerGrid);

    function createGrid() {
        const grid = [];
        for (let i = 0; i < 10; i++) {
            grid.push(new Array(10).fill(null));
        }
        return grid;
    }

    function populateBoard(boardElement, grid) {
        for (let row = 0; row < 10; row++) {
            for (let col = 0; col < 10; col++) {
                const cell = document.createElement("div");
                boardElement.appendChild(cell);
            }
        }
    }
});
