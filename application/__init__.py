from flask import Flask
from application.secrets import secret_key

app = Flask(__name__)

from application.core.views import core
app.register_blueprint(core, url_prefix="/")
