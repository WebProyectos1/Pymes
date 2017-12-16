 





 $(document).ready(function(){
 		 $(".main").onepage_scroll();
		 
		 $('a.ancla, a.ancla2').click(function(e){
		 	

		 	e.preventDefault();

		    enlace  = $(this).attr('href');
		    identificador = $(this).attr('id');

		    desplazamiento(enlace);
		    cambiarClase(identificador);

		 });

	

		

	

 });


/*function detectarScroll(){
			

       		var secciones =["seccion1","seccion2","seccion3"];	
             
    		var obj = $(document);         
    		var obj_top = obj.scrollTop()   

    		obj.scroll(function(){

        		var obj_act_top = $(this).scrollTop();  

       			if(obj_act_top > obj_top){
            		
            	var prueba = 1;

            	prueba = prueba + 1

            	console.log(prueba);
            
        		}else{
            	
            	console.log("Arriba");
            
       			}
        		obj_top = obj_act_top;                
    		});
		


		}*/

			function desplazamiento(posicion){

			 $('html, body').animate({
		    	scrollTop: $(posicion).offset().top - 50
		    }, 1000);


		}
		

		
			


		/*function cambiarClase(par_id,){
			
			switch(par_id) {
			    case 'btn_sup1':
			    	$('#btn_sup1').
			        break;
			    case 'btn_sup2':
			        code block
			        break;
			    case 'btn_sup3':
			        code block
			        break;
			    case 'btn_lat1':
			        code block
			        break;
			    case 'btn_lat2':
			        code block
			        break;
			    case 'btn_lat3':
			        code block
			        break;
			    default:
			        code block
			}
			
		}*/

		