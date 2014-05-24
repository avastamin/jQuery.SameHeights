/*-------------------------------------------------------------------- 
 * JQuery Plugin: "SameHeight" 
 * by:	Ruhul Amin(http://www.ruhulamin.me)
 *
 * Copyright (c) 2014 
 * Licensed under GPL (http://www.opensource.org/licenses/gpl-license.php)
 *
 * Description: Compares the heights  of the elements
 		and sets their min-height to the tallest height. Sets in em units 
 		by default if pxToEm() method is available.
 * Dependencies: jQuery library, pxToEm method.							  
 * Usage Example: $(element).equalHeights();
   						      Optional: to set min-height in px, pass a true argument: $(element).SameHeights(true);
 * Version: 1.0, 24.05.2014
--------------------------------------------------------------------*/

jQuery.fn.SameHeight = function(px) {

	 //set the starting bigestHeight variable  
        var biggestHeight = 0;  
        //check each of them  
        jQuery(this).each(function(){  
            //if the height of the current element is  
            //bigger then the current biggestHeight value  
            if(jQuery(this).height() >= biggestHeight){  
                //update the biggestHeight with the  
                //height of the current elements  
                biggestHeight = jQuery(this).height();
               //jQuery(this).height(biggestHeight);     
            }
        });  
            jQuery(this).height(biggestHeight);  
        //when checking for biggestHeight is done set that  
        //height to all the elements  
        
         return this;
};
