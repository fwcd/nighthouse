/** A verb used for a request. */
export type Verb = 'POST' | 'CREATE' | 'MKDIR' | 'DELETE' | 'LIST' | 'GET' | 'PUT' | 'STREAM' | 'STOP' | 'LINK' | 'UNLINK';

/** Authentication credentials. */
export interface Auth {
  USER: string;
  TOKEN: string;
}

/** A message sent from the client. */
export interface ClientMessage<P> {
  REID: any;
  AUTH: Auth;
  VERB: Verb;
  PATH: string[];
  META: any;
  PAYL: P;
}

/** A message sent from the server. */
export interface ServerMessage<P> {
  RNUM: number;
  REID?: any;
  RESPONSE?: string;
  WARNINGS?: string[];
  PAYL: P;
}

/** An input event payload from the server. */
export interface InputEvent {
  src: number;
  dwn: number;
}

/** A key event payload from the server. */
export interface KeyEvent extends InputEvent {
  key: number;
}

/** A controller event payload from the server. */
export interface ControllerEvent extends InputEvent {
  btn: number;
}

/** A user-defined type guard for ServerMessage. */
export function isServerMessage(value: any): value is ServerMessage<unknown> {
  return typeof value === 'object' && 'RNUM' in value && 'PAYL' in value;
}

/** A user-defined type guard for InputEvent. */
export function isInputEvent(value: any): value is InputEvent {
  return typeof value === 'object' && 'src' in value && 'dwn' in value;
}

/** A user-defined type guard for KeyEvent. */
export function isKeyEvent(value: any): value is KeyEvent {
  return isInputEvent(value) && 'key' in value;
}

/** A user-defined type guard for ControllerEvent. */
export function isControllerEvent(value: any): value is ControllerEvent {
  return isInputEvent(value) && 'btn' in value;
}
