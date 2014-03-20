# all the imports
import sqlite3
from flask import Flask, request, session, g, redirect, url_for, \
     abort, render_template, flash

# configuration
DATABASE = flask.Flask(__name__).root_path + '/db/flaskr.db'
DEBUG = True
SECRET_KEY = 'iphone'
USERNAME = 'admin'
PASSWORD = 'default'