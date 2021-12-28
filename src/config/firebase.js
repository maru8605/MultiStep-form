import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBxIETSECIqrCO-p5W2ELEtqaR8YefvDfg',
  authDomain: 'multistep-form-70f8d.firebaseapp.com',
  projectId: 'multistep-form-70f8d',
  storageBucket: 'multistep-form-70f8d.appspot.com',
  messagingSenderId: '456843876595',
  appId: '1:456843876595:web:bc56db098c10cbf3733f86',
  measurementId: 'G-E6CENBH8F7',
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseDB = getFirestore(FirebaseApp);
export const FirebaseAuth = getAuth(FirebaseApp);
