import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFormPageComponent } from './new-form-page.component';
import { NewCardFormComponent } from '../../../components/new-card-form/new-card-form.component';
import { LogoutComponent } from '../../../components/logout/logout.component';
import { CardTableComponent } from '../../../components/card-table/card-table.component';

import { MessengerService } from '../../../business/service/messenger.service';
import { CardService } from  '../../../business/service/card.service';
import { AuthService } from  '../../../business/service/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';


describe('NewFormPageComponent', () => {
  let component: NewFormPageComponent;
  let fixture: ComponentFixture<NewFormPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        NewFormPageComponent,
        NewCardFormComponent,
        LogoutComponent,
        CardTableComponent
      ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
        CardService,
        MessengerService,
        AuthService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
