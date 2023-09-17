export interface IColorContextState {
  containerColor: string;
  selectedColor: string;
  buttonColors: string[];
  setSelectedColor: (color: string) => void;
  setContainerColor: () => void
  setButtonColors: () => void;
  setScore: (value: number) => void;
  score: number
}
