import { db } from '../utils/firebase';
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
} from 'firebase/firestore';

const appController = {
    getCollectionData: async (collectionName) => {
        const routesCollectionRef = collection(db, collectionName);
        const data = await getDocs(routesCollectionRef);
        const result = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        return result;
    },
};

export default appController;
