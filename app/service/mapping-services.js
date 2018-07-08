import _ from 'lodash'
export function pushToGroupArray(docs, groupBy, orderBy) {
  let data = []
  docs.forEach(d => {
    const all = d.data();
    data.push({
      id: d.id
      , ...all
    })
  })
  data = _.uniqBy(data, groupBy);
  data = _.orderBy(data, [orderBy])
  return data;
}

export function pushToArray(docs){
  const data = []
  docs.forEach(d => {
    const all = d.data();
    data.push({
      id: d.id
      , ...all
    })
  })
  return data;
}