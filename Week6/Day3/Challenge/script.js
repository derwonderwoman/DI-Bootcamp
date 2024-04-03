class Video{
    constructor(title,uploader,time){
        this.title = title,
        this.uploader = uploader,
        this.time = time
    }
    watch(){
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}`)
    }
}

let newVideo1 = new Video("movie", "John", "30000");
let newVideo2 = new Video("film", "Lucy", "600");

newVideo1.watch()

const array = [
    {title: "video1",
     uploader: "Mary",
     time: "48000"},
     {title: "video2",
     uploader: "Nairy",
     time: "28000"},
     {title: "video3",
     uploader: "Fairy",
     time: "18000"},
     {title: "video4",
     uploader: "Harry",
     time: "38000"},
     {title: "video5",
     uploader: "Kerry",
     time: "8000"},
]

const videos = array.map(({title,uploader,time}) => new Video(title,uploader,time));

console.log(videos);