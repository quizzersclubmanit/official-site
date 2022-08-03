const final = [
  ["Pratham Khare","Final Year"],
  ["Abhishek Sinha","Final Year"],
  ["Manaswi Sathe","Vice President"],
  ["Aman Malviya","Final Year"],
  ["Sakshi Talreja","Final Year"],
  ["Kalyan Roy","Final Year"],
  ["Imrah Ravish","Final Year"],
  ["Satyam Chaturvedi","President"],
  ["Riya Jain","Final Year"],
  ["Akriti Yadav","Final Year"],
  ["Shivi Jain","Final Year"],
  ["Yash Gupta","Final Year"],
  ["Rajat Kumar","Final Year"],
  ["Rajesh Kumar","Final Year"],
  ["Sambhav Bhatt","Final Year"],
  ["Arnav Kulkarni","Final Year"],
  ["Chirag Gupta","Final Year"],
  ["Aman Gupta","Final Year"],
  ["Aditya Dhakad","Final Year"],
  ["Parv Vijayvargiya","Final Year"],
  ["Deepansh Gupta","Final Year"],
  ["Divyanshu Jojaware","Final Year"],
  ["Shagun Mittal","General Secretary"],
  ["Nishita Goyal","Final Year"],
];
const prefinal = [
  ["Ashmit Prasad","Video Head"],
  ["Kushal Jain","Video Head"],
  ["Bhartesh bhaskar","Digital Marketing Head"],
  ["Mariette Rose George","Quizzing Head"],
  ["Arya Sharma","Social Media Head"],
  ["Kiran Tiwari","Web Head"],
  ["kshitiz Dashottar","Social Media Head"],
  ["Chirayu sood","Co-coordinator"],
  ["Sanidhya Khandelwal","Quizzing Head"],
  ["Ayush Ram Tiwari","Public Relations Head"],
  ["Harithapriya Vijaye","Co-coordinator"],
  ["Kushal Wanjare","Co-coordinator"],
  ["Banoth Virat","Photography Head"],
  ["Aditi Singh","Designing Head"],
  ["Gargi Deori","Content Writing Head"],
  ["Ritik Kumar","Web Head"],
  ["Arushi Kamle","Event Managers head"],
  ["Yashika Singh","Event Managers head"],
  ["Yusuf Saifee","Designing Head"],
  ["Shreya Shah","Content Writing Head"],
  ["Vidhi Jain","Creative Head"],
  ["Anshul Garg","Sponsorship Head"],
  ["Shubham Singh","Public Relations Head"],
  ["Satviki Shukla","Blogging Site Head"],
  ["Keshav Gupta","Sponsorship Head"],
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
  document.getElementById("toogler").addEventListener("click", (e) => {
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
  // if (category == "Final") {
  //   document.getElementById("_17").style.display = "none";
  //   document.getElementById("_18").style.display = "none";
  //   document.getElementById("_19").style.display = "none";
  //   document.getElementById("_20").style.display = "none";
  //   document.getElementById("_21").style.display = "none";
  // } else {
  //   document.getElementById("_17").style.display = "block";
  //   document.getElementById("_18").style.display = "block";
  //   document.getElementById("_19").style.display = "block";
  //   document.getElementById("_20").style.display = "block";
  //   document.getElementById("_21").style.display = "block";
  // }
  let i = 0;
  document.querySelectorAll(".parent > img").forEach((img) => {
    img.setAttribute(
      "src",
      "./Assets/" +
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
