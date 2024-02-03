//sarqel klass private methodov
// private methodin avelacnel fetch
// stexcel array method vory group kani stcac datan
//

class Singleton {
  #fetchData(url) {
    return fetch(url)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.groupBy("id"));
      });
  }
  showData(url) {
    return this.#fetchData(url);
  }
}

const instance = new Singleton();
instance.showData("https://jsonplaceholder.typicode.com/posts");

Array.prototype.groupBy = function (id) {
  console.log(this);
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
