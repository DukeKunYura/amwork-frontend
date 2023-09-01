import { makeAutoObservable, observable, action } from "mobx"
import { getData } from "../api/getData";
import { TData } from "../interfaces/data";
import { configure } from "mobx"

configure({
    enforceActions: "never",
})

class Todo {
    todos: TData = []

    constructor() {
        makeAutoObservable(this)
    }

    // toggle() {
    //     this.finished = !this.finished
    // }

    getAllfromPH() {
        getData().then(res => { this.todos = res });
    }

}

export default new Todo()