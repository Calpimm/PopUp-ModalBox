const section = document.querySelector("section"),
hireBtn = section.querySelector("#hireBtn"),
closeBtn = section.querySelectorAll("#close"),
textArea = section.querySelector("textarea");

hireBtn.addEventListener("click" , () =>{
section.classList.add("show");
});

closeBtn.forEach(cBtn => {
cBtn.addEventListener("click" , ()=>{
    section.classList.remove("show");
    textArea.value = "";
});
});

const cookiess = document.querySelector(".cookieshow")
const cookiesss = document.querySelector(".buttonn")
const cookiessss = document.querySelector(".button")

cookiess.addEventListener("click" , () =>{
  cookieBox.classList.add("show");
});

cookiesss.addEventListener("click" , () =>{
  cookieBox.classList.remove("show");
});

cookiessss.addEventListener("click" , () =>{
  cookieBox.classList.remove("show");
});


const cookieBox = document.querySelector(".wrapper"),
  buttons = document.querySelectorAll(".button");

const executeCodes = () => {
  //if cookie contains codinglab it will be returned and below of this code will not run
  if (document.cookie.includes("codinglab")) return;
  cookieBox.classList.add("show");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");

      //if button has acceptBtn id
      if (button.id == "acceptBtn") {
        //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
        document.cookie = "cookieBy= codinglab; max-age=" + 60 * 60 * 24 * 30;
      }
    });
  });
};

//executeCodes function will be called on webpage load
window.addEventListener("load", executeCodes);






// Confirmation Modal
const shareButton = document.getElementById("shareButton");
const confirmationModal = document.getElementById("confirmationModal");
const closeModal = document.getElementById("closeModal");
const cancelButton = document.getElementById("cancelButton");

shareButton.addEventListener("click", () => {
  confirmationModal.classList.add("active");
  confirmationModal.classList.add("open");
  confirmationModal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  confirmationModal.classList.add("slideOut");
  setTimeout(() => {
    confirmationModal.classList.remove("active", "slideOut");
    confirmationModal.style.display = "none";
  }, 500); // Wait for the animation to complete (500ms)
});

cancelButton.addEventListener("click", () => {
  confirmationModal.classList.add("slideOut");
  setTimeout(() => {
    confirmationModal.classList.remove("open", "slideOut");
    confirmationModal.style.display = "none";
  }, 500); // Wait for the animation to complete (300ms)
});

window.addEventListener("click", (event) => {
  if (event.target === confirmationModal) {
    confirmationModal.classList.remove("open");
    setTimeout(() => {
      confirmationModal.classList.remove("active");
      confirmationModal.style.display = "none";
    }, 500); // Wait for the animation to complete (500ms)
  }
});


// Subscription Modal
const subscribeButton = document.getElementById("subscribeButton");
const subscriptionModal = document.getElementById("subscriptionModal");
const closeSubscriptionModal = document.getElementById("closeSubscriptionModal");

subscribeButton.addEventListener("click", () => {
  subscriptionModal.style.display = "block";
  subscriptionModal.classList.add("active");
  subscriptionModal.classList.add("open");
});

closeSubscriptionModal.addEventListener("click", () => {
	subscriptionModal.classList.add("slideIns");
  setTimeout(() => {
    subscriptionModal.classList.remove("active", "slideIns");
    subscriptionModal.style.display = "none";
  }, 500); 

});

window.addEventListener("click", (event) => {
  if (event.target === subscriptionModal) {
    subscriptionModal.classList.remove("open");
    setTimeout(() => {
      subscriptionModal.classList.remove("active");
      subscriptionModal.style.display = "none";
    }, 500); 
  }
});