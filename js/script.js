
$(function () {
    $('.sidenav').sidenav();
    $('.dropdown-trigger').dropdown();
    $('.modal').modal();
    $('select').formSelect();
    $('.datepicker').datepicker();
    // $('.tabs').tabs();
});

$('#allchk').on('change', function(){
    if($(this).prop('checked')){
        $('tbody tr td input[type="checkbox"]').each(function(){
            $(this).prop('checked', true);
        });
    }else{
        $('tbody tr td input[type="checkbox"]').each(function(){
            $(this).prop('checked', false);
        });
    }
});

$('#allchk2').on('change', function(){
    if($(this).prop('checked')){
        $('tbody tr td input[type="checkbox"]').each(function(){
            $(this).prop('checked', true);
        });
    }else{
        $('tbody tr td input[type="checkbox"]').each(function(){
            $(this).prop('checked', false);
        });
    }
});










