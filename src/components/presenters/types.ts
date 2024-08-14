export interface PresentersCardProps {
  cardsElements:
    | { name: string; city: string; day: string; biography: string; img: string }[]
    | { name: string; city: string; day: string; biography: string; img: string };
}
