jest.mock('react-i18next', () => ({
    useTranslation: () => ({
      t: (key: string, props: object) => `${key}_${JSON.stringify(props)}`
    })
}));
