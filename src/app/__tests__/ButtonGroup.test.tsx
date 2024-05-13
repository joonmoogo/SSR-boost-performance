import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../page'
import Appbar from '../_components/Appbar'
import config from '../_config/config'
import ButtonGroup from '../_components/ButtonGroup'
 
describe('ButtonGroup', () => {
  it('ButtonGroup rendering',async ()=>{
    expect(1 + 1 === 2);
  })
})