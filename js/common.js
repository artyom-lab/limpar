$(document).ready(function() {

	$("#sandwich-1").on("click", function(){
		$(this).toggleClass("active");
		$("body").toggleClass("menubar-1");
		window.dispatchEvent(new Event('resize'));
	});

  $('.search').on('click', function() {
    $(this).parent().toggleClass('open');
  });

  $(document).on('click.bs.dropdown.data-api', '.dropdown-menu', function (e) { 
    e.stopPropagation();
  });

	Waves.attach('.wave', ['waves-light']);
	Waves.attach('.wave2', ['waves-dark']);
	Waves.init();

	var demo1 = new DragonDrop(document.getElementById('demo-1'), {
	  handle: '.handle',
	  announcement: {
	    grabbed: function (el) { return el.querySelector('span').innerText + ' grabbed'; },
	    dropped: function (el) { return el.querySelector('span').innerText + ' dropped'; },
	    reorder: function (el, items) {
	      var pos = items.indexOf(el) + 1;
	      var text = el.querySelector('span').innerText;
	      return 'The rankings have been updated, ' + text + ' is now ranked #' + pos + ' of ' + items.length;
	    },
	    cancel: function() { return 'Reranking cancelled.'; }
	  }
	});

	demo1
	  .on('grabbed', function (container, item) { console.log('grabbed: ', item); })
	  .on('dropped', function (container, item) { console.log('dropped: ', item); })
	  .on('reorder', function (container, item) { console.log('reorder: ', item); })
	  .on('cancel', function () { console.log('Reordering cancelled'); });

	$('#all').on('click', function() {
		if ($('input[name="step"]:checked').length == $('input[name="step"]').length)
			$('input[name="step"]').prop('checked', false);
		else
			$('input[name="step"]').prop('checked', true);
	});

	$('.select-beast').selectize({});

	$('#artem select').on('change', function () {
		var val = $(this).find('option').attr('value');
		$('.artem .form-refine-select').each(function(e) {
			$(this).hide();
			if (e == val)
				$(this).show();
		})
	});

});