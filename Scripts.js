// O modal deve conter um iframe que busca a página do curso (dica: basta adicionar starter, 
// launchbase ou gostack ao final de https://rocketseat.com.br/). Além do botão de fechar o modal, 
// é preciso implementar a funcionalidade de maximizar o modal (dica: utilize a mesma lógica implementada 
// para fechar o modalOverlay, mas trabalhe com a classe modal e utilize o método contains do classList 
// para verificar se o elemento está ou não com a classe maximize).


// Selecionando elementos no DOM
const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal');


// Manipulando a DOM

//Adição de comando para adicionar a denominação de classe "active" no modal 
//overlay ao clicar em qualquer parte do cartão. 
for(let card of cards)
{
    card.addEventListener("click", function()
    {
        const videoId = card.getAttribute("id");
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${videoId}`
    })
}

    // Adição de comando para remover a denominação da classe "active" no modal overlay ao clicar no X 
document.querySelector(".close-modal").addEventListener("click", function()
{
    modalOverlay.classList.remove("active")
    modal.classList.remove('maximize')
    modalOverlay.querySelector("iframe").src = ""

})

document.querySelector(".maximize-modal").addEventListener("click", function(){
    if(!modal.classList.contains('maximize'))
    {
        modal.classList.add('maximize')
    }
})
