import React from 'react'
import { css } from 'react-emotion'
import { ClipLoader } from 'react-spinners'

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`

export default () => (
  <section className='w-100 center mt7 flex flex-column items-center'>
    <ClipLoader
      className={override}
      sizeUnit={'px'}
      size={150}
      color={'#123abc'}
      loading={true}
    />
    <h2 className='loading-text'>Loading initial game state...</h2>
  </section>
)
