  jQuery(document).ready(function(jQuery) {
    jQuery('.StudyABCountries').find('.clicklink').click(function(e){
    	 e.preventDefault(); 

      //Expand or collapse this panel
      jQuery(jQuery(this).attr("href")).slideToggle('fast');


      if(jQuery("h4", this).hasClass("linkDisplaying")){
        jQuery("h4", this).removeClass("linkDisplaying");
      }else{
         jQuery("h4", this).addClass("linkDisplaying");
         jQuery(".StudyABCountries_block>a h4").not(jQuery("h4", this)).removeClass("linkDisplaying");
      }

      //Hide the other panels
      jQuery(".slidedown").not(jQuery(this).attr("href")).slideUp('fast');

    });
  });