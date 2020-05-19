from flask import render_template, Blueprint, redirect, url_for, flash, request

core = Blueprint('core', __name__, template_folder = 'templates/core')

@core.route('/')
def index():
    return render_template('index.html')