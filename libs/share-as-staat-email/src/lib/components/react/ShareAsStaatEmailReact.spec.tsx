import { render } from '@testing-library/react';

import ShareAsStaatEmailReact from './ShareAsStaatEmailReact';

describe('ShareAsStaatEmailReact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShareAsStaatEmailReact body='' recipients='' subject='' />);
    expect(baseElement).toBeTruthy();
  });
});
