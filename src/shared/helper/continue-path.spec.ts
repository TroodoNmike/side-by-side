import { continuePath } from './conitnue-path';

describe('Testing path', () => {
    it('should work with local host and port and provide merge path correctly', () => {
        const valuePathExpected = [
            ['http://localhost', '/', 'http://localhost/'],
            ['http://localhost/', '/', 'http://localhost/'],
            ['http://localhost:8080', '/', 'http://localhost:8080/'],
            ['http://localhost:8080/service', '/', 'http://localhost:8080/'],
            ['http://localhost:8080/service', '/service', 'http://localhost:8080/service']
        ];

        valuePathExpected.forEach(collection => {
            expect(continuePath(collection[0], collection[1])).toEqual(collection[2]);
        });
    });

    it('should work with local folder and merge path correctly', () => {
        const valuePathExpected = [
            ['angular-app', '/', 'angular-app/'],
            ['angular-app/', '/', 'angular-app/'],
            ['angular-app/service', '/', 'angular-app/'],
            ['angular-app', '/service', 'angular-app/service'],
            ['angular-app/', '/service', 'angular-app/service'],
        ];

        valuePathExpected.forEach(collection => {
            expect(continuePath(collection[0], collection[1])).toEqual(collection[2]);
        });
    });

});
