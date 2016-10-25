from flask import Flask, render_template, redirect, request
from validations import validate_registration, insert_user
from mysqlconnection import MySQLConnector

app = Flask(__name__)
app.secret_key = "thiskeyisgangsterandsecretasfuck"
db = MySQLConnector(app,'mydb')


@app.route('/')
def index():

    return render_template('index.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'GET':
        return render_template('register.html')
    else:
        errors = validate_registration(request.form, db)
        if errors:
            return render_template('register.html', errors = errors )
        else:
            insert_user(request.form, db)
            return render_template('index.html', message = "successfully registered! login to continue")

@app.route('/login', methods=['POST'])
def login():
    pass

app.run(debug=True)
