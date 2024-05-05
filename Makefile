REVISION = $(shell git rev-parse --short HEAD)
.PHONY: build, push, deploy

build:
	docker build -f ./Dockerfile --build-arg REVISION=$(REVISION) --build-arg NODE_ENV=production -t rupilot-ru-docs .

push:
	docker tag rupilot-ru-docs:latest registry.zatsepin.dev/rupilot-ru-docs
	docker push registry.zatsepin.dev/rupilot-ru-docs

deploy:
	make build && make push
