export interface IPlayerPosition {
  x: number;
  y: number;
}

export interface IPlayer {
  id?: string;
  position: IPlayerPosition;
  size?: {
    width: number;
    height: number;
  };
}
