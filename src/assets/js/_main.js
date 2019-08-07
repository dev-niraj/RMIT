$('#btnUploadCancel').click(function(){
	$('#team-select').modal('toggle');
});

$(function() {
    $('body').on('click','.btn-checkbox',function(e) {
        e.stopPropagation();
        e.preventDefault();
        var $checkbox = $(this).find(':input[type=checkbox]');
        if ($checkbox.length) {
            var $icon = $(this).find('[data-icon-on]');
            if ($checkbox.is(':checked')) {
                unchecked($checkbox);
            } else {
                checked($checkbox);
            }
            return;
        }
        var $radio = $(this).find(':input[type=radio]');
        if ($radio.length) {
            var $group = $radio.closest('.btn-group');
            $group.find(':input[type=radio]').not($radio).each(function(){
                unchecked($(this));
            })
            var $icon = $(this).find('[data-icon-on]');
            if ($radio.is(':checked')) {
                unchecked($radio);
            } else {
                checked($radio);
            }
            return;
        }
    });
});


function checked($input) {
    var $button = $input.closest('.btn');
    var $icon = $button.find('[data-icon-on]');
    $button.addClass('active');
    $input.prop('checked', true);
    $icon.css('width',$icon.width());
    $icon.removeAttr('class').addClass($icon.data('icon-on'));
    $input.trigger('change');
}

function unchecked($input) {
    var $button = $input.closest('.btn');
    var $icon = $button.find('[data-icon-on]');
    $button.removeClass('active');
    $input.prop('checked', false);
    $icon.css('width',$icon.width());
    $icon.removeAttr('class').addClass($icon.data('icon-off'));
    $input.trigger('change');
}

$(document).ready(function() {
    $('#customCheckFull1').prop('checked', true);
    $('#customCheckFull2').prop('checked', true);
    $('#customCheckFull3').prop('checked', true);
    $('#customCheck1').prop('checked', true);
    $('#customCheck4').prop('checked', true);
    $('#customCheck7').prop('checked', true);
    $('#customCheck10').prop('checked', true);
    $('#customCheck13').prop('checked', true);
    $('#customCheck2').prop('checked', true);
    $('#customCheck5').prop('checked', true);
    $('#customCheck8').prop('checked', true);
    $('#customCheck11').prop('checked', true);
    $('#customCheck14').prop('checked', true);
    $('#customCheck3').prop('checked', true);
    $('#customCheck6').prop('checked', true);
    $('#customCheck9').prop('checked', true);
    $('#customCheck12').prop('checked', true);
    $('#customCheck15').prop('checked', true);

    $("#customCheckFull1").on('click', function() {
        if (this.checked) {
            $('#customCheck1').prop('checked', true);
            $('#customCheck4').prop('checked', true);
            $('#customCheck7').prop('checked', true);
            $('#customCheck10').prop('checked', true);
            $('#customCheck13').prop('checked', true);
        } else {
            $('#customCheck1').prop('checked', false);
            $('#customCheck4').prop('checked', false);
            $('#customCheck7').prop('checked', false);
            $('#customCheck10').prop('checked', false);
            $('#customCheck13').prop('checked', false);
        }
    });
    $("#customCheckFull2").on('click', function() {
        if (this.checked) {
            $('#customCheck2').prop('checked', true);
            $('#customCheck5').prop('checked', true);
            $('#customCheck8').prop('checked', true);
            $('#customCheck11').prop('checked', true);
            $('#customCheck14').prop('checked', true);
        } else {
            $('#customCheck2').prop('checked', false);
            $('#customCheck5').prop('checked', false);
            $('#customCheck8').prop('checked', false);
            $('#customCheck11').prop('checked', false);
            $('#customCheck14').prop('checked', false);
        }
    });
    $("#customCheckFull3").on('click', function() {
        if (this.checked) {
            $('#customCheck3').prop('checked', true);
            $('#customCheck6').prop('checked', true);
            $('#customCheck9').prop('checked', true);
            $('#customCheck12').prop('checked', true);
            $('#customCheck15').prop('checked', true);
        } else {
            $('#customCheck3').prop('checked', false);
            $('#customCheck6').prop('checked', false);
            $('#customCheck9').prop('checked', false);
            $('#customCheck12').prop('checked', false);
            $('#customCheck15').prop('checked', false);
        }
    });
});