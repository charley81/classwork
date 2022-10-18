import { css } from '@emotion/react'

const Receipt = ({ data, onHandlePaid }) => {
  return (
    !data.paid && (
      <div
        css={css`
          border: 1px solid var(--color-secondary);
          border-radius: var(--border-radius);
          padding: 1rem;
          cursor: pointer;

          h3 {
            text-align: center;
            border-bottom: 1px solid var(--color-grey-light);
            margin-bottom: 1rem;
          }

          h4 {
            margin: 0.25rem 0;

            span {
              color: var(--color-grey-light);
              font-weight: 400;
            }
          }
        `}
        onClick={() => onHandlePaid(data.id)}
      >
        <h3>{data.person}</h3>
        <h4>
          Main: <span>{data.order.main}</span>
        </h4>
        <h4>
          Main: <span>{data.order.protein}</span>
        </h4>
        <h4>
          Main: <span>{data.order.rice}</span>
        </h4>
        <h4>
          Main: <span>{data.order.sauce}</span>
        </h4>
        <h4>
          Main: <span>{data.order.drink}</span>
        </h4>
        <h4>
          Main: <span>${data.order.cost}</span>
        </h4>
      </div>
    )
  )
}

export default Receipt
