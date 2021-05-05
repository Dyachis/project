import { storage, firestore } from '../firebase'

export default function publishEstate(e, user){
  let rentObj = {}
  const file = e.target.file.files[0]

  const storageRef = storage.ref(file.name)
  storageRef
    .put(file)
    .then(async () => {
      const url = await storageRef.getDownloadURL()
      const obj = {
        area: e.target.area.value,
        bads: e.target.bads.value,
        baths: e.target.baths.value,
        email: user.email,
        img: [url,],
        name: e.target.name.value,
        price: e.target.price.value,
        uid: user.uid,
        owner: `${user.name} ${user.lastname}`
      };
      rentObj = obj
    }).then(() => {
      const estateRef = firestore
      .collection('rent-estates').doc()
      estateRef.set(rentObj)
    })
}
