const container = document.querySelector('.container')
const divButton = document.getElementById('generateDivsButton')
const divDeleteButton = document.getElementById('deleteDivsButton')


const boxes = document.querySelectorAll('.box')

console.log(boxes)



numOfDivs = 16

const createDivs = (numOfDivs) => {
    const box = document.createElement('div')
    
    for (let i = 0; i <= numOfDivs; i++){
        console.log(i)
        box.classList.add('box')
        container.appendChild(box)
    } 
}


divButton.addEventListener("click", () => {
    createDivs(numOfDivs)
})

divDeleteButton.addEventListener('click', () => {

})





