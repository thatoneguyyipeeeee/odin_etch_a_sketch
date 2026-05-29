const container = document.querySelector(".container")
const boxInRow = document.querySelector("#box-in-row")
const submitButton = document.querySelector("#submit")

submitButton.addEventListener("click", () => {
    container.replaceChildren();

    if(parseInt(boxInRow.value) > 100){
        boxInRow.value = 100;
    } else if(parseInt(boxInRow.value) < 1){
        boxInRow.value = 1;
    }

    const gridSideLength = parseInt(boxInRow.value);
    for(let i = 0; i < gridSideLength; i++){
        const row = document.createElement("div");
        row.classList = "row";

        for (let j = 0; j < gridSideLength; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            let currentOppacity = 0;
            let color = null;

            square.addEventListener("mouseover", () => {
                if(!color){
                    let r = Math.floor(Math.random() * 256)
                    let g = Math.floor(Math.random() * 256)
                    let b = Math.floor(Math.random() * 256)
                    color = `${r}, ${g}, ${b}`
                }

                if(currentOppacity < 1){
                    currentOppacity += 0.1;
                }

                square.style.backgroundColor = `rgba(${color}, ${currentOppacity})`
            })
            row.appendChild(square);
        }
        container.appendChild(row)
    }
})