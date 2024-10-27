// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Dynamically Load Projects
const projects = [
    {
        title: "AWS Infrastructure Setup",
        description: "Automated AWS infrastructure deployment using Terraform for scalable, highly available web applications.",
        image: "project1.jpg",
        link: "#"
    },
    {
        title: "CI/CD Pipeline with Jenkins",
        description: "Developed a Jenkins CI/CD pipeline for streamlined code integration, testing, and deployment across environments.",
        image: "project2.jpg",
        link: "#"
    },
    {
        title: "Kubernetes Cluster Management",
        description: "Orchestrated a Kubernetes cluster to manage containerized applications, ensuring efficient scaling and high availability.",
        image: "project3.jpg",
        link: "#"
    },
    {
        title: "Dockerized Microservices",
        description: "Implemented microservices architecture using Docker for seamless deployment and integration of services.",
        image: "project4.jpg",
        link: "#"
    },
    {
        title: "Monitoring with Prometheus",
        description: "Set up Prometheus and Grafana for monitoring server metrics, visualizing data, and alerting on critical metrics.",
        image: "project5.jpg",
        link: "#"
    },
    {
        title: "Server Automation Scripts",
        description: "Created Bash scripts for automated server setups, maintenance, and backups for improved operational efficiency.",
        image: "project6.jpg",
        link: "#"
    }
];

const projectsContainer = document.querySelector('.projects-grid');

// Function to create a project card with animation
const createProjectCard = (project) => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
    projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <div class="project-info">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <a href="${project.link}" class="project-link">View Project</a>
        </div>
    `;
    // Add animation class
    projectCard.classList.add('fade-in');
    projectsContainer.appendChild(projectCard);
};

// Load projects with delay for better visuals
projects.forEach((project, index) => {
    setTimeout(() => {
        createProjectCard(project);
    }, index * 300); // Adjust the delay for animation effect
});

// Contact Form Submission Handler
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Simple validation (you can add more)
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Send the form data to the server
    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.text();
    })
    .then(data => {
        alert('Your message has been sent successfully!');
        this.reset();
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        alert('There was a problem sending your message. Please try again later.');
    });
});
