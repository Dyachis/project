import { firestore } from '../firebase'

export default async function editUserInfo(userObj) {
  try {
    const userRef = firestore.collection('users').where('email', '==', userObj.email)
    await userRef.update(userObj)
  } catch (e) {
    console.error(e)
  } finally {
    console.log('done');
  }
}