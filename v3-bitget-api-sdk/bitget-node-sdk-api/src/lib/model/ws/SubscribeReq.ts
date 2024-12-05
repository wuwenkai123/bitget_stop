export class SubscribeReq{
    private _instType!:string;
    private _channel!:string;
    private _instId!:string;
    private _coin!:string;


    constructor(instType: string, channel: string, instId: string) {
        this._instType = instType;
        this._channel = channel;
        this._instId = instId;
        this._coin = instId;
    }

    get instType(): string {
        return this._instType;
    }

    set instType(value: string) {
        this._instType = value;
    }

    get channel(): string {
        return this._channel;
    }

    set channel(value: string) {
        this._channel = value;
    }

    get instId(): string {
        return this._instId;
    }

    set instId(value: string) {
        this._instId = value;
    }

    get coin(): string {
        return this._coin;
    }

    set coin(value: string) {
        this._coin = value;
    }
}
