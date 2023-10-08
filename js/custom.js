

const itemArrastavel = document.querySelectorAll(".itemArrastavel")
const containerItem = document.querySelectorAll(".containerItem")
const msg = document.getElementById('msg')


itemArrastavel.forEach( item =>{
    item.addEventListener('dragstart', inciarArrastar)

    item.addEventListener('dragend', filArrastar)
})

let itemArrastado = null


function inciarArrastar(){
    itemArrastado = this

    setTimeout(() =>(this.style.display = 'none'), 0)


}


function filArrastar(){

    setTimeout(() =>(this.style.display = 'block'), 0)


    itemArrastado = null

}


containerItem.forEach( container =>{
    container.addEventListener('dragover', arrastarSobre)

    container.addEventListener('dragenter', itemEntrarContainer)

    container.addEventListener('dragleave', itemSairContainer)

    container.addEventListener('drop', soltarItemContainer)


})

function arrastarSobre(e){
    e.preventDefault()

}


function itemEntrarContainer(e){
    e.preventDefault()

    this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
}


function itemSairContainer(){
    this.style.backgroundColor = 'rgba(0, 0, 0, 0)'
}


async function soltarItemContainer(){
    this.style.backgroundColor = 'rgba(0, 0, 0, 0)'

    this.appendChild(itemArrastado)

    const acessorio = itemArrastado.getAttribute('data-acessorio-id')
    //console.log(acessorio)

    const carroId = document.getElementById('carroId').getAttribute('data-carro-id')

    const formData = new FormData()
    formData.append('acessorio_id', acessorio)
    formData.append('carro_id', carroId)

   let dados = await fetch('acessorio.php', {
        method:"POST",
        body:formData
    })

    let resposta = await dados.json()
    //console.log(resposta)

    if(resposta['status']){
        msg.innerHTML = `<p style='color: green;'>${resposta['mensagem']}</p>` 

        removerMsg()

    }else{
        msg.innerHTML =  `<p style='color: #f00;'>${resposta['mensagem']}</p>` 

        removerMsg()

    }

}


function removerMsg(){
    setTimeout(() =>{
        document.getElementById('msg').innerHTML = ""
    },3000)
}