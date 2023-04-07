import { HighlightDirectiveDirective } from './highlight-directive.directive';
import { ElementRef } from '@angular/core';

describe('HighlightDirectiveDirective', () => {
  it('should create an instance', () => {
    const el = new ElementRef(null);
    const directive = new HighlightDirectiveDirective(el);
    expect(directive).toBeTruthy();
  });
});
