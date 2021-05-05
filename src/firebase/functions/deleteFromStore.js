import { firestore } from "../firebase";

export default function deleteFromStore(collection, doc){
  const ref = firestore.collection(collection).doc(doc)
  ref.delete().then((req) => {
    console.log(req);
  }).catch(err => console.error('Error in deleteFromStore function', err))
}