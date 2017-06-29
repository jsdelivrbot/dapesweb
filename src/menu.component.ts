import {Component,Input,OnInit,EventEmitter,ViewChild,trigger,state,transition,style,animate,Inject,forwardRef} from '@angular/core';
import {MenuItem} from 'primeng/primeng';
import {AppComponent} from './app.component';

@Component({
    selector: 'app-menu',
    template: `
        <div class="menu">
            <ul app-submenu [item]="model" root="true"></ul>
        </div>
    `
})
export class AppMenuComponent implements OnInit {

    model: MenuItem[];
    
    ngOnInit() {
        this.model = [
            {label: 'LOGIN', icon: 'fa-home', routerLink: ['/']},
            {label: 'SOBRE VOCÊ', icon: 'fa-home', routerLink: ['/']},
            {label: 'PROFISSIONAL', icon: 'fa-home', routerLink: ['/']},
            {label: 'ENDEREÇO', icon: 'fa-home', routerLink: ['/']},
            {label: 'FINANCEIRO', icon: 'fa-home', routerLink: ['/']},
            {label: 'DOCUMENTOS E SEGURANÇA', icon: 'fa-home', routerLink: ['/']},
            {label: 'CONCLUSÃO', icon: 'fa-home', routerLink: ['/']}
        ];
    }
}

@Component({
    selector: '[app-submenu]',
    template: `
        <ul>
            <ng-template ngFor let-child let-i="index" [ngForOf]="(root ? item : item.items)">
                <li [ngClass]="{'active-menuitem': isActive(i)}">
                    <a *ngIf="!child.routerLink" [href]="child.url||'#'" (click)="itemClick($event,child,i)"  [attr.tabindex]="!visible ? '-1' : null"  [attr.target]="child.target">
                        <i class="fa fa-fw" [ngClass]="child.icon"></i>
                        <span>{{child.label}}</span>
                        <i class="fa fa-fw fa-angle-down" *ngIf="child.items"></i>
                    </a>
                    <a *ngIf="child.routerLink" (click)="itemClick($event,child,i)" [attr.target]="child.target"
                        [routerLink]="child.routerLink" routerLinkActive="active-menuitem-routerlink" [routerLinkActiveOptions]="{exact: true}">
                        <i class="fa fa-fw" [ngClass]="child.icon"></i>
                        <span>{{child.label}}</span>
                        <i class="fa fa-fw fa-angle-down" *ngIf="child.items"></i>
                    </a>
                    <ul app-submenu [item]="child" *ngIf="child.items" [@children]="isActive(i) ? 'visible' : 'hidden'" ></ul>
                </li>
            </ng-template>
        </ul>
    `,
    animations: [
        trigger('children', [
            state('hidden', style({
                height: '0px'
            })),
            state('visible', style({
                height: '*'
            })),
            transition('visible => hidden', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('hidden => visible', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})
export class AppSubMenu {

    @Input() item: MenuItem;
    
    @Input() root: boolean;
        
    activeIndex: number;
        
    constructor(@Inject(forwardRef(() => AppComponent)) public app: AppComponent) {}
        
    itemClick(event: Event, item: MenuItem, index: number) {        
        if(item.disabled) {
            event.preventDefault();
            return true;
        }
        
        this.activeIndex = (this.activeIndex === index) ? null : index;
                
        if(item.command) {
            if(!item.eventEmitter) {
                item.eventEmitter = new EventEmitter();
                item.eventEmitter.subscribe(item.command);
            }
            
            item.eventEmitter.emit({
                originalEvent: event,
                item: item
            });
        }
        
        //prevent hash change
        if(item.items || (!item.url && !item.routerLink)) {
            event.preventDefault();
        }
        
        if(!item.items) {
            this.app.menuActiveMobile = false;
        }
    }
    
    isActive(index: number): boolean {
        return this.activeIndex === index;
    }
}