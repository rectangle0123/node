import {useState} from 'react'

function Startup() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  )
}

function MyButton({count, onClick} : {count: number, onClick: () => void}) {
  return (
    <button onClick={onClick}>
      Click {count} times
    </button>
  )
}

export default Startup
