import { TestBed } from '@angular/core/testing';

import { CommentServService } from './comment-serv.service';

describe('CommentServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommentServService = TestBed.get(CommentServService);
    expect(service).toBeTruthy();
  });
});
