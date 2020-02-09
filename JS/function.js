//let main = function (){

    let navigationBar = document.querySelector('.nav'); 
    //funkcija za gasenje i paljenje
    let dropDownMenu = function() {
        let navBarInvisible = navigationBar.classList.contains('prikazan-nav');

        if (navBarInvisible) {
            navigationBar.classList.remove('prikazan-nav');
         
        }
        else {
            navigationBar.classList.add('prikazan-nav');
            
        }
    }
    let anchorClick = document.querySelector('.drop-down-menu');
    anchorClick.addEventListener('click', dropDownMenu); 
    
    
    

    //second version, but first is better shorter (better???)
    /*let higherResolution = window.matchMedia("screen and (min-width: 768px)")
    function myFunction(higherResolution) {
        if (higherResolution.matches) { // If media query matches
            navigationBar.classList.remove('prikazan-nav');
        } 
      }
      myFunction(higherResolution);
      higherResolution.addListener(myFunction);*/
    
//}  
//main();
