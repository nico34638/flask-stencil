from ma import ma
from db import db

from model.BaseModel import BaseModel

from typing import List


class Message(BaseModel):

    __tablename__ = "message"

    username = db.Column(db.String(255))
    message = db.Column(db.String(255))

    def __init__(self, username, message):
        self.username = username
        self.message = message

    def __repr__(self):
        return 'Message(username=%s, description=%s)' % (self.username, self.message)

    def json(self):
        return {
            'id': self.id,
            'username': self.username,
            'message': self.message
        }

    @classmethod
    def find_all(cls) -> List["Message"]:
        return cls.query.all()

    @classmethod
    def find_by_id(cls, id) -> 'Message':
        return cls.query.filter_by(id=id).first()
