import renderer from 'react-test-renderer'
import { withRouter } from '../../tests/utils';
import { Route } from 'react-router-dom';
import SearchBar from '../SearchBar';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('SearchBar', () => {
  it('renders corrertly', () => {
    const component = renderer.create(
      withRouter(<Route path='/' element={<SearchBar />} />)
    );
    expect(component.toJSON()).toMatchSnapshot();
  })

  it('renders with keyword correctly', async () => {
    render(
      withRouter(<Route path='/:keyword' element={<SearchBar />} />, '/bts')
    )
    expect(screen.getByDisplayValue('bts')).toBeInTheDocument()
  })

  it('navigates to results page on search button click', () => {
    const searchKeyword = 'fake-keyword';

    render(
      withRouter(
        <>
          <Route path='/home' element={<SearchBar />} />
          <Route path={`/videos/${searchKeyword}`} element={<p>{`Search result for ${searchKeyword}`}</p>} />
        </>,
        '/home'
      )
    )

    const searchButton = screen.getByRole('button');
    const searchInput = screen.getByRole('textbox');

    userEvent.type(searchInput, searchKeyword);
    userEvent.click(searchButton);

    expect(
      screen.getByText(`Search result for ${searchKeyword}`)
    ).toBeInTheDocument();
  })
})