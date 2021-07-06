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

function show_box(name){
    for(key in boxes)
        boxes[key].classList.add('hidden');
    boxes[name].classList.remove('hidden');
}

function start_countdown(seconds, flair_text, destination){
    countdown_flair_text_el.innerHTML = flair_text;
    show_box('countdown');
    new CountdownTimer(seconds, 200, data=>{
        countdown_time_el.innerHTML = seconds_to_timestring(data.remaining_seconds);
        },
        ()=>show_box(destination)
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
    if(stopwatch != null)
        stopwatch.stop();
}
