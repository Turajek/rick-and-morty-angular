import { Component, Input } from "@angular/core";
import { Character } from "src/app/models/character.model";

@Component({
  selector: "characters-list",
  templateUrl: "./characters-list.component.html",
  styleUrls: ["./characters-list.component.scss"]
})
export class CharactersListComponent {
  @Input() characters: Character[];
  displayedColumns: string[] = [
    "index",
    "name",
    "status",
    "species",
    "gender",
    "actions"
  ];
  constructor() {}
}
