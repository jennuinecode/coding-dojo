from flask import Flask, flash
import re


def validate_registration(form, db):

    email = form['email']

    if not re.match( r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)", email):
        flash("Please enter a valid email address.")

    users = 'SELECT * FROM users WHERE users.email = :email'
    data = {
        'email': email
    }
    users = db.query_db(users, data)

    if users:
        flash("Please use an original email. This one has already been used.")



def insert_user(form, db):
    users= 'INSERT INTO users (users.email, users.created_at, users.updated_at) values (:email, NOW(), NOW())'

    data = {
        'email'         : form['email'],
    }

    db.query_db(query, data)
