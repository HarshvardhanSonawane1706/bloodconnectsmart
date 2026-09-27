/* =========================================================
   BLOOD CONNECT
   COMPLETE FRONTEND APPLICATION
========================================================= */


/* =========================================================
   MOCK DATA
========================================================= */

const camps = [

    {
        id: "CAMP-001",
        name: "Nagpur Community Life Camp",
        organisation: "Red Cross Community Network",
        location: "Nagpur",
        venue: "Central Community Hall, Civil Lines",
        date: "2026-10-03",
        time: "09:00 AM – 04:00 PM",
        status: "upcoming",
        target: 180,
        registered: 132,
        bloodGroups: ["A+", "B+", "O+", "O-"],
        distance: "4.2 km",
        emergency: false,
        lat: 21.1458,
        lng: 79.0882,
        description:
            "A city-wide community mobilisation camp focused on accessible donor registration and coordinated attendance."
    },

    {
        id: "CAMP-002",
        name: "Maharashtra Youth Donor Camp",
        organisation: "Youth Health Collective",
        location: "Nagpur",
        venue: "Youth Convention Centre, Dharampeth",
        date: "2026-10-06",
        time: "10:00 AM – 05:00 PM",
        status: "upcoming",
        target: 250,
        registered: 198,
        bloodGroups: ["A+", "B+", "AB+", "O+"],
        distance: "7.8 km",
        emergency: false,
        lat: 21.1220,
        lng: 79.0550,
        description:
            "Large youth mobilisation event connecting students, volunteers and donor communities."
    },

    {
        id: "CAMP-003",
        name: "City Health Mobilisation Camp",
        organisation: "Rotary Community Initiative",
        location: "Mumbai",
        venue: "Civic Centre, Nariman Point",
        date: "2026-10-09",
        time: "08:30 AM – 03:30 PM",
        status: "upcoming",
        target: 300,
        registered: 221,
        bloodGroups: ["A-", "B-", "O-", "AB-"],
        distance: "12.4 km",
        emergency: true,
        lat: 18.9320,
        lng: 72.8310,
        description:
            "A high-priority mobilisation camp with additional communication support for selected donor groups."
    },

    {
        id: "CAMP-004",
        name: "Nagpur Corporate CSR Camp",
        organisation: "TechNova CSR",
        location: "Nagpur",
        venue: "TechNova Campus, IT Park",
        date: "2026-10-12",
        time: "09:30 AM – 02:30 PM",
        status: "upcoming",
        target: 150,
        registered: 92,
        bloodGroups: ["A+", "B+", "O+"],
        distance: "10.2 km",
        emergency: false,
        lat: 21.1680,
        lng: 79.0620,
        description:
            "Corporate CSR mobilisation programme designed around employee participation and community response."
    },

    {
        id: "CAMP-005",
        name: "Central Nagpur Live Camp",
        organisation: "City Health Network",
        location: "Nagpur",
        venue: "Central Medical Community Centre, Medical Square",
        date: "2026-09-26",
        time: "08:00 AM – 05:00 PM",
        status: "ongoing",
        target: 220,
        registered: 186,
        bloodGroups: ["A+", "B+", "O+", "AB+"],
        distance: "3.1 km",
        emergency: false,
        lat: 21.1390,
        lng: 79.0910,
        description:
            "Currently active mobilisation camp with live attendance and organiser check-in."
    },

    {
        id: "CAMP-006",
        name: "Mumbai Emergency Mobilisation Camp",
        organisation: "Community Response Alliance",
        location: "Mumbai",
        venue: "Western Civic Centre, Bandra West",
        date: "2026-09-26",
        time: "09:00 AM – 06:00 PM",
        status: "ongoing",
        target: 350,
        registered: 304,
        bloodGroups: ["O+", "O-", "B+", "B-"],
        distance: "5.6 km",
        emergency: true,
        lat: 19.0178,
        lng: 72.8478,
        description:
            "High-response camp operating with adaptive mobilisation and emergency communication support."
    },

    {
        id: "CAMP-007",
        name: "Pune Student Response Camp",
        organisation: "Campus Life Network",
        location: "Pune",
        venue: "University Activity Centre, Shivajinagar",
        date: "2026-09-26",
        time: "09:30 AM – 04:00 PM",
        status: "ongoing",
        target: 200,
        registered: 144,
        bloodGroups: ["A+", "A-", "O+", "O-"],
        distance: "8.5 km",
        emergency: false,
        lat: 18.5204,
        lng: 73.8567,
        description:
            "Campus-based mobilisation programme with student volunteers and multilingual outreach."
    },

    {
        id: "CAMP-008",
        name: "Bengaluru Community Camp",
        organisation: "Bengaluru Civic Network",
        location: "Bengaluru",
        venue: "Community Convention Hall, MG Road",
        date: "2026-10-15",
        time: "10:00 AM – 04:00 PM",
        status: "upcoming",
        target: 240,
        registered: 161,
        bloodGroups: ["B+", "O+", "AB+", "A+"],
        distance: "6.7 km",
        emergency: false,
        lat: 12.9716,
        lng: 77.5946,
        description:
            "Community-led donor mobilisation camp with regional language communication."
    },

    {
        id: "CAMP-009",
        name: "Hyderabad Life Support Camp",
        organisation: "Hyderabad Community Alliance",
        location: "Hyderabad",
        venue: "People's Convention Centre, Banjara Hills",
        date: "2026-10-19",
        time: "09:00 AM – 03:00 PM",
        status: "upcoming",
        target: 175,
        registered: 118,
        bloodGroups: ["O+", "B+", "A+"],
        distance: "9.4 km",
        emergency: false,
        lat: 17.3850,
        lng: 78.4867,
        description:
            "Regional donor mobilisation camp with volunteer coordination and digital registration."
    }

];


let emergencies = [

    {
        id: "SOS-001",
        blood: "O+",
        hospital: "CityCare Hospital",
        location: "Nagpur",
        hospitalAddress: "Civil Lines, Near Medical Square, Nagpur",
        patientName: "Aarav Sharma",
        patientWard: "ICU Ward 3, Bed 12",
        contact: "+91 98231 44520",
        units: 4,
        fulfilled: 2,
        urgency: "Critical",
        time: "12 min ago",
        coordinates: { lat: 21.1458, lng: 79.0882 }
    },

    {
        id: "SOS-002",
        blood: "B-",
        hospital: "Western Medical Centre",
        location: "Mumbai",
        hospitalAddress: "Bandra West, Mumbai",
        patientName: "Pooja Varma",
        patientWard: "Emergency Wing B",
        contact: "+91 98192 33410",
        units: 3,
        fulfilled: 1,
        urgency: "High",
        time: "28 min ago",
        coordinates: { lat: 19.0522, lng: 72.8295 }
    },

    {
        id: "SOS-003",
        blood: "A+",
        hospital: "Central Community Hospital",
        location: "Pune",
        hospitalAddress: "Sassoon Road, Shivajinagar, Pune",
        patientName: "Kiran Deshmukh",
        patientWard: "Trauma Bed 4",
        contact: "+91 97654 11290",
        units: 5,
        fulfilled: 3,
        urgency: "Moderate",
        time: "43 min ago",
        coordinates: { lat: 18.5332, lng: 73.8778 }
    },

    {
        id: "SOS-004",
        blood: "AB+",
        hospital: "Unity Care Centre",
        location: "Delhi",
        hospitalAddress: "Ansari Nagar, New Delhi",
        patientName: "Mohit Gupta",
        patientWard: "Cardio Ward 2",
        contact: "+91 98110 55430",
        units: 2,
        fulfilled: 0,
        urgency: "High",
        time: "51 min ago",
        coordinates: { lat: 28.5672, lng: 77.2100 }
    }

];


let auditLogs = [

    {
        time: "18:32",
        action: "Camp registration confirmed",
        user: "Mahi Qureshi",
        module: "Camps",
        status: "Success"
    },

    {
        time: "18:21",
        action: "Emergency consent reviewed",
        user: "Mahi Qureshi",
        module: "Consent",
        status: "Success"
    },

    {
        time: "17:54",
        action: "Emergency SOS broadcast",
        user: "Organiser",
        module: "Emergency",
        status: "Broadcast"
    },

    {
        time: "17:31",
        action: "QR ticket verified",
        user: "Volunteer 014",
        module: "Scanner",
        status: "Success"
    },

    {
        time: "16:48",
        action: "Camp created",
        user: "Organiser",
        module: "Camps",
        status: "Created"
    },

    {
        time: "16:22",
        action: "Reminder campaign triggered",
        user: "Organiser",
        module: "Communication",
        status: "Sent"
    }

];


let appState = {

    role: "donor", // "donor" or "recipient"

    entity: "individual", // "individual" or "organization"

    campView: "cards", // "cards", "map", "split"

    user: JSON.parse(
        localStorage.getItem("bloodConnectUser")
    ) || {
        name: "Mahi Qureshi",
        role: "donor",
        entity: "individual",
        age: 24,
        email: "mahi@example.com",
        phone: "+91 90000 00000",
        blood: "O+",
        idType: "Aadhaar Card",
        idNumber: "4829-1928-3849",
        hlaTyping: "HLA-A*02, HLA-B*07",
        address: "42 Civil Lines, Nagpur",
        city: "Nagpur",
        pincode: "440001",
        language: "English",
        donorId: "BC-48291"
    },

    darkMode:
        localStorage.getItem("bloodConnectDark") === "true",

    campTab: "upcoming",

    registrationCamp: null,

    registrationStep: 1,

    consent: JSON.parse(
        localStorage.getItem("bloodConnectConsent")
    ) || {
        emergency: true,
        whatsapp: true,
        sms: true
    }

};


/* =========================================================
   DOM HELPERS
========================================================= */

const $ = selector => document.querySelector(selector);

const $$ = selector => document.querySelectorAll(selector);


/* =========================================================
   INITIALISE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initialiseTheme();

    initialiseAuth();

    initialiseNavigation();

    initialiseSearch();

    initialiseCamps();

    initialiseEmergency();

    initialiseIntelligence();

    initialiseDonor();

    initialiseScanner();

    initialiseAudit();

    initialiseModals();

    initialiseCommandPalette();

    initialiseProfile();

    initialiseNotifications();

    initialiseCounters();

    renderEmergencies();

    renderAudit();

    updateUserUI();

    initialiseCampsMap();

    initialiseEmergencyMap();

    initialiseHospitalPicker();

    renderRecipientSpace();

    if (
        localStorage.getItem("bloodConnectLoggedIn") === "true"
    ) {
        showApplication();
    }

});


/* =========================================================
   AUTHENTICATION
========================================================= */

function initialiseAuth() {

    // --- ROLE TOGGLE: DONOR VS RECIPIENT ---
    const setRole = (role) => {
        appState.role = role;
        $("#roleBtnDonor")?.classList.toggle("active", role === "donor");
        $("#roleBtnRecipient")?.classList.toggle("active", role === "recipient");

        const isDonor = role === "donor";
        const isIndiv = appState.entity === "individual";

        if ($("#signInHeading")) {
            $("#signInHeading").textContent = isDonor ? "Welcome Back, Donor" : "Welcome Back, Recipient";
        }
        if ($("#signInSubheading")) {
            $("#signInSubheading").textContent = `Sign in to your ${isIndiv ? 'Individual' : 'Organization'} ${isDonor ? 'Donor' : 'Recipient'} account`;
        }
        if ($("#signUpHeading")) {
            $("#signUpHeading").textContent = `Register as ${isIndiv ? 'Individual' : 'Organization'} ${isDonor ? 'Donor' : 'Recipient'}`;
        }
        if ($("#signUpSubheading")) {
            $("#signUpSubheading").textContent = isDonor
                ? "Join India's intelligent blood mobilisation network to save lives"
                : "Register to request emergency blood, hospital admission & donor response";
        }
        if ($("#signUpBtnText")) {
            $("#signUpBtnText").textContent = `Create ${isIndiv ? 'Individual' : 'Organization'} ${isDonor ? 'Donor' : 'Recipient'} Account`;
        }
        if ($("#indivBloodLabel")) {
            $("#indivBloodLabel").textContent = isDonor ? "Blood Group (Donating)" : "Blood Group (Needed)";
        }
        if ($("#orgBloodLabel")) {
            $("#orgBloodLabel").textContent = isDonor ? "Blood Groups (Donating / Handled)" : "Blood Groups (Needed / Received)";
        }
    };

    $("#roleBtnDonor")?.addEventListener("click", () => setRole("donor"));
    $("#roleBtnRecipient")?.addEventListener("click", () => setRole("recipient"));


    // --- ENTITY TOGGLE: INDIVIDUAL VS ORGANIZATION ---
    const setEntity = (entity) => {
        appState.entity = entity;
        $("#entityBtnIndividual")?.classList.toggle("active", entity === "individual");
        $("#entityBtnOrg")?.classList.toggle("active", entity === "organization");

        const indivFields = $("#individualSignupFields");
        const orgFields = $("#organizationSignupFields");

        if (entity === "individual") {
            if (indivFields) indivFields.style.display = "block";
            if (orgFields) orgFields.style.display = "none";
        } else {
            if (indivFields) indivFields.style.display = "none";
            if (orgFields) orgFields.style.display = "block";
        }
        setRole(appState.role);
    };

    $("#entityBtnIndividual")?.addEventListener("click", () => setEntity("individual"));
    $("#entityBtnOrg")?.addEventListener("click", () => setEntity("organization"));


    // --- AUTH TABS (SIGN IN VS SIGN UP) ---
    $$(".auth-tab").forEach(tab => {

        tab.addEventListener("click", () => {

            const target = tab.dataset.authTab;

            $$(".auth-tab").forEach(item => {
                item.classList.remove("active");
            });

            tab.classList.add("active");

            $$(".auth-form").forEach(form => {
                form.classList.remove("active");
            });

            if (target === "signin") {
                $("#signInForm")?.classList.add("active");
            } else {
                $("#signUpForm")?.classList.add("active");
            }

        });

    });


    // --- SIMULATED DOCUMENT UPLOAD PILLS ---
    $("#signupIdFile")?.addEventListener("change", (e) => {
        if (e.target.files && e.target.files[0]) {
            const label = $("#indivUploadLabel");
            if (label) {
                label.classList.add("upload-success");
                label.innerHTML = `<span>✓ Document Attached: ${e.target.files[0].name.substring(0, 20)}</span>`;
            }
            showToast("ID proof document attached.", "success");
        }
    });

    $("#signupOrgIdFile")?.addEventListener("change", (e) => {
        if (e.target.files && e.target.files[0]) {
            const label = $("#orgUploadLabel");
            if (label) {
                label.classList.add("upload-success");
                label.innerHTML = `<span>✓ License Attached: ${e.target.files[0].name.substring(0, 20)}</span>`;
            }
            showToast("Organization license attached.", "success");
        }
    });


    // --- FAST DEMO ACCESS BUTTONS ---
    $$("[data-demo]").forEach(btn => {
        btn.addEventListener("click", () => {
            const demo = btn.dataset.demo;
            if (demo === "donor-indiv") {
                appState.role = "donor";
                appState.entity = "individual";
                appState.user = {
                    name: "Mahi Qureshi",
                    role: "donor",
                    entity: "individual",
                    age: 24,
                    email: "mahi@example.com",
                    phone: "+91 98220 11223",
                    blood: "O+",
                    idType: "Aadhaar Card",
                    idNumber: "4829-1928-3849",
                    hlaTyping: "HLA-A*02, HLA-B*07",
                    address: "42 Civil Lines",
                    city: "Nagpur",
                    pincode: "440001",
                    language: "English",
                    donorId: "BC-48291"
                };
            } else if (demo === "donor-org") {
                appState.role = "donor";
                appState.entity = "organization";
                appState.user = {
                    name: "Red Cross Community Network",
                    orgName: "Red Cross Community Network",
                    role: "donor",
                    entity: "organization",
                    contactPerson: "Dr. Alok Verma",
                    email: "coordinator@redcross.org",
                    phone: "+91 712 2549911",
                    blood: "All Blood Groups (Full Inventory)",
                    idType: "SBTC Blood Bank License",
                    idNumber: "SBTC-MH-2024-8841",
                    address: "Red Cross Bhawan, Sadar",
                    city: "Nagpur",
                    pincode: "440001",
                    language: "English",
                    donorId: "BC-ORG-102"
                };
            } else if (demo === "recipient-indiv") {
                appState.role = "recipient";
                appState.entity = "individual";
                appState.user = {
                    name: "Rajesh Kumar",
                    role: "recipient",
                    entity: "individual",
                    age: 32,
                    email: "rajesh.kumar@example.com",
                    phone: "+91 98901 44556",
                    blood: "B+",
                    idType: "Aadhaar Card",
                    idNumber: "7721-8890-1123",
                    hlaTyping: "HLA-B*27 (Non-reactive)",
                    address: "Flat 204, Surya Heights, Dhantoli",
                    city: "Nagpur",
                    pincode: "440012",
                    language: "English",
                    recipientId: "BC-REC-9281",
                    hospital: "CityCare Hospital, Civil Lines",
                    patientWard: "ICU Ward 3, Bed 12"
                };
            } else if (demo === "recipient-org") {
                appState.role = "recipient";
                appState.entity = "organization";
                appState.user = {
                    name: "CityCare Hospital & Research Centre",
                    orgName: "CityCare Hospital & Research Centre",
                    role: "recipient",
                    entity: "organization",
                    contactPerson: "Dr. S. K. Kulkarni (Medical Supt.)",
                    email: "emergency@citycarehosp.org",
                    phone: "+91 712 2590001",
                    blood: "Universal & Critical (O+, O-, B+, B-)",
                    idType: "Hospital Clinical Establishment License",
                    idNumber: "MH-HOSP-2024-4190",
                    address: "Plot 12, Medical Campus, Civil Lines",
                    city: "Nagpur",
                    pincode: "440001",
                    language: "English",
                    recipientId: "BC-HOSP-5501",
                    hospital: "CityCare Hospital & Research Centre",
                    patientWard: "Emergency Trauma Facility"
                };
            }

            localStorage.setItem("bloodConnectUser", JSON.stringify(appState.user));
            localStorage.setItem("bloodConnectLoggedIn", "true");
            addAudit(`User signed in as ${appState.user.name} (${appState.role} • ${appState.entity})`, "Authentication", "Success");
            showToast(`Signed in as ${appState.user.name} (${appState.role.toUpperCase()})`, "success");
            showApplication();
        });
    });


    // --- SIGN IN FORM SUBMIT ---
    $("#signInForm")?.addEventListener("submit", event => {

        event.preventDefault();

        const identifier =
            $("#loginIdentifier").value.trim();

        if (!identifier) {
            showToast(
                "Enter your login details.",
                "warning"
            );
            return;
        }

        // Keep or create user matching the selected role & entity
        const existing = JSON.parse(localStorage.getItem("bloodConnectUser"));
        if (existing && (existing.email === identifier || existing.phone === identifier || existing.idNumber === identifier || identifier.includes("@") || identifier.length > 3)) {
            appState.user = existing;
            appState.role = existing.role || appState.role;
            appState.entity = existing.entity || appState.entity;
        } else {
            // Build profile from identifier
            const isDonor = appState.role === "donor";
            const isIndiv = appState.entity === "individual";
            appState.user = {
                name: isIndiv ? (identifier.includes("@") ? identifier.split("@")[0].toUpperCase() : "Verified Member") : "Healthcare Organization",
                email: identifier.includes("@") ? identifier : `${identifier}@example.com`,
                phone: identifier.includes("@") ? "+91 98000 00000" : identifier,
                role: appState.role,
                entity: appState.entity,
                blood: isDonor ? "O+" : "B+",
                city: "Nagpur",
                idType: isIndiv ? "Aadhaar Card" : "Hospital License",
                idNumber: isIndiv ? "4829-1928-3849" : "MH-HOSP-2024-8841",
                donorId: isDonor ? "BC-" + Math.floor(10000 + Math.random() * 89999) : undefined,
                recipientId: !isDonor ? "BC-REC-" + Math.floor(1000 + Math.random() * 8999) : undefined
            };
        }

        localStorage.setItem(
            "bloodConnectUser",
            JSON.stringify(appState.user)
        );

        localStorage.setItem(
            "bloodConnectLoggedIn",
            "true"
        );

        addAudit(
            `User signed in as ${appState.user.name}`,
            "Authentication",
            "Success"
        );

        showToast(
            `Welcome to Blood Connect as ${appState.role === "donor" ? "Donor" : "Recipient"}.`,
            "success"
        );

        showApplication();

    });


    // --- SIGN UP FORM SUBMIT ---
    $("#signUpForm")?.addEventListener("submit", event => {

        event.preventDefault();

        const isIndiv = appState.entity === "individual";
        const isDonor = appState.role === "donor";

        if (isIndiv) {
            // INDIVIDUAL VALIDATION & DATA EXTRACTION
            const name = $("#signupName")?.value.trim();
            const age = Number($("#signupAge")?.value);
            const phone = $("#signupPhone")?.value.trim();
            const email = $("#signupEmail")?.value.trim();
            const idType = $("#signupIdType")?.value;
            const idNumber = $("#signupIdProof")?.value.trim();
            const blood = $("#signupBlood")?.value;
            const hlaTyping = $("#signupHla")?.value.trim() || "Not specified";
            const address = $("#signupAddress")?.value.trim();
            const city = $("#signupCity")?.value.trim();
            const pincode = $("#signupPincode")?.value.trim();

            if (!name || !age || !phone || !email || !idNumber || !blood || !address || !city) {
                showToast("Please complete all required fields for individual registration.", "warning");
                return;
            }

            if (age < 18 || age > 75) {
                showToast("Age must be between 18 and 75.", "warning");
                return;
            }

            appState.user = {
                name,
                role: appState.role,
                entity: "individual",
                age,
                phone,
                email,
                idType,
                idNumber,
                blood,
                hlaTyping,
                address,
                city,
                pincode,
                language: "English",
                donorId: isDonor ? "BC-" + Math.floor(10000 + Math.random() * 89999) : undefined,
                recipientId: !isDonor ? "BC-REC-" + Math.floor(1000 + Math.random() * 8999) : undefined
            };

        } else {
            // ORGANIZATION VALIDATION & DATA EXTRACTION
            const orgName = $("#signupOrgName")?.value.trim();
            const contactPerson = $("#signupOrgContactPerson")?.value.trim();
            const phone = $("#signupOrgPhone")?.value.trim();
            const email = $("#signupOrgEmail")?.value.trim();
            const idType = $("#signupOrgIdType")?.value;
            const idNumber = $("#signupOrgIdProof")?.value.trim();
            const blood = $("#signupOrgBlood")?.value;
            const address = $("#signupOrgAddress")?.value.trim();
            const city = $("#signupOrgCity")?.value.trim();
            const pincode = $("#signupOrgPincode")?.value.trim();

            if (!orgName || !contactPerson || !phone || !email || !idNumber || !address || !city) {
                showToast("Please complete all required fields for organization registration.", "warning");
                return;
            }

            appState.user = {
                name: orgName,
                orgName,
                role: appState.role,
                entity: "organization",
                contactPerson,
                phone,
                email,
                idType,
                idNumber,
                blood,
                address,
                city,
                pincode,
                language: "English",
                donorId: isDonor ? "BC-ORG-" + Math.floor(100 + Math.random() * 899) : undefined,
                recipientId: !isDonor ? "BC-HOSP-" + Math.floor(1000 + Math.random() * 8999) : undefined
            };
        }

        localStorage.setItem(
            "bloodConnectUser",
            JSON.stringify(appState.user)
        );

        localStorage.setItem(
            "bloodConnectLoggedIn",
            "true"
        );

        addAudit(
            `New ${appState.role} account created for ${appState.user.name} (${appState.entity})`,
            "Authentication",
            "Success"
        );

        showToast(
            `Account created successfully as ${appState.role === "donor" ? "Donor" : "Recipient"} (${appState.entity}).`,
            "success"
        );

        showApplication();

    });


    $$(".password-toggle").forEach(button => {

        button.addEventListener("click", () => {

            const input =
                document.getElementById(
                    button.dataset.password
                );

            if (input) {
                input.type =
                    input.type === "password"
                        ? "text"
                        : "password";
            }

        });

    });


    $("#forgotPassword").addEventListener(
        "click",
        () => {

            showToast(
                "Password recovery would connect to your backend.",
                "info"
            );

        }
    );

}


/* =========================================================
   SHOW APP
========================================================= */

function showApplication() {

    $("#authScreen")?.classList.add("hidden");

    $("#app")?.classList.remove("hidden");

    updateUserUI();

    renderCamps();

    renderEmergencies();

    renderRecipientSpace();

    if (appState.role === "recipient") {
        navigateTo("recipient");
    } else {
        navigateTo("home");
    }

    setTimeout(() => {

        animateCounters();
        if (typeof campsMap !== "undefined" && campsMap) campsMap.invalidateSize();
        if (typeof emergencyMap !== "undefined" && emergencyMap) emergencyMap.invalidateSize();
        if (typeof pickerMap !== "undefined" && pickerMap) pickerMap.invalidateSize();

    }, 350);

}


/* =========================================================
   NAVIGATION
========================================================= */

function initialiseNavigation() {

    $$("[data-section]").forEach(button => {

        button.addEventListener("click", () => {

            const section =
                button.dataset.section;

            navigateTo(section);

        });

    });


    $("#mobileMenuButton")?.addEventListener(
        "click",
        () => {

            $("#mobileNav")?.classList.toggle("open");

        }
    );

}


function navigateTo(section) {

    $$(".page-section").forEach(item => {

        item.classList.remove("active");

    });


    const target =
        document.getElementById(section);

    if (!target) return;

    target.classList.add("active");


    $$(".nav-item").forEach(item => {

        item.classList.toggle(
            "active",
            item.dataset.section === section
        );

    });


    $("#mobileNav")?.classList.remove("open");

    // Recalculate Leaflet map sizes smoothly upon tab display
    if (section === "camps" && typeof campsMap !== "undefined" && campsMap) {
        setTimeout(() => campsMap.invalidateSize(), 200);
    }
    if (section === "emergency") {
        if (typeof emergencyMap !== "undefined" && emergencyMap) {
            setTimeout(() => emergencyMap.invalidateSize(), 200);
        }
        if (typeof pickerMap !== "undefined" && pickerMap) {
            setTimeout(() => pickerMap.invalidateSize(), 200);
        }
    }
    if (section === "recipient") {
        renderRecipientSpace();
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   THEME
========================================================= */

function initialiseTheme() {

    if (appState.darkMode) {
        document.body.classList.add("dark");
    }

    updateThemeButton();


    $("#themeToggle").addEventListener(
        "click",
        toggleTheme
    );

}


function toggleTheme() {

    appState.darkMode =
        !appState.darkMode;

    document.body.classList.toggle(
        "dark",
        appState.darkMode
    );

    localStorage.setItem(
        "bloodConnectDark",
        appState.darkMode
    );

    updateThemeButton();

    addAudit(
        appState.darkMode
            ? "Dark mode enabled"
            : "Light mode enabled",
        "Appearance",
        "Success"
    );

    showToast(
        appState.darkMode
            ? "Dark Mode enabled."
            : "Light Mode enabled.",
        "success"
    );

}


function updateThemeButton() {

    const button =
        $("#themeToggle");

    if (!button) return;

    button.querySelector(".theme-symbol").textContent =
        appState.darkMode ? "☀" : "☾";

    button.querySelector("span:last-child").textContent =
        appState.darkMode
            ? "Light Mode"
            : "Dark Mode";

}


/* =========================================================
   USER UI
========================================================= */

function updateUserUI() {

    const user =
        appState.user;

    if (!user) return;

    const initials =
        (user.name || "User")
            .split(" ")
            .map(word => word[0])
            .slice(0, 2)
            .join("")
            .toUpperCase();

    // Top navigation bar
    if ($("#navName")) $("#navName").textContent = user.name;
    if ($("#navAvatar")) $("#navAvatar").textContent = initials;

    if ($("#navRole")) {
        const roleLabel = (user.role || appState.role) === "donor" ? "Donor" : "Recipient";
        const entityLabel = (user.entity || appState.entity) === "organization" ? "Organization" : "Individual";
        $("#navRole").textContent = `${roleLabel} • ${entityLabel}`;
    }

    // Donor space profile elements
    if ($("#largeAvatar")) $("#largeAvatar").textContent = initials;
    if ($("#donorName")) $("#donorName").textContent = user.name;
    if ($("#donorBlood")) $("#donorBlood").textContent = user.blood || "O+";
    if ($("#donorId")) $("#donorId").textContent = user.donorId || "BC-48291";
    if ($("#passName")) $("#passName").textContent = user.name;
    if ($("#passBlood")) $("#passBlood").textContent = user.blood || "O+";

    // Recipient space profile elements
    if ($("#recipientProfileName")) $("#recipientProfileName").textContent = user.name;
    if ($("#recipientLargeAvatar")) $("#recipientLargeAvatar").textContent = initials;
    if ($("#recipientTypeBadge")) {
        const isDonor = (user.role || appState.role) === "donor";
        const isOrg = (user.entity || appState.entity) === "organization";
        $("#recipientTypeBadge").textContent = `${isDonor ? "Registered Donor" : "Verified Recipient"} • ${isOrg ? "Organization" : "Individual"}`;
    }
    if ($("#recipientBloodNeeded")) $("#recipientBloodNeeded").textContent = user.blood || "B+";
    if ($("#recipientIdProof")) {
        $("#recipientIdProof").textContent = `${user.idType || "ID Proof"}: ${user.idNumber ? user.idNumber.slice(0, 18) : "Verified ✓"}`;
    }
    if ($("#recipientCity")) {
        $("#recipientCity").textContent = `${user.city || "Nagpur"}${user.pincode ? " (" + user.pincode + ")" : ""}`;
    }
    if ($("#recipientIdCode")) {
        $("#recipientIdCode").textContent = user.recipientId || user.donorId || "BC-REC-9281";
    }
    if ($("#recipHospitalName")) {
        $("#recipHospitalName").textContent = user.hospital || (user.entity === "organization" ? user.name : "CityCare Medical Institute");
    }
    if ($("#recipHospitalAddr")) {
        $("#recipHospitalAddr").textContent = `${user.patientWard ? user.patientWard + " • " : "Ward 4B, Bed 18 • "}${user.address || "Civil Lines, Nagpur"}`;
    }

    if (typeof renderRecipientSpace === "function") {
        renderRecipientSpace();
    }

}



/* =========================================================
   SMART SEARCH
========================================================= */

function initialiseSearch() {

    $("#searchButton").addEventListener(
        "click",
        performSmartSearch
    );


    $("#smartSearch").addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {

                performSmartSearch();

            }

        }
    );

}


function performSmartSearch() {

    const query =
        $("#smartSearch").value
            .trim()
            .toLowerCase();

    const blood =
        $("#searchBlood").value;

    const hla =
        $("#hlaSearch").value
            .trim();


    if (!query && !blood && !hla) {

        showToast(
            "Enter a search term, blood group or HLA typing.",
            "info"
        );

        return;

    }


    let results =
        camps.filter(camp => {

            const matchesQuery =
                !query ||
                camp.name.toLowerCase().includes(query) ||
                camp.organisation.toLowerCase().includes(query) ||
                camp.location.toLowerCase().includes(query);

            const matchesBlood =
                !blood ||
                camp.bloodGroups.includes(blood);

            return matchesQuery && matchesBlood;

        });


    navigateTo("camps");

    $("#campSearch").value =
        query;

    $("#campBloodFilter").value =
        blood;

    renderCamps();


    if (hla) {

        showToast(
            `${results.length} camp result(s) found. HLA "${hla}" recorded as a search field.`,
            "success"
        );

        addAudit(
            `Smart search with HLA: ${hla}`,
            "Smart Search",
            "Success"
        );

    } else {

        showToast(
            `${results.length} camp result(s) found.`,
            "success"
        );

    }

}


/* =========================================================
   CAMPS
========================================================= */

function initialiseCamps() {

    $$(".camp-tab").forEach(tab => {

        tab.addEventListener(
            "click",
            () => {

                appState.campTab =
                    tab.dataset.campTab;

                $$(".camp-tab").forEach(item => {

                    item.classList.toggle(
                        "active",
                        item === tab
                    );

                });

                renderCamps();

            }
        );

    });


    $("#campSearch").addEventListener(
        "input",
        renderCamps
    );

    $("#campBloodFilter").addEventListener(
        "change",
        renderCamps
    );

    $("#campLocationFilter").addEventListener(
        "change",
        renderCamps
    );


    $("#clearCampFilters").addEventListener(
        "click",
        () => {

            $("#campSearch").value = "";
            $("#campBloodFilter").value = "";
            $("#campLocationFilter").value = "";

            renderCamps();

            showToast(
                "Camp filters cleared.",
                "info"
            );

        }
    );


    $("#createCampButton").addEventListener(
        "click",
        () => openModal("createCampModal")
    );


    $("#createCampForm").addEventListener(
        "submit",
        createCamp
    );

}


function renderCamps() {

    const query =
        $("#campSearch")
            ?.value
            .trim()
            .toLowerCase() || "";

    const blood =
        $("#campBloodFilter")
            ?.value || "";

    const location =
        $("#campLocationFilter")
            ?.value || "";


    const filtered =
        camps.filter(camp => {

            const statusMatch =
                camp.status === appState.campTab;

            const queryMatch =
                !query ||
                camp.name.toLowerCase().includes(query) ||
                camp.organisation.toLowerCase().includes(query) ||
                camp.location.toLowerCase().includes(query);

            const bloodMatch =
                !blood ||
                camp.bloodGroups.includes(blood);

            const locationMatch =
                !location ||
                camp.location === location;

            return (
                statusMatch &&
                queryMatch &&
                bloodMatch &&
                locationMatch
            );

        });


    const upcoming =
        camps.filter(
            camp => camp.status === "upcoming"
        ).length;

    const ongoing =
        camps.filter(
            camp => camp.status === "ongoing"
        ).length;


    $("#upcomingCount").textContent =
        upcoming;

    $("#ongoingCount").textContent =
        ongoing;


    const grid =
        $("#campGrid");

    if (!filtered.length) {

        grid.innerHTML = `
            <div class="glass-card" style="
                grid-column:1/-1;
                padding:50px;
                text-align:center;
                border-radius:20px;
            ">
                <div style="font-size:35px;margin-bottom:12px;">◇</div>
                <h3>No camps found</h3>
                <p style="
                    color:var(--muted);
                    font-size:10px;
                    margin-top:7px;
                ">
                    Try changing your filters or search criteria.
                </p>
            </div>
        `;

        return;
    }


    grid.innerHTML =
        filtered.map(camp => campCardHTML(camp)).join("");


    grid.querySelectorAll(
        "[data-camp-view]"
    ).forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const camp =
                    camps.find(
                        item =>
                            item.id ===
                            button.dataset.campView
                    );

                openCampDetails(camp);

            }
        );

    });


    grid.querySelectorAll(
        "[data-camp-register]"
    ).forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const camp =
                    camps.find(
                        item =>
                            item.id ===
                            button.dataset.campRegister
                    );

                openRegistration(camp);

            }
        );

    });


    grid.querySelectorAll(
        "[data-spot-camp]"
    ).forEach(button => {

        button.addEventListener(
            "click",
            (e) => {
                e.stopPropagation();
                const campId = button.dataset.spotCamp;
                if (typeof spotCampOnMap === "function") {
                    spotCampOnMap(campId);
                }
            }
        );

    });

}


function campCardHTML(camp) {

    const percentage =
        Math.min(
            100,
            Math.round(
                camp.registered /
                camp.target *
                100
            )
        );


    return `
        <article class="camp-card glass-card">

            <div class="camp-cover">

                <div class="camp-cover-top">

                    <span class="camp-status ${camp.status}">
                        ${camp.status === "ongoing"
                            ? "● Ongoing"
                            : "Upcoming"}
                    </span>

                    ${
                        camp.emergency
                            ? `<span class="camp-emergency">EMERGENCY</span>`
                            : ""
                    }

                </div>

                <div class="camp-cover-symbol">
                    ◇
                </div>

            </div>


            <div class="camp-content">

                <div class="camp-org">

                    <span class="org-dot">
                        ${camp.organisation.charAt(0)}
                    </span>

                    ${camp.organisation}

                </div>

                <h3>${camp.name}</h3>

                <p class="camp-description">
                    ${camp.description}
                </p>

                <div class="camp-meta">

                    <div>
                        <span>DATE</span>
                        <strong>${formatDate(camp.date)}</strong>
                    </div>

                    <div>
                        <span>LOCATION</span>
                        <strong>${camp.location}</strong>
                    </div>

                    <div>
                        <span>VENUE</span>
                        <strong>${camp.venue}</strong>
                    </div>

                    <div>
                        <span>DISTANCE</span>
                        <strong>${camp.distance}</strong>
                    </div>

                </div>

                <div class="camp-progress-head">

                    <span>
                        ${camp.registered} registered
                    </span>

                    <strong>
                        ${percentage}%
                    </strong>

                </div>

                <div class="progress-bar">
                    <span style="width:${percentage}%"></span>
                </div>

                <div class="camp-actions">

                    <button
                        class="camp-view"
                        data-camp-view="${camp.id}"
                    >
                        View Details
                    </button>

                    <button
                        class="camp-view"
                        data-spot-camp="${camp.id}"
                        style="background: rgba(2, 132, 199, 0.12); color: var(--primary); border: 1px solid rgba(2, 132, 199, 0.25);"
                    >
                        📍 Spot on Map
                    </button>

                    <button
                        class="camp-register"
                        data-camp-register="${camp.id}"
                    >
                        Register
                    </button>

                </div>

            </div>

        </article>
    `;

}


function openCampDetails(camp) {

    $("#campDetail").innerHTML = `

        <div class="camp-detail-cover">
            <span>◇</span>
        </div>

        <span class="camp-status ${camp.status}">
            ${camp.status === "ongoing"
                ? "● Ongoing Camp"
                : "Upcoming Camp"}
        </span>

        <h2>${camp.name}</h2>

        <p class="camp-detail-org">
            ${camp.organisation}
        </p>

        <p class="detail-description">
            ${camp.description}
        </p>

        <div class="detail-grid">

            <div>
                <span>DATE</span>
                <strong>${formatDate(camp.date)}</strong>
            </div>

            <div>
                <span>TIME</span>
                <strong>${camp.time}</strong>
            </div>

            <div>
                <span>LOCATION</span>
                <strong>${camp.location}</strong>
            </div>

            <div>
                <span>VENUE</span>
                <strong>${camp.venue}</strong>
            </div>

            <div>
                <span>TARGET</span>
                <strong>${camp.target} donors</strong>
            </div>

            <div>
                <span>REGISTERED</span>
                <strong>${camp.registered}</strong>
            </div>

        </div>

        <div class="camp-progress-head">
            <span>Camp registration</span>
            <strong>
                ${Math.round(camp.registered / camp.target * 100)}%
            </strong>
        </div>

        <div class="progress-bar">
            <span
                style="
                    width:${Math.min(
                        100,
                        camp.registered /
                        camp.target *
                        100
                    )}%
                "
            ></span>
        </div>

        <div style="
            display:flex;
            flex-wrap:wrap;
            gap:7px;
            margin:18px 0;
        ">

            ${camp.bloodGroups.map(
                group =>
                    `<span class="blood-chip">${group}</span>`
            ).join("")}

        </div>

        <div style="
            display:flex;
            gap:8px;
        ">

            <button
                class="primary-btn"
                id="detailRegisterButton"
            >
                Register for Camp
                <span>→</span>
            </button>

            <button
                class="secondary-btn"
                id="shareCampButton"
            >
                Share
                <span>↗</span>
            </button>

        </div>

    `;


    $("#detailRegisterButton").addEventListener(
        "click",
        () => {

            closeModal("campModal");

            openRegistration(camp);

        }
    );


    $("#shareCampButton").addEventListener(
        "click",
        async () => {

            const shareText =
                `${camp.name} — ${formatDate(camp.date)} at ${camp.venue}`;

            if (
                navigator.share
            ) {

                try {

                    await navigator.share({
                        title: camp.name,
                        text: shareText
                    });

                } catch {}

            } else {

                await copyText(shareText);

                showToast(
                    "Camp information copied.",
                    "success"
                );

            }

        }
    );


    openModal("campModal");

}


function createCamp(event) {

    event.preventDefault();


    const newCamp = {

        id:
            "CAMP-" +
            String(camps.length + 1)
                .padStart(3, "0"),

        name:
            $("#newCampName").value.trim(),

        organisation:
            $("#newCampOrg").value.trim(),

        location:
            $("#newCampLocation").value.trim(),

        venue:
            $("#newCampVenue").value.trim(),

        date:
            $("#newCampDate").value,

        time:
            "09:00 AM – 04:00 PM",

        status:
            $("#newCampDate").value === todayISO()
                ? "ongoing"
                : "upcoming",

        target:
            Number(
                $("#newCampTarget").value
            ),

        registered: 0,

        bloodGroups:
            ["A+", "B+", "O+"],

        distance:
            "New",

        emergency: false,

        description:
            "Newly created Blood Connect mobilisation camp."

    };


    camps.unshift(newCamp);

    closeModal("createCampModal");

    $("#createCampForm").reset();

    appState.campTab =
        newCamp.status;

    $$(".camp-tab").forEach(tab => {

        tab.classList.toggle(
            "active",
            tab.dataset.campTab ===
            appState.campTab
        );

    });

    renderCamps();

    addAudit(
        `Camp created: ${newCamp.name}`,
        "Camps",
        "Created"
    );

    showToast(
        "Camp created successfully.",
        "success"
    );

}


/* =========================================================
   REGISTRATION
========================================================= */

function openRegistration(camp) {

    appState.registrationCamp =
        camp;

    appState.registrationStep =
        1;


    $("#registrationStepNumber")
        .textContent = "1";

    $("#registrationTitle")
        .textContent =
        "Donor information";

    $("#registrationSubtitle")
        .textContent =
        "Tell us who is attending this camp.";


    $("#regName").value =
        appState.user.name;

    $("#regPhone").value =
        appState.user.phone;

    $("#regEmail").value =
        appState.user.email;

    $("#regBlood").value =
        appState.user.blood;


    updateRegistrationStep();

    openModal("registrationModal");

}


function updateRegistrationStep() {

    const step =
        appState.registrationStep;


    $$(".registration-step").forEach(
        item => {

            item.classList.toggle(
                "active",
                Number(item.dataset.step) === step
            );

        }
    );


    $("#registrationStepNumber")
        .textContent = step;


    if (step === 1) {

        $("#registrationTitle")
            .textContent =
            "Donor information";

        $("#registrationSubtitle")
            .textContent =
            "Tell us who is attending this camp.";

    }

    if (step === 2) {

        $("#registrationTitle")
            .textContent =
            "Consent preferences";

        $("#registrationSubtitle")
            .textContent =
            "Choose how Blood Connect may communicate.";

    }

    if (step === 3) {

        $("#registrationTitle")
            .textContent =
            "Administrative pre-check";

        $("#registrationSubtitle")
            .textContent =
            "Confirm the platform checklist.";

    }


    $("#registrationBack").style.display =
        step === 1
            ? "none"
            : "inline-flex";


    $("#registrationNext").innerHTML =
        step === 3
            ? "Complete Registration <span>✓</span>"
            : "Continue <span>→</span>";

}


$("#registrationNext").addEventListener(
    "click",
    () => {

        const step =
            appState.registrationStep;


        if (step === 1) {

            if (
                !$("#regName").value.trim() ||
                !$("#regPhone").value.trim() ||
                !$("#regEmail").value.trim() ||
                !$("#regBlood").value
            ) {

                showToast(
                    "Complete the donor information first.",
                    "warning"
                );

                return;

            }

            appState.registrationStep = 2;

            updateRegistrationStep();

            return;
        }


        if (step === 2) {

            appState.registrationStep = 3;

            updateRegistrationStep();

            return;

        }


        if (step === 3) {

            if (
                !$("#ageCheck").checked ||
                !$("#weightCheck").checked ||
                !$("#professionalCheck").checked
            ) {

                showToast(
                    "Complete all three confirmations.",
                    "warning"
                );

                return;

            }

            completeRegistration();

        }

    }
);


$("#registrationBack").addEventListener(
    "click",
    () => {

        if (
            appState.registrationStep > 1
        ) {

            appState.registrationStep--;

            updateRegistrationStep();

        }

    }
);


function completeRegistration() {

    const camp =
        appState.registrationCamp;


    camp.registered =
        Math.min(
            camp.target,
            camp.registered + 1
        );


    appState.user.blood =
        $("#regBlood").value;


    appState.user.language =
        $("#regLanguage").value;


    appState.consent.emergency =
        $("#regEmergencyConsent").checked;


    appState.consent.whatsapp =
        $("#regCommunicationConsent").checked;

    localStorage.setItem(
        "bloodConnectUser",
        JSON.stringify(appState.user)
    );

    localStorage.setItem(
        "bloodConnectConsent",
        JSON.stringify(appState.consent)
    );


    const ticket =
        "BC-TKT-" +
        Math.floor(
            10000 + Math.random() * 89999
        );


    $("#passTicket").textContent =
        ticket;


    closeModal("registrationModal");

    setTimeout(
        () => openModal("passModal"),
        250
    );


    addAudit(
        `Registered for ${camp.name}`,
        "Camps",
        "Success"
    );


    showToast(
        "Registration complete. Your digital pass is ready.",
        "success"
    );


    updateUserUI();

    renderCamps();

}


/* =========================================================
   EMERGENCY
========================================================= */

function initialiseEmergency() {

    $("#emergencyForm").addEventListener(
        "submit",
        createEmergency
    );


    $("#radiusSlider").addEventListener(
        "input",
        updateRadius
    );


    $("#expandBroadcast").addEventListener(
        "click",
        () => {

            let value =
                Number(
                    $("#radiusSlider").value
                );

            value =
                Math.min(
                    50,
                    value + 5
                );

            $("#radiusSlider").value =
                value;

            updateRadius();

            addAudit(
                `Broadcast radius expanded to ${value} km`,
                "Emergency",
                "Broadcast"
            );

            showToast(
                `Mobilisation radius expanded to ${value} km.`,
                "success"
            );

        }
    );

}


function createEmergency(event) {

    event.preventDefault();

    const blood = $("#emergencyBlood")?.value || "O+";
    const patientName = $("#emergencyPatientName")?.value.trim() || (appState.role === "recipient" ? appState.user.name : "Admitted Patient");
    const patientWard = $("#emergencyPatientWard")?.value.trim() || "ICU Trauma Wing";
    const hospital = $("#emergencyHospital")?.value.trim() || "CityCare Hospital";
    const hospitalAddress = $("#emergencyHospitalAddress")?.value.trim() || "Civil Lines, Nagpur";
    const location = $("#emergencyLocation")?.value.trim() || "Nagpur";
    const units = Number($("#emergencyUnits")?.value || 2);
    const urgencyEl = document.querySelector('input[name="urgency"]:checked');
    const urgency = urgencyEl ? urgencyEl.value : "Critical";
    const contact = $("#emergencyContact")?.value.trim() || appState.user.phone || "+91 98000 00000";

    const coordsStr = $("#emergencyCoords")?.value.trim() || "21.1458, 79.0882";
    let lat = 21.1458, lng = 79.0882;
    if (coordsStr.includes(",")) {
        const parts = coordsStr.split(",");
        lat = parseFloat(parts[0].trim()) || 21.1458;
        lng = parseFloat(parts[1].trim()) || 79.0882;
    }

    const emergency = {
        id: "SOS-" + String(emergencies.length + 1).padStart(3, "0"),
        blood,
        hospital,
        hospitalAddress,
        location,
        patientName,
        patientWard,
        contact,
        units,
        fulfilled: 0,
        urgency,
        time: "Just now",
        coordinates: { lat, lng }
    };

    emergencies.unshift(emergency);

    // Audio chime
    playEmergencyTone();

    // Reset form fields
    $("#emergencyForm")?.reset();
    if ($("#emergencyCoords")) $("#emergencyCoords").value = `${lat.toFixed(4)}, ${lng.toFixed(4)}`;

    // Add alert notification to panel
    const notifList = document.querySelector(".notification-list");
    if (notifList) {
        const notifItem = document.createElement("div");
        notifItem.className = "notification-item unread";
        notifItem.innerHTML = `
            <div class="notification-icon red-bg">🚨</div>
            <div>
                <strong style="color: var(--red);">EMERGENCY SOS BROADCAST (LIVE GPS)</strong>
                <p><b>${units} units of ${blood}</b> requested for <b>${patientName}</b> at <b>${hospital}</b> (${hospitalAddress}). Hospital Live Pin: ${lat.toFixed(4)}, ${lng.toFixed(4)}</p>
                <small>Just now • Sent to matching donors within radius</small>
            </div>
        `;
        notifList.prepend(notifItem);
        const countEl = $("#headerNotificationCount");
        if (countEl) {
            countEl.textContent = Number(countEl.textContent || 0) + 1;
        }
    }

    // Trigger live broadcast modal with dynamic donor response stream
    triggerLiveEmergencyBroadcast(emergency);

    // Update emergency map
    if (typeof emergencyMap !== "undefined" && emergencyMap) {
        emergencyMap.flyTo([lat, lng], 13, { duration: 1.2 });
        updateEmergencyMapCenter(lat, lng, hospital);
    }

    renderEmergencies();
    renderRecipientSpace();

    addAudit(`Emergency SOS created for ${blood} at ${hospital} (Live GPS broadcast)`, "Emergency", "Broadcast");
    showToast(`Emergency SOS broadcast with live hospital coordinates sent!`, "success");

}


function renderEmergencies() {

    const list = $("#emergencyList");
    const preview = $("#emergencyPreview");

    const cards = emergencies.map(emergency => emergencyHTML(emergency)).join("");

    if (list) {
        list.innerHTML = cards;

        // Bind View Hospital on Map button
        list.querySelectorAll("[data-emergency-map]").forEach(btn => {
            btn.addEventListener("click", () => {
                const id = btn.dataset.emergencyMap;
                const item = emergencies.find(e => e.id === id);
                if (item && item.coordinates) {
                    navigateTo("emergency");
                    setTimeout(() => {
                        if (typeof emergencyMap !== "undefined" && emergencyMap) {
                            emergencyMap.invalidateSize();
                            emergencyMap.flyTo([item.coordinates.lat, item.coordinates.lng], 14, { duration: 1.2 });
                            updateEmergencyMapCenter(item.coordinates.lat, item.coordinates.lng, item.hospital);
                        }
                    }, 250);
                    showToast(`Focusing live map on ${item.hospital}`, "info");
                }
            });
        });

        // Bind Respond as Donor button
        list.querySelectorAll("[data-emergency-respond]").forEach(btn => {
            btn.addEventListener("click", () => {
                const id = btn.dataset.emergencyRespond;
                const item = emergencies.find(e => e.id === id);
                if (item) {
                    item.fulfilled = Math.min(item.units, item.fulfilled + 1);
                    playEmergencyTone();
                    showToast(`Thank you! Your response is registered for ${item.patientName || item.hospital}. Attendant notified.`, "success");
                    addAudit(`Donor response registered for ${item.id}`, "Emergency", "Success");
                    renderEmergencies();
                    renderRecipientSpace();
                }
            });
        });
    }

    if (preview) {
        preview.innerHTML = emergencies
            .slice(0, 3)
            .map(emergency => emergencyPreviewHTML(emergency))
            .join("");
    }

}


function emergencyPreviewHTML(item) {

    const percent =
        Math.round(
            item.fulfilled /
            item.units *
            100
        );

    return `
        <article class="emergency-mini glass-card">
            <div class="emergency-mini-head">
                <span class="blood-chip">
                    ${item.blood}
                </span>
                <span class="urgency-chip">
                    ${item.urgency}
                </span>
            </div>
            <h3>${escapeHTML(item.hospital)}</h3>
            <p>
                ${escapeHTML(item.location)} · ${item.units} units required
            </p>
            <div class="emergency-progress">
                <span style="width:${Math.min(percent,100)}%"></span>
            </div>
            <div class="emergency-mini-footer">
                <span>${item.fulfilled}/${item.units} fulfilled</span>
                <span>${item.time}</span>
            </div>
        </article>
    `;

}


function emergencyHTML(item) {

    const percent = Math.round((item.fulfilled / item.units) * 100);
    const coordsText = item.coordinates
        ? `${item.coordinates.lat.toFixed(4)}, ${item.coordinates.lng.toFixed(4)}`
        : "21.1458, 79.0882";

    return `
        <article class="emergency-row glass-card">
            <div class="emergency-row-head">
                <div style="display:flex;align-items:center;gap:8px;">
                    <span class="blood-chip">${item.blood}</span>
                    <span class="urgency-chip">${item.urgency}</span>
                    ${item.patientName ? `<strong style="font-size:13px;color:var(--text);">${escapeHTML(item.patientName)}</strong>` : ""}
                </div>
                <span style="font-size:11px;color:var(--muted);">${item.time}</span>
            </div>

            <div style="margin: 8px 0;">
                <h3 style="margin-bottom:2px;">${escapeHTML(item.hospital)}</h3>
                <p style="font-size:12px;color:var(--muted);">
                    📍 ${escapeHTML(item.hospitalAddress || item.location)} ${item.patientWard ? `· <b>${escapeHTML(item.patientWard)}</b>` : ""}
                </p>
                <div style="margin-top:6px;display:flex;align-items:center;gap:6px;font-size:11px;">
                    <span style="color:var(--red);font-weight:700;">📍 Hospital Live Pin:</span>
                    <code style="background:rgba(37,99,235,0.08);padding:2px 6px;border-radius:4px;">${coordsText}</code>
                </div>
            </div>

            <div class="emergency-progress">
                <span style="width:${Math.min(percent, 100)}%"></span>
            </div>

            <div class="emergency-row-footer" style="margin-top:10px;">
                <span><b>${item.fulfilled}/${item.units} units</b> fulfilled (${percent}%)</span>
                <div style="display:flex;gap:6px;">
                    <button class="upload-pill" data-emergency-map="${item.id}" style="margin-top:0;padding:4px 10px;font-size:11px;">
                        <span>📍</span> View on Map
                    </button>
                    <button class="upload-pill" data-emergency-respond="${item.id}" style="margin-top:0;padding:4px 10px;font-size:11px;color:var(--green);border-color:var(--green);background:rgba(16,185,129,0.08);">
                        <span>🚑</span> Respond
                    </button>
                </div>
            </div>
        </article>
    `;

}


function updateRadius() {

    const value = Number($("#radiusSlider")?.value || 25);

    if ($("#radiusValue")) {
        $("#radiusValue").textContent = `${value} km`;
    }

    const reachable = Math.round(310 + value * 38);

    if ($("#reachableCount")) {
        $("#reachableCount").textContent = reachable.toLocaleString();
    }

    if (typeof emergencyRadiusCircle !== "undefined" && emergencyRadiusCircle) {
        emergencyRadiusCircle.setRadius(value * 1000);
    }

}


/* =========================================================
   AUDIO ALERT (EMERGENCY BROADCAST CHIME)
========================================================= */

function playEmergencyTone() {
    try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.connect(gain);
        gain.connect(ctx.destination);

        const now = ctx.currentTime;
        osc.frequency.setValueAtTime(880, now); // A5
        osc.frequency.setValueAtTime(1320, now + 0.14); // E6
        osc.frequency.setValueAtTime(880, now + 0.28); // A5

        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);

        osc.start(now);
        osc.stop(now + 0.5);
    } catch (e) {
        // AudioContext may require user interaction in strict contexts
    }
}


/* =========================================================
   DISTANCE CALCULATION HELPER (HAVERSINE)
========================================================= */

function getDistanceKm(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}


/* =========================================================
   INTERACTIVE CAMPS MAP & "SPOT NEAR ME" RADAR
========================================================= */

let campsMap = null;
let campMarkers = {};
let campMarkersGroup = null;
let userLocationMarker = null;

function initialiseCampsMap() {

    if (typeof L === "undefined") {
        setTimeout(initialiseCampsMap, 250);
        return;
    }

    const mapElement = $("#campsMap");
    if (!mapElement) return;

    try {
        campsMap = L.map("campsMap", { scrollWheelZoom: false }).setView([21.1458, 79.0882], 11);

        L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
            attribution: '&copy; OpenStreetMap &copy; CARTO',
            maxZoom: 19,
            subdomains: "abcd"
        }).addTo(campsMap);

        campMarkersGroup = L.featureGroup().addTo(campsMap);

        // Plot camp markers
        populateCampMarkers();

        // Connect View Switcher
        setupCampViewSwitcher();

        // Connect Spot Near Me and Controls
        $("#btnSpotNearMe")?.addEventListener("click", spotCampsNearMe);
        $("#spotCampsNearMeHeaderBtn")?.addEventListener("click", spotCampsNearMe);

        $("#mapRadiusSelect")?.addEventListener("change", (e) => {
            filterCampsByRadius(e.target.value);
        });

        $("#btnFitAllCamps")?.addEventListener("click", fitAllCamps);

    } catch (err) {
        console.error("Camps map initialisation error:", err);
    }

}


function populateCampMarkers() {

    if (!campsMap || !campMarkersGroup) return;

    campMarkersGroup.clearLayers();
    campMarkers = {};

    camps.forEach(camp => {
        if (!camp.lat || !camp.lng) return;

        const isOngoing = camp.status === "ongoing";
        const customIcon = L.divIcon({
            className: "custom-leaflet-pin",
            html: `<div class="marker-pin-bubble ${isOngoing ? "pin-camp-ongoing" : "pin-camp-upcoming"}"><span class="marker-radar-ring"></span><span>${isOngoing ? "●" : "◇"}</span></div>`,
            iconSize: [36, 36],
            iconAnchor: [18, 18],
            popupAnchor: [0, -18]
        });

        const marker = L.marker([camp.lat, camp.lng], { icon: customIcon });

        const popupContent = `
            <div class="map-popup-card">
                <div class="map-popup-header">
                    <span class="camp-status ${camp.status}">${isOngoing ? "● Ongoing" : "Upcoming"}</span>
                    <strong>${camp.location}</strong>
                </div>
                <h4 class="map-popup-title">${escapeHTML(camp.name)}</h4>
                <p class="map-popup-meta">📍 ${escapeHTML(camp.venue)}</p>
                <p class="map-popup-meta">📅 ${formatDate(camp.date)} · ${escapeHTML(camp.time)}</p>
                <p class="map-popup-meta">📏 ${camp.distance || "Nearby"}</p>
                <div class="map-popup-chips">
                    ${camp.bloodGroups.map(bg => `<span class="blood-chip">${bg}</span>`).join("")}
                </div>
                <div style="display:flex;gap:6px;margin-top:10px;">
                    <button class="primary-btn" style="padding:6px 12px;font-size:9px;" onclick="window.registerForCampById('${camp.id}')">
                        Register <span>→</span>
                    </button>
                    <a href="https://www.google.com/maps/dir/?api=1&destination=${camp.lat},${camp.lng}" target="_blank" class="secondary-btn" style="padding:6px 10px;font-size:9px;text-decoration:none;display:inline-flex;align-items:center;">
                        Directions ↗
                    </a>
                </div>
            </div>
        `;

        marker.bindPopup(popupContent, { maxWidth: 280, className: "glass-map-popup" });
        marker.addTo(campMarkersGroup);
        campMarkers[camp.id] = marker;
    });

}


window.registerForCampById = function(campId) {
    const camp = camps.find(c => c.id === campId);
    if (camp && typeof openRegistration === "function") {
        openRegistration(camp);
    }
};


function setupCampViewSwitcher() {

    const viewCardsBtn = $("#viewCardsBtn");
    const viewMapBtn = $("#viewMapBtn");
    const viewSplitBtn = $("#viewSplitBtn");
    const grid = $("#campGrid");
    const mapWrapper = $("#campsMapWrapper");
    const tabsBar = $("#campTabsBar");

    const setView = (view) => {
        appState.campView = view;

        viewCardsBtn?.classList.toggle("active", view === "cards");
        viewMapBtn?.classList.toggle("active", view === "map");
        viewSplitBtn?.classList.toggle("active", view === "split");

        const campsSection = $("#camps");

        if (view === "cards") {
            if (grid) grid.style.display = "grid";
            if (mapWrapper) mapWrapper.style.display = "none";
            if (tabsBar) tabsBar.style.display = "flex";
            campsSection?.classList.remove("camps-split-active");
        } else if (view === "map") {
            if (grid) grid.style.display = "none";
            if (mapWrapper) {
                mapWrapper.style.display = "block";
                mapWrapper.style.minHeight = "520px";
            }
            if (tabsBar) tabsBar.style.display = "none";
            campsSection?.classList.remove("camps-split-active");
            setTimeout(() => {
                if (campsMap) {
                    campsMap.invalidateSize();
                    fitAllCamps();
                }
            }, 180);
        } else if (view === "split") {
            if (grid) grid.style.display = "grid";
            if (mapWrapper) {
                mapWrapper.style.display = "block";
                mapWrapper.style.minHeight = "460px";
            }
            if (tabsBar) tabsBar.style.display = "flex";
            campsSection?.classList.add("camps-split-active");
            setTimeout(() => {
                if (campsMap) campsMap.invalidateSize();
            }, 180);
        }
    };

    viewCardsBtn?.addEventListener("click", () => setView("cards"));
    viewMapBtn?.addEventListener("click", () => setView("map"));
    viewSplitBtn?.addEventListener("click", () => setView("split"));

}


function spotCampOnMap(campId) {

    const camp = camps.find(c => c.id === campId);
    if (!camp || !camp.lat || !camp.lng) {
        showToast("Camp location not available on map.", "info");
        return;
    }

    navigateTo("camps");

    // If currently in cards view, switch to split or map
    if (appState.campView === "cards") {
        $("#viewSplitBtn")?.click();
    }

    setTimeout(() => {
        if (campsMap) {
            campsMap.invalidateSize();
            campsMap.flyTo([camp.lat, camp.lng], 14, { duration: 1.2 });
            const marker = campMarkers[camp.id];
            if (marker) {
                setTimeout(() => marker.openPopup(), 1200);
            }
        }
    }, 200);

    showToast(`Spotting ${camp.name} on map.`, "info");

}


function spotCampsNearMe() {

    if (appState.campView === "cards") {
        $("#viewSplitBtn")?.click();
    }

    showToast("Detecting live location to spot nearby blood camps...", "info");

    const onLocationFound = (lat, lng, label) => {
        if (userLocationMarker && campsMap) {
            campsMap.removeLayer(userLocationMarker);
        }

        const userIcon = L.divIcon({
            className: "custom-leaflet-pin",
            html: `<div class="marker-pin-bubble pin-user-location"><span class="marker-radar-ring"></span><span>📍</span></div>`,
            iconSize: [38, 38],
            iconAnchor: [19, 19],
            popupAnchor: [0, -19]
        });

        userLocationMarker = L.marker([lat, lng], { icon: userIcon })
            .bindPopup(`<b>Your Live Location</b><br><small>${label || 'Detected via GPS'}</small>`)
            .addTo(campsMap);

        // Recalculate distance to each camp
        camps.forEach(c => {
            if (c.lat && c.lng) {
                const d = getDistanceKm(lat, lng, c.lat, c.lng);
                c.distance = `${d.toFixed(1)} km`;
                c._distanceKm = d;
            }
        });

        // Re-sort camps by proximity
        camps.sort((a, b) => (a._distanceKm || 999) - (b._distanceKm || 999));

        renderCamps();
        populateCampMarkers();

        // Fit map bounds
        const allLayers = [userLocationMarker, ...Object.values(campMarkers)];
        const group = L.featureGroup(allLayers);
        campsMap.fitBounds(group.getBounds().pad(0.18));

        showToast(`Nearby camps spotted! Closest: ${camps[0].name} (${camps[0].distance}).`, "success");
    };

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            pos => onLocationFound(pos.coords.latitude, pos.coords.longitude, "Live GPS Position"),
            () => {
                // Fallback to Nagpur city centre
                onLocationFound(21.1458, 79.0882, "Nagpur Centre (Default)");
            },
            { timeout: 5000 }
        );
    } else {
        onLocationFound(21.1458, 79.0882, "Nagpur Centre (Default)");
    }

}


function filterCampsByRadius(radiusVal) {

    if (!campMarkersGroup || !campsMap) return;

    if (radiusVal === "all") {
        populateCampMarkers();
        fitAllCamps();
        return;
    }

    const maxKm = parseFloat(radiusVal);
    const center = userLocationMarker ? userLocationMarker.getLatLng() : L.latLng(21.1458, 79.0882);

    campMarkersGroup.clearLayers();

    camps.forEach(camp => {
        if (!camp.lat || !camp.lng) return;
        const d = getDistanceKm(center.lat, center.lng, camp.lat, camp.lng);
        if (d <= maxKm) {
            const marker = campMarkers[camp.id];
            if (marker) marker.addTo(campMarkersGroup);
        }
    });

    if (campMarkersGroup.getLayers().length > 0) {
        campsMap.fitBounds(campMarkersGroup.getBounds().pad(0.2));
        showToast(`${campMarkersGroup.getLayers().length} camp(s) found within ${maxKm} km.`, "info");
    } else {
        showToast(`No camps within ${maxKm} km. Expanding radius recommended.`, "warning");
    }

}


function fitAllCamps() {
    if (campMarkersGroup && campsMap && campMarkersGroup.getLayers().length > 0) {
        campsMap.fitBounds(campMarkersGroup.getBounds().pad(0.15));
    }
}


/* =========================================================
   HOSPITAL LIVE LOCATION PICKER MINI-MAP
========================================================= */

let pickerMap = null;
let pickerMarker = null;

function initialiseHospitalPicker() {

    if (typeof L === "undefined") {
        setTimeout(initialiseHospitalPicker, 300);
        return;
    }

    const pickerEl = $("#hospitalPickerMap");
    if (!pickerEl) return;

    try {
        const defaultLat = 21.1458, defaultLng = 79.0882;
        pickerMap = L.map("hospitalPickerMap", { scrollWheelZoom: false }).setView([defaultLat, defaultLng], 13);

        L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
            attribution: '&copy; CARTO',
            maxZoom: 18,
            subdomains: "abcd"
        }).addTo(pickerMap);

        const hospIcon = L.divIcon({
            className: "custom-leaflet-pin",
            html: `<div class="marker-pin-bubble pin-hospital-urgent"><span class="marker-radar-ring"></span><span>🏥</span></div>`,
            iconSize: [36, 36],
            iconAnchor: [18, 18]
        });

        pickerMarker = L.marker([defaultLat, defaultLng], { icon: hospIcon, draggable: true }).addTo(pickerMap);

        const setCoords = (lat, lng, label) => {
            pickerMarker.setLatLng([lat, lng]);
            if ($("#emergencyCoords")) {
                $("#emergencyCoords").value = `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
            }
            if ($("#pinCoordText")) {
                $("#pinCoordText").textContent = `${lat.toFixed(4)}, ${lng.toFixed(4)}${label ? " (" + label + ")" : ""}`;
            }
        };

        // When user drags marker
        pickerMarker.on("dragend", (e) => {
            const pos = e.target.getLatLng();
            setCoords(pos.lat, pos.lng, "Custom Drag Pin");
        });

        // When user clicks anywhere on picker map
        pickerMap.on("click", (e) => {
            setCoords(e.latlng.lat, e.latlng.lng, "Custom Click Pin");
        });

        // Preset selector listener
        $("#hospitalPresetSelect")?.addEventListener("change", (e) => {
            const val = e.target.value;
            if (!val) return;
            const parts = val.split(",");
            if (parts.length >= 4) {
                const pLat = parseFloat(parts[0]);
                const pLng = parseFloat(parts[1]);
                const pHosp = parts[2].trim();
                const pAddr = parts[3].trim();

                if ($("#emergencyHospital")) $("#emergencyHospital").value = pHosp;
                if ($("#emergencyHospitalAddress")) $("#emergencyHospitalAddress").value = pAddr;
                if ($("#emergencyLocation")) $("#emergencyLocation").value = pAddr.split(",").pop().trim();

                setCoords(pLat, pLng, pHosp);
                pickerMap.panTo([pLat, pLng]);
            }
        });

        // Detect GPS Button
        $("#btnDetectHospitalGPS")?.addEventListener("click", () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    pos => {
                        const { latitude, longitude } = pos.coords;
                        setCoords(latitude, longitude, "Live Attendant GPS");
                        pickerMap.setView([latitude, longitude], 15);
                        showToast("Live hospital GPS pin detected!", "success");
                    },
                    () => {
                        showToast("Could not access GPS. Using preset coordinates.", "info");
                    }
                );
            }
        });

    } catch (err) {
        console.error("Hospital picker initialisation error:", err);
    }

}


/* =========================================================
   EMERGENCY MOBILISATION RADAR MAP
========================================================= */

let emergencyMap = null;
let emergencyHospitalMarker = null;
let emergencyRadiusCircle = null;
let simulatedDonorMarkers = [];
let simulatedVectorLines = [];

function initialiseEmergencyMap() {

    if (typeof L === "undefined") {
        setTimeout(initialiseEmergencyMap, 300);
        return;
    }

    const emEl = $("#emergencyMap");
    if (!emEl) return;

    try {
        const defaultLat = 21.1458, defaultLng = 79.0882;
        emergencyMap = L.map("emergencyMap", { scrollWheelZoom: false }).setView([defaultLat, defaultLng], 12);

        L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
            attribution: '&copy; OpenStreetMap &copy; CARTO',
            maxZoom: 18,
            subdomains: "abcd"
        }).addTo(emergencyMap);

        // Hospital Marker
        const hospIcon = L.divIcon({
            className: "custom-leaflet-pin",
            html: `<div class="marker-pin-bubble pin-hospital-urgent"><span class="marker-radar-ring"></span><span>🏥</span></div>`,
            iconSize: [40, 40],
            iconAnchor: [20, 20],
            popupAnchor: [0, -20]
        });

        emergencyHospitalMarker = L.marker([defaultLat, defaultLng], { icon: hospIcon })
            .bindPopup("<b>CityCare Hospital (Active SOS)</b><br><small>Emergency Trauma Center • Nagpur</small>")
            .addTo(emergencyMap);

        // Broadcast radius circle
        emergencyRadiusCircle = L.circle([defaultLat, defaultLng], {
            radius: 25000,
            color: "#e11d48",
            fillColor: "#e11d48",
            fillOpacity: 0.08,
            weight: 1.5,
            dashArray: "4, 6"
        }).addTo(emergencyMap);

        // Plot simulated active donor response pins around hospital
        spawnSimulatedDonors(defaultLat, defaultLng);

        // Connect focus button
        $("#btnFocusHospital")?.addEventListener("click", () => {
            if (emergencyHospitalMarker) {
                const pos = emergencyHospitalMarker.getLatLng();
                emergencyMap.flyTo(pos, 14, { duration: 1.2 });
                emergencyHospitalMarker.openPopup();
            }
        });

        // Connect ping donors button
        $("#btnSimulateDonorPing")?.addEventListener("click", () => {
            playEmergencyTone();
            showToast("Pinging 1,284 verified donors within radius with hospital GPS pin...", "info");
            simulatedDonorMarkers.forEach((m, idx) => {
                setTimeout(() => {
                    const el = m.getElement();
                    if (el) el.classList.add("ping-burst");
                }, idx * 120);
            });
        });

    } catch (err) {
        console.error("Emergency map initialisation error:", err);
    }

}


function updateEmergencyMapCenter(lat, lng, hospitalName) {

    if (!emergencyMap) return;

    if (emergencyHospitalMarker) {
        emergencyHospitalMarker.setLatLng([lat, lng]);
        emergencyHospitalMarker.bindPopup(`<b>${escapeHTML(hospitalName || "Hospital")}</b><br><small>Live Emergency Admission Pin</small>`);
    }

    if (emergencyRadiusCircle) {
        emergencyRadiusCircle.setLatLng([lat, lng]);
    }

    spawnSimulatedDonors(lat, lng);

}


function spawnSimulatedDonors(centerLat, centerLng) {

    if (!emergencyMap) return;

    // Clear old donor pins & lines
    simulatedDonorMarkers.forEach(m => emergencyMap.removeLayer(m));
    simulatedVectorLines.forEach(l => emergencyMap.removeLayer(l));
    simulatedDonorMarkers = [];
    simulatedVectorLines = [];

    const donorOffsets = [
        { dLat: 0.022, dLng: -0.018, blood: "O+", name: "Dr. Alok S. (Civil Lines)" },
        { dLat: -0.015, dLng: 0.025, blood: "O+", name: "Priya D. (Dharampeth)" },
        { dLat: 0.038, dLng: 0.012, blood: "B+", name: "Suresh P. (Sadar)" },
        { dLat: -0.028, dLng: -0.031, blood: "A+", name: "Kavita M. (Dhantoli)" },
        { dLat: 0.014, dLng: 0.042, blood: "O-", name: "Rahul J. (Sitabuldi)" },
        { dLat: -0.041, dLng: 0.016, blood: "AB+", name: "Aarti N. (Medical Sq)" }
    ];

    donorOffsets.forEach(d => {
        const dLat = centerLat + d.dLat;
        const dLng = centerLng + d.dLng;

        const donorIcon = L.divIcon({
            className: "custom-leaflet-pin",
            html: `<div class="marker-pin-bubble pin-donor-marker"><span class="marker-radar-ring"></span><span>${d.blood}</span></div>`,
            iconSize: [30, 30],
            iconAnchor: [15, 15],
            popupAnchor: [0, -15]
        });

        const marker = L.marker([dLat, dLng], { icon: donorIcon })
            .bindPopup(`<b>${d.name}</b><br><small>Blood Group: <b>${d.blood}</b> • Opted-in Donor</small>`)
            .addTo(emergencyMap);

        const vectorLine = L.polyline([[dLat, dLng], [centerLat, centerLng]], {
            color: "#2563eb",
            weight: 1.2,
            dashArray: "3, 6",
            opacity: 0.5
        }).addTo(emergencyMap);

        simulatedDonorMarkers.push(marker);
        simulatedVectorLines.push(vectorLine);
    });

}


/* =========================================================
   LIVE EMERGENCY BROADCAST MODAL TICKER
========================================================= */

function triggerLiveEmergencyBroadcast(emergency) {

    const radiusVal = $("#radiusSlider")?.value || 25;
    const reachable = $("#reachableCount")?.textContent || "1,284";

    if ($("#broadcastNotifiedDonors")) $("#broadcastNotifiedDonors").textContent = reachable;
    if ($("#broadcastRadiusText")) $("#broadcastRadiusText").textContent = `${radiusVal} km`;
    if ($("#broadcastPatientName")) $("#broadcastPatientName").textContent = `${emergency.patientName || "Admitted Patient"} (${emergency.patientWard || "ICU"})`;
    if ($("#broadcastHospitalName")) $("#broadcastHospitalName").textContent = `${emergency.hospital} · ${emergency.hospitalAddress || emergency.location}`;
    if ($("#broadcastBloodBadge")) $("#broadcastBloodBadge").textContent = emergency.blood;
    if ($("#broadcastUnits")) $("#broadcastUnits").textContent = emergency.units;

    const coords = emergency.coordinates || { lat: 21.1458, lng: 79.0882 };
    if ($("#broadcastCoordinates")) {
        $("#broadcastCoordinates").textContent = `${coords.lat.toFixed(4)}° N, ${coords.lng.toFixed(4)}° E`;
    }

    if ($("#broadcastMapsLink")) {
        $("#broadcastMapsLink").href = `https://www.google.com/maps/dir/?api=1&destination=${coords.lat},${coords.lng}`;
    }

    const ticker = $("#broadcastTickerList");
    if (ticker) {
        ticker.innerHTML = `
            <div class="ticker-item highlight">
                <span>📲</span>
                <div>
                    <strong>SMS & App Notification Broadcast Initiated</strong>
                    <p>Alert dispatched to registered donors within ${radiusVal} km with live hospital GPS route.</p>
                </div>
            </div>
        `;

        setTimeout(() => {
            const item2 = document.createElement("div");
            item2.className = "ticker-item";
            item2.innerHTML = `
                <span>✓</span>
                <div>
                    <strong>Dr. Samir R. (Civil Lines) acknowledged emergency alert</strong>
                    <p>Blood Group: ${emergency.blood} • 1.8 km from ${emergency.hospital} • Mobilising</p>
                </div>
            `;
            ticker.prepend(item2);
        }, 1200);

        setTimeout(() => {
            const item3 = document.createElement("div");
            item3.className = "ticker-item";
            item3.innerHTML = `
                <span>✓</span>
                <div>
                    <strong>Priya Deshpande (Dharampeth) committed 1 Unit</strong>
                    <p>ETA to hospital: 14 mins • GPS Navigation active</p>
                </div>
            `;
            ticker.prepend(item3);
        }, 2400);

        setTimeout(() => {
            const item4 = document.createElement("div");
            item4.className = "ticker-item";
            item4.innerHTML = `
                <span>🚑</span>
                <div>
                    <strong>Blood Bank volunteer dispatch unit notified</strong>
                    <p>Coordination team ready for rapid verification & bedside matching.</p>
                </div>
            `;
            ticker.prepend(item4);
        }, 3600);
    }

    openModal("emergencyBroadcastModal");

    $("#broadcastAckBtn")?.addEventListener("click", () => {
        closeModal("emergencyBroadcastModal");
        navigateTo("emergency");
        setTimeout(() => {
            if (emergencyMap) {
                emergencyMap.invalidateSize();
                emergencyMap.flyTo([coords.lat, coords.lng], 14, { duration: 1.2 });
            }
        }, 200);
    }, { once: true });

}


/* =========================================================
   RECIPIENT SPACE IMPLEMENTATION
========================================================= */

function renderRecipientSpace() {

    const user = appState.user || {};
    const bloodNeeded = user.blood || "B+";

    // 1. Render Active Requests List
    const reqList = $("#recipientActiveRequestsList");
    if (reqList) {
        // Show emergencies relevant to recipient or all active
        const relevant = emergencies.slice(0, 3);
        if (!relevant.length) {
            reqList.innerHTML = `<div style="text-align:center;padding:24px;color:var(--muted);">No active blood requests. Click "Create Emergency Request" above.</div>`;
        } else {
            reqList.innerHTML = relevant.map(req => {
                const percent = Math.min(100, Math.round((req.fulfilled / req.units) * 100));
                const coordsText = req.coordinates
                    ? `${req.coordinates.lat.toFixed(4)}, ${req.coordinates.lng.toFixed(4)}`
                    : "21.1458, 79.0882";

                return `
                    <div class="glass-card" style="padding:16px;border-radius:var(--radius-lg);border-left:4px solid var(--red);">
                        <div style="display:flex;justify-content:space-between;align-items:flex-start;">
                            <div>
                                <div style="display:flex;align-items:center;gap:6px;">
                                    <span class="blood-chip" style="font-size:13px;padding:3px 8px;">${req.blood}</span>
                                    <strong style="font-size:14px;color:var(--text);">${escapeHTML(req.patientName || "Admitted Patient")}</strong>
                                    <span class="urgency-chip">${req.urgency}</span>
                                </div>
                                <p style="font-size:12.5px;color:var(--muted);margin-top:4px;">
                                    🏥 <b>${escapeHTML(req.hospital)}</b> · ${escapeHTML(req.hospitalAddress || req.location)} ${req.patientWard ? `(${escapeHTML(req.patientWard)})` : ""}
                                </p>
                            </div>
                            <span class="recipient-badge-tag" style="background:rgba(225,29,72,0.12);color:var(--red);">
                                ● ${req.time}
                            </span>
                        </div>

                        <div style="margin-top:10px;display:flex;justify-content:space-between;font-size:11.5px;color:var(--muted);">
                            <span>Progress: <b>${req.fulfilled} / ${req.units} Units Fulfilled</b></span>
                            <span style="font-weight:700;color:var(--text);">${percent}%</span>
                        </div>
                        <div class="progress-bar" style="margin-top:4px;">
                            <span style="width:${percent}%"></span>
                        </div>

                        <div style="margin-top:10px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;">
                            <div style="font-size:11px;color:var(--muted);">
                                📍 Live GPS: <code>${coordsText}</code>
                            </div>
                            <div style="display:flex;gap:6px;">
                                <button type="button" class="upload-pill" data-recip-map="${req.id}" style="margin-top:0;padding:4px 10px;font-size:11px;">
                                    <span>📍</span> View on Live Map
                                </button>
                                <button type="button" class="upload-pill" data-recip-rebroadcast="${req.id}" style="margin-top:0;padding:4px 10px;font-size:11px;color:var(--red);border-color:var(--red);background:rgba(225,29,72,0.08);">
                                    <span>📢</span> Re-broadcast Alert
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            }).join("");

            // Bind actions
            reqList.querySelectorAll("[data-recip-map]").forEach(btn => {
                btn.addEventListener("click", () => {
                    const id = btn.dataset.recipMap;
                    const item = emergencies.find(e => e.id === id);
                    if (item && item.coordinates) {
                        navigateTo("emergency");
                        setTimeout(() => {
                            if (emergencyMap) {
                                emergencyMap.invalidateSize();
                                emergencyMap.flyTo([item.coordinates.lat, item.coordinates.lng], 14, { duration: 1.2 });
                                updateEmergencyMapCenter(item.coordinates.lat, item.coordinates.lng, item.hospital);
                            }
                        }, 250);
                    }
                });
            });

            reqList.querySelectorAll("[data-recip-rebroadcast]").forEach(btn => {
                btn.addEventListener("click", () => {
                    const id = btn.dataset.recipRebroadcast;
                    const item = emergencies.find(e => e.id === id);
                    if (item) {
                        playEmergencyTone();
                        triggerLiveEmergencyBroadcast(item);
                    }
                });
            });
        }
    }

    // 2. Render Matched Donors Nearby
    const donorsList = $("#recipientMatchedDonors");
    if (donorsList) {
        const mockDonors = [
            { name: "Dr. Alok Sharma", blood: bloodNeeded, dist: "1.4 km", locality: "Civil Lines, Nagpur", verified: true, hla: "HLA-A*02 (Match)" },
            { name: "Priya Deshpande", blood: bloodNeeded, dist: "2.8 km", locality: "Dharampeth, Nagpur", verified: true, hla: "Standard Donor" },
            { name: "Rahul Joshi", blood: bloodNeeded, dist: "3.9 km", locality: "Ramdaspeth, Nagpur", verified: true, hla: "HLA-B*27 Compatible" },
            { name: "Kiran Waghmare", blood: bloodNeeded, dist: "5.2 km", locality: "Sitabuldi, Nagpur", verified: true, hla: "Standard Donor" }
        ];

        donorsList.innerHTML = mockDonors.map(d => `
            <div class="glass-card" style="padding:14px;border-radius:var(--radius-lg);display:flex;justify-content:space-between;align-items:center;">
                <div style="display:flex;align-items:center;gap:10px;">
                    <div class="org-dot" style="background:var(--primary);color:#fff;font-weight:700;font-size:12px;">
                        ${d.blood}
                    </div>
                    <div>
                        <strong style="font-size:13.5px;color:var(--text);">${d.name}</strong>
                        <div style="font-size:11.5px;color:var(--muted);margin-top:2px;">
                            📍 ${d.dist} away · ${d.locality}
                        </div>
                        <small style="font-size:10.5px;color:var(--primary);">${d.hla}</small>
                    </div>
                </div>
                <button type="button" class="upload-pill" data-ping-donor="${d.name}" style="margin-top:0;padding:5px 12px;font-size:11px;color:var(--primary);border-color:var(--primary);background:rgba(37,99,235,0.08);">
                    <span>📡</span> Request
                </button>
            </div>
        `).join("");

        donorsList.querySelectorAll("[data-ping-donor]").forEach(btn => {
            btn.addEventListener("click", () => {
                const name = btn.dataset.pingDonor;
                playEmergencyTone();
                btn.textContent = "✓ Pinged";
                btn.style.borderColor = "var(--green)";
                btn.style.color = "var(--green)";
                showToast(`Priority request ping sent to ${name} with hospital route.`, "success");
            });
        });
    }

    // Connect Recipient Header Button
    $("#recipientNewSOSBtn")?.addEventListener("click", () => {
        navigateTo("emergency");
        setTimeout(() => {
            $("#emergencyBlood")?.focus();
        }, 200);
    });

    $("#btnViewHospitalOnMapRecip")?.addEventListener("click", () => {
        navigateTo("emergency");
        setTimeout(() => {
            if (emergencyMap) {
                emergencyMap.invalidateSize();
                emergencyMap.flyTo([21.1458, 79.0882], 14, { duration: 1.2 });
            }
        }, 250);
    });

    $("#btnCallHospitalDoctor")?.addEventListener("click", () => {
        showToast("Connecting to Hospital Attendant Helpline: +91 712 2590001 (Dialing...)", "info");
    });

    $("#editRecipientProfile")?.addEventListener("click", () => {
        navigateTo("profile");
    });

}



/* =========================================================
   INTELLIGENCE
========================================================= */

function initialiseIntelligence() {

    $("#reminderSlider").addEventListener(
        "input",
        updateSimulation
    );

    $("#confirmationSlider").addEventListener(
        "input",
        updateSimulation
    );


    $("#demoModeButton").addEventListener(
        "click",
        runDemoScenario
    );


    $$("[data-action]").forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const action =
                        button.dataset.action;

                    handleAction(action);

                }
            );

        }
    );

}


function updateSimulation() {

    const reminder =
        Number(
            $("#reminderSlider").value
        );

    const confirmation =
        Number(
            $("#confirmationSlider").value
        );


    $("#reminderValue").textContent =
        `${reminder}%`;

    $("#confirmationValue").textContent =
        `${confirmation}%`;


    const predicted =
        Math.round(
            1284 *
            (
                .65 +
                reminder / 100 * .18 +
                confirmation / 100 * .17
            )
        );


    $("#simulationNumber")
        .textContent =
        Math.min(
            1500,
            predicted
        ).toLocaleString();

}


function runDemoScenario() {

    $("#reminderSlider").value = 90;
    $("#confirmationSlider").value = 88;

    updateSimulation();

    showToast(
        "National mobilisation demo scenario loaded.",
        "success"
    );

    addAudit(
        "Demo intelligence scenario executed",
        "Intelligence",
        "Success"
    );

}


function handleAction(action) {

    if (action === "reminder") {

        showToast(
            "32 donors are ready for reminder review.",
            "info"
        );

    }

    if (action === "language") {

        showToast(
            "Language analytics panel opened.",
            "info"
        );

    }

    if (action === "capacity") {

        navigateTo("camps");

        showToast(
            "High-capacity camps are shown.",
            "info"
        );

    }

    if (action === "saved") {

        showToast(
            "Saved camps panel loaded.",
            "info"
        );

    }

    if (action === "history") {

        showToast(
            "Donation activity history loaded.",
            "info"
        );

    }

}


/* =========================================================
   DONOR
========================================================= */

function initialiseDonor() {

    $("#openPassButton").addEventListener(
        "click",
        () => openModal("passModal")
    );


    $("#manageConsent").addEventListener(
        "click",
        () => {

            document
                .querySelector(".consent-card")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );


    $("#editProfile").addEventListener(
        "click",
        () => {

            showToast(
                "Profile editing interface opened.",
                "info"
            );

        }
    );


    $$(".consent-row input").forEach(
        input => {

            input.addEventListener(
                "change",
                () => {

                    const id =
                        input.id;

                    if (id === "emergencyConsent") {
                        appState.consent.emergency =
                            input.checked;
                    }

                    if (id === "whatsappConsent") {
                        appState.consent.whatsapp =
                            input.checked;
                    }

                    if (id === "smsConsent") {
                        appState.consent.sms =
                            input.checked;
                    }


                    localStorage.setItem(
                        "bloodConnectConsent",
                        JSON.stringify(
                            appState.consent
                        )
                    );


                    $("#emergencyConsentStatus")
                        .textContent =
                        appState.consent.emergency
                            ? "Enabled"
                            : "Disabled";


                    addAudit(
                        `Consent updated: ${id}`,
                        "Consent",
                        "Success"
                    );


                    showToast(
                        "Consent preference updated.",
                        "success"
                    );

                }
            );

        }
    );


    $("#downloadPass").addEventListener(
        "click",
        downloadPass
    );


    $("#printPass").addEventListener(
        "click",
        () => {

            window.print();

        }
    );

}


/* =========================================================
   SCANNER
========================================================= */

function initialiseScanner() {

    $("#simulateScan").addEventListener(
        "click",
        simulateScan
    );


    $("#manualScanButton").addEventListener(
        "click",
        manualScan
    );

}


function simulateScan() {

    const result =
        $("#scanResult");


    result.innerHTML = `
        <strong style="color:var(--green);">
            ✓ Check-in Successful
        </strong>
        <br>
        Welcome ${escapeHTML(appState.user.name)}
        (${escapeHTML(appState.user.blood || "O+")})
        <br>
        <small style="color:var(--muted);">
            Ticket verified at ${new Date().toLocaleTimeString()}
        </small>
    `;


    addAudit(
        "QR donor ticket scanned",
        "Scanner",
        "Success"
    );

    showToast(
        "Donor check-in successful.",
        "success"
    );

}


function manualScan() {

    const value =
        $("#manualTicket").value.trim();


    if (!value) {

        showToast(
            "Enter a phone number or ticket ID.",
            "warning"
        );

        return;

    }


    $("#scanResult").innerHTML = `
        <strong style="color:var(--green);">
            ✓ Ticket Recognized
        </strong>
        <br>
        Donor: ${escapeHTML(appState.user.name)}
        <br>
        Blood group: ${escapeHTML(appState.user.blood || "O+")}
        <br>
        Ticket: ${escapeHTML(value)}
    `;


    addAudit(
        "Manual ticket verification",
        "Scanner",
        "Success"
    );

}


/* =========================================================
   AUDIT
========================================================= */

function initialiseAudit() {

    $("#auditSearch").addEventListener(
        "input",
        renderAudit
    );


    $("#exportAudit").addEventListener(
        "click",
        exportAuditCSV
    );

}


function addAudit(
    action,
    module,
    status
) {

    const now =
        new Date();

    const time =
        now.toLocaleTimeString(
            [],
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        );


    auditLogs.unshift({

        time,

        action,

        user:
            appState.user.name,

        module,

        status

    });


    if (
        auditLogs.length > 100
    ) {

        auditLogs =
            auditLogs.slice(0,100);

    }


    renderAudit();

}


function renderAudit() {

    const table =
        $("#auditTable");

    if (!table) return;


    const query =
        $("#auditSearch")
            ?.value
            .trim()
            .toLowerCase() || "";


    const logs =
        auditLogs.filter(
            log =>
                !query ||
                log.action
                    .toLowerCase()
                    .includes(query) ||
                log.module
                    .toLowerCase()
                    .includes(query) ||
                log.user
                    .toLowerCase()
                    .includes(query)
        );


    table.innerHTML =
        logs.map(
            log => `

                <tr>

                    <td>${escapeHTML(log.time)}</td>

                    <td>
                        ${escapeHTML(log.action)}
                    </td>

                    <td>
                        ${escapeHTML(log.user)}
                    </td>

                    <td>
                        ${escapeHTML(log.module)}
                    </td>

                    <td>
                        <span class="status-chip">
                            ${escapeHTML(log.status)}
                        </span>
                    </td>

                </tr>

            `
        ).join("");

}


function exportAuditCSV() {

    const header =
        [
            "Time",
            "Action",
            "User",
            "Module",
            "Status"
        ].join(",");


    const rows =
        auditLogs.map(
            log =>
                [
                    log.time,
                    csvEscape(log.action),
                    csvEscape(log.user),
                    csvEscape(log.module),
                    log.status
                ].join(",")
        );


    downloadFile(
        "blood-connect-audit.csv",
        [
            header,
            ...rows
        ].join("\n"),
        "text/csv"
    );


    showToast(
        "Audit CSV exported.",
        "success"
    );

}


/* =========================================================
   NOTIFICATIONS
========================================================= */

function initialiseNotifications() {

    $("#notificationButton").addEventListener(
        "click",
        () => {

            $("#notificationPanel")
                .classList.add("open");

        }
    );


    $("#closeNotifications").addEventListener(
        "click",
        () => {

            $("#notificationPanel")
                .classList.remove("open");

        }
    );

}


/* =========================================================
   PROFILE MENU
========================================================= */

function initialiseProfile() {

    $("#profileButton").addEventListener(
        "click",
        () => {

            openModal("profileModal");

        }
    );


    $("#logoutButton").addEventListener(
        "click",
        () => {

            localStorage.removeItem(
                "bloodConnectLoggedIn"
            );

            closeModal("profileModal");

            $("#app").classList.add("hidden");

            $("#authScreen")
                .classList.remove("hidden");

            showToast(
                "You have been logged out.",
                "info"
            );

        }
    );


    $("#profileScanner").addEventListener(
        "click",
        () => {

            closeModal("profileModal");

            navigateTo("scanner");

        }
    );

}


/* =========================================================
   COMMAND PALETTE
========================================================= */

function initialiseCommandPalette() {

    $("#commandButton").addEventListener(
        "click",
        openCommandPalette
    );


    $("#commandSearch").addEventListener(
        "input",
        renderCommandResults
    );


    document.addEventListener(
        "keydown",
        event => {

            if (
                (event.ctrlKey || event.metaKey) &&
                event.key.toLowerCase() === "k"
            ) {

                event.preventDefault();

                openCommandPalette();

            }


            if (
                event.key === "Escape"
            ) {

                closeModal("commandModal");

            }

        }
    );


    renderCommandResults();

}


const commands = [

    {
        icon: "◇",
        title: "Find Camps",
        description: "Open upcoming and ongoing camps",
        section: "camps"
    },

    {
        icon: "+",
        title: "Emergency Response",
        description: "Create or review emergency requests",
        section: "emergency"
    },

    {
        icon: "✦",
        title: "Intelligence Centre",
        description: "Open turnout intelligence",
        section: "intelligence"
    },

    {
        icon: "♙",
        title: "My Donor Space",
        description: "Manage donor profile and consent",
        section: "donor"
    },

    {
        icon: "⌁",
        title: "QR Scanner",
        description: "Open camp check-in scanner",
        section: "scanner"
    },

    {
        icon: "◇",
        title: "Audit & Security",
        description: "Review platform activity",
        section: "audit"
    }

];


function openCommandPalette() {

    openModal("commandModal");

    setTimeout(
        () => {

            $("#commandSearch")
                .focus();

        },
        100
    );

}


function renderCommandResults() {

    const query =
        $("#commandSearch")
            ?.value
            .trim()
            .toLowerCase() || "";


    const results =
        commands.filter(
            command =>
                command.title
                    .toLowerCase()
                    .includes(query) ||
                command.description
                    .toLowerCase()
                    .includes(query)
        );


    $("#commandResults").innerHTML =
        results.map(
            command => `

                <button
                    class="command-item"
                    data-command-section="${command.section}"
                >

                    <span>
                        ${command.icon}
                    </span>

                    <div>

                        <strong>
                            ${command.title}
                        </strong>

                        <small>
                            ${command.description}
                        </small>

                    </div>

                </button>

            `
        ).join("");


    $("#commandResults")
        .querySelectorAll(
            "[data-command-section]"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        const section =
                            button.dataset.commandSection;

                        closeModal("commandModal");

                        navigateTo(section);

                    }
                );

            }
        );

}


/* =========================================================
   MODALS
========================================================= */

function initialiseModals() {

    $$("[data-close]").forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    closeModal(
                        button.dataset.close
                    );

                }
            );

        }
    );


    $$(".modal-overlay").forEach(
        overlay => {

            overlay.addEventListener(
                "click",
                event => {

                    if (
                        event.target === overlay
                    ) {

                        overlay.classList.remove(
                            "open"
                        );

                    }

                }
            );

        }
    );

}


function openModal(id) {

    const modal =
        document.getElementById(id);

    if (!modal) return;

    modal.classList.add("open");

}


function closeModal(id) {

    const modal =
        document.getElementById(id);

    if (!modal) return;

    modal.classList.remove("open");

}


/* =========================================================
   COUNTERS
========================================================= */

function initialiseCounters() {

    const counters =
        $$(".counter");

    counters.forEach(
        counter => {

            counter.textContent = "0";

        }
    );

}


function animateCounters() {

    $$(".counter").forEach(
        counter => {

            const target =
                Number(
                    counter.dataset.value
                );

            const duration =
                1200;

            const start =
                performance.now();


            function update(time) {

                const progress =
                    Math.min(
                        (time - start) /
                        duration,
                        1
                    );


                const value =
                    Math.floor(
                        progress * target
                    );


                counter.textContent =
                    value.toLocaleString();


                if (progress < 1) {

                    requestAnimationFrame(
                        update
                    );

                }

            }


            requestAnimationFrame(update);

        }
    );

}


/* =========================================================
   DIGITAL PASS DOWNLOAD
========================================================= */

function downloadPass() {

    const name =
        appState.user.name;

    const blood =
        appState.user.blood || "O+";

    const ticket =
        $("#passTicket").textContent;


    const content = `

BLOOD CONNECT
DIGITAL DONOR PASS

Donor: ${name}
Blood Group: ${blood}
Ticket ID: ${ticket}
Donor ID: ${appState.user.donorId}

This is a digital prototype donor pass.
Final medical eligibility is determined by qualified healthcare professionals.

    `;


    downloadFile(
        "blood-connect-donor-pass.txt",
        content,
        "text/plain"
    );


    showToast(
        "Digital donor pass downloaded.",
        "success"
    );

}


/* =========================================================
   UTILITY FUNCTIONS
========================================================= */

function formatDate(dateString) {

    const date =
        new Date(
            `${dateString}T12:00:00`
        );


    return date.toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    );

}


function todayISO() {

    const date =
        new Date();

    return [
        date.getFullYear(),
        String(
            date.getMonth() + 1
        ).padStart(2,"0"),
        String(
            date.getDate()
        ).padStart(2,"0")
    ].join("-");

}


function escapeHTML(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


function csvEscape(value) {

    return `"${String(value)
        .replaceAll('"','""')}"`;

}


function downloadFile(
    filename,
    content,
    type
) {

    const blob =
        new Blob(
            [content],
            {
                type
            }
        );


    const url =
        URL.createObjectURL(blob);


    const anchor =
        document.createElement("a");

    anchor.href = url;

    anchor.download =
        filename;

    document.body.appendChild(anchor);

    anchor.click();

    anchor.remove();

    URL.revokeObjectURL(url);

}


async function copyText(text) {

    try {

        await navigator.clipboard.writeText(
            text
        );

    } catch {

        const textarea =
            document.createElement("textarea");

        textarea.value = text;

        document.body.appendChild(textarea);

        textarea.select();

        document.execCommand("copy");

        textarea.remove();

    }

}


/* =========================================================
   TOAST
========================================================= */

function showToast(
    message,
    type = "success"
) {

    const container =
        $("#toastContainer");


    const toast =
        document.createElement("div");

    toast.className =
        "toast";


    const icon =
        type === "warning"
            ? "!"
            : type === "info"
                ? "i"
                : "✓";


    toast.innerHTML = `

        <div class="toast-icon">
            ${icon}
        </div>

        <div>

            <strong>
                ${
                    type === "warning"
                        ? "Attention"
                        : type === "info"
                            ? "Blood Connect"
                            : "Success"
                }
            </strong>

            <p>
                ${escapeHTML(message)}
            </p>

        </div>

        <button>×</button>

    `;


    toast.querySelector(
        "button"
    ).addEventListener(
        "click",
        () => toast.remove()
    );


    container.appendChild(toast);


    setTimeout(
        () => {

            toast.style.opacity = "0";
            toast.style.transform =
                "translateX(30px)";

            setTimeout(
                () => toast.remove(),
                300
            );

        },
        4000
    );

}
