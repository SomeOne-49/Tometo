flatpickr("#date", {});

//TODO : List Of Header :

const open = document.querySelector("header .container .fa-align-justify"),
  close = document.querySelector("header .container > .fa-xmark"),
  list = document.querySelector("header .container ul");

open.onclick = function (e) {
  e.stopPropagation();
  opeClo(open, close, list);
};

close.onclick = function () {
  opeClo(close, open, list);
};

document.body.onclick = function (e) {
  e.stopPropagation();
  if (list.classList.contains("show")) {
    if (e.target != list) {
      //* you can remove "e.stopPropagation" from "open.onclick = ..." and add this "&& e.target !== open" to the condition, Which returns the same result
      opeClo(close, open, list);
    }
  }
};

//TODO : Set Background Of Main Section :

const main = document.querySelector("main");

setInterval(() => {
  let random = Math.ceil(Math.random() * 3);
  main.style.backgroundImage = `url(img/main${random}.jpg)`;
}, 10000);

//TODO : Set Styles Of Settings Box :

const gear = document.querySelector("main .gear");
const settings = document.querySelector("main .settings");
const images = document.querySelectorAll("main .box img");
const spans = document.querySelectorAll("main .box span");
gear.onclick = () => {
  gear.children[0].classList.toggle("fa-spin");
  gear.classList.toggle("translate");
  settings.classList.toggle("show");
};
toggle(images);
toggle(spans);

images.forEach((ele) => {
  ele.addEventListener("click", () => {
    document.body.style.backgroundImage = `url(${ele.getAttribute("src")})`;
    console.log(ele.getAttribute("src"));
    localStorage.setItem("background", ele.getAttribute("src"));
  });
});

spans.forEach((ele) => {
  ele.addEventListener("click", () => {
    document.documentElement.style.setProperty("--main", ele.dataset.color);
    localStorage.setItem("mainColor", ele.dataset.color);
  });
});

//TODO : Set Type Of View :

const big = document.querySelector(".big-box"),
  header = document.querySelector("header"),
  checkBox = document.querySelector("[type='checkbox']"),
  switcH = document.querySelector(".settings .switch");

checkBox.addEventListener("click", () => {
  if (checkBox.checked) {
    //? Why doesn't first click work when page reloads, for testing try "console.log" ??!
    switcH.classList.add("checked");
    big.style.maxWidth = `1170px`;
    header.style.maxWidth = `1170px`;
    localStorage.setItem("switch", true);
    // console.log(`ye`)
  } else {
    switcH.classList.remove("checked");
    big.style.maxWidth = `100%`;
    header.style.maxWidth = `100%`;
    localStorage.setItem("switch", false);
    // console.log(`Noo`)
  }
});

//TODO : Reset :

const reset = document.querySelector("main .settings .reset");

reset.onclick = () => {
  localStorage.removeItem("switch");
  localStorage.removeItem("mainColor");
  localStorage.removeItem("background");
  location.reload();
};

//* *************! General Events : !*************!/

//! 1 : Window Events :

window.onload = () => {
  if (localStorage.getItem("switch") == "true") {
    checkBox.checked = true;
    switcH.classList.add("checked");
    big.style.maxWidth = `1170px`;
    header.style.maxWidth = `1170px`;
  }
  if (localStorage.getItem("background")) {
    document.body.style.backgroundImage = `url(${localStorage.getItem(
      "background"
    )}`;
    images.forEach((ele) => {
      if (ele.getAttribute("src") == localStorage.getItem("background")) {
        images.forEach((e) => {
          e.classList.remove("active");
          ele.classList.add("active");
        });
      }
    });
  }
  if (localStorage.getItem("mainColor")) {
    document.documentElement.style.setProperty(
      "--main",
      localStorage.getItem("mainColor")
    );
    spans.forEach((ele) => {
      if (ele.dataset.color == localStorage.getItem("mainColor")) {
        spans.forEach((e) => {
          e.classList.remove("active");
          ele.classList.add("active");
        });
      }
    });
  }
};

window.onscroll = () => {
  if (this.scrollY >= 400) {
    header.style.backgroundColor = "rgba(255, 255, 255, 1)";
  } else {
    header.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
  }
};

//* *************! Functions : !*************!/

//! 1 : Open & Close The List :

function opeClo(close, open, ele) {
  close.classList.remove("show");
  open.classList.add("show");
  ele.classList.toggle("show");
}

//! 2 : Toggle Function :

function toggle(ele) {
  ele.forEach((e) => {
    e.onclick = () => {
      ele.forEach((el) => {
        el.classList.remove("active");
        e.classList.add("active");
      });
    };
  });
}

//// Set 'active' To Element witch has attributs equal The LocalStorage value :

// function setActive(ele, val, key) {
//   ele.forEach((el) => {
//     if (val == localStorage.getItem(key)) {
//       ele.forEach((e) => {
//         e.classList.remove('active');
//         el.classList.add('active');
//       })
//     }
//   })
// }


let a = "1,2,3,EE,1,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let d = a.split(",").filter((e) => {
  return isNaN(e) ? e : "";
});

console.log(d);


