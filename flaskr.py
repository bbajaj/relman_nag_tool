from __future__ import with_statement
import flask, flask.views
from flask.ext.sqlalchemy import SQLAlchemy
import os
import functools
import phonebook
from contextlib import closing
import demo

app = Flask(__name__)
app.config.from_envvar('Db_config', silent=True)
#db = SQLAlchemy(app)
def connect_db():
    return sqlite3.connect(app.config['DATABASE'])

def init_db():
    with closing(connect_db()) as db:
        with app.open_resource('schema.sql') as f:
            db.cursor().executescript(f.read())
        db.commit()
        
@app.before_request
def before_request():
    g.db = connect_db()

@app.teardown_request
def teardown_request(exception):
    g.db.close()
    
@app.route('/')
def show_template():
    cur = g.db.execute('select template_title, template_body from list_templates order by id desc')
    template = [dict(template_title=row[0], template_body=row[1]) for row in cur.fetchall()]
    return render_template('show_temaplte.html', template=template)

@app.route('/add', methods=['POST'])
@login_required
def add_template():
    #if not session.get('logged_in'):
     #   abort(401)
    g.db.execute('insert into list_templates (template_title, template_body) values (?, ?)',
                 [request.form['template_title'], request.form['template_body']])
    g.db.commit()
    flash('New entry was successfully posted')
    return redirect(url_for('show_template'))



if __name__ == '__main__':
    app.run()

"""class ListTemplates(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    template_title = db.Column(db.String(80), unique=True)
    template_body = db.Column(db.text)

    def __init__(self, template_title, template_body):
        self.template_title = template_title
        self.template_body = template_body

    def __repr__(self):
        return '<User %r>' % self.template_title """