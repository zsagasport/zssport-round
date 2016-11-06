import {
  inject,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {expect} from 'chai';
import {RoundComponent} from '../src/round.component';
import {RoundModule} from '../src/round.module';

describe('round component', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [RoundModule]});
  });

  it('should say hello world', () => {
    const fixture: ComponentFixture<RoundComponent> = TestBed.createComponent(RoundComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.innerHTML.trim()).to.equal('Round from the zssport round module!');
  });

});
