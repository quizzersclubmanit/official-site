const final = [
  ["",""],
  ["Sanidhya khandelwal","Vice President"],
  ["Kiran Tiwari","Secretary (Tech & Dig Aff)"],
  ["Ayush Ram Tiwari","Secretary (External Relation)"],
  ["Virat Banoth","Secretary (Treasury)"],
  ["",""],
  ["",""],
  ["Kushal Wanjare","President"],
  ["Kushal Jain","Secretary(Log & Op.)"],
  ["",""],
  ["",""],
  ["",""],
  ["Mariette Rose George","Secretary (Media Rel.& com)"],
  ["",""],
  ["Shanul Nema","Final Year"],
  ["",""],
  ["dummy","Final Year"],
  ["dummy","Final Year"],
  ["dummy","Final Year"],
  ["dummy","Final Year"],
  ["dummy","Final Year"],
  ["dummy","Final Year"],
  ["dummy","Final Year"],
  ["dummy","Final Year"],
  ["dummy","Final Year"],
  ["dummy","Final Year"],
  ["dummy","Final Year"],
  ["dummy","Final Year"],
];
const prefinal = [
  ["Dheeraj Mandvi","Video Editing Head"],
  ["Adarsh Dinkar","Co-coordinator"],
  ["Akash Goyal","Web Head"],
  ["Abhay Bhadoriya","Web Head"],
  ["Sameer Bajpai","Social Media Head"],
  ["Harshita Nehra","Quizzing Head"],
  ["Suhani Jain","Public Relations Head"],
  ["Nishchal Prajapati","Co-coordinator"],
  ["Kyama Sreevathsav","Photography Head"],
  ["Akshat Jain","Designing Head"],
  ["Emilin Feba","Content Head"],
  ["Anurag Mishra","Quizzing Head"],
  ["Swapnil Tripathi","Designing Head"],
  ["Vishnu Vardhan","Content Head"],
  ["Thrishul Reddy","Sponsorship Head"],
  ["Sreeram Reddy","Sponsorship Head"],
  ["Rohaan khan","Event Managment Head"],
  ["Ette Divya","Event Managment Head"],
  ["Abhishek Meena","Head of Execution"],
  ["Aryan Tripathi","Public Relations Head"],
  ["Om Krishna","Creative Head"],
  ["Tulsi Kumari","Creative Head"],
  ["Kushagra Rajput","Video Editing Head"],
  ["Amanda Sequeira","Blogging Site Head"],
  ["Vaddamani Chethan","Blogging Site Head"],
  ["Tanvi Koli","Social Media Head"],
  ["Ayushi Gupta","Digital Marketing Head"],
  ["Priyanshu singh","Digital Marketing Head"],
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
  if (category == "Final") {
    // document.getElementById("_1").style.display = "none";
    // document.getElementById("_5").style.display = "none";
    // document.getElementById("_6").style.display = "none";
    // document.getElementById("_7").style.display = "none";
    // document.getElementById("_10").style.display = "none";
    // document.getElementById("_11").style.display = "none";
    // document.getElementById("_12").style.display = "none";
    document.getElementById("_15").style.display = "none";
    document.getElementById("_16").style.display = "none";
    document.getElementById("_17").style.display = "none";
    document.getElementById("_18").style.display = "none";
    document.getElementById("_19").style.display = "none";
    document.getElementById("_20").style.display = "none";
    document.getElementById("_21").style.display = "none";
    document.getElementById("_22").style.display = "none";
    document.getElementById("_23").style.display = "none";
    document.getElementById("_24").style.display = "none";
    document.getElementById("_25").style.display = "none";
    document.getElementById("_26").style.display = "none";
    document.getElementById("_27").style.display = "none";
    document.getElementById("_28").style.display = "none";
  } else {
   
    //  document.getElementById("_1").style.display = "block";
    // document.getElementById("_5").style.display = "block";
    // document.getElementById("_6").style.display = "block";
    // document.getElementById("_7").style.display = "block";
    // document.getElementById("_10").style.display = "block";
    // document.getElementById("_11").style.display = "block";
    // document.getElementById("_12").style.display = "block";
    document.getElementById("_15").style.display = "block";
    document.getElementById("_16").style.display = "block";
    document.getElementById("_17").style.display = "block";
    document.getElementById("_18").style.display = "block";
    document.getElementById("_19").style.display = "block";
    document.getElementById("_20").style.display = "block";
    document.getElementById("_21").style.display = "block";
    document.getElementById("_22").style.display = "block";
    document.getElementById("_23").style.display = "block";
    document.getElementById("_24").style.display = "block";
    document.getElementById("_25").style.display = "block";
    document.getElementById("_26").style.display = "block";
    document.getElementById("_27").style.display = "block";
    document.getElementById("_28").style.display = "block";
  }
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
