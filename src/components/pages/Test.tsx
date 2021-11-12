import { VFC } from 'react'
import { useTest } from '../../hooks/useTest'

export const Test: VFC = () => {
  const { data, name, handleNameInput, submitUserName } =
    useTest()
  return (
    <>
      <div className="flex flow-row space-x-3 items-center justify-center">
        <input
          type="text"
          className="px-3 py-2 rounded-md bg-gray-50 shadow-sm"
          placeholder="name"
          value={name}
          onChange={handleNameInput}
        />
        <button
          onClick={submitUserName}
          className="px-3 py-2 bg-blue-700 hover:bg-blue-500 text-white rounded-xl shadow-lg"
        >
          Submit
        </button>
      </div>

      {data?.map((user) => (
        <li key={user.id}>
          {user.id}. {user.name}
        </li>
      ))}
    </>
  )
}
