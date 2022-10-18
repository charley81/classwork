import { useState } from 'react'
import Modal from './modal'
import receiptsData from '../data/receipts'
import Nav from './nav'
import Receipts from './receipts'

const Home = () => {
  const [receipts, setReceipts] = useState(receiptsData)
  const [showModal, setShowModal] = useState(false)

  const handlePaid = id => {
    setShowModal(true)
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
      {showModal ? (
        <Modal>
          <div>
            <h1>Receipt Removed</h1>
            <button className="button" onClick={() => setShowModal(false)}>
              Ok
            </button>
          </div>
        </Modal>
      ) : null}
    </div>
  )
}

export default Home
