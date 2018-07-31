function initMap(){
		new google.maps.Map(document.getElementById('map'),{center:{lat:5.6390, lng: -0.171511}, zoom:19});
	};

function validate()
           {
            console.log("We this");
           
              if( document.myForm.Fullname.value == "" )
              {
                 alert( "Please provide your name!" );
                 document.myForm.Name.focus() ;
                 return false;

                 
              }
          }
 function validateEmail()
            {
                var emailID = document.myForm.EMail.value;
                atpos = emailID.indexOf("@");
                dotpos = emailID.lastIndexOf(".");
                
                if (atpos < 1 || ( dotpos - atpos < 2 )) 
                {
                    alert("Please enter correct email ID")
                    document.myForm.EMail.focus() ;
                    return false;
                }
                return( true );
            }          

