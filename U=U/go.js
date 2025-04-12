document.querySelector(".circle-btn").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
});

const mainTitle = document.querySelector(".main-title");
mainTitle.style.opacity = "0";
window.addEventListener("load", () => {
  mainTitle.style.transition = "opacity 1s ease-in";
  mainTitle.style.opacity = "1";
});

const menuButtons = document.querySelectorAll(".menu-btn");
menuButtons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "scale(1.1)";
  });
  button.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)";
  });
});

const subtitle = document.querySelector(".subtitle");
window.addEventListener("scroll", () => {
  const position = subtitle.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (position < screenPosition) {
    subtitle.style.opacity = "1";
  }
});

const detailsContainers = document.querySelectorAll(".details-container");

const detailsContent = [
  {
    header: "U=U: Undetectable = Untransmittable",
    content: `<p>A Revolution in HIV Care and Awareness Discover the empowering truth behind the <span class="em">U=U</span> message: When individuals living with HIV maintain an undetectable viral load (typically less than 200 copies/mL) through effective antiretroviral therapy <span class="em">(ART)</span>, they cannot transmit the virus <span class="em">sexually</span>. Maintaining an undetectable viral load requires consistent adherence to prescribed antiretroviral therapy (ART). It is important to remember that U=U refers specifically to sexual transmission. This groundbreaking scientific discovery is transforming lives and breaking the chains of stigma surrounding HIV.</p>`,
  },
  {
    header: "Why U=U Matters",
    content: `<ol>
                <li>Achieving an undetectable viral load means regaining control, confidence, and freedom.</li>
                <li>It’s not just life-changing—it’s a proven step toward ending the sexual transmission of HIV.</li>
                <li><span class="em">U=U</span> empowers individuals and fosters a world of acceptance and understanding.</li>
            </ol>`,
  },
  {
    header: "Spreading the U=U Message: Education and Empowerment",
    content: `<p>To truly spread the message of U=U : Undetectable = Untransmittable, it starts with education and empowerment. When people living with HIV maintain an undetectable viral load <span class="em">(less than 200 copies/mL)</span> through proper antiretroviral therapy <span class="em">(ART)</span>, they can't transmit the virus <span class="em">sexually</span>. This is life-changing and helps break the stigma surrounding HIV.</p>
              <p>This knowledge has the potential to transform lives, offering those affected by HIV the chance to redefine their relationships, build confidence, and dream of futures free from judgment or discrimination. It allows people to take control of their health while contributing to a broader vision of a world without HIV transmission. By understanding and embracing U=U, communities can break down barriers of stigma and fear, fostering a culture of inclusivity, compassion, and shared progress.</p>`,
  },
];

detailsContainers.forEach((container, index) => {
  const headerElement = container.querySelector(".details-header");
  const contentElement = container.querySelector(".details-content");

  if (detailsContent[index]) {
    headerElement.textContent = detailsContent[index].header;
    contentElement.innerHTML = detailsContent[index].content;
  }
});

document.querySelectorAll(".details-container").forEach((container) => {
  const header = container.querySelector(".details-header");
  const content = container.querySelector(".details-content");

  const button = document.createElement("span");
  button.className = "down";
  button.textContent = " ▲ ";
  header.appendChild(button);

  header.addEventListener("click", () => {
    const isVisible = content.style.display === "block";
    content.style.display = isVisible ? "none" : "block";

    button.textContent = isVisible ? " ▼ " : " ▲ ";
  });
});

function trackHashtag(hashtag) {
  localStorage.setItem("lastClickedHashtag", hashtag);
  document.getElementById(
    "lastClickedDisplay"
  ).textContent = `Last clicked: ${hashtag}`;
}


document.addEventListener("DOMContentLoaded", function () {
  const lastClicked = localStorage.getItem("lastClickedHashtag");
  if (lastClicked) {
    document.getElementById(
      "lastClickedDisplay"
    ).textContent = `Last clicked: ${lastClicked}`;
  }
});
