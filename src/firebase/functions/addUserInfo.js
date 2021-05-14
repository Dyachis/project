import { storage, firestore } from '../firebase'


export default async function addUserInfo(value, img) {

  const link= 'https://firebasestorage.googleapis.com/v0/b/rentme-35bee.appspot.com/o/User_icon_2.svg.png?alt=media&token=c3790991-6d0b-4b4d-af80-beaf1af6f10f'
  let url
  
  try{
    if (img === null) {
      console.log('if');
      url = link
    } else {
      await uploadFile(img)
      console.log('else'); 
      url = await getLink(img)
    }
    const userObj = createUserInfoObj(value, url)
    const userRef = firestore.collection('users').doc()
    userRef.set(userObj)
  } catch(e){
    console.error(e)
  } 
}

function createUserInfoObj(value, url) {
  const obj = {
    email: value.email,
    info: value.info,
    lastname: value.lastname,
    name: value.name,
    profileImg: url
  }
  return obj
}

async function getLink(img) {
    const storageRef = storage.ref(img.name)
    const url =  await storageRef.getDownloadURL()
    return url
}

async function uploadFile(img) {
    const storageRef = storage.ref(img.name)
    storageRef.put(img)
}
