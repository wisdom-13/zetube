import { Route } from 'react-router-dom'
import { whitAllcontexts, withRouter } from '../../tests/utils'
import { render, screen, waitFor } from '@testing-library/react'
import ChannelInfo from '../ChannelInfo'

describe('ChannelInfo', () => {
  const fakeYoutube = {
    channelImageURL: jest.fn(),
  }

  afterEach(() => fakeYoutube.channelImageURL.mockReset());

  it('renders correctly', async () => {
    fakeYoutube.channelImageURL.mockImplementation(() => 'url');
    render(whitAllcontexts(withRouter(
      <Route path='/' elemnet={<ChannelInfo id='id' name='channel' />} />
    ),
      fakeYoutube
    ))
    await waitFor(() => expect(screen.getByText('channel')));
  })
})