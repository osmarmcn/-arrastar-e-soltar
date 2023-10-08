

const itemArrastavel = document.querySelectorAll(".itemArrastavel")
const containerItem = document.querySelectorAll(".containerItem")


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

function soltarItemContainer(){
    this.style.backgroundColor = 'rgba(0, 0, 0, 0)'

    this.appendChild(itemArrastado)

    const acessorio = itemArrastado.getAttribute('data-acessorio-id')
    console.log(acessorio)


}