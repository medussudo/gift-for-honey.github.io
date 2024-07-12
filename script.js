const qs = (selector) => document.querySelector(selector);
const question = qs(".question");
const gif = qs(".gif");
const [yesBtn, noBtn] = [".yes-btn", ".no-btn"].map(qs);

const handleYesClick = () => {
  question.innerHTML = "Yayyy. Te voi musca la fiecare date! :3.";
  gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";

  // Remove the 'mouseover' event listener from noBtn
  noBtn.removeEventListener("mouseover", handleNoMouseOver);

  // Remove the noBtn from the DOM
  noBtn.remove();

  // Define predefined romantic date ideas
  const dateIdeas = [
    "Sa gatim impreuna",
    "Sa ne plimbam seara sub clar de luna precum Eminescu",
    "Sa ne intrecem cu bicicletele",
    "Sa vizitam un muzeu",
    "Sa calarim amandoi pe un ponei :>",
    "Sa stam noi singur intr-un hotel in alt oras O.O",
    "Sa mergem cu barca sa vedem pe Ariel :3 (te bat daca te indragostesti de ea)",
    "Sa ne cumparam carti reciproc (esti obligat sa citesti cartea data de mine! >:( )",
    "Sa exploram munttiiii si vailleee",
    "Sa te bat la games board >:))))",
    "Sa mergem cu balonul cald. Poate vedem raiul :3",
    "Sa mergem la KARTINGGGGGG BABY",
    "Sa vedem un film. Putem avea sex dupa?",
    "Exista elicoptere in Cluj?",
    "Vrei gradina botanica? Sa ma ceri de iubita? *rolling eyes* [dont do this]",
    "Sa avem un picniiccc. Fara golden shower",


    // Add more date ideas as needed
  ];

  // Create and style a new button for Let's Go!
  const letsGoBtn = document.createElement("button");
  letsGoBtn.textContent = "Click me pt idei";
  letsGoBtn.classList.add("letsgo-btn"); // You can add a class for styling if needed
  letsGoBtn.style.position = "absolute";

  // Adjust the left position based on screen width
  if (window.innerWidth <= 800) {
    letsGoBtn.style.left = "95%";
  } else {
    letsGoBtn.style.left = "63%";
  }

  letsGoBtn.style.transform = "translate(-50%, -50%)";
  letsGoBtn.style.width = "200px"; // Adjust the width as needed

  // Add a click event listener to prompt the user with random romantic date ideas
  letsGoBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * dateIdeas.length);
    const selectedDateIdea = dateIdeas[randomIndex];

    alert(`Ce parere ai de aceasta idee? :  ${selectedDateIdea}`);
  });

  // Replace yesBtn with the new letsGoBtn
  yesBtn.replaceWith(letsGoBtn);
};

const handleNoMouseOver = () => {
  const { width, height } = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - width;
  const maxY = window.innerHeight - height;

  noBtn.style.left = `${Math.floor(Math.random() * maxX)}px`;
  noBtn.style.top = `${Math.floor(Math.random() * maxY)}px`;
};

yesBtn.addEventListener("click", handleYesClick);
noBtn.addEventListener("mouseover", handleNoMouseOver);
