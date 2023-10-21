jest.mock('react-i18next', () => ({
    Trans: ({ children }) => (Array.isArray(children) ? renderNodes(children) : renderNodes([children])),
    useTranslation: () => ({
        t: (key, ...params) => `${key}_${JSON.stringify(params)}`,
    }),
}));
