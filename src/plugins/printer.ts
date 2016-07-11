import {Plugin, Cordova} from './plugin';
declare var cordova: any;

export interface PrintOptions {
    /**
     * The name of the print job and the document
     */
    name?: string;

    /**
     * The network URL of the printer. 
     * Only supported on iOS.
     */
    printerId?: string;

    /**
     * Specifies the duplex mode to use for the print job.
     * Either double-sided (duplex:true) or single-sided (duplex:false).
     * Double-sided by default.
     * Only supported on iOS
     */
    duplex?: boolean;

    /**
     * The orientation of the printed content, portrait or landscape
     * Portrait by default.
     */
    landscape?: boolean;

    /**
     * If your application only prints black text, setting this property to true can result in better performance in many cases.
     * False by default.
     */
    grayscale?: boolean;

    /**
     * The Size and position of the print view
     */
    bounds?: number[] | any;
}


@Plugin({
    plugin: 'de.appplant.cordova.plugin.printer',
    pluginRef: 'cordova.plugins.printer',
    repo: 'https://github.com/katzer/cordova-plugin-printer.git',
    platforms: ['Android', 'iOS']
})
export class Printer {

    /**
     * Checks whether to device is capable of printing.
     */
    @Cordova()
    static isAvailable(): Promise<boolean> { return; }

    /**
     * Sends content to the printer.
     * @param {content} The content to print. Can be a URL or an HTML string. If a HTML DOM Object is provided, its innerHtml property value will be used.
     * @param {options} The options to pass to the printer
     */
    @Cordova()
    static print(content: string | HTMLElement, options?: PrintOptions): Promise<any> { return; }
}