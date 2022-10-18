import Receipt from './receipt'
import { css } from '@emotion/react'

const Receipts = ({ receipts, onHandlePaid }) => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        max-width: var(--max-width);
        margin: auto;
        gap: 1rem;
        padding: 1rem;
      `}
    >
      {receipts.map(receipt => (
        <Receipt key={receipt.id} data={receipt} onHandlePaid={onHandlePaid} />
      ))}
    </div>
  )
}

export default Receipts
