import { css } from '@emotion/react'

const Nav = () => {
  return (
    <div
      css={css`
        background: var(--color-light);
        color: var(--color-dark);
        padding: 1rem;

        .inner {
          max-width: var(--max-width);
          margin: auto;
        }
      `}
    >
      <div className="inner">
        <h1>Korilla</h1>
      </div>
    </div>
  )
}

export default Nav
