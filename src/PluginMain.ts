import { AbstractPlugin, IPlugin, IPluginMetaData, IOscActionDef, Tuple, IPluginConstructor } from "intermix";

const Plugin: IPluginConstructor = class IntermixPlugin extends AbstractPlugin implements IPlugin {
    public static readonly metaData: IPluginMetaData = {
        type: "instrument",
        name: "MyPlugin",
        version: "1.0.0",
        authors: "Your name(s) here",
        desc: "My awesome intermix plugin",
    };

    public actionDefs: IOscActionDef[] = [
        {
            address: "/intermix/plugin/<UID>/ACTION1",
            typeTag: ",i",
            value: 0,
            range: [0, 127],
            description: "action one",
        },
        {
            address: "/intermix/plugin/<UID>/ACTION2",
            typeTag: ",i",
            value: 1,
            range: [0, 127],
            description: "action two",
        },
    ];

    public get inputs(): AudioNode[] {
        return [];
    }

    public get outputs(): AudioNode[] {
        return [];
    }

    constructor(public readonly uid: string, private ac: AudioContext) {
        super();
    }

    public onChange(changed: Tuple): boolean {
        if (changed[0] === "loadPreset") {
            this.refreshAllValues();
            return true;
        }
        return false;
    }
};
export default Plugin;
