let elList = document.querySelector('.card__list');
let elLatest = document.querySelector('#card__latest');
let elFan = document.querySelector('#mov__fantasy')
let elSelYear = document.querySelector('.select__year')
let elSelRating = document.querySelector('.select__rating')
let elSelCategory = document.querySelector('.select__category')
let elSearchInp = document.querySelector('.search__wrap')
let elSearchBtn = document.querySelector('.search__btn')
let elPartList = document.querySelector('.btn__list')
let elDrama = document.querySelector('#mov__drama')
let elFam = document.querySelector('#mov__fam')
const smallPartMov = movies.splice(0,8)
const partMovie = movies

// all
function mapper(data){
  elList.innerHTML = ""
  data.forEach((item) => {
    let newli = document.createElement('li');
    newli.innerHTML = `
      <div class="card bgcolor d-flex" style="width: 16rem;">
        <img class="mov__img" src="https://i.ytimg.com/vi/${item.ytid}/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLA4AcC3LdnjO2ggn7ItqTllzojfrA" class="card-img-top" alt="">
        <div class="card-body text__color">
        <h6 class="mov__genre">${item.Categories}</h6>
        <h5 class="card-title">${item.Title.length > 20 ? item.Title.toString().split("").splice(0,20).join("") + "..." : item.Title}</h5>
        <p class="card-text">${item.movie_year}</p>
        <p class="card-text">Rating: ${item.imdb_rating}</p>
          <a href="https://www.youtube.com/watch?v=${item.ytid}" target="_blank" class="btn btn-dark">Watch movie</a>
        </div>
      </div>
    `;
    elList.appendChild(newli);
  });
}
mapper(smallPartMov)


// latest trending
const filYear = partMovie.filter((movie) => movie.movie_year == 2018).slice(0, 8);
filYear.forEach((item) => {
  let newli = document.createElement('li');
  newli.innerHTML = `
    <div class="card bgcolor d-flex" style="width: 16rem;">
    <img class="mov__img" src="https://i.ytimg.com/vi/${item.ytid}/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLA4AcC3LdnjO2ggn7ItqTllzojfrA" class="card-img-top" alt="">
    <div class="card-body text__color">
    <h6 class="mov__genre">${item.Categories}</h6>
    <h5 class="card-title">${item.Title.length > 20 ? item.Title.toString().split("").splice(0,20).join("") + "..." : item.Title}</h5>
    <p class="card-text">${item.movie_year}</p>
    <p class="card-text">Rating: ${item.imdb_rating}</p>
      <a href="https://www.youtube.com/watch?v=${item.ytid}" target="_blank" class="btn btn-dark">Watch movie</a>
    </div>
  </div>
  `;
  elLatest.appendChild(newli);
});



// Fantasy
const filFantasy = partMovie.filter((movie) => movie.Categories.includes('Fantasy') == true).slice(0, 8);

filFantasy.forEach((item) => {
  let newliFan = document.createElement('li');
  newliFan.innerHTML = `
    <div class="card bgcolor d-flex" style="width: 16rem;">
      <img class="mov__img" src="https://i.ytimg.com/vi/${item.ytid}/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLA4AcC3LdnjO2ggn7ItqTllzojfrA" class="card-img-top" alt="">
      <div class="card-body text__color">
      <h6 class="mov__genre">${item.Categories}</h6>
      <h5 class="card-title">${item.Title.length > 20 ? item.Title.toString().split("").splice(0,20).join("") + "..." : item.Title}</h5>
      <p class="card-text">${item.movie_year}</p>
      <p class="card-text">Rating: ${item.imdb_rating}</p>
        <a href="https://www.youtube.com/watch?v=${item.ytid}" target="_blank" class="btn btn-dark">Watch movie</a>
      </div>
    </div>
  `;
  elFan.appendChild(newliFan);
});


// drama
const filDrama = partMovie.filter((movie) => movie.Categories.includes('Drama') == true).slice(0, 8);

filDrama.forEach((item) => {
  let newliDrama = document.createElement('li');
  newliDrama.innerHTML = `
    <div class="card bgcolor d-flex" style="width: 16rem;">
      <img class="mov__img" src="https://i.ytimg.com/vi/${item.ytid}/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLA4AcC3LdnjO2ggn7ItqTllzojfrA" class="card-img-top" alt="">
      <div class="card-body text__color">
      <h6 class="mov__genre">${item.Categories}</h6>
      <h5 class="card-title">${item.Title.length > 20 ? item.Title.toString().split("").splice(0,20).join("") + "..." : item.Title}</h5>
      <p class="card-text">${item.movie_year}</p>
      <p class="card-text">Rating: ${item.imdb_rating}</p>
        <a href="https://www.youtube.com/watch?v=${item.ytid}" target="_blank" class="btn btn-dark">Watch movie</a>
      </div>
    </div>
  `;
  elDrama.appendChild(newliDrama);
});


// family
const filFam = partMovie.filter((movie) => movie.Categories.includes('Family') == true).slice(0, 8);

filFam.forEach((item) => {
  let newliFam = document.createElement('li');
  newliFam.innerHTML = `
    <div class="card bgcolor d-flex" style="width: 16rem;">
      <img class="mov__img" src="https://i.ytimg.com/vi/${item.ytid}/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLA4AcC3LdnjO2ggn7ItqTllzojfrA" class="card-img-top" alt="">
      <div class="card-body text__color">
      <h6 class="mov__genre">${item.Categories}</h6>
      <h5 class="card-title">${item.Title.length > 20 ? item.Title.toString().split("").splice(0,20).join("") + "..." : item.Title}</h5>
      <p class="card-text">${item.movie_year}</p>
      <p class="card-text">Rating: ${item.imdb_rating}</p>
        <a href="https://www.youtube.com/watch?v=${item.ytid}" target="_blank" class="btn btn-dark">Watch movie</a>
      </div>
    </div>
  `;
  elFam.appendChild(newliFam);
});

// year
elSelYear.addEventListener('change', (e)=>{
  if(elSelYear.value == 'old'){
    console.log(partMovie.sort((a, b)=> a.movie_year - b.movie_year));
    mapper(partMovie.sort((a, b)=> a.movie_year - b.movie_year))
  }else{
    console.log(partMovie.sort((a, b)=> b.movie_year - a.movie_year));
    mapper(partMovie.sort((a, b)=> b.movie_year - a.movie_year))
  }
})


// rating
elSelRating.addEventListener('change', (e)=>{
  if(elSelRating.value == 'min'){
    console.log(partMovie.sort((a, b)=> a.imdb_rating - b.imdb_rating));
    mapper(partMovie.sort((a, b)=> a.imdb_rating - b.imdb_rating))
  }else{
    console.log(partMovie.sort((a, b)=> b.imdb_rating - a.imdb_rating));
    mapper(partMovie.sort((a, b)=> b.imdb_rating - a.imdb_rating))
  }
})


// category
const categoryArr = []
partMovie.forEach((item)=>{
  if(categoryArr.includes(item.Categories) == false){
    categoryArr.push(item.Categories);
  }
})

categoryArr.forEach((item)=>{
  let newOption = document.createElement('option')
  newOption.textContent = item
  newOption.value = item
  elSelCategory.appendChild(newOption)
})


elSelCategory.addEventListener('change', (e)=>{
  console.log(elSelCategory.value);
  mapper(partMovie.filter((item)=> item.Categories == elSelCategory.value));
})


// search
elSearchBtn.addEventListener('click', ()=>{
  console.log(elSearchInp.value);
  mapper(partMovie.filter((item)=>
    item.Title.toString().toLowerCase().includes(elSearchInp.value.toLowerCase()) == true
  ));

})


// pagination
// let longPart = partMovie.length / 50
// console.log(longPart);


// for (let i = 1; i <= longPart; i++){
//     console.log(i);
//     let newBtn = document.createElement('button')
//     newBtn.textContent = i
//     newBtn.classList.add('part__btn')
//     elPartList.appendChild(newBtn)
//   }  

// let elPartBtns = document.querySelectorAll('.part__btn')
// console.log(elPartBtns);
// elPartBtns.forEach((btn)=>{
//   btn.addEventListener('click', (e)=>{
//     mapper(partMovie.slice((e.target.textContent -1) * 50,e.target.textContent  * 50));
//     elPartBtns.splice(e.target.textContent * 10)
//   })
// })
