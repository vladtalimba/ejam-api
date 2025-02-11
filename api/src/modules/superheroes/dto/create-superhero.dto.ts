// Superhero dto. Similar to an interface but a bit better in this case since classes remain intact in compiled javsacript.
export class CreateSuperheroDto{
    name: string;
    superPower: string;
    humilityScore: number;
}