$(document).ready(function(){
    
    // NIGHTS CALCULATOR BOOKING MODAL 
    let checkInDate ;
    let difference ;
    let checkOutDate ;
    let tDiff;
    $('#check-in').on('change',function(){
        let checkIn = new Date($('#check-in').val());
        checkInDate = checkIn.getTime();
        getNights();
    });
    $('#check-out').on('change',function(){
        let checkOut = new Date($('#check-out').val());
        checkOutDate = checkOut.getTime();
        getNights();
    });
    function getNights(){
        if(checkOutDate>checkInDate){
        tDiff= checkOutDate- checkInDate;
        difference = tDiff / (1000*3600*24);
        document.getElementById('nights').value = difference;
        }
        else if(checkOutDate<checkInDate)
        {alert('Check-out date cannot be before the Check-in one');
        document.getElementById('nights').value = "0";
        $('#check-out').val('');
        }
        
        else if (checkOutDate === checkInDate){
            alert('The stay has to be at least 1 night');
            document.getElementById('nights').value = "0";
        }
    };

    // MAXIMUM CAPACITY RULE BOOKING MODAL
let adults = $('#adults')
let kids = $('#kids');
let roomsNr = $('#roomsNr');
let roomSelection = $('#roomType').val('Select a room');
function totalGuests(){ return Number(adults.val()) + Number(kids.val())};

console.log(Number(adults.val()))

function roomCapacity(){
    if( (roomSelection.val() === 'standard') && (totalGuests()/ Number(roomsNr.val()) >2  )){
     alert('This room category  has a max. capacity of 2 ppl,plese select more');
     roomSelection.val('Select a room');
     roomsNr.val('1');
    }
    else if( (roomSelection.val() === 'superior'|| roomSelection.val() === 'deluxe') && (totalGuests()/ Number(roomsNr.val()) > 3  )){
     alert('This room category  has a max. capacity of 3 ppl,plese select more');
     roomSelection.val('Select a room');
     roomsNr.val('1');
    }
    
    else if( (roomSelection.val() === 'suite') && (totalGuests()/ Number(roomsNr.val()) > 4  )){
     alert('This room category  has a max. capacity of 4 ppl,plese select more');
    roomSelection.val('Select a room');
     roomsNr.val('1');
    }
    };
    roomSelection.on('change', roomCapacity);
    adults.on('change', roomCapacity);
    kids.on('change', roomCapacity);
    roomsNr.on('change', roomCapacity);
})
