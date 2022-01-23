import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

// export the mocked instance above
module.exports = jest.requireMock('react-i18next');
