import { useContext, createContext } from 'react';
import { types, Instance } from 'mobx-state-tree';
import { DemoStore, DemoStoreInitialState } from './demoStore';
import { EmployeeStore, EmployeeStoreInitialState } from './employeeStore';
import { QuoteStore } from './quoteStore';

export const rootStore = types
  .model({
    demoStore: DemoStore,
    employeeStore: EmployeeStore,
    quoteStore: QuoteStore,
  })
  .create({
    demoStore: DemoStoreInitialState,
    employeeStore: EmployeeStoreInitialState,
    quoteStore: {},
  });

const RootStoreContext = createContext<null | Instance<typeof rootStore>>(null);
export const StoreProvider = RootStoreContext.Provider;

export function useStore() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider');
  }
  return store;
}
