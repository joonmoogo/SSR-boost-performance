import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../page'
import Appbar from '../_components/Appbar'
import config from '../_config/config'
 
describe('Appbar', () => {
  it('appbar rendering',async ()=>{

    /* 헤더가 잘 표시 되는지 검사 */
    const appbarComponent = render(<Appbar/>);
    const appbarContent = appbarComponent.findByRole('appbar-content');
    const data = (await appbarContent).textContent;
    expect(data === config.name);

  })
})