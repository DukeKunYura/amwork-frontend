import { makeAutoObservable } from "mobx"
import { getData } from "../api/getData";
import { TData } from "../interfaces/data";
import { configure } from "mobx"

configure({
    enforceActions: "never",
})

/**
 * Стор для данных о todo типа IData
 */
class Todo {
    todos: TData = []

    constructor() {
        makeAutoObservable(this)
    }

    toggle(id: number) {
        this.todos = this.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    }

    getAllfromPH() {
        getData().then(res => { this.todos = res });
    }

}

export default new Todo()