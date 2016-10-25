from flask import Flask, session, render_template
app = Flask(__name__)
app.secret_key = "asdfjkl12347890"

@app.route('/', methods=['GET', 'POST'])
def index():
    if 'activities' not in session:
        session['activities'] = "HEY!"


    return render_template('index.html')


# @app.route('/process_money', methods=['POST'])
# def process():


app.run(debug=True)
