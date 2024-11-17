import { db } from '../../src/firebaseConfig';
import './styles.css';
import { collection, getDocs } from 'firebase/firestore';

async function fetchCodingActivity() {
    const ref = collection(db, 'codingActivities');
    const snapshot = await getDocs(ref);
    snapshot.forEach(doc => console.log(doc.data()));
}
fetchCodingActivity();
