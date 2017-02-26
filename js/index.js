$( document ).ready(function() {

	function elementIsVisible(element) {
	    var top_of_element = element.offset().top;
	    var bottom_of_element = element.offset().top + element.outerHeight();
	    var bottom_of_screen = $(window).scrollTop() + $(window).height();

	    if((bottom_of_screen > top_of_element) && (bottom_of_screen < bottom_of_element)){
	    	return true;
	    }
	    else {
	    	return false;
	    }
	};

	var sectionCompetence = $('#competences-bar');

	var elementLaravel = $('.barre-niveau-laravel');
	var elementPhp = $('.barre-niveau-php');
	var elementJquery = $('.barre-niveau-jquery');
	var elementBootstrap = $('.barre-niveau-bootstrap');
	var elementHtml = $('.barre-niveau-html');
	var elementCss = $('.barre-niveau-css');
	var elementMysql = $('.barre-niveau-mysql');
	var elementServeur = $('.barre-niveau-serveur');
	var elementLinux = $('.barre-niveau-linux');
	var elementJavaScript = $('.barre-niveau-javascript');
	var elementGit = $('.barre-niveau-git');
	var elementWordpress = $('.barre-niveau-wordpress');

	$(window).scroll(function() {
		var isVisibleLaravel = elementIsVisible(sectionCompetence);
		if(isVisibleLaravel) {

			setInterval(function(){

			}, 3000);

		    elementLaravel.animate({width: elementLaravel.data('niveau') + '%'}, 1000);
		    elementPhp.animate({width: elementPhp.data('niveau') + '%'}, 1000);
		    elementJquery.animate({width: elementJquery.data('niveau') + '%'}, 1000);
		    elementBootstrap.animate({width: elementBootstrap.data('niveau') + '%'}, 1000);
		    elementHtml.animate({width: elementHtml.data('niveau') + '%'}, 1000);
		    elementCss.animate({width: elementCss.data('niveau') + '%'}, 1000);
		    elementMysql.animate({width: elementMysql.data('niveau') + '%'}, 1000);
		    elementServeur.animate({width: elementServeur.data('niveau') + '%'}, 1000);
		    elementLinux.animate({width: elementLinux.data('niveau') + '%'}, 1000);
		    elementJavaScript.animate({width: elementJavaScript.data('niveau') + '%'}, 1000);
		    elementGit.animate({width: elementGit.data('niveau') + '%'}, 1000);
		    elementWordpress.animate({width: elementWordpress.data('niveau') + '%'}, 1000);
		}
	});



	$('.parcours-box').mouseenter(function() {
		$(this).children().show(100);
		$(this).children().next().show(100);
	})
	.mouseleave(function() {
		$('.parcours-aide-before').hide(100);
		$('.parcours-aide').hide(100);
	});


	$('.parcours').click(function(e){
		if(!$(this).hasClass('actif')) {
			$(this).next().show(300);
			$(this).addClass('actif');
		} else {
			$(this).next().hide(300);
			$(this).removeClass('actif');
			rotation -= 45;
			$(this).children().children().rotate(rotation);
		}
	});


	$('.btn-objectif-section').click(function(e){
		$('.btn-objectif-section').removeClass('btn-objectif-actif');
		$(this).addClass('btn-objectif-actif');
		var section = $(this).attr('id');
		$('#section-objectifs').addClass('display-none');
		$('#section-projets').addClass('display-none');
		$('#section-base').addClass('display-none');

		$('#section-'+section).removeClass('display-none');
	});

	//Ajax contact
	var form = $('.contact-form');

	form.submit(function (event) {
		event.preventDefault();
		$(this).prev().removeClass('alert-success');
		$(this).prev().removeClass('alert-danger');
		$this = $(this);
		var data = $(this).serialize();

	    $.ajax({
	       url : $(this).attr('action'),
	       type : 'POST',
	       data : data,
	       success : function(data){
	       		$this.prev().addClass('alert-success');
				$this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
	       },

	       error : function(){
	       		$this.prev().addClass('alert-danger');
				$this.prev().text('Une erreur est survenu, si le problème persiste, vous pouvez directement m\'envoyer un email à benjamin.rouquet4@gmail.com').fadeIn().delay(3000).fadeOut();
	       }
   		});
	});
});

