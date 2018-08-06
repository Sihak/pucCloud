export function pushToArray(docs) {
    const data = []
    docs.forEach(d => {
      const all=d.data();
      data.push({
        id: d.id,...all
      })
    })
    return data;
  }

  export function pushToObject(doc){
    return {...doc.data()}
  }