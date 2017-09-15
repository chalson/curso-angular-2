import { ModuloRoutingModule } from './modulo-routing.module';

describe('ModuloRoutingModule', () => {
  let moduloRoutingModule: ModuloRoutingModule;

  beforeEach(() => {
    moduloRoutingModule = new ModuloRoutingModule();
  });

  it('should create an instance', () => {
    expect(moduloRoutingModule).toBeTruthy();
  });
});
