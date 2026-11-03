/* =================================
   SUNBURY LOGISTICS
   MAIN JAVASCRIPT
================================= */


// COMPANY CONFIGURATION
// Edit your details here. Every page updates from this one list.
// Keep the quote marks. A whatsapp or social button with "" opens the Contact page.

const COMPANY = {

    // Numbers only, starting with 256. Example: "256700000000"
    whatsapp: "256788276487",

    email: "sunburylogistics83@gmail.com",

    phone: "+256 795 897 713",

    // Full page links. Example: "https://www.facebook.com/yourpage"
    facebook: "",

    instagram: "",

    linkedin: "",

    name: "SUNBURY LOGISTICS"

};


// HEADER

const header = document.getElementById("header");

if (header) {

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    const pages = [

        ["index.html", "Home"],
        ["about.html", "About Us"],
        ["services.html", "Services"],
        ["tracking.html", "Track Shipment"],
        ["contact.html", "Contact"]

    ];

    header.innerHTML = `

        <div class="container nav-container">

            <a href="index.html" class="logo">

                SUNBURY

                <span>LOGISTICS</span>

            </a>


            <nav class="nav-links" id="nav-links">

                ${pages.map(([file, label]) => `

                    <a href="${file}"
                       class="${currentPage === file ? "active" : ""}">

                        ${label}

                    </a>

                `).join("")}


                <a href="quote.html" class="nav-quote">

                    GET A QUOTE

                </a>

            </nav>


            <div class="header-right">

                <a href="index.html" class="header-logo">

                    <img src="assets/logo-small.jpg" alt="Sunbury Logistics logo">

                </a>


                <div class="menu-toggle" id="menu-toggle">

                    <i class="fas fa-bars"></i>

                </div>

            </div>

        </div>

    `;


    // MOBILE MENU

    const menuToggle =
        document.getElementById("menu-toggle");

    const navLinks =
        document.getElementById("nav-links");


    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });


    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });

}



// FOOTER

const footer = document.getElementById("footer");

if (footer) {

    footer.innerHTML = `

        <div class="container footer-content">


            <div>

                <a href="index.html" class="logo">

                    SUNBURY

                    <span>LOGISTICS</span>

                </a>

                <p class="footer-description">

                    Moving Value, Not Just Cargo.

                </p>

                <p class="footer-description">

                    Nakawa, Kampala, Uganda.

                </p>

            </div>


            <div class="footer-links">

                <a href="index.html">Home</a>

                <a href="about.html">About Us</a>

                <a href="services.html">Services</a>

                <a href="tracking.html">Tracking</a>

                <a href="quote.html">Get A Quote</a>

                <a href="contact.html">Contact</a>

            </div>


            <div class="social-links">

                ${[

                    [COMPANY.facebook, "Facebook", "fa-facebook-f"],
                    [COMPANY.instagram, "Instagram", "fa-instagram"],
                    [COMPANY.linkedin, "LinkedIn", "fa-linkedin-in"]

                ].map(([link, label, icon]) => `

                    <a href="${link || "contact.html"}"
                       ${link ? 'target="_blank" rel="noopener"' : ""}
                       aria-label="${label}">

                        <i class="fab ${icon}"></i>

                    </a>

                `).join("")}

            </div>


        </div>


        <div class="copyright">

            &copy; ${new Date().getFullYear()}

            SUNBURY LOGISTICS.

            ALL RIGHTS RESERVED.

        </div>


        <a href="${COMPANY.whatsapp ? `https://wa.me/${COMPANY.whatsapp}` : "contact.html"}"
           class="whatsapp-float"
           ${COMPANY.whatsapp ? 'target="_blank" rel="noopener"' : ""}
           aria-label="Contact us on WhatsApp">

            <i class="fab fa-whatsapp"></i>

        </a>

    `;

}



// WHATSAPP CONTACT

const whatsappLink =
    document.getElementById("contact-whatsapp");

if (whatsappLink) {

    const message =
        "Hello Sunbury Logistics. I would like to inquire about your services.";

    whatsappLink.href = COMPANY.whatsapp
        ? `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`
        : "contact.html";

}



// CONTACT DETAILS

const contactPhone =
    document.getElementById("contact-phone");

if (contactPhone) {

    contactPhone.textContent = COMPANY.phone;

}


const contactEmail =
    document.getElementById("contact-email");

if (contactEmail) {

    contactEmail.textContent = COMPANY.email;

}



// SHIPMENT TRACKING

const trackingForm =
    document.getElementById("tracking-form");


if (trackingForm) {

    trackingForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const trackingNumber =
            document.getElementById("tracking-number")
            .value.trim();


        const result =
            document.getElementById("tracking-result");


        if (!trackingNumber) {

            result.innerHTML = `

                <p style="color:red;">

                    Please enter your tracking number.

                </p>

            `;

            return;

        }


        result.innerHTML = `

            <div style="
                background:#fff7dc;
                padding:20px;
                border-left:4px solid #e5b923;
            ">

                <h3>Tracking Reference Received</h3>

                <p>

                    Reference:

                    <strong>${escapeHTML(trackingNumber)}</strong>

                </p>

                <p>

                    This tracking interface is awaiting
                    connection to the Sunbury Logistics
                    shipment database.

                </p>

                <p>

                    Please contact our team for the
                    latest shipment information.

                </p>

            </div>

        `;

    });

}



// QUOTATION FORM

const quoteForm =
    document.getElementById("quote-form");


if (quoteForm) {

    quoteForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const formData =
            new FormData(quoteForm);


        const name =
            formData.get("name");

        const email =
            formData.get("email");

        const phone =
            formData.get("phone");

        const service =
            formData.get("service");

        const origin =
            formData.get("origin");

        const destination =
            formData.get("destination");

        const details =
            formData.get("details");


        const subject =
            encodeURIComponent("New Shipping Quote Request");


        const body =
            encodeURIComponent(`

New quotation request for Sunbury Logistics.

Customer: ${name}

Email: ${email}

Phone: ${phone}

Service: ${service}

Origin: ${origin}

Destination: ${destination}

Shipment Details:

${details}

            `);


        const mailto =
            `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;


        const message =
            document.getElementById("quote-message");


        message.textContent =
            "Your email application will open with your quotation request. Please send the email to complete your enquiry.";


        window.location.href = mailto;

    });

}



// HTML ESCAPING

function escapeHTML(value) {

    return String(value).replace(/[&<>"']/g, character => {

        const entities = {

            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"

        };

        return entities[character];

    });

}
