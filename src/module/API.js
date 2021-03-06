const remoteURL = "http://localhost:8088"

export default {
  get(database, id) {
    return fetch(`${remoteURL}/${database}/${id}`).then(data => data.json())
  },
  getAll(database, queryParams) {
    // return fetch(`${remoteURL}/${database}`)
    let url = `${remoteURL}/${database}`
    if (queryParams) {
      url += `?${queryParams}`
    }
    return fetch(url)
    .then( data => data.json() )
  },
  delete (database, id) {
    return fetch(`${remoteURL}/${database}/${id}`, {
        method: "DELETE"
    })
    .then(data => data.json())
    .then(() => fetch(`${remoteURL}/${database}`))
    .then(data => data.json())
  },
  post (database, newData) {
    return fetch(`${remoteURL}/${database}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newData)
    }).then(data => data.json())
  },
  put(database, editedItem) {
    return fetch(`${remoteURL}/${database}/${editedItem.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedItem)
    }).then(data => data.json());
  }

}
