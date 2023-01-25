// props tar emot datan som skickas in i komponenten
function TodoItem(props) {
    const { task, done } = props; // Här använder vi oss av "object destructering" där vi plockar ut egenskapen task från objektet props
    let doneText = 'Ej klar';

    if (done) {
        doneText = 'Klar'
    }

    return (
        <li>{ task } - { doneText }</li>
    )
}

export default TodoItem;