from flask import Flask,render_template
from content import risk_data,options,unresolvedRisks,assets,domains

app = Flask(__name__)

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
