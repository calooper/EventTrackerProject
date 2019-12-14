import { TestBed } from '@angular/core/testing';
import { FastService } from './fast.service';



describe('FastService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FastService = TestBed.get(FastService);
    expect(service).toBeTruthy();
  });
});
