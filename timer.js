class CountdownTimer{
    constructor(seconds, delay = 200, func = (_)=>{}){
        this.max_seconds = seconds;
        this.remaining_seconds = seconds;
        this.elapsed_seconds = 0;
        this.started = true;
        let start_time = performance.now();
        this.interval = setInterval(()=>{
            this.elapsed_seconds = (performance.now() - start_time) / 1000;
            this.remaining_seconds = this.max_seconds - this.elapsed_seconds;
            if(this.remaining_seconds <= 0){
                func({
                    max_seconds: this.max_seconds,
                    elapsed_seconds: this.max_seconds,
                    remaining_seconds: 0,
                });
                this.stop();
            }else{
                func({
                    max_seconds: this.max_seconds,
                    elapsed_seconds: this.elapsed_seconds,
                    remaining_seconds: this.remaining_seconds,
                });
            }
        }, delay);
    }

    stop(){
        clearInterval(this.interval);
    }
}
