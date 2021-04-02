$(document).ready(function(){
    
    // NIGHTS CALCULATOR BOOKING MODAL 
    let checkInDate ;
    let difference ;
    let checkOutDate ;
    let tDiff;
    $('#check-in').on('change',function(){
        let checkIn = new Date($('#check-in').val());
        checkInDate = checkIn.getTime();
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
        document.getElementById('nights').value = "0"
        }
        
        else if (checkOutDate === checkInDate){
            alert('The stay has to be at least 1 night');
            document.getElementById('nights').value = "0";
        }
    };

    // MAXIMUM CAPACITY RULE BOOKING MODAL
let adults = $('#adults')
let kids = $('#kids');
let roomSelection = $('#roomType').val('Select a room');

function roomCapacity(){
    if( (roomSelection.val() === 'standard') && Number(adults.val()) + Number(kids.val()) >2){
     alert('This room has a max. capacity of 2 ppl');
     adults.val('1');
     kids.val('');
    }
    else if( (roomSelection.val() === 'superior'|| roomSelection.val() === 'deluxe') && Number(adults.val()) + Number(kids.val()) > 3 ){
     alert('This room has a max. capacity of 3 ppl');
     adults.val('1');
     kids.val('');
    }
    
    else if( (roomSelection.val() === 'suite') && Number(adults.val()) + Number(kids.val()) > 4 ){
     alert('This room has a max. capacity of 4 ppl');
     adults.val('1');
     kids.val('');
    }
    };
    roomSelection.on('change', roomCapacity);
    adults.on('change', roomCapacity);
    kids.on('change', roomCapacity);

})
