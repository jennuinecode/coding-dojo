from flask import Flask, render_template, request, redirect
app = Flask(__name__)

app.secret_key = "i am a secret key! super secret!"

@app.route('/')
def index():
    if session.get('name'):
        name = session['name']
    return render_template('index.html')

@app.route('/process', methods =['POST'])
def process():
        print "in process method"
        print request.form
        session['name'] = request.form['first_name']

        return redirect('/')









app.run(debug=True)
