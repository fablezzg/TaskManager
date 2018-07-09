import { Config } from "../Config";

export class Log {
	public static l:Function = Config.isDev ? console.log.bind(window.console.log) : Log.nothing;
	public static i:Function = Config.isDev ? console.info.bind(window.console.info) : Log.nothing;
	public static d:Function = Config.isDev ? console.debug.bind(window.console.debug) : Log.nothing;
	public static w:Function = Config.isDev ? console.warn.bind(window.console.warn) : Log.nothing;
	public static e:Function = Config.isDev ? console.error.bind(window.console.error) : Log.nothing;
	
	
	constructor() {
	}
	
	private static nothing():void {
		
	}
}