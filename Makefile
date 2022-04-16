# ######################################################################################################################
# Variables
# It is traditional to use upper case letters in variable names,
# but we recommend using lower case letters for variable names that serve internal purposes in the makefile,
# and reserving upper case for parameters that control implicit rules or for parameters that the user should override with command options
# Variables designed as parameters are in UPPER CASE
# Can be set with `export PARAM=value` or by launching `make PARAM=value ....`
# ######################################################################################################################
compose_file = $(CURDIR)/docker-compose.yml

# ######################################################################################################################
# Environment setup
# ######################################################################################################################
.PHONY: setup
setup:                                           ## install (and configure) all the tools using ASDF ( http://asdf-vm.com/ )
ifeq (, $(shell which asdf))
	$(error "No asdf in PATH, install it from https://asdf-vm.com/")
endif
	@asdf update
	@asdf plugin update --all
ifeq (, $(shell asdf plugin-list | grep java))
	@asdf plugin-add java
endif
ifeq (, $(shell asdf plugin-list | grep sbt))
	@asdf plugin-add sbt
endif
ifeq (, $(shell asdf plugin-list | grep nodejs))
	@asdf plugin-add nodejs
endif
ifeq (, $(shell asdf plugin-list | grep yarn))
	@asdf plugin-add yarn
endif
	@asdf install
	@cd ${CURDIR}/front; yarn install

# ######################################################################################################################
# INTERNAL TARGETS
# ######################################################################################################################

.PHONY: .docker-verify
.docker-verify:
ifeq (, $(shell which docker))
	$(error "No docker in PATH, install it from https://www.docker.com/products/docker-desktop/")
endif
ifneq ($(shell docker info > /dev/null 2>&1; echo $$?), 0)
	$(error "Docker isn't available")
else
	$(info "Docker is running")
endif

# ######################################################################################################################
# Clean resources
# ######################################################################################################################

.PHONY: clean
clean:                                           ## Clean build output
	@sbt clean

# https://docs.docker.com/compose/reference/down/
.PHONY: clean-docker
clean-docker: .docker-verify                     ## Clean docker data
	@echo "Are you sure you want to delete all the docker data related to this project? [y/N] " && read ans && [ $${ans:-N} = y ]
	@docker compose --project-directory "$(CURDIR)" --file $(compose_file) down --volumes --remove-orphans
	@docker compose --project-directory "$(CURDIR)" --file $(compose_file) rm

# ######################################################################################################################
# Local Docker environment
# ######################################################################################################################

.PHONY: docker-backend-start
docker-backend-start: .docker-verify             ## Start Postgres DB
	@docker compose --project-directory "$(CURDIR)" -f "$(compose_file)" up --remove-orphans -d

.PHONY: docker-backend-restart
docker-backend-restart: .docker-verify           ## Restart Postgres DB
	@docker compose --project-directory "$(CURDIR)" -f "$(compose_file)" restart

.PHONY: docker-backend-stop
docker-backend-stop: .docker-verify              ## Stop Postgres DB
	@docker compose --project-directory "$(CURDIR)" -f "$(compose_file)" stop

# ######################################################################################################################
# Build and run app
# ######################################################################################################################

.PHONY: launch-backend
launch-backend: docker-backend-start             ## Start the application backend
	@echo "Starting Floxx backend on http://localhost:8081 ..."
	@sbt runDev

.PHONY: launch-frontend
launch-frontend:                                 ## Start the application frontend
	@echo "Starting Floxx frontend on http://localhost:8082 ..."
	@cd ${CURDIR}/front; yarn start-dev

# ######################################################################################################################
# HELP
# ######################################################################################################################
# This will output the help for each task
# thanks to https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html

.PHONY: help
help:                                            ## Describe all available targets.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z0-9_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST) | sort

.DEFAULT_GOAL = help
