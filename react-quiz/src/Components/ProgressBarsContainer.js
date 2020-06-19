import React, { useContext } from 'react'
import { globalContext } from '../Context'
import MaximumScore from './MaximumScore'
import CurrentScore from './CurrentScore'
import MinimumScore from './MinimumScore'

function ProgressBarsContainer (props) {
  const {
    state: { ended }
  } = useContext(globalContext)
  return (
    <div style={{ width: '100%' }}>
      {!ended ? (
        <>
          <MaximumScore />
          <CurrentScore />
          <MinimumScore />
        </>
      ) : (
        <CurrentScore />
      )}
    </div>
  )
}

export default ProgressBarsContainer
