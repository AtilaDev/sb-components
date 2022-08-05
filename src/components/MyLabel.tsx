import './mylabel.css';

export interface MyLabelProps {
  /**
   * Este es el mensaje a mostrar en la etiqueta
   */
  label: string;
  /**
   * Este es el tamaño de la etiqueta
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * Color del label
   */
  color?: 'primary' | 'secondary' | 'tertiary';
  /**
   * Capitalizar todo el label
   */
  allCaps?: boolean;
  /**
   * Personalizar el color
   */
  fontColor?: string;
}

export const MyLabel = ({
  label = 'No Etiqueta',
  size = 'normal',
  color = 'primary',
  allCaps = false,
  fontColor,
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
