from flask import Flask, render_template, flash
from validations import validate_registration, insert_user
from MySQLConnection import MySQLConnector

flask = Flask(__name__)
app.secret_key = "thisisthesupersecretkey"
db = mysqlconnector(app, 'emailval')

@app.route('/')
def index():

    return render_template('index.html')

@app.route('/success', methods=['POST'])
def success():
    insert_user(request.form, db)
    return render_temaplate('success.html', users = users)

app.run(debug=True)
