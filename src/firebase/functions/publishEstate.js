import { storage, firestore } from '../firebase'

export default function publishEstate(e, profile, latlng) {
  let rentObj = {}
  const file = e.target.file.files[0]

  const storageRef = storage.ref(file.name)
  storageRef
    .put(file)
    .then(async () => {
      const url = await storageRef.getDownloadURL()
      const obj = {
        latlng: { lat: latlng.lat, lng: latlng.lng },
        city: e.target.city.value,
        type: e.target.type.value || 'apt',
        area: e.target.area.value,
        rooms: e.target.rooms.value,
        baths: e.target.baths.value,
        email: profile.email,
        img: [url],
        name: e.target.name.value,
        price: e.target.price.value,
        uid: profile.id,
        owner: `${profile.name} ${profile.lastname}`,
      }
      rentObj = obj
    })
    .then(() => {
      const estateRef = firestore.collection('rent-estates').doc()
      estateRef.set(rentObj)
    })
}
