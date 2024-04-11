export class ToDoList{
    constructor(){
        this.list = [];
    }    
addTask(task) {
    this.list.push(task);     
}
markTask(task) {
    for(let i = 0; i< this.list.length; i++){
        if (this.list[i] === task) {
            this.list[i] = "completed";
        }
    }  
}
listAll() {
    for(const i of this.list){
        console.log(i);
    }
}

}
