import {render, waitFor} from '@testing-library/react'
import React from 'react';


const HookTest = ({cb}: {cb: () => void}) => {
  React.useEffect(()=>{
    cb()
  },[])

  return <div></div>
}

it('should test hooks', async () => {

  const cb = jest.fn()

  render(<HookTest cb={cb}/>)

  await waitFor(() => {
    expect(cb).toHaveBeenCalled()
  })

})

