import { useCallback, useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  const increment = useCallback(() => {
    setCount(value => (value += 1))
  }, [])
  const decrement = useCallback(() => {
    setCount(value => (value -= 1))
  }, [])

  return (
    <section className="flex">
      <button onClick={decrement}>-</button>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
    </section>
  )
}
