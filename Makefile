deploy:
		ng build --prod --base-href=/side-by-side/ --output-path=dist/side-by-side
		cd framework/react-app && export PUBLIC_URL=/side-by-side/react-app && npm run build  && mv build ../../dist/side-by-side/react-app
		cd framework/vuejs-app && npm run build  && mv dist ../../dist/side-by-side/vuejs-app
		cd framework/angular-app && ng build --prod --base-href=/side-by-side/angular-app/ --output-path ../../dist/side-by-side/angular-app

