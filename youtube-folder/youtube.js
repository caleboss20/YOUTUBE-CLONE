

      let input=document.querySelector( ".input_top");



   input.addEventListener("keyup",search);

   function search(){
      
      let inputval=input.value;

      let video_section=document.querySelectorAll(".video_section");

      for(i=0; i< video_section.length;i++){
        if(video_section[i].textContent.toLowerCase().includes(inputval)){
         video_section[i].style.display=" ";


      }
    
      else{
         video_section[i].style.display="none";
     }
    }
  }
