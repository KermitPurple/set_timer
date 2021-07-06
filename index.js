const boxes = {
    inputs: document.querySelector('#inputs'),
    stopwatch: document.querySelector('#stopwatch'),
    countdown: document.querySelector('#countdown'),
};
const flair_text_el = document.querySelector('#flair-text');
const countdown_time_el = document.querySelector('#countdown-time');

function show_box(name){
    for(key in boxes)
        boxes[key].classList.add('hidden');
    boxes[name].classList.remove('hidden');
}

function start_countdown(seconds, flair_text, destination){
    show_box('countdown');
    new CountdownTimer(seconds, 200, data=>{
        countdown_time_el.innerHTML = seconds_to_timestring(data.remaining_seconds);
        },
        ()=>show_box(destination)
    );
}
