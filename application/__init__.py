from flask import Flask
import application.secrets as secrets

app = Flask(__name__)

app.config['SECRET_KEY'] = secrets.secret_key

from application.core.views import core
app.register_blueprint(core, url_prefix="/")
