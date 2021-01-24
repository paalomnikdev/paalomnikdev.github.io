const $body = jQuery('body');
const $dayNightSwitch = jQuery('#day-night-checkbox');

const setNight = (night = true) => {
    if (night) {
        $body.addClass('dark');
    } else {
        $body.removeClass('dark');
    }

    $dayNightSwitch.prop('checked', !night);
};

setNight(
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
);

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    setNight(e.matches);
});

$dayNightSwitch.on('change', function(){
    setNight(!this.checked);
});
