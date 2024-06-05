const myAll = (promises) => {
  const res = [];
  let resolvedPromises = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then((val) => {
        res[index] = val;
        resolvedPromises++;
        if (resolvedPromises === promises.length) {
          resolve(res);
        }
      }).catch(err => {
        reject(err);
      })
    })
  })
}

const myAllSettled = (promises) => {
  const res = [];
  let resolvedPromisesCount = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(value => {
        res[index] = {
          status: 'fulfilled',
          value
        }
      }).catch(reason => {
        res[index] = {
          status: 'rejected',
          reason
        }
      }).finally(() => {
        resolvedPromisesCount++;
        if (resolvedPromisesCount === promises.length) {
          resolve(res);
        }
      })
    })
  })
}

const p1 = new Promise((resolve, reject) => resolve('p1'));
const p2 = new Promise((resolve, reject) => reject('p2'));
const p3 = new Promise((resolve, reject) => resolve('p3'));
const p4 = 3;

const promises = [p1, p2, p3, p4];

const res = myAll(promises);
res.then(val => console.log(val)).catch(err => console.log(err));

const result = myAllSettled(promises);
result.then(val => console.log(val)).catch(err => console.log(err));
