######################################
##       MAKEFILE FOR PROJECT       ##
######################################

.SILENT:
.PHONY: tests build


DOCKER_CMD = docker run --rm --tty --interactive --name node --user node --publish 3000:3000 --volume $$PWD:/home/docker --workdir /home/docker node:9-jessie


#####
## Executed when you run "make" cmd
## Simply run "help" tasks
all: help


#####
## Install dependencies and start development server
start:
	$(DOCKER_CMD) yarn install && yarn start


#####
## Start new bash terminal inside the Nodejs Container
ssh:
	$(DOCKER_CMD) /bin/bash


#####
## Lint js code
lint:
	$(DOCKER_CMD) yarn run eslint src


#####
## Lint & Fix js code
lint.fix:
	$(DOCKER_CMD) yarn run eslint src --fix


#####
## Build app for production
build.prod:
	rm -rf build
	$(DOCKER_CMD) yarn build


#####
## Create new release of app, demo url is localhost:8080
release.demo: build.prod
	docker build -t react-pendu:demo -f .docker/Dockerfile .
	 @docker stop react-pendu && docker rm react-pendu
	docker run -d --name react-pendu -p 8080:80 react-pendu:demo


#####
## Package new release of app for production
release.prod: build.prod
	docker login
	docker build -t rhyu/react-pendu:prod -f .docker/Dockerfile .
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
	@echo '| build.prod      | Build app for production                                           |'
	@echo '| release.demo    | Create new release of app, demo url is localhost:8080              |'
	@echo '| release.prod    | Package new release of app for production                          |'
	@echo '+-----------------+--------------------------------------------------------------------+'
	@echo ''
