declare module 'win-audio' {
  export interface AudioDevice {
    polling(millis:number):void;
    events: {
      on: ((event:"change", callback:(volume:{old:number,new:number})=>void)=>void)|((event:"toggle", callback:(status:{old:boolean,new:boolean})=>void)=>void);
    }
    set(percent:number):void;
    get():number;
    mute():void;
    unmute():void;
    toggle():void;
  }
  const audio: {
    speaker: AudioDevice;
    mic: AudioDevice;
  };
  export default audio;
}