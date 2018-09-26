import { FCoreModule } from './fcore.module';

describe('FCoreModule', () => {
  let fCoreModule: FCoreModule;

  beforeEach(() => {
    fCoreModule = new FCoreModule();
  });

  it('should create an instance', () => {
    expect(fCoreModule).toBeTruthy();
  });
});
