import type { TFunction } from 'i18next';

export const getMockT = (): TFunction => {
    return (...args) => args.map((s: any) => JSON.stringify(s)).reduce((p: string, c: string) => `${p} ${c}`);
};
