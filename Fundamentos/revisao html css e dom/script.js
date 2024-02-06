
let esconder = false

const motrarImg = () => {

    console.log(document.getElementById('btnImg').innerHTML);

    for (const img of document.getElementsByTagName('img')) {

        if (esconder) {
            console.log('entrou no esconder true')
            img.src = "https://via.placeholder.com/150"

            document.getElementById('btnImg').innerHTML = "Mostrar Imagem"

        } else {
            console.log('entrou no esconder false')

            img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5f4bd7a6-f763-4518-9b81-bdfd40ce3fc9/d26yf2h-e858f532-4b44-4584-a255-fdedf789cb0b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVmNGJkN2E2LWY3NjMtNDUxOC05YjgxLWJkZmQ0MGNlM2ZjOVwvZDI2eWYyaC1lODU4ZjUzMi00YjQ0LTQ1ODQtYTI1NS1mZGVkZjc4OWNiMGIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ZzXpoMDLZrRAgEjqk0TVOV8RMiA_MBx5xhq99fdUZUg"

            document.getElementById('btnImg').innerHTML = "Esconder Imagem"

        }
    }

    esconder = !esconder
}

const capturarForm = (event) => {

    event.preventDefault()

    const newMsg = {
        nome: document.getElementById('nome-form').value,
        email: document.getElementById('email-form').value,
        telefone: document.getElementById('tel-form').value,
        mensagem: document.getElementById('msg-form').value
    }

    console.log(newMsg);

    document.getElementById("msg").innerHTML = `Nome: ${newMsg.nome} <br> Email:${newMsg.email}<br> Tel:${newMsg.telefone} <br> Mensagem:${newMsg.mensagem}`

    document.getElementById('nome-form').value =""
    document.getElementById('email-form').value=""
    document.getElementById('tel-form').value=""
    document.getElementById('msg-form').value=""

}