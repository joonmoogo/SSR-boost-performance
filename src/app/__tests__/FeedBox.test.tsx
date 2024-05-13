import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../page'
import FeedBox from '../_components/FeedBox'
import { feedDTO } from '@/types/DTO'
import { getAllFeeds } from '../_util/customFetch'


describe('FeedBox', () => {
    it('Mobile Rendering', async () => {
        const item: feedDTO = {
            id:0,
            title:'test',
            content:'test',
            created_at:'test',
            personal_id:0,
            image_url:'test'
        }
        const role = 'feed-box'
        const feedBoxMobileComponent = render(<FeedBox viewport={'mobile'} item={item} />)
        // const feedBoxDesktopComponent= render(<FeedBox viewport={'desktop'} item={item} />)

        const feedBoxMobile = feedBoxMobileComponent.getByRole(role);
        // const feedBoxDesktop = feedBoxDesktopComponent.getByRole(role);

        const a = window.getComputedStyle(feedBoxMobile);
        // const b = window.getComputedStyle(feedBoxDesktop);
        expect(a.display =='block');
    })

    it('Desktop Rendering',()=>{
        const item: feedDTO = {
            id:0,
            title:'test',
            content:'test',
            created_at:'test',
            personal_id:0,
            image_url:'test'
        }
        const role = 'feed-box'
        // const feedBoxMobileComponent = render(<FeedBox viewport={'mobile'} item={item} />)
        const feedBoxDesktopComponent= render(<FeedBox viewport={'desktop'} item={item} />)

        // const feedBoxMobile = feedBoxMobileComponent.getByRole(role);
        const feedBoxDesktop = feedBoxDesktopComponent.getByRole(role);

        // const a = window.getComputedStyle(feedBoxMobile);
        const b = window.getComputedStyle(feedBoxDesktop);
        
        expect(b.display =='block');
    })
})