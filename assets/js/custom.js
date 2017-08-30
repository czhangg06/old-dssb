/* Write here your custom javascript codes */

/* projects page expansion */
$('.headline').click(function(event) {
	var is_cur_sem = $(this).attr('class').includes('current-semester');
	if (!is_cur_sem) {
		var sem = $(this).attr('id').split("-");
		sem = sem[0] + "-" + sem[1];
		var projects = $('#' + sem + '-projects');
		if (projects.css('display') == 'block') {
			projects.css('display', 'none');
		} else {
			projects.css('display', 'block');
		}
	}
});