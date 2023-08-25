import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import VideosCard from '../VideosCard'
import { MemoryRouter, Route, Routes, useLocation } from 'react-router-dom'
import { formatAgo } from '../../util/date'
import { fakeVideo as video } from '../../tests/videos'
import { withRouter } from '../../tests/utils'

describe('VideoCard', () => {
  const { title, channelTitle, publishedAt, thumbnails } = video.snippet;

  it('renders video item', () => {
    render(
      withRouter(<Route path='/' element={<VideosCard video={video} />} />)
    )

    const image = screen.getByRole('img');
    expect(image.src).toBe(thumbnails.medium.url);
    expect(image.alt).toBe(title);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(channelTitle)).toBeInTheDocument();
    expect(screen.getByText(formatAgo(publishedAt, 'ko'))).toBeInTheDocument();
  })

  it('navigates to detailed video page with wideo state when clicked', () => {
    function LocationStateDisplay() {
      return <pre>{JSON.stringify(useLocation().state)}</pre>
    }
    render(
      withRouter(
        <>
          <Route path='/' element={<VideosCard video={video} />} />
          <Route path={`/videos/watch/${video.id}`} element={<LocationStateDisplay />} />
        </>
      )
    )

    const card = screen.getByRole('listitem');
    userEvent.click(card)

    expect(screen.getByText(JSON.stringify({ video }))).toBeInTheDocument();
  })
})