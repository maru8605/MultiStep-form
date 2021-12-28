import { atom, selector } from 'recoil';
import { pages } from '../data/form';

export const page = atom({
  key: 'page',
  default: 0,
});

export const values = atom({
  key: 'values',
  default: {},
});

export const allValues = selector({
  key: 'all-values',
  get: ({ get }) => {
    const valuesList = get(values);
    return pages.flatMap((page) => {
      return [
        ...page.map((question) => {
          let value = valuesList[question.id];
          if (!value) {
            if (question.options) {
              value = question.options[0].id;
            } else {
              value = undefined;
            }
          }
          return {
            id: question.id,
            value: value,
          };
        }),
      ];
    });
  },
});

export const allValuesObj = selector({
  key: 'all-values-obj',
  get: ({ get }) => {
    const allValuesList = get(allValues);
    return allValuesList.reduce((out, value) => {
      out[value.id] = value;
      return out;
    }, {});
  },
});

export const allValuesObjSend = selector({
  key: 'all-values-obj-send',
  get: ({ get }) => {
    const allValuesList = get(allValues);
    return allValuesList.reduce((out, value) => {
      if (value.value !== undefined) {
        out[value.id] = value.value;
      }
      return out;
    }, {});
  },
});
