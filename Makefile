npm-install:
		npm install
		cd framework/angular-app && npm install
		cd framework/react-app && npm install
		cd framework/vuejs-app && npm install

tests:
		./node_modules/.bin/ng test --watch=false --browsers=ChromeHeadless
		cd framework/angular-app && ./node_modules/.bin/ng test --watch=false --browsers=ChromeHeadless
		cd framework/react-app && npm run test
		cd framework/vuejs-app && npm run test:unit

build-prod:
		npm run lint
		./node_modules/.bin/ng build --prod --base-href=/side-by-side/ --output-path=dist/side-by-side
		cd framework/react-app && export PUBLIC_URL=/side-by-side/react-app && npm run build  && mv build ../../dist/side-by-side/react-app
		cd framework/vuejs-app && npm run build  && mv dist ../../dist/side-by-side/vuejs-app
		cd framework/angular-app && ./node_modules/.bin/ng build --prod --base-href=/side-by-side/angular-app/ --output-path ../../dist/side-by-side/angular-app

