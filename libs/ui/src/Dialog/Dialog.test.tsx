import { PropsWithTestWrapper, TestWrapper } from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Dialog, DialogClose, DialogContent, DialogTrigger } from './Dialog';

const renderComponent = ({ wrapperProps }: PropsWithTestWrapper = {}) => {
  return render(
    <TestWrapper {...wrapperProps}>
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          Content
          <DialogClose>Close</DialogClose>
        </DialogContent>
      </Dialog>
    </TestWrapper>
  );
};

describe('<Dialog />', () => {
  it('should open and hide dialog', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(screen.queryByText('Content')).toBeNull();

    userEvent.click(await screen.findByText('Open'));

    expect(await screen.findByText('Content')).toBeInTheDocument();

    userEvent.click(await screen.findByText('Close'));

    expect(screen.queryByText('Content')).toBeNull();
  });
});
