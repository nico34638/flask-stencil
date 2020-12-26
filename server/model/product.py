from ma import ma
from db import db

from model.BaseModel import BaseModel


from typing import List


class Product(BaseModel):

    __tablename__ = "product"

    title = db.Column(db.String(255))
    description = db.Column(db.String(255))
    price = db.Column(db.Integer)

    def __init__(self, title, description, price):
        self.title = title
        self.description = description
        self.price = price

    def __repr__(self):
        return 'Product(title=%s, description=%s,price=%s)' % (self.title, self.description, self.price)

    def json(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'price': self.price
        }

    @classmethod
    def save_product(self):
        db.session.add(self)
        db.session.commit()

    @classmethod
    def find_all(cls) -> List["Product"]:
        return cls.query.all()

    @classmethod
    def find_by_id(cls, id) -> 'Product':
        return cls.query.filter_by(id=id).first()

