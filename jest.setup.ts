import { getMockT } from './src/shared/utils/testUtils';

jest.mock('react-i18next', () => ({
    useTranslation: () => ({
      t: getMockT()
    })
}));
