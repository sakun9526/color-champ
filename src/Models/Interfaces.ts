export interface IColorContextState {
  containerColor: string;
  selectedColor: string;
  buttonColors: string[];
  setSelectedColor: (color: string) => void;
}
