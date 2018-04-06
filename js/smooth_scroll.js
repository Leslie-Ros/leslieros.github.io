$(document).ready(function(){
				// NAVIGATION
				var scroll = 100;

				$('#nav-profil').click(function(){
					$('html, body').animate({scrollTop : $('#profil').position().top },800);
					return false;
				});
				$('#nav-formation').click(function(){
					$('html, body').animate({scrollTop : $('#formation').position().top },800);
					return false;
				});
				$('#nav-experience').click(function(){
					$('html, body').animate({scrollTop : $('#experience').position().top },800);
					return false;
				});
				$('#nav-competences').click(function(){
					$('html, body').animate({scrollTop : $('#competences').position().top },800);
					return false;
				});
				$('#nav-contact').click(function(){
					$('html, body').animate({scrollTop : $('#contact').position().top },800);
					return false;
				});
      })
