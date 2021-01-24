const $body = jQuery('body');
const $dayNightSwitch = jQuery('#day-night-checkbox');

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    $body.addClass('dark');
    $dayNightSwitch.prop('checked', false);
} else {
    $body.removeClass('dark');
    $dayNightSwitch.prop('checked', true);
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (e.matches) {
        $body.addClass('dark');
    } else {
        $body.removeClass('dark');
    }
    $dayNightSwitch.prop('checked', !e.matches);
});

$dayNightSwitch.on('change', function(){
    if (this.checked) {
        jQuery('body').removeClass('dark');
    } else {
        jQuery('body').addClass('dark');
    }
});
