const selectionsButtons = document.querySelectorAll("[data-selection]")
const dataFinalColumn = document.querySelector("[data-final-column]")
const yourScoreSpan = document.querySelector("[data-your-score]")
const computerScoreSpan = document.querySelector("[data-computer-score]")





const SELECTIONS = [{
    name: "rock",
    emoji: "✊",
    beats: "scissor"
  },
  {
    name: "paper",
    emoji: "✋",
    beats: "rock"
  },
  {
    name: "scissor",
    emoji: "✌",
    beats: "paper"
  }
]
function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
  return SELECTIONS[randomIndex]
}




selectionsButtons.forEach(selectionsButton => {
  selectionsButton.addEventListener("click", e => {
    const selectionName = selectionsButton.dataset.selection
    const selection = SELECTIONS.find(selection => selection.name === selectionName)
    makeSelection(selection)
  })
})



function makeSelection(selection) {
  const computerSelection = randomSelection()
  const yourWinner = isWinner(selection, computerSelection)
  const computerWinner = isWinner(computerSelection, selection)

  addSelectionResult(computerSelection, computerWinner)
  addSelectionResult(selection, yourWinner)

  if (yourWinner) incrementScore(yourScoreSpan)
  if (computerWinner) incrementScore(computerScoreSpan)

  console.log(computerSelection)
}




function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name
}


function addSelectionResult(selection, winner) {
  const div = document.createElement("div")
  div.innerText = selection.emoji
  div.classList.add("result-selection")
  if (winner) div.classList.add("winner")
  dataFinalColumn.after(div)
}


function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}


