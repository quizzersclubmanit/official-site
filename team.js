const final = [
  ["Archit Chibbar","Final Year"],
  ["Aaditya Jain","Final Year"],
  ["Hritika Sharma","Final Year"],
  ["Paras Dandwani","Final Year"],
  ["Shraddha Bisen","Final Year"],
  ["Mudit Gokhale","Final Year"],
  ["Pankaj Gaur","Final Year"],
  ["Tanishq Singhai","Final Year"],
  ["Nitesh Sharma","Final Year"],
  ["Lalit Singh Rajput","Final Year"],
  ["Siddharth Pankar","Final Year"],
  ["Princy Jain","Final Year"],
  ["Satwik Sharma","Final Year"],
  ["Utkarsh Shrivastava","Final Year"],
  ["Shanul Nema","Final Year"],
  ["Mohammad Anas","Final Year"],
  ["dummy","Final Year"],
  ["dummy","Final Year"],
  ["dummy","Final Year"],
  ["dummy","Final Year"],
  ["dummy","Final Year"],
  ["dummy","Final Year"],
  ["dummy","Final Year"],
  ["dummy","Final Year"]
];
const prefinal = [
  ["Pratham Khare","Video Head"],
  ["Abhishek Sinha","Co-cordinator"],
  ["Manaswi Sathe","Quizzing Head"],
  ["Aman Malviya","Web Head"],
  ["Sakshi Talreja","Social Media Head"],
  ["Kalyan Roy","Quizzing Head"],
  ["Imrah Ravish","Promotion Head"],
  ["Satyam Chaturvedi","Co-coordinator"],
  ["Riya Jain","Photography Head"],
  ["Akriti Yadav","Designing Head"],
  ["Shivi Jain","Content Head"],
  ["Yash Gupta","Web Head"],
  ["Rajat Kumar","Core team"],
  ["Rajesh Kumar","Content Head"],
  ["Sambhav Bhatt","Sponsorship Head"],
  ["Arnav Kulkarni","Core team"],
  ["Chirag Gupta","Core team"],
  ["Aman Gupta","Core team"],
  ["Aditya Dhakad","Core team"],
  ["Parv Vijayvargiya","Promotion Head"],
  ["Deepansh Gupta","Core team"],
  ["Divyanshu Jojaware","Core team"],
  ["Shagun Mittal","Sponsorship Head"],
  ["Nishita Goyal","Core team"]
];


const colors = ["#011627", "#4b2977", "#771543", "#0e5e83"];
let cat = true;
window.addEventListener("load", (e) => {
  document.getElementById("team").scrollLeft+=410;
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
        "final year";
      cat = false;
    } else {
      makeUp("Prefinal", prefinal);
      document.querySelector("#team-head > h1 > span").innerText =
        "pre-final year";
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
    document.getElementById("_20").style.display = "none";
    document.getElementById("_21").style.display = "none";
    document.getElementById("_22").style.display = "none";
    document.getElementById("_23").style.display = "none";
    document.getElementById("_24").style.display = "none";
  } else {
    document.getElementById("_17").style.display = "block";
    document.getElementById("_18").style.display = "block";
    document.getElementById("_19").style.display = "block";
    document.getElementById("_20").style.display = "block";
    document.getElementById("_21").style.display = "block";
    document.getElementById("_22").style.display = "block";
    document.getElementById("_23").style.display = "block";
    document.getElementById("_24").style.display = "block";
  }
  let i = 0;
  document.querySelectorAll(".parent > img").forEach((img) => {
    img.setAttribute(
      "src",
      "./" +
        category +
        "/" +
        arr[i][0].toLowerCase().split(" ").join("%20") +
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
      parent.lastChild.style.transform = "translateY(65%)";
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
        if (nm[0].toLowerCase() === name) {
          p.innerHTML = nm[0]+'<br>'+nm[1];
          break;
        }
      }
      p.style.transform = "translateY(0)";
    });
  });
}
