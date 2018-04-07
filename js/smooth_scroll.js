$(document).ready(function(){
				// NAVIGATION

				$('#nav-profil').click(function(){
					$('html, body').animate({scrollTop : $('#profil').position().top },1000);
					return false;
				});
				$('#nav-formation').click(function(){
					$('html, body').animate({scrollTop : $('#formation').position().top },1000);
					return false;
				});
				$('#nav-experience').click(function(){
					$('html, body').animate({scrollTop : $('#experience').position().top },1000);
					return false;
				});
				$('#nav-competences').click(function(){
					$('html, body').animate({scrollTop : $('#competences').position().top },1000);
					return false;
				});
				$('#nav-contact').click(function(){
					$('html, body').animate({scrollTop : $('#contact').position().top },1000);
					return false;
				});
      })
