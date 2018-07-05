export class Config {
	public static isDev:boolean = true;
	
	private static SERVER_API_URL:string = "http://13.56.201.149:5010/";
	private static SERVER_API_URL_FOR_DEV:string = "http://13.56.201.149:5010/";
	
	private static X_API_KEY:string = "";
	private static X_API_KEY_FOR_DEV:string = "";
	
	public static serverUrl:string = Config.isDev ? Config.SERVER_API_URL_FOR_DEV : Config.SERVER_API_URL;
	
	public static x_apiKey:string = Config.isDev ? Config.X_API_KEY_FOR_DEV : Config.X_API_KEY;
}