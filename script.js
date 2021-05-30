const products = ['first', 'second', 'third', 'fourth'];
const main = document.querySelector('main');

    for(let i = 0; i < products.length; i++){
    function fetchImg(){
      let url = `img/${products[i]}.jpg`;
      let myFetch = fetch(url);
      myFetch.then(response => {
        return response.blob();
      }).then(image => {
          let objectURL = URL.createObjectURL(image);
          return objectURL;
      }).then(obj => {
        show(obj);
      });
    };
  fetchImg();
  };

function show(objectURL){
  const section = document.createElement('section');
  const imagex = document.createElement('img');
  imagex.src = objectURL;
  main.appendChild(section);
  section.appendChild(imagex);
};
