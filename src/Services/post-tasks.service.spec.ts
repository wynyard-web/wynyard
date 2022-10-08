import { TestBed } from '@angular/core/testing';

import { PostTasksService } from './post-tasks.service';

describe('PostTasksService', () => {
  let service: PostTasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostTasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
