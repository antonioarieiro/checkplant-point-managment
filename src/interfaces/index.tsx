export interface Btn {
    text: string
    type: string
    children: React.ReactNode;
    click: (e: any) => void;
    addMarker?: boolean
}


export interface MarkerItem {
    lat: number
    lng: number
    order?: string
    data?: string
    hours?: string
  }
  