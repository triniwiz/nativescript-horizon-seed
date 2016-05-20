var Horizon = require('@horizon/client/dist/horizon-dev');
import observable = require("data/observable");
const SERVER_URL = "192.168.56.1:8181"
export class HelloWorldModel extends observable.Observable {

    private _counter: number;
    private _message: string;
    private horizon;
    get message(): string {
        return this._message;
    }
    set message(value: string) {
        if (this._message !== value) {
            this._message = value;
            this.notifyPropertyChange("message", value)
        }
    }

    constructor() {
        super();

        // Initialize default values.
        this._counter = 42;
        this.updateMessage();
        this.horizon = new Horizon({ host: SERVER_URL });
        this.horizon.status()
        .subscribe((status)=>{
            if(status && status.type === 'ready'){
                alert('Horizon client is ready!!!');
            }
        })
    }

    private updateMessage() {
        if (this._counter <= 0) {
            this.message = "Hoorraaay! You unlocked the NativeScript clicker achievement!";
        } else {
            this.message = this._counter + " taps left";
        }
    }

    public onTap() {
        this._counter--;
        this.updateMessage();
    }
    
    connect(){
        this.horizon.connect();
    }
}