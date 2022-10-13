import { TestBed } from '@angular/core/testing';

import { MiddleInterceptor } from './middle.interceptor';

describe('MiddleInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MiddleInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MiddleInterceptor = TestBed.inject(MiddleInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
