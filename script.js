/* Jabu's T&H Website - Main CSS */

/* General styling */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, sans-serif;
    background-color: #FFFFFF;
    color: #171717;
    line-height: 1.7;
}

img {
    max-width: 100%;
    height: auto;
    display: block;
    border-radius: 10px;
}

/* Headings */
h1, h2, h3 {
    font-family: Georgia, serif;
    line-height: 1.3;
}

h1 {
    font-size: 2.8rem;
}

h2 {
    font-size: 2rem;
    margin-bottom: 18px;
}

h3 {
    font-size: 1.4rem;
    margin-bottom: 10px;
}

p {
    margin-bottom: 15px;
}

/* Header */
header {
    background-color: #171717;
    color: #FFFFFF;
    padding: 20px 6%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    border-bottom: 4px solid #C9A34A;
}

header h1 {
    color: #FFFFFF;
    font-size: 2rem;
}

/* Navigation menu */
nav ul {
    display: flex;
    list-style: none;
    gap: 15px;
    flex-wrap: wrap;
}

nav a {
    color: #FFFFFF;
    text-decoration: none;
    padding: 10px 14px;
    display: block;
    transition: 0.3s;
}

nav a:hover {
    background-color: #C9A34A;
    color: #171717;
    border-radius: 5px;
}

/* Main sections */
main {
    min-height: 65vh;
}

main > section {
    padding: 55px 8%;
}

main > section:nth-child(even) {
    background-color: #F3DDE3;
}

main > section:first-child {
    background-color: #E8D5C4;
}

/* Homepage hero */
main > section:first-child:has(img) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    flex-wrap: wrap;
}

main > section:first-child:has(img) img {
    width: min(100%, 460px);
    max-height: 390px;
    object-fit: cover;
    border: 5px solid #FFFFFF;
    box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}

/* Images */
section img {
    margin: 18px 0;
}

article img {
    width: 350px;
    max-height: 280px;
    object-fit: cover;
}

/* Gallery */
figure {
    display: inline-block;
    vertical-align: top;
    width: 30%;
    min-width: 220px;
    margin: 12px 1%;
    background-color: #FFFFFF;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 14px rgba(0,0,0,0.10);
}

figure img {
    width: 100%;
    height: 240px;
    object-fit: cover;
    margin: 0;
    border-radius: 0;
}

figcaption {
    text-align: center;
    padding: 12px;
    font-weight: bold;
}

/* Lists */
section ul {
    margin: 12px 0 15px 25px;
}

section li {
    margin-bottom: 8px;
}

/* Articles */
article {
    margin-bottom: 25px;
}

/* Links */
section a:not(nav a) {
    color: #765719;
    font-weight: bold;
    text-decoration: underline;
}

section a:not(nav a):hover {
    color: #171717;
}

/* Buttons */
button {
    background-color: #C9A34A;
    color: #171717;
    border: 2px solid #C9A34A;
    padding: 12px 25px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
}

button:hover {
    background-color: #171717;
    color: #FFFFFF;
}

/* Contact form */
form {
    max-width: 650px;
    background-color: #FFFFFF;
    padding: 28px;
    border-radius: 10px;
    border: 1px solid #E8D5C4;
    box-shadow: 0 5px 18px rgba(0,0,0,0.08);
}

form label {
    display: inline-block;
    margin-bottom: 6px;
    font-weight: bold;
}

form input,
form select,
form textarea {
    width: 100%;
    padding: 12px;
    margin-top: 5px;
    border: 1px solid #B9A99D;
    border-radius: 5px;
    font-size: 16px;
    background-color: #FFFFFF;
}

form textarea {
    resize: vertical;
}

form button {
    margin-top: 12px;
}

/* Footer */
footer {
    background-color: #171717;
    color: #FFFFFF;
    text-align: center;
    padding: 25px 15px;
    border-top: 4px solid #C9A34A;
}

footer p {
    margin: 5px 0;
}

/* Tablet responsiveness */
@media screen and (max-width: 768px) {

    header {
        flex-direction: column;
        text-align: center;
    }

    nav ul {
        justify-content: center;
        gap: 5px;
    }

    main > section {
        padding: 38px 6%;
    }

    main > section:first-child:has(img) {
        flex-direction: column;
        text-align: center;
    }

    figure {
        width: 46%;
        min-width: 200px;
    }
}

/* Mobile responsiveness */
@media screen and (max-width: 480px) {

    header h1 {
        font-size: 1.7rem;
    }

    nav ul {
        flex-direction: column;
        width: 100%;
    }

    nav li,
    nav a {
        width: 100%;
    }

    nav a {
        display: block;
    }

    main > section {
        padding: 30px 5%;
    }

    figure {
        display: block;
        width: 100%;
        margin: 15px 0;
    }

    form {
        padding: 18px;
    }
}/*
    Jabu's T&H Website
    WEDE5020 POE

    JavaScript functionality:
    1. Mobile navigation
    2. Active navigation links
    3. Contact form validation
*/

document.addEventListener("DOMContentLoaded", function () {

    // =================================
    // 1. MOBILE NAVIGATION
    // =================================

    const header = document.querySelector("header");
    const navigation = document.querySelector("header nav");

    if (header && navigation) {

        const menuButton = document.createElement("button");

        menuButton.type = "button";
        menuButton.className = "menu-toggle";
        menuButton.textContent = "Menu";

        menuButton.setAttribute("aria-expanded", "false");

        navigation.id = "main-navigation";

        header.insertBefore(menuButton, navigation);

        menuButton.addEventListener("click", function () {

            const isExpanded =
                menuButton.getAttribute("aria-expanded") === "true";

            menuButton.setAttribute(
                "aria-expanded",
                String(!isExpanded)
            );

            navigation.classList.toggle("nav-open", !isExpanded);

            menuButton.textContent = isExpanded ? "Menu" : "Close";

        });

        // Close menu after selecting a page.

        const links = navigation.querySelectorAll("a");

        links.forEach(function (link) {

            link.addEventListener("click", function () {

                navigation.classList.remove("nav-open");

                menuButton.setAttribute("aria-expanded", "false");

                menuButton.textContent = "Menu";

            });

        });

    }


    // =================================
    // 2. ACTIVE NAVIGATION LINK
    // =================================

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    const navigationLinks =
        document.querySelectorAll("header nav a");

    navigationLinks.forEach(function (link) {

        if (link.getAttribute("href") === currentPage) {

            link.setAttribute("aria-current", "page");

            link.classList.add("active-page");

        }

    });


    // =================================
    // 3. CONTACT FORM VALIDATION
    // =================================

    const contactForm = document.querySelector("form");

    if (contactForm) {

        const message = document.createElement("p");

        message.className = "form-message";

        message.setAttribute("role", "status");

        message.setAttribute("aria-live", "polite");

        contactForm.appendChild(message);


        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            // Check required fields.

            if (!contactForm.checkValidity()) {

                contactForm.reportValidity();

                message.textContent =
                    "Please complete all required fields correctly.";

                message.classList.add("error-message");

                return;

            }

            // Get customer's name.

            const nameField =
                contactForm.querySelector("#fullname, #name");

            const customerName = nameField
                ? nameField.value.trim()
                : "Customer";

            if (nameField && customerName.length < 2) {

                message.textContent =
                    "Please enter a valid name.";

                message.classList.add("error-message");

                nameField.focus();

                return;

            }

            // Display confirmation message.

            message.textContent =
                "Thank you, " + customerName +
                "! Your enquiry passed the form checks. " +
                "This is a demonstration and has not been sent.";

            message.classList.remove("error-message");

            message.classList.add("success-message");

            // Clear the form.

            contactForm.reset();

        });


        // Clear feedback when the form is edited.

        contactForm.addEventListener("input", function () {

            message.textContent = "";

            message.classList.remove(
                "success-message",
                "error-message"
            );

        });

    }

});