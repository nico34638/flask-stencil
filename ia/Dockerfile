FROM python:3.7-alpine

WORKDIR /code

ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0


RUN apk add --no-cache gcc musl-dev linux-headers
RUN apk add --no-cache bash

RUN apk add --no-cache libstdc++ 
RUN apk add --no-cache g++ 
COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

EXPOSE 6000
COPY . .
CMD ["flask", "run"]