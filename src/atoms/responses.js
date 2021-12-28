import { FirebaseDB } from '../config/firebase';
import { selector } from 'recoil';
import { collection, getDocs } from '@firebase/firestore';

export const getComments = selector({
  key: 'getComments',
  get: async ({ get }) => {
    // Use it!
    const responsesRef = collection(FirebaseDB, 'responses');
    const responsesSnapshot = await getDocs(responsesRef);
    const allResponses = responsesSnapshot.docs.flatMap((doc) => {
      const responsesData = doc.data();
      return responsesData.comentarios && responsesData.comentarios !== ''
        ? [
            {
              id: doc.id,
              comment: responsesData.comentarios,
            },
          ]
        : [];
    });
    return allResponses;
  },
});

export const getFeedback = selector({
  key: 'getFeedback',
  get: async ({ get }) => {
    // Use it!
    const responsesRef = collection(FirebaseDB, 'responses');
    const responsesSnapshot = await getDocs(responsesRef);
    const allResponses = responsesSnapshot.docs.flatMap((doc) => {
      const responsesData = doc.data();
      return responsesData.reporteQueja && responsesData.reporteQueja !== ''
        ? [
            {
              id: doc.id,
              feedback: responsesData.reporteQueja,
            },
          ]
        : [];
    });
    return allResponses;
  },
});

export const getResponses = selector({
  key: 'getResponses',
  get: async ({ get }) => {
    // Use it!
    const responsesRef = collection(FirebaseDB, 'responses');
    const responsesSnapshot = await getDocs(responsesRef);
    const allResponses = responsesSnapshot.docs.map((doc) => {
      const responsesData = doc.data();
      return {
        id: doc.id,
        ...responsesData,
      };
    });
    return allResponses;
  },
});

export const getDataCharts = selector({
  key: 'getDataCharts',
  get: ({ get }) => {
    const responses = get(getResponses);
    return responses.reduce((out, response) => {
      const keys = Object.keys(response);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const value = response[keys[i]];
        if (out[key] === undefined) {
          out[key] = {};
        }
        if (out[key][value]) {
          out[key][value] += 1;
        } else {
          out[key][value] = 1;
        }
      }
      return out;
    }, {});
  },
});
