import sys
import time
from pathlib import Path
import pickle as pkl
from importlib.resources import files as imp_files
from importlib.metadata import version as get_version
from contextlib import contextmanager
import requests as rqs
from bottle import Bottle, route, run, static_file

app = Bottle() # Explicit app instance



# Define a route for the home page
@app.route('/')
def home():
    return static_file('index.html', root=str('dist'))

@app.error(404)
def error404(error):
    return static_file('404.html', root=str('dist'))

@app.route('/assets/<filepath:path>')
def server_static(filepath):
    # Note that requests cannot escape (see parents) of root directory
    return static_file(filepath, root=str('dist/assets'))

if __name__ == '__main__':
    host, port = 'localhost', 8000
    app.run(host=host, port=port)
