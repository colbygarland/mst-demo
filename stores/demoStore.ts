import { types } from 'mobx-state-tree';

export const DemoStore = types
  .model('DemoStore')
  .props({
    counterValue: types.number,
  })
  .actions((self) => ({
    setCounterValue: (value: number): void => {
      self.counterValue = value;
    },
  }));

export const DemoStoreInitialState = {
  counterValue: 0,
};
