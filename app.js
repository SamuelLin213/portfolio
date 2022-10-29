(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

const handleClick = (event) => {
    document.querySelector(".active").classList.remove("active");
    document.getElementById(event).classList.add("active");
}

function filterSelection(c) {
    var x;
    x = document.querySelectorAll(".portfolio-item");
    if (c == "all")
        c = "";
    Array.from(x).forEach(item => {
        removeActiveClass(item, "show");
        if (item.className.indexOf(c) > -1)
            addActiveClass(item, "show");
    });
};
function addActiveClass(ele, name) {
    var i, arr1, arr2;
    arr1 = ele.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
       if (arr1.indexOf(arr2[i]) == -1) {
          ele.className += " " + arr2[i];
       }
    }
};
function removeActiveClass(ele, name) {
    var i, arr1, arr2;
    arr1 = ele.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
       while (arr1.indexOf(arr2[i]) > -1) {
          arr1.splice(arr1.indexOf(arr2[i]), 1);
       }
    }
    ele.className = arr1.join(" ");
};

var btns = document.querySelector(".filters").getElementsByTagName("button");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("activeFilter");
        current[0].className = current[0].className.replace(" activeFilter", "");
        this.className += " activeFilter";
    });
}

filterSelection("all");

var resumeLink = "https://www.dropbox.com/s/1im40kvt3xzqvuu/Ying-Jia%28Samuel%29_Lin_Resume.pdf?dl=0";
var resumeBtn = document.querySelectorAll(".btn-con > a");

resumeBtn.forEach((item) => {
    item.href = resumeLink;
});
