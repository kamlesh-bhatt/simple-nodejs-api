FROM ubuntu:18.04

# setting up enviornment variables
ENV DB_HOST=db-host \
    DB_DATABASE=application \
    DB_USERNAME=root \
    DB_PASSWORD=password \
    NODE_ENV=docker

# installing required packages.
RUN apt-get update -y && apt-get install -y \
	supervisor \
	nginx \
	curl \
	make \
	gnupg

COPY ./docker/nginx.conf /etc/nginx/sites-enabled/default
COPY ./docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# routing nginx logs to docker-logs
RUN ln -sf /dev/stdout /var/log/nginx/access.log && \
	ln -sf /dev/stdout /var/log/nginx/error.log

RUN curl -sL https://deb.nodesource.com/setup_8.x | bash
RUN apt-get install nodejs -y
RUN npm install -g yarn pm2

WORKDIR /app
COPY . /app

CMD ["/usr/bin/supervisord"]
