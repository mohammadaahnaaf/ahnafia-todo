import axios from 'axios'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || ''


const getAllToDo = async (setToDo: (arg0: any) => void) => {
   await axios
        .get(baseUrl)
        .then(({ data }) => {
            console.log('data: ', data);
            setToDo(data)
        })
}

const addToDo = async (text: any, status: boolean, setText: (arg0: string) => void, setToDo: any) => {

    await axios
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