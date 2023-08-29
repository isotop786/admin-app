import { NonAuthGuard } from './non-auth.guard';

describe('NonAuthGuard', () => {
  it('should be defined', () => {
    expect(new NonAuthGuard()).toBeDefined();
  });
});
