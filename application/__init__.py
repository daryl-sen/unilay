from flask import Flask
from application.secrets import secret_key

app = Flask(__name__)

app.config['SECRET_KEY'] = secrets.secret_key

from application.core.views import core
app.register_blueprint(core, url_prefix="/")
