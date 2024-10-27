const contentRow = document.querySelector(".main-row");
const ingRow = document.querySelector(".ing-row");
const searchRow = document.querySelector(".row-search");
const contactRow = document.querySelector(".contact-row");

//* SIDE NAV
const sideNavLength = $(".nav-details").outerWidth();
$(".all-nav").css({ left: `-${sideNavLength}px` });
$(".open-menu").on("click", function () {
  $(".all-nav").animate({ left: "0px" });
  $(".open-menu").addClass("d-none");
  $(".close-menu").removeClass("d-none");
});

$(".close-menu").on("click", function () {
  $(".all-nav").animate({ left: `-${sideNavLength}px` });
  $(".close-menu").addClass("d-none");
  $(".open-menu").removeClass("d-none");
});

//* SHOW MEALS

async function getMeals() {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=`
  );
  let data = await response.json();
  for (i = 0; i < data.meals.length; i++) {
    contentRow.innerHTML += `<div class="col-md-3">
              <div class="inner-main overflow-hidden rounded-2 position-relative">
                <img
                  src="${data.meals[i].strMealThumb}"
                  class="w-100"
                />
                <div class="overlay d-flex align-items-center">
                  <h3 class="fs-3 fw-semibold ps-3">${data.meals[i].strMeal}</h3>
                </div>
              </div>
            </div>`;
  }
}
getMeals();

$("main .main-row").on("click", async function (e) {
  let selectedMeal = e.target.textContent.replace(/\s+/g, "");
  contentRow.innerHTML = "";
  searchRow.innerHTML = "";
  contactRow.innerHTML = "";
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${selectedMeal}`
  );
  let data = await response.json();
  ingRow.innerHTML = `<div class="col-md-4">
              <div class="inner overflow-hidden">
                <img src="${
                  data.meals[0].strMealThumb
                }" class="w-100 rounded-3" />
                <h3 class="text-light my-2 fs-2">${data.meals[0].strMeal}</h3>
              </div>
            </div>
            <div class="col-md-8 text-light">
              <h3>Instructions</h3>
              <p>
              ${data.meals[0].strInstructions}
              </p>
              <h3>Area : ${data.meals[0].strArea}</h3>
              <h3>Category : ${data.meals[0].strCategory}</h3>
              <h3>Recipes :</h3>
              <div class="recipes-details d-flex gap-2 mt-3 flex-wrap">
                <h4 class="alert alert-info fs-6 p-2 fw-normal">
                ${data.meals[0].strMeasure1 + data.meals[0].strIngredient1}</h4>
                <h4 class="alert alert-info fs-6 p-2 fw-normal">${
                  data.meals[0].strMeasure2 + data.meals[0].strIngredient2
                }</h4>
                <h4 class="alert alert-info fs-6 p-2 fw-normal">${
                  data.meals[0].strMeasure3 + data.meals[0].strIngredient3
                }</h4>
                <h4 class="alert alert-info fs-6 p-2 fw-normal">${
                  data.meals[0].strMeasure4 + data.meals[0].strIngredient4
                }</h4>
                <h4 class="alert alert-info fs-6 p-2 fw-normal">${
                  data.meals[0].strMeasure5 + data.meals[0].strIngredient5
                }</h4>
                <h4 class="alert alert-info fs-6 p-2 fw-normal">${
                  data.meals[0].strMeasure6 + data.meals[0].strIngredient6
                }</h4>
                <h4 class="alert alert-info fs-6 p-2 fw-normal">${
                  data.meals[0].strMeasure7 + data.meals[0].strIngredient7
                }</h4>
                <h4 class="alert alert-info fs-6 p-2 fw-normal">${
                  data.meals[0].strMeasure8 + data.meals[0].strIngredient8
                }</h4>
                <h4 class="alert alert-info fs-6 p-2 fw-normal">${
                  data.meals[0].strMeasure9 + data.meals[0].strIngredient9
                }</h4>
                <h4 class="alert alert-info fs-6 p-2 fw-normal">${
                  data.meals[0].strMeasure10 + data.meals[0].strIngredient10
                }</h4>
                <h4 class="alert alert-info fs-6 p-2 fw-normal">${
                  data.meals[0].strMeasure11 + data.meals[0].strIngredient11
                }</h4>
                <h4 class="alert alert-info fs-6 p-2 fw-normal">${
                  data.meals[0].strMeasure12 + data.meals[0].strIngredient12
                }</h4>
                <h4 class="alert alert-info fs-6 p-2 fw-normal">${
                  data.meals[0].strMeasure13 + data.meals[0].strIngredient13
                }</h4>
                <h4 class="alert alert-info fs-6 p-2 fw-normal">${
                  data.meals[0].strMeasure13 + data.meals[0].strIngredient14
                }</h4>
                <h4 class="alert alert-info fs-6 p-2 fw-normal">${
                  data.meals[0].strMeasure13 + data.meals[0].strIngredient15
                }</h4>
                <h4 class="alert alert-info fs-6 p-2 fw-normal">${
                  data.meals[0].strMeasure13 + data.meals[0].strIngredient16
                }</h4>
                <h4 class="alert alert-info fs-6 p-2 fw-normal">${
                  data.meals[0].strMeasure13 + data.meals[0].strIngredient17
                }</h4>
                <h4 class="alert alert-info fs-6 p-2 fw-normal">${
                  data.meals[0].strMeasure13 + data.meals[0].strIngredient18
                }</h4>
                <h4 class="alert alert-info fs-6 p-2 fw-normal">${
                  data.meals[0].strMeasure13 + data.meals[0].strIngredient19
                }</h4>
                <h4 class="alert alert-info fs-6 p-2 fw-normal">${
                  data.meals[0].strMeasure13 + data.meals[0].strIngredient20
                }</h4>

              </div>
              <h3 class="my-3">Tags :</h3>
              <div class="tags-btns d-flex gap-2">
                <a href="${
                  data.meals[0].strSource
                }" target="_blank" class="btn btn-success">Source</a>
                <a href="${
                  data.meals[0].strYoutube
                }" target="_blank" class="btn btn-danger">Youtube</a>
              </div>
            </div>`;
});

//* SEARCH

$("#search").on("click", function () {
  ingRow.innerHTML = "";
  contactRow.innerHTML = "";
  contentRow.innerHTML = "";
  searchRow.innerHTML = `<form class="d-flex gap-2 w-75 justify-content-center mx-auto">
          <input
            placeholder="Search by Name"
            class="search-meal form-control form-1"
          />
          <input
            placeholder="Search by First Letter"
            class="first-letter form-control form-1"
            maxlength="1"
          />
        </form>`;
  let searchInput = document.querySelector(".search-meal");
  searchInput.addEventListener("input", function () {
    displayMeals(searchInput.value);
  });

  let letterInput = document.querySelector(".first-letter");
  letterInput.addEventListener("input", function () {
    displayMealsLetter(letterInput.value);
  });
});

async function displayMeals(search) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
  );
  let data = await response.json();
  contentRow.innerHTML = "";
  for (i = 0; i < data.meals.length; i++) {
    contentRow.innerHTML += `<div class="col-md-3">
              <div class="inner-main overflow-hidden rounded-2 position-relative">
                <img
                  src="${data.meals[i].strMealThumb}"
                  class="w-100"
                />
                <div class="overlay d-flex align-items-center">
                  <h3 class="fs-3 fw-semibold ps-3">${data.meals[i].strMeal}</h3>
                </div>
              </div>
            </div>`;
  }
}

//* SEARCH LETTER

async function displayMealsLetter(letter) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
  );
  let data = await response.json();
  if (letter == "") {
    contentRow.innerHTML = "";
  } else {
    for (i = 0; i < data.meals.length; i++) {
      contentRow.innerHTML += `<div class="col-md-3">
              <div class="inner-main overflow-hidden rounded-2 position-relative">
                <img
                  src="${data.meals[i].strMealThumb}"
                  class="w-100"
                />
                <div class="overlay d-flex align-items-center">
                  <h3 class="fs-3 fw-semibold ps-3">${data.meals[i].strMeal}</h3>
                </div>
              </div>
            </div>`;
    }
  }
}

//* CATEGORIES

$("#categories").on("click", async function () {
  contentRow.innerHTML = "";
  contactRow.innerHTML = "";
  ingRow.innerHTML = "";
  searchRow.innerHTML = "";
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  let data = await response.json();
  for (i = 0; i < data.categories.length; i++) {
    contentRow.innerHTML += `<div class="col-md-3">
    <div class="inner-main overflow-hidden rounded-2 position-relative">
      <img
        src="${data.categories[i].strCategoryThumb}"
        class="w-100"
      />
      <div class="overlay d-flex align-items-center flex-column">
        <h3 class="fs-3 fw-semibold ps-3">${data.categories[i].strCategory}</h3>
        <p class="p-3">${data.categories[i].strCategoryDescription.slice(
          0,
          100
        )}</p>
      </div>
    </div>
  </div>`;
  }
  console.log(data);
});

//* AREA

$("#area").on("click", async function () {
  contentRow.innerHTML = "";
  contactRow.innerHTML = "";
  ingRow.innerHTML = "";
  searchRow.innerHTML = "";
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
  );
  let data = await response.json();
  for (i = 0; i < data.meals.length; i++) {
    contentRow.innerHTML += `<div class="col-md-3 col-sm-4 d-flex justify-content-center">
      <div class="inner-main">
        <i class="fa-solid fa-house-laptop fa-4x text-light"></i>
        <h3 class="fs-3 fw-semibold text-light">${data.meals[i].strArea}</h3>
      </div>
    </div>`;
  }
  console.log(data);
});

//* INGREDIENTS

$("#ingredients").on("click", async function () {
  contentRow.innerHTML = "";
  ingRow.innerHTML = "";
  contactRow.innerHTML = "";
  searchRow.innerHTML = "";
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
  );
  let data = await response.json();
  for (i = 0; i < 20; i++) {
    contentRow.innerHTML += `<div class="col-md-3 col-sm-4 d-flex justify-content-center">
        <div class="inner-main d-flex flex-column justify-content-between align-items-center">
          <i class="fa-solid fa-drumstick-bite fa-4x text-light"></i>
          <h3 class="fs-3 fw-semibold text-light">${
            data.meals[i].strIngredient
          }</h3>
          <p class="text-light text-center">${data.meals[
            i
          ].strDescription.slice(0, 50)}</p>
        </div>
      </div>`;
  }
  console.log(data);
});

//* CONTACT US

$("#contact").on("click", function () {
  contentRow.innerHTML = "";
  ingRow.innerHTML = "";
  searchRow.innerHTML = "";
  contactRow.innerHTML = `<div class="col-md-6">
            <div class="inner d-flex flex-column gap-3">
              <input
                type="text"
                placeholder="Enter Your Name"
                class="form-control"
              />
              <input
                type="tel"
                placeholder="Enter Your Phone"
                class="form-control"
              />
              <input
                type="password"
                placeholder="Enter Your Password"
                class="form-control"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="inner d-flex flex-column gap-3">
              <input
                type="email"
                placeholder="Enter Your Email"
                class="form-control"
              />
              <input
                type="number"
                placeholder="Enter Your Age"
                class="form-control"
              />
              <input
                type="password"
                placeholder="Repassword"
                class="form-control"
              />
            </div>
          </div>
          <button class="btn btn-danger mt-3 mx-auto submit">Submit</button>
    `;
});
