import { TestWrapper } from '@music-room/util-tests';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentProps } from 'react';
import { ChatInput } from './ChatInput';

type Props = ComponentProps<typeof ChatInput>;

const View: Props['View'] = ({ query, message, onQueryChange, onSubmit }) => (
  <>
    <button onClick={() => onSubmit({ url: 'URL' })}>Submit</button>
    <p>{query}</p>
    <p>{message?.data.url}</p>
    <input
      placeholder="Query"
      value={query}
      onChange={(event) => onQueryChange(event.target.value)}
    />
  </>
);

const defaultProps: Props = {
  View,
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(
    <TestWrapper>
      <ChatInput {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe('<ChatInput />', () => {
  it('should change query', async () => {
    expect.hasAssertions();

    renderComponent();

    userEvent.type(await screen.findByPlaceholderText('Query'), 'query');

    expect(await screen.findByText('query')).toBeInTheDocument();
  });

  it('should add message', async () => {
    expect.hasAssertions();

    renderComponent();

    userEvent.click(await screen.findByText('Submit'));

    await waitFor(async () =>
      expect(await screen.findByText('URL')).toBeInTheDocument()
    );

    expect(await screen.findByText('URL')).toBeInTheDocument();
  });
});
