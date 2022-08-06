function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomInt = getRandomIntInclusive(0, 9);
let arrSmiles = ["😍", "💋", "🥰", "😉", "😇", "😁", "🙄", "😎", "👹", "🤷"]
let userMessage = prompt("Type something e.g. 'How much is the fish?'")
let ID = Number(prompt("Choose operation from 1 to 4"))
let smile = arrSmiles[randomInt]

let operation
switch (ID) {
    case 1:
        operation = prompt("choose a symbol")
        console.log("Unicode of", userMessage.charAt(operation), "is", userMessage.charCodeAt(ID))
        break
    case 2:
        let position = Number(prompt("Remove character by index"))
        console.log(userMessage.slice(0, position) + userMessage.slice(position+1))
        break
    case 3:
        operation = Number(prompt("choose a symbol to replace"))
        let newMessage = (userMessage.slice(0, operation) + smile + userMessage.slice(operation+1))
        console.log(newMessage)
        break
    case 4:
        let output = (userMessage.replaceAll(" ", ""))
        console.log("The length of the string without whitespace is", output.length)
        break
    default:
        console.log("Enter number from 1 to 4")
        break
}