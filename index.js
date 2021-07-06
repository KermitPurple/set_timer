const inputs = {
    sets: document.querySelector('input[name=sets]'),
    time: {
        mins: document.querySelector('input[name=mins]'),
        secs: document.querySelector('input[name=secs]'),
    }
}
const boxes = {
    inputs: document.querySelector('#inputs'),
    stopwatch: document.querySelector('#stopwatch'),
    countdown: document.querySelector('#countdown'),
};
const countdown_flair_text_el = document.querySelector('#countdown-flair-text');
const countdown_time_el = document.querySelector('#countdown-time');
const stopwatch_flair_text_el = document.querySelector('#stopwatch-flair-text');
const stopwatch_time_el = document.querySelector('#stopwatch-time');
let stopwatch = null;
let sets_left = 0;

function get_rest_time(){
    return parseInt(inputs.time.mins.value) * 60 + parseInt(inputs.time.secs.value);
}

function get_sets(){
    return parseInt(inputs.sets.value);
}

function show_box(name){
    for(key in boxes)
        boxes[key].classList.add('hidden');
    boxes[name].classList.remove('hidden');
}

function start_countdown(seconds, flair_text){
    countdown_flair_text_el.innerHTML = flair_text;
    show_box('countdown');
    new CountdownTimer(seconds, 200, data=>{
        countdown_time_el.innerHTML = seconds_to_timestring(data.remaining_seconds);
        },
        ()=>{
            sets_left--;
            start_stopwatch(`Set ${get_sets() - sets_left + 1}`);
        }
    );
}

function start_stopwatch(flair_text){
    stopwatch_flair_text_el.innerHTML = flair_text;
    show_box('stopwatch');
    stopwatch = new StopWatchTimer(200, time=>{
        stopwatch_time_el.innerHTML = seconds_to_timestring(time);
    });
}

function stop_stopwatch(){
    stopwatch?.stop();
    if(sets_left <= 0)
        show_box('inputs');
    else
        start_countdown(get_rest_time(), 'Rest');
}

function start_set_timer(){
    sets_left = get_sets();
    start_stopwatch(`Set ${get_sets() - sets_left + 1}`);
}
