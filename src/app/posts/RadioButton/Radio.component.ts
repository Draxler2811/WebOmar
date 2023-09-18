import { Component } from "@angular/core";

@Component({
    selector: 'app-RadioButoon',
    templateUrl: './Radio.component.html',
    styleUrls: ['./Radio.component.css'],

})

export class RadioButoon{
    FavoriteSeason: String;
    seasons: string[] = ['Verano','Otoño','Invierno','Primavera'];
}