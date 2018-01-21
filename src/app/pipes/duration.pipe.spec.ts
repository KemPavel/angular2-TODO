import { ConvertDurationPipe } from './duration.pipe';

describe('Duration pipe', () => {
  let pipe: ConvertDurationPipe;

  beforeEach(() => {
    pipe = new ConvertDurationPipe();
  });

  it('should transform duration correctly with hours', () => {
    const duration = 100;
    const expectedResult = '1h 40min';

    expect(pipe.transform(duration)).toBe(expectedResult);
  });

  it('should transform duration correctly without hours', () => {
    const duration = 20;
    const expectedResult = '20min';

    expect(pipe.transform(duration)).toBe(expectedResult);
  });
});