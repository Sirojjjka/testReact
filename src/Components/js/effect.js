$(document).ready(function () {
    var searchBlock = $('#form');
    $(document).on('click', '#open', function () {
        searchBlock.slideToggle();
        return false;
    });
});

export default searchBlock;