/*
      Project Name:  Recipe Display Application
      
      Author:    Benjamen Johnson
      
      Date:   4 December 2018

      Filename: script.js
      
*/

/*global $ */

    //display the next element after the current target 
    function display(event) {
        
            $(event.currentTarget).next().fadeIn("slow");
        
    }//end of display 
    
    //attach event listener to h3 elements to invoke display finction when clocked 
            $("h3").click(display);