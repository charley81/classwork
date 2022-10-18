import { useState } from 'react'
import receiptsData from '../data/receipts'
import Nav from './nav'
import Receipts from './receipts'

const Home = () => {
  const [receipts, setReceipts] = useState(receiptsData)

  const handlePaid = id => {
    setReceipts(current =>
      current.map(item => {
        if (item.id === id) {
          return { ...item, paid: true }
        }

        return item
      })
    )
  }

  return (
    <div>
      <Nav />
      <Receipts receipts={receipts} onHandlePaid={handlePaid} />
    </div>
  )
}

export default Home
