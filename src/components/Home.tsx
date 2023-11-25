import React, { useEffect, useState } from 'react'

import { addToDo, deleteToDo, getAllToDo, updateToDo } from '@ahnafia/utils'
import Link from 'next/link'

type Props = {}

export const Home = (props: Props) => {

  const [toDo, setToDo] = useState<any[]>([])
  const [text, setText] = useState("")
  const [status, setStatus] = useState(false)
  const [show, setShow] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")

  useEffect(() => {
    setShow(true)
    getAllToDo(setToDo)
  }, [])

  const updateMode = (_id: string, text: string, stat: boolean) => {
    setIsUpdating(true)
    setText(text)
    setStatus(stat)
    setToDoId(_id)
  }

  function handleStatus(event: React.FormEvent<EventTarget>, id: string, s: boolean, t: string) {
    let target = event.target as HTMLInputElement;
    const newInputFields = toDo?.map((i: any) => {
      if (id === i._id) {
        i[target.name] = !s
      }
      return i;
    });
    setStatus(!s)
    updateMode(id, t, !s)
    setToDo(newInputFields);
  }

  return show ? (
    <div className='h-screen py-4 w-full'>
      <div className='max-w-xl mx-auto w-full grid p-4 rounded-sm my-4 bg-yellow-200'>
        <label className='text-black text-center mb-2 font-semibold' htmlFor='text'>{isUpdating ? 'Update ' : 'Add '} Todo</label>
        <input id='text' value={text || ''} className='ring-2 hover:ring-black text-black px-2 w-full rounded-sm ring-red-600 py-2' type='text' onChange={(e) => setText(e.target.value)} />
        <button type='submit' className='w-28 mx-auto mt-2 px-2 py-1 bg-red-600 rounded-sm hover:bg-black'
          onClick={isUpdating ?
            () => updateToDo(toDoId, text, status, setToDo, setText, setIsUpdating)
            : () => addToDo(text, status, setText, setToDo)}
        >
          {isUpdating ? 'Update' : 'Add'}
        </button>
      </div>
      <div className="w-full min-h-28 mx-auto grid max-w-xl p-2 bg-yellow-200 border border-gray-200 rounded-sm shadow sm:p-8">
        <div className="flex items-center justify-between py-4">
          <h5 className="text-xl font-bold leading-none text-gray-900">Todays Todo</h5>
          <Link href="#" className="text-sm font-medium text-blue-600 hover:underline">
            View All
          </Link>
        </div>
        <div className="flow-root">
          <ul role="list" className="divide-y divide-yellow-400">
            {toDo?.map((x: { _id: string, text: string, status: boolean }, index: React.Key) => {

              return x._id ? (
                <li key={index} className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">

                    <div className="flex items-center">
                      <input name='status' checked={x.status || false} onChange={(event) => handleStatus(event, x._id, x.status, x.text)} id="status" type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 p-1 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label htmlFor="status" className="ml-2 hidden text-sm font-medium text-gray-900 dark:text-gray-300">Checked state</label>
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-md font-medium text-gray-900 truncate">
                        {x.text}
                      </p>
                    </div>
                    <div className="inline-flex gap-2 items-center text-base font-semibold text-gray-900">
                      <button
                        onClick={() => updateMode(x._id, x.text, x.status)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-sky-600">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                      </button>
                      <button
                        onClick={() => deleteToDo(x._id, setToDo)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-orange-600">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </li>
              ) : null
            })}
          </ul>
        </div>
      </div>
    </div>
  ) : null
}