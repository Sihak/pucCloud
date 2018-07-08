export function pushToArray(docs) {
    const data = []
    docs.forEach(d => {
      const all=d.data();
      data.push({
        id: d.key
        ,...all
      })
    })
    return data;
  }