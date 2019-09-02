$(document).ready(function() {
   $('div.tariff').on('click', function() {
        var $modal = $('#modal');
        $modal.html($(this).html());
        $modal.append('<button class="confirm">Confirm and pay</button>');
        $modal.modal();
   });
});