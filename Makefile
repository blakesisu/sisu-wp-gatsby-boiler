default: run

run: start

start:
	docker-compose up --build

build-nocache:
	docker-compose build --no-cache && 

stop:
	docker-compose down

init:
	./wp-cli-init.sh
