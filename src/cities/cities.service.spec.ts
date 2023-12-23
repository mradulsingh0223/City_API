import { Test, TestingModule } from '@nestjs/testing';
import { CitiesService } from './cities.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { City } from './entities/city.entity';

describe('CitiesService', () => {
  let service: CitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CitiesService,
        {
          provide: getRepositoryToken(City),
          useValue: {}, // Mock or use an in-memory repository for testing
        },
      ],
    }).compile();

    service = module.get<CitiesService>(CitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});