//Use the id of the form instead of #change
$('#change').change(function () {
    //this is just getting the value that is selected
    var title = $(this).val();
    $('.modal-title').html(title);
    $('#Modal').modal('show');
});

$(document).ready(function () {
    // Close modal on button click
    $(".btn").click(function () {
        $("#Modal").modal('hide');
    });
});



