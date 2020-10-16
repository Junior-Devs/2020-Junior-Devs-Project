install:
	docker-compose run backend npm install
	docker-compose run frontend npm install
	docker-compose run storybook npm install
develop:
	docker-compose up

