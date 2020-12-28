from flask import Flask, Blueprint, jsonify, request
from http import HTTPStatus

from flask_swagger import swagger
from flask_swagger_ui import get_swaggerui_blueprint

from flask_cors import CORS

from flask_socketio import SocketIO, send, emit

from ma import ma
from db import db

from model.product import Product
from model.message import Message


import os
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:toor@db/api'

db.init_app(app)
ma.init_app(app)


app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, cors_allowed_origins="*")


SWAGGER_URL = '/api/docs'  # URL for exposing Swagger UI (without trailing '/')
# Our API url (can of course be a local resource)
API_URL = 'http://localhost:5000/static/swagger.json'

# Call factory function to create our blueprint
swaggerui_blueprint = get_swaggerui_blueprint(
    # Swagger UI static files will be mapped to '{SWAGGER_URL}/dist/'
    SWAGGER_URL,
    API_URL,
    config={  # Swagger UI config overrides
        'app_name': "Test application"
    },
    # oauth_config={  # OAuth config. See https://github.com/swagger-api/swagger-ui#oauth2-configuration .
    #    'clientId': "your-client-id",
    #    'clientSecret': "your-client-secret-if-required",
    #    'realm': "your-realms",
    #    'appName': "your-app-name",
    #    'scopeSeparator': " ",
    #    'additionalQueryStringParams': {'test': "hello"}
    # }
)

app.register_blueprint(swaggerui_blueprint)


@app.before_first_request
def init_database():
    db.create_all()
    print("frist")


@app.route('/')
def welcome():
    # return a json
    return jsonify({'status': 'api working'})


@app.route('/products', methods=['GET'])
def get_products():
    products = Product.find_all()
    return jsonify([Product.json(product) for product in products])


@app.route('/products/<int:id>', methods=['GET'])
def get_one_product(id):
    product = Product.find_by_id(id)
    return jsonify(product.json())


@app.route('/products', methods=['POST'])
def add_product():
    data = request.get_json()

    product = Product(data.get('title'), data.get(
        'description'), data.get('price'))

    app.logger.info('%s vient detre ajouter', product.json())
    product.save()
    return {
        "created": "ok",
        "product": product.json()
    }, HTTPStatus.CREATED


@app.route('/products/<int:id>', methods=['DELETE'])
def delete_product(id):
    product = Product.find_by_id(id)
    Product.delete(product)
    return {
        'delete': 'ok',
        'product': product.json()
    }, 200


@app.route("/spec")
def spec():
    swag = swagger(app)
    swag['info']['version'] = "1.0"
    swag['info']['title'] = "My API"
    return jsonify(swag)


@socketio.on('add_message')
def handle_message(data):
    app.logger.info('received message: %s', data)
    app.logger.info('message %s', data.get('message'))
    data = data.get('message')
    message = Message(data.get('username'), data.get(
        'message'))
    message.save()

    #app.logger.info("test %s", data.message)
    emit('add_message', 'message recu')


@socketio.on('init')
def init(data):
    app.logger.info('init message: %s', data)
    emit('init', 'initilaisation ok')


@socketio.on('ping')
def receive_ping(data):
    app.logger.info('ping')
    emit('ping', 'pong')


@socketio.on('pong')
def receive_pong(data):
    app.logger.info('pong')
    emit('pong', 'ping')


@app.route('/messages')
def get_all_messages():
    messages = Message.find_all()
    return jsonify([Message.json(message) for message in messages])


if __name__ == '__main__':
    print(db)
    socketio.run(app, host="localhost")
    app.run(port=5000, debug=True)
