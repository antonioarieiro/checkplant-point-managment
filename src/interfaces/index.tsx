export interface Btn {
    text: string
    type: string
    children: React.ReactNode;
    click: (e: any) => void;
}


export interface MarkerItem {
    lat: number
    lng: number
  }
  