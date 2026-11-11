/* General Styling */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f4f6f9;
    color: #333;
}


/* Navigation */

header {
    background-color: #111827;
    position: sticky;
    top: 0;
    z-index: 100;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 8%;
}

.logo {
    color: #38bdf8;
    font-size: 25px;
}

.navbar ul {
    display: flex;
    list-style: none;
    gap: 25px;
}

.navbar a {
    color: white;
    text-decoration: none;
    font-size: 15px;
}

.navbar a:hover {
    color: #38bdf8;
}


/* Home Section */

.hero {
    min-height: 90vh;
    background: linear-gradient(135deg, #111827, #1e3a5f);
    display: flex;
    align-items: center;
    padding: 50px 10%;
    color: white;
}

.hero-content h3 {
    font-size: 25px;
    margin-bottom: 15px;
}

.hero-content h1 {
    font-size: 55px;
    color: #38bdf8;
    margin-bottom: 15px;
}

.hero-content h2 {
    font-size: 25px;
    margin-bottom: 20px;
}

.hero-content p {
    font-size: 18px;
    line-height: 1.7;
    max-width: 600px;
    margin-bottom: 30px;
}


/* Buttons */

.btn {
    display: inline-block;
    background-color: #0ea5e9;
    color: white;
    padding: 13px 25px;
    border: none;
    border-radius: 6px;
    text-decoration: none;
    cursor: pointer;
    font-size: 16px;
}

.btn:hover {
    background-color: #0284c7;
}


/* General Sections */

.section {
    padding: 80px 10%;
    text-align: center;
}

.section h2 {
    font-size: 35px;
    margin-bottom: 35px;
    color: #0f172a;
}

.section p {
    line-height: 1.8;
    font-size: 17px;
}


/* Skills */

.skills-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.skill-card {
    background: white;
    padding: 30px;
    border-radius: 10px;
    font-size: 20px;
    font-weight: bold;
    box-shadow: 0 4px 10px #00000015;
    transition: 0.3s;
}

.skill-card:hover {
    transform: translateY(-8px);
    background-color: #e0f2fe;
}


/* Cards */

.card {
    background: white;
    padding: 30px;
    margin: 15px auto;
    border-radius: 10px;
    box-shadow: 0 4px 10px #00000015;
    max-width: 700px;
}

.card h3 {
    margin-bottom: 15px;
    color: #0284c7;
}


/* Projects */

.project-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.project-container .card {
    width: 100%;
}


/* Contact Form */

form {
    max-width: 550px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

input,
textarea {
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 16px;
}

textarea {
    height: 130px;
    resize: vertical;
}


/* Footer */

footer {
    background-color: #111827;
    color: white;
    text-align: center;
    padding: 25px;
}


/* Responsive Design */

@media (max-width: 768px) {

    .navbar {
        flex-direction: column;
        gap: 20px;
    }

    .navbar ul {
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
    }

    .hero-content h1 {
        font-size: 38px;
    }

    .hero-content h2 {
        font-size: 20px;
    }

    .skills-container {
        grid-template-columns: repeat(2, 1fr);
    }

    .project-container {
        grid-template-columns: 1fr;
    }

}

@media (max-width: 450px) {

    .skills-container {
        grid-template-columns: 1fr;
    }

}