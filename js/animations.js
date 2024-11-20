$(function() {
    var $navToggle = $('#nav-toggle-on');

    $navToggle.on('click', function() {
        if ($navToggle[0].id === 'nav-toggle-on') {
            // Toggle to "nav-toggle-off"
            $('.nav-item').hide().each(function(index) {
                $(this).delay(100 * index).slideDown(500);
            });
            $navToggle.attr('id', 'nav-toggle-off');
        } else {
            // Toggle to "nav-toggle-on"
            $('.nav-item').each(function(index) {
                $(this).delay(100 * index).slideUp(500);
            });
            $navToggle.attr('id', 'nav-toggle-on');
        }
    });

    function screenChange() {
        if (window.innerWidth > 1024) {
            // Desktop view: Show all nav items and hide toggle buttons
            $('.nav-item').show();
            $('#nav-toggle-on').hide();
            $('#nav-toggle-off').hide();
        } else {
            // Mobile view: Show toggle button and hide nav items
            $('.nav-item').hide();
            $('#nav-toggle-on').show();
            $navToggle.attr('id', 'nav-toggle-on'); // Reset toggle state
        }
    }

    // =attach event listeners
    window.addEventListener('resize', screenChange);
    window.addEventListener('load', screenChange);
    screenChange();
});