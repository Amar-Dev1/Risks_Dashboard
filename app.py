from flask import Flask,render_template

app = Flask(__name__)


risk_data = {
    "labels": ["Critical", "High", "Medium"],
    "datasets": [
        {
            "label": "Risk Score",
            "data": [7, 8, 10],
            "backgroundColor": ["#fa0037", "#e5611a", "#f4ad28"],
            "hoverBackgroundColor": ["#fa0037", "#e5611a", "#f4ad28"],
            "borderWidth": 0,
            "borderRadius": 20,
        },
    ],
}

options = {
    "plugins": {"legend": {"display": False}},
    "cutout": "95%",
    "spacing": "5",
}

unresolvedRisks = [
    {
        "description": "VNC daemon doesn’t enforce Security Type",
        "website": "On www.example.io",
        "period": "Open for 88 days",
    },
    {
        "description": "Jira - [CvE-2019-8451] Unauthenticated Server-side request",
        "website": "On www.example.io",
        "period": "Open for 45 days",
    },
    {
        "description": "VNC daemon doesn’t enforce Security Type",
        "website": "On www.example.io",
        "period": "Open for 16 days",
    },
    {
        "description": "Exposed Elasticsearch Vulnerability in Elastic Stack",
        "website": "On 18.192.0.120",
        "period": "Open for 16 days",
    },
    {
        "description": "IIS Tilde Enumeration",
        "website": "On careers.example.com",
        "period": "Open for 8 days",
    },
]
assets = [
    {"type": "Assets", "number": "88"},
    {"type": "Domains", "number": "104"},
    {"type": "IPs", "number": "263"},
]
domains = [
    {
        "description": "access.example.io",
        "website": "Services:80/http,443/https",
        "date": "Today",
    },
    {
        "description": "account.example.io",
        "website": "Services:80/http",
        "period": "May 23",
    },
    {
        "description": "dev.example.io",
        "website": "443/https",
        "period": "May 11",
    },
    {
        "description": "www.example.io",
        "website": "Services:80/http,443/https,8443/http",
        "period": "May 11",
    },
    {
        "description": "test.example.io",
        "website": "8443/http",
        "period": "8 Jan",
    },
]


@app.route("/")
@app.route("/dashboard")
def home():
    return render_template(
        "dashboard.html",
        risk_data=risk_data,
        options=options,
        title="Dashboard",
        unresolvedRisks=unresolvedRisks,
        assets=assets,
        domains=domains,
    )


if __name__ == "__main__":
    app.run(debug=True)
