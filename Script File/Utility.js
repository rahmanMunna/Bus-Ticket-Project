var seatSelectedCount = 0
var pricePerTicket = 550

function changeSeatColor(element)
{
    element.classList.remove('bg-[#F7F8F8]')
    element.classList.remove('text-[#03071280]')
    element.classList.add('bg-[#1DD100]')
    element.classList.add('text-white')
}

function selectedSeat(event)
{
     changeSeatColor(event.target)
    seatSelectedCount +=1
    console.log(seatSelectedCount)

    const element = document.getElementById('seat-left')
  
    element.innerText =  parseInt(element.innerText) - 1;
  
}