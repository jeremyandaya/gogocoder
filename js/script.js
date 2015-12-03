var drop1, drop2, drop3 = false;

$(document).ready(function() {

    $( "#doctype-drag, #head1-drag, #html2-drag" ).draggable({ containment: 'document', snap: "#doctype-drop, #head1-drop, #html2-drop" });

    $( "#doctype-drop" ).droppable( { hoverClass: 'border', tolerance: 'fit', accept: '#doctype-drag',
        // over: function(){
        //     $('#doctype-text').text('over')
        // },
        out: function(){
            // $('#doctype-text').text('out')
            drop1 = false;
            // $('#result').text(drop1);
        },
        drop: function(){
            // $('#doctype-text').text('dropped!');
            drop1 = true;
            // $('#result').text(drop1);
        }
    });

    $( "#head1-drop" ).droppable( { hoverClass: 'border', tolerance: 'fit', accept: '#head1-drag',
        // over: function(){
        //     $('#doctype-text').text('over')
        // },
        out: function(){
            // $('#doctype-text').text('out')
            drop2 = false;
            // $('#result').text(drop2);
        },
        drop: function(){
            // $('#doctype-text').text('dropped!');
            drop2= true;
            // $('#result').text(drop2);
        }
    });

    $( "#html2-drop" ).droppable( { hoverClass: 'border', tolerance: 'fit', accept: '#html2-drag',
        // over: function(){
        //     $('#doctype-text').text('over')
        // },
        out: function(){
            // $('#doctype-text').text('out')
            drop3 = false;
            // $('#result').text(drop2);
        },
        drop: function(){
            // $('#doctype-text').text('dropped!');
            drop3 = true;
            // 
            
        }
    });
    
});

function myFunction() {
    //document.getElementById("result").style.color = "red";
    if (drop1 == true && drop2 == true && drop3 == true) {
        console.log('success');
        document.getElementById("message").innerHTML = "SUCCESS!";
    } else {
        console.log('fail');
        document.getElementById("message").innerHTML = "FAILED!";
    }  
};
