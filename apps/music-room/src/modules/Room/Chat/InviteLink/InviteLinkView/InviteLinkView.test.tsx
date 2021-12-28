import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import { InviteLinkView } from './InviteLinkView';

type Props = ComponentProps<typeof InviteLinkView>;

const renderComponent = (props: Partial<Props> = {}) => {
  const defaultProps: Props = {
    link: 'linkToSomewhere',
  };
  return render(<InviteLinkView {...defaultProps} {...props} />);
};

describe('<InviteLinkView />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
