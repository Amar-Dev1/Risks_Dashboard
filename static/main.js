
document.addEventListener("DOMContentLoaded", () => {

  // set risk data
  const riskData = getRiskData();

  const criticalSpan = document.getElementById("critical-data");
  const highSpan = document.getElementById("high-data");
  const mediumSpan = document.getElementById("medium-data");

  // span content
  criticalSpan.textContent = riskData.datasets[0].data[0];
  highSpan.textContent = riskData.datasets[0].data[1];
  mediumSpan.textContent = riskData.datasets[0].data[2];

  // small color
  const criticalSmall = document.getElementById("critical-small");
  const highSmall = document.getElementById("high-small");
  const mediumSmall = document.getElementById("medium-small");

  criticalSmall.style.backgroundColor = riskData.datasets[0].backgroundColor[0];
  highSmall.style.backgroundColor = riskData.datasets[0].backgroundColor[1];
  mediumSmall.style.backgroundColor = riskData.datasets[0].backgroundColor[2];

  // set unresolved risks data
  const unresolvedData = getUnResolvedRisksData();

  // Get all nav links
  const links = document.querySelectorAll(".nav-link");

  // Add event listeners to each link
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      // Prevent the default link behavior
      e.preventDefault();

      // Remove 'active' class from all links
      links.forEach((lnk) => lnk.classList.remove("active"));

      // Add 'active' class to the clicked link
      link.classList.add("active");
    });
  });
});

// chart.js
// this is 

const riskData = {
  labels: ['Critical', 'High', 'Medium'],
  datasets: [
    {
      label: 'Risk Score',
      data: [7, 8, 10],
      backgroundColor: ['#fa0037', '#e5611a', '#f4ad28'],
      hoverBackgroundColor: ['#fa0037', '#e5611a', '#f4ad28'],
      borderWidth: 0,
      borderRadius: 20,
    },
  ],
};
const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  cutout: '95%',
  spacing: '5',
};

const ctx = document.getElementById('Risk-chart').getContext('2d');

new Chart(ctx, {
  type: 'doughnut',
  data: riskData,
  options: options
});

function getRiskData() {
  return riskData
}

// UnResolved Risks

const unresolvedRisksData = [
  {
    "p": "VNC daemon doesn’t enforce Security Type",
    "des": "On www.example.io",
    "date": "Open for 88 days",
  },
  {
    "p": "Jira - [CvE-2019-8451] Unauthenticated Server-side request",
    "des": "On www.example.io",
    "date": "Open for 45 days",
  },
  {
    "p": "VNC daemon doesn’t enforce Security Type",
    "des": "On www.example.io",
    "date": "Open for 16 days",
  },
  {
    "p": "Exposed Elasticsearch Vulnerability in Elastic Stack",
    "des": "On 18.192.0.120",
    "date": "Open for 16 days",
  },
  {
    "p": "IIS Tilde Enumeration",
    "des": "On careers.example.com",
    "date": "Open for 8 days",
  },
]
function getUnResolvedRisksData() {
  return unresolvedRisksData
}