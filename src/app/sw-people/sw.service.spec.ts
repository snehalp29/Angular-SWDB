// Http testing module and mocking controller
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { SwService } from './sw.service';
import { HttpClient } from '@angular/common/http';
import { Characters } from './character';
import { MinFlim, People } from './people';

describe('SwService', () => {
  let service: SwService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(SwService);
    // Inject the http service and test controller for each test
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getCharacters', () => {
    it('can test HttpClient.get', () => {
      let testUrl = '/characters.json';
      const testData: Characters = {
        characters: [
          {
            name: 'Luke Skywalker',
            url: 'https://swapi.dev/api/people/1/',
          },
          {
            name: 'Darth Vader',
            url: 'https://swapi.dev/api/people/4/',
          },
        ],
      };

      // Make an HTTP GET request
      httpClient.get<Characters>(testUrl).subscribe((data: any) => {
        // console.log(data);
        expect(data).toEqual(testData);
      });

      const req = httpTestingController.expectOne('/characters.json');

      expect(req.request.method).toEqual('GET');
      req.flush(testData);
      httpTestingController.verify();
    });
  });

  describe('getCharacterAndFlims', () => {
    it('can test HttpClient.get', () => {
      let testUrl = '/people/1';

      const testData: MinFlim[] = [
        {
          title: 'The Empire Strikes Back',
          release_date: '1980-05-17',
        },
        {
          title: 'A New Hope',
          release_date: '1977-05-25',
        },
      ];

      // Make an HTTP GET request
      httpClient.get<People>(testUrl).subscribe((data: any) => {
        // console.log(data);
        expect(data).toEqual(testData);
      });

      const req = httpTestingController.expectOne('/people/1');

      expect(req.request.method).toEqual('GET');
      req.flush(testData);
      httpTestingController.verify();
    });
  });
});
