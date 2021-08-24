const final = [
  "Archit Chibbar",
  "Aaditya Jain",
  "Hritika Sharma",
  "Paras Dandwani",
  "Shraddha Bisen",
  "Mudit Gokhale",
  "Pankaj Gaur",
  "Tanishq Singhai",
  "Nitesh Sharma",
  "Lalit Singh Rajput",
  "Siddharth Pankar",
  "Princy Jain",
  "Satwik Sharma",
  "Utkarsh Shrivastava",
  "Shanul Nema",
  "Mohammad Anas",
  "dummy",
  "dummy",
  "dummy",
];
const prefinal = [
  "Pratham Khare",
  "Abhishek Sinha",
  "Manaswi Sathe",
  "Aman Malviya",
  "Sakshi Talreja",
  "Kalyan Roy",
  "Imrah Ravish",
  "Satyam Chaturvedi",
  "Riya Jain",
  "Akriti Yadav",
  "Shivi Jain",
  "Arnav Kulkarni",
  "Rajat Kumar",
  "Rajesh Kumar",
  "Sambhav Bhatt",
  "Yash Gupta",
  "Chirag Gupta",
  "Aman Gupta",
  "Aditya Dhakad",
];
const colors = ["#011627", "#4b2977", "#771543", "#0e5e83"];
console.log(prefinal.length);
let cat = true;
window.addEventListener("load", (e) => {

  document.querySelectorAll(".parent").forEach((p) => {
    let rand = Math.floor(Math.random() * 4);
    let shade = document.createElement("div");
    shade.classList.add("shade");
    shade.style.backgroundColor = colors[rand];
    p.appendChild(shade);
  });
  makeUp("Prefinal", prefinal);
  document.getElementById("toggler").addEventListener("click", (e) => {
    document.querySelectorAll(".info").forEach((info) => {
      info.remove();
    });
    document.querySelectorAll(".shade").forEach((s) => {
      s.style.transform = "translateY(0)";
      s.style.opacity = "0.6";
    });
    if (cat) {
      makeUp("Final", final);
      document.querySelector("#team-head > h1 > span").innerText =
        "final Years";
      cat = false;
    } else {
      makeUp("Prefinal", prefinal);
      document.querySelector("#team-head > h1 > span").innerText =
        "Pre-final Years";
      cat = true;
    }
  });
  document.querySelectorAll(".parent").forEach((parent) => {
    parent.classList.add("shadow-lg");
  });
});

function makeUp(category, arr) {
  if (category == "Final") {
    document.getElementById("_17").style.display = "none";
    document.getElementById("_18").style.display = "none";
    document.getElementById("_19").style.display = "none";
  } else {
    document.getElementById("_17").style.display = "block";
    document.getElementById("_18").style.display = "block";
    document.getElementById("_19").style.display = "block";
  }
  let i = 0;
  document.querySelectorAll(".parent > img").forEach((img) => {
    img.setAttribute(
      "src",
      "./" +
        category +
        "/" +
        arr[i].toLowerCase().split(" ").join("%20") +
        ".png"
    );
    i++;
  });

  document.querySelectorAll(".parent").forEach((parent) => {
    parent.addEventListener("click", (e) => {
      document.querySelectorAll(".info").forEach((info) => {
        info.remove();
      });
      document.querySelectorAll(".shade").forEach((s) => {
        s.style.transform = "translateY(0)";
        s.style.opacity = "0.6";
      });
      parent.lastChild.style.transform = "translateY(70%)";
      parent.scrollIntoView({
        inline: "center",
        block: "center",
        behavior: "smooth",
      });

      let p = document.createElement("p");
      p.classList.add("info");
      parent.lastChild.appendChild(p);
      parent.lastChild.style.opacity = "0.9";
      let name = parent.firstChild.nextSibling.src
        .split("/")
        .pop()
        .split(".")[0]
        .split("%20")
        .join(" ");
      for (let nm of arr) {
        if (nm.toLowerCase() === name) {
          p.innerText = nm;
          break;
        }
      }
      p.style.transform = "translateY(0)";
    });
  });
}
