import axios from 'axios'

// const baseUrl = "http://localhost:5000"
const baseUrl = "https://ahnafia-todo-backend.onrender.com"


const getAllToDo = (setToDo: (arg0: any) => void) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            console.log('data: ', data);
            setToDo(data)
        })
}

const addToDo = (text: any, status: boolean, setText: (arg0: string) => void, setToDo: any) => {

    axios
        .post(`${baseUrl}/save`, { text: text, status: status })
        .then((data) => {
            console.log(data);
            setText("")
            getAllToDo(setToDo)
        })
        .catch((err: any) => console.log(err))

}

const updateToDo = (toDoId: any, text: any, status: boolean, setToDo: any, setText: (arg0: string) => void, setIsUpdating: (arg0: boolean) => void) => {

    axios
        .post(`${baseUrl}/update`, { _id: toDoId, text: text, status: status })
        .then((data) => {
            setText("")
            setIsUpdating(false)
            getAllToDo(setToDo)
        })
        .catch((err: any) => console.log(err))

}

const deleteToDo = (_id: any, setToDo: any) => {

    axios
        .post(`${baseUrl}/delete`, { _id })
        .then((data: any) => {
            console.log(data)
            getAllToDo(setToDo)
        })
        .catch((err: any) => console.log(err))

}


export { getAllToDo, addToDo, updateToDo, deleteToDo }