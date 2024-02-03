//sarqel klass private methodov
// private methodin avelacnel fetch
// stexcel array method vory group kani stcac datan
//

class Singleton {
  #fetchData(url) {
    return fetch(url)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.groupBy("userId"));
      });
  }
  showData(url) {
    return this.#fetchData(url);
  }
}

// const res = arr.reduce((acc, item) => {
//   if (acc[item.l]) {
//     acc[item.l] = [...acc[item.l], item];
//   } else {
//     acc[item.l] = [item];
//   }
//   return acc;
// }, {});

// console.log(res);

// let arr = [
//   { v: "dan", l: "dan" },
//   { v: "goq", l: "goq" },
//   { v: "mis", l: "dan" },
//   { v: "dan", l: "dan" },
// ];

Array.prototype.groupBy = function (id) {
  let newArr = this.reduce((acc, item) => {
    if (acc[item[id]]) {
      acc[item[id]] = [...acc[item[id]], item];
    } else {
      acc[item[id]] = [item];
    }
    return acc;
  }, {});
  return newArr;
};

console.log(arr.groupBy("v"));
