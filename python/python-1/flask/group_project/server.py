from flask import Flask , render_template, redirect, request, session
app = Flask(__name__)
app.secret_key = "ilikedonutsandpie"

team = []

@app.route('/', methods=['POST', 'GET'])
def index():





    return render_template('index.html')



@app.route('/players', methods=['POST', 'GET'])
def players():
    session['name'] = request.form['name']
    session['jersey_number'] = request.form['jersey_number']
    session['team'] = request.form['team']

    player = {
        'player_name' : session['name'] ,
        'player_number' : session['jersey_number'] ,
        'player_team' : session['team']
    }
    team.append(player)



    print team
    return render_template('player.html' , team=team)








app.run(debug=True)
