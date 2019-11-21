import { TestBed, async, inject } from '@angular/core/testing';

import { IsSignedOutGuard } from './is-signed-out.guard';

describe('IsSignedOutGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsSignedOutGuard]
    });
  });

  it('should ...', inject([IsSignedOutGuard], (guard: IsSignedOutGuard) => {
    expect(guard).toBeTruthy();
  }));
});
