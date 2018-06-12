######################################
##       MAKEFILE FOR PROJECT       ##
######################################

.SILENT:
.PHONY: tests build

COMPOSE_CMD = docker-compose


#####
## Executed when you run "make" cmd
## Simply run "help" tasks
all: help


#####
## Install dependencies and start development server
start:
	$(COMPOSE_CMD) run --rm node yarn install && yarn start


#####
## Start new bash terminal inside the Nodejs Container
ssh:
	$(COMPOSE_CMD) run --rm node bash


#####
## Lint js code
lint:
	$(COMPOSE_CMD) run --rm node yarn run eslint src


#####
## Lint & Fix js code
lint.fix:
	$(COMPOSE_CMD) run --rm node yarn run eslint src --fix


#####
## Create new release of app, demo url is localhost:8080
build.prod:
	rm -rf build
	$(COMPOSE_CMD) run --rm node yarn build


#####
## Create new release of app, demo url is localhost:8080
release.staging: build.prod
	docker build -t react-pendu:prod -f .docker/Dockerfile .
	docker stop react-pendu && docker rm react-pendu
	docker run -d --name react-pendu -p 8080:80 react-pendu:prod


#####
## Create new release of app for production
release.prod: build.prod
	docker login
	docker build -t rhyu/react-pendu:prod -f .docker/Dockerfile https://github.com/Thibaut-gauvin/penduReact#master
	docker push rhyu/react-pendu:prod


#####
## Display available make tasks
help:
	@echo 'Recipes List:'
	@echo ''
	@echo 'make <recipes>'
	@echo ''
	@echo '+-----------------+--------------------------------------------------------------------+'
	@echo '| Recipes         | Utility                                                            |'
	@echo '+-----------------+--------------------------------------------------------------------+'
	@echo '| start           | Install dependencies and start development server                  |'
	@echo '| ssh             | Start new bash terminal inside the Nodejs Container                |'
	@echo '| lint            | Lint js code                                                       |'
	@echo '| lint.fix        | Lint & Fix js code                                                 |'
	@echo '| release.staging | Create new release of app, demo url is localhost:8080              |'
	@echo '+-----------------+--------------------------------------------------------------------+'
	@echo ''
