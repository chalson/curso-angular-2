import { ModuloComunModule } from './modulo-comun.module';

describe('ModuloComunModule', () => {
  let moduloComunModule: ModuloComunModule;

  beforeEach(() => {
    moduloComunModule = new ModuloComunModule();
  });

  it('should create an instance', () => {
    expect(moduloComunModule).toBeTruthy();
  });
});
