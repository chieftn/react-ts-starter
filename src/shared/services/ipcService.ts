export const sayHello = async (): Promise<string> => {
    // tslint:disable-next-line: no-any
    const electron = (window as any).electron;

    // tslint:disable-next-line: no-any
    const result: string = await (electron as any).sayHello();

    // const result = await global.ipcRenderer.invoke('hello');

    return result;
};

export const login = async (): Promise<void> => {
    // tslint:disable-next-line: no-console
    console.log('calling login');

    // tslint:disable-next-line: no-any
    const electron = (window as any).electron;

    // tslint:disable-next-line: no-any
    await (electron as any).login();
};

export const logout = async (): Promise<void> => {
    // tslint:disable-next-line: no-any
    const electron = (window as any).electron;

    // tslint:disable-next-line: no-any
    await (electron as any).logout();
};

export const getProfileToken = async (): Promise<string> => {
    // tslint:disable-next-line: no-any
    const electron = (window as any).electron;

    // tslint:disable-next-line: no-any
    const result = await (electron as any).getProfileToken();
    return result;
};

// tslint:disable-next-line: no-any
export const getAccount = async (): Promise<any> => {
    // tslint:disable-next-line: no-console
    console.log('calling getAccount');

    // tslint:disable-next-line: no-any
    const electron = (window as any).electron;

    // tslint:disable-next-line: no-any
    const account = await (electron as any).getAccount();

    // tslint:disable-next-line: no-console
    console.log('account: ' + JSON.stringify(account));

    return account;
};
