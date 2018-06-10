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
## Run test suite
test:
	$(COMPOSE_CMD) run --rm node yarn run test


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
	@echo '| ssh             | Start new bash terminal inside the Nodejs Container                |'
	@echo '| lint            | Lint js code                                                       |'
	@echo '| lint.fix        | Lint & Fix js code                                                 |'
	@echo '| test            | Run test suite                                                     |'
	@echo '+-----------------+--------------------------------------------------------------------+'
	@echo ''
