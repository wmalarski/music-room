import { defaultAction, defaultMessage } from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentProps } from 'react';
import { ReactionsView, ReactionsViewData } from './ReactionsView';

type Props = ComponentProps<typeof ReactionsView>;

const defaultProps: Props = {
  action: defaultAction,
  message: defaultMessage,
  onChange: () => null,
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(<ReactionsView {...defaultProps} {...props} />);
};

describe('<ReactionsView />', () => {
  it('should dislike message after dislike click', async () => {
    expect.hasAssertions();

    const onChange = jest.fn((data: ReactionsViewData) => {
      expect(data.dislikeAt).toBeDefined();
    });

    renderComponent({
      onChange,
    });

    userEvent.click(await screen.findByText('dislikeMessage'));

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('should like message after like click', async () => {
    expect.hasAssertions();

    const onChange = jest.fn((data: ReactionsViewData) => {
      expect(data.likeAt).toBeDefined();
    });

    renderComponent({
      onChange,
    });

    userEvent.click(await screen.findByText('likeMessage'));

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('should not receive action after change when no message', async () => {
    expect.hasAssertions();

    const onChange = jest.fn();

    renderComponent({
      onChange,
      message: undefined,
    });

    userEvent.click(await screen.findByText('likeMessage'));
    userEvent.click(await screen.findByText('dislikeMessage'));

    expect(onChange).toHaveBeenCalledTimes(0);
  });

  it('should show removeLikeMessage and remove like', async () => {
    expect.hasAssertions();

    const onChange = jest.fn((data: ReactionsViewData) => {
      expect(data.likeAt).toBeNull();
    });

    renderComponent({
      onChange,
      action: {
        ...defaultAction,
        like_at: new Date().toISOString(),
      },
    });

    userEvent.click(await screen.findByText('removeLikeMessage'));

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('should show removeDislikeMessage and remove dislike', async () => {
    expect.hasAssertions();

    const onChange = jest.fn((data: ReactionsViewData) => {
      expect(data.dislikeAt).toBeNull();
    });

    renderComponent({
      onChange,
      action: {
        ...defaultAction,
        dislike_at: new Date().toISOString(),
      },
    });

    userEvent.click(await screen.findByText('removeDislikeMessage'));

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
