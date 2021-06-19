export interface Laboratory {
  Name?: string;
  MacNum: number;
  Inform?: string;
  TotalTime?: number;
  Selected?: number[];
}

export interface mat {
  kinds?: string;
}

export interface Form {
  key?: number;
  take?: number;
  name?: string;
  macnum?: number;
  date1?: string;
  date2?: string;
  opened?: boolean;
  type?: mat[];
  singdoub?: string;
  configuration?: string;
  dis?: number[];
}

export interface Course {
  key?: number;
  name?: string;
  stunum?: number;
  totaltime?: number;
  date1?: string;
  date2?: string;
  type?: string;
  describe?: string;
  sellect?: number[];
}
