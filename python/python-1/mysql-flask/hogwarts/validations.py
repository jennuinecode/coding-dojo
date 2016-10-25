import re

def validate_registration(form, db):
    first_name = form['first_name']
    last_name = form['last_name']
    email = form['email']
    password = form['password']

    errors = []

    if len(first_name) < 1:
        errors.append("don't act like you don't have a first name. enter a valid one, son.")
    if len(last_name) < 1:
        errors.append("don't act like you don't have a first name. enter a valid one, bruh.")
    if not re.match( r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)", email):
        errors.append("you better enter a valid email unless you wanna get shanked, boyyyy")
    if len(password) < 4:
        errors.append("that password is weak as shit. make it for characters or longer.")

    query = 'SELECT * FROM users WHERE users.email = :email'
    data = {
        'email': email
    }
    users = db.query_db(query, data)
    if users:
        errors.append("Don't try and steal someone's email. Get your own, homez.")

    return errors


def insert_user(form, db):
    query = 'INSERT INTO users (users.first_name, users.last_name, users.email, users.password, users.created_at, users.updated_at) values (:first_name, :last_name, :email, :password, NOW(), NOW())'

    data = {
        'first_name'    : form['first_name'],
        'last_name'     : form['last_name'],
        'email'         : form['email'],
        'password'      : form['password']
    }

    db.query_db(query, data)
