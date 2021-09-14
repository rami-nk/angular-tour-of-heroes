import {TestBed} from '@angular/core/testing';

import {MessageService} from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService]
    });
    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('messages array should be empty on init', () => {
    expect(service.messages.length).toBe(0);
  });

  it('messages array should contain one message with the content "message1"', () => {
    service.add("message 1");
    expect(service.messages.length).toBe(1);
    expect(service.messages[0]).toContain("message 1");
  })

  it('messages array should contain 100 elements after calling #add and it should be empty after calling #clear', () => {
    for (let i=0; i < 100; i++) {
      service.add("message " + i);
    }
    expect(service.messages.length).toBe(100);
    service.clear();
    expect(service.messages.length).toBe(0);
  });
});
