/// <reference types="react" />
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
     * Personalizar el color de la letra
     */
    fontColor?: string;
    /**
     * Personalizar el color de fondo
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, backgroundColor, }: MyLabelProps) => JSX.Element;
