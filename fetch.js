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
