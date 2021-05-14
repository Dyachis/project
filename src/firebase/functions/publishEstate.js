import { storage, firestore } from '../firebase'

export default async function publishEstate(e, profile, latlng) {
  try {
    const files = e.target.file.files
    await uploadFiles(files)
    const urls = await getLinks(files)
    const rentObj = createEstateObj(e, profile, urls, latlng)
    const estateRef = firestore.collection('rent-estates').doc()
    estateRef.set(rentObj)
  } catch (e) {
    console.error('publishEstate function', e)
  }
}

function createEstateObj(e, profile, urls, latlng) {
  const obj = {
    latlng: { lat: latlng.lat, lng: latlng.lng },
    city: e.target.city.value,
    area: e.target.area.value,
    bads: e.target.bads.value,
    baths: e.target.baths.value,
    email: profile.email,
    name: e.target.name.value,
    price: e.target.price.value,
    uid: profile.id,
    img: urls,
    owner: `${profile.name} ${profile.lastname}`,
  }
  return obj
}

async function uploadFiles(files) {
  return new Promise((res) => {
    for (let i = 0; i < files.length; i++) {
      const storageRef = storage.ref(files[i].name)
      storageRef.put(files[i])
    }
    res('uploaded')
  })
}

async function getLinks(files) {
  const urls = []
  for (let i = 0; i < files.length; i++) {
    const storageRef = storage.ref(files[i].name)
    const url =  await storageRef.getDownloadURL()
    urls.push(url)
  }
  return urls
}
